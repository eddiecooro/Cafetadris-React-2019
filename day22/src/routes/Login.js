import React, { Component } from 'react';
import { css } from 'styled-components/macro';
import LoginForm from 'components/LoginForm';
import LoginWithSpotify from 'components/LoginWithSpotify';
import SignupForm from 'components/SignupForm';
import Slider from '../components/Slider';
import PoseTest from '../components/PoseTest';
import { connect } from 'react-redux';
import { getSliderValue } from '../redux/selectors/sliderSelectors';
import { setSliderValue } from '../redux/actions/sliderActions';
import TransitionTest from '../components/TransitionTest';

export class Login extends Component {
  componentDidMount() {
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.from
    ) {
      localStorage.setItem(
        'referredRedirectPath',
        JSON.stringify(this.props.location.state.from)
      );
    }
  }
  render() {
    return (
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}>
        <LoginForm />
        {/* <Slider
          value={this.props.sliderPosition}
          onChange={this.props.setSliderPosition}
        /> */}
        {/* <TransitionTest /> */}
        <PoseTest />
        <SignupForm />
        <LoginWithSpotify />
      </div>
    );
  }
}

export default connect(
  state => ({ sliderPosition: getSliderValue(state) }),
  dispatch => ({
    setSliderPosition: newValue => dispatch(setSliderValue(newValue))
  })
)(Login);
