import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  getCategories,
  getCategoriesLoadingState,
  getCategoriesError
} from '../redux/selectors/categoriesSelectors';
import { loadCategories } from '../redux/actions/categoriesActions';
import { connect } from 'react-redux';

function Categories({
  loadCategories,
  isLoading,
  error,
  categories,
  ...props
}) {
  React.useEffect(() => {
    loadCategories();
  }, []);

  if (error) {
    throw error;
  }
  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  const currentPath = props.match.path;
  return (
    <ul>
      <h1>Categories</h1>
      {categories.map(category => (
        <li key={category.id}>
          <Link to={`${currentPath}/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}

let mapStateToProps = state => ({
  categories: getCategories(state),
  isLoading: getCategoriesLoadingState(state),
  error: getCategoriesError(state)
});
let mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(loadCategories())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
