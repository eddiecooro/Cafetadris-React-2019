import React, { Component } from 'react';
import { ReduxConsumer } from './ReduxContext';

export default (mapStateToProps, mapDispatchToProps) => WrappedComponent =>
  class extends Component {
    store;
    componentDidMount() {
      this.unsubscribe = this.store.subscribe(() => {
        // if (this.checkIfChanged()) {
        this.forceUpdate();
        // }
      });
    }
    componentWillUnmount() {
      this.unsubscribe();
    }
    render() {
      return (
        <ReduxConsumer>
          {({ store }) => {
            this.store = store;
            return (
              <WrappedComponent
                {...this.props}
                // dispatch={store.dispatch}
                // state={store.getState()}
                {...mapDispatchToProps(store.dispatch, this.props)}
                {...mapStateToProps(store.getState(), this.props)}
              />
            );
          }}
        </ReduxConsumer>
      );
    }
  };
