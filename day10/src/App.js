import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NetworkActiveDetail from './NetworkActiveDetail';
import NetworkActiveVisualizer from './NetworkActiveVisualizer';
import WithTabActiveStatus from './withTabActiveStatus';
import WithNetworkStatus from './withNetworkStatus';

const First = props => {
  return (
    <div>
      <h1>First Component</h1>
      {props.children()}
    </div>
  );
};

const Second = props => {
  return (
    <div>
      <h2>Second Component</h2>
      {props.children({ text: 'Hello 22' })}
    </div>
  );
};

const Third = props => {
  return (
    <div>
      <h3>Third Component</h3>
      <p>Text: {props.text}</p>
      <p>Number: {props.number}</p>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <First>
          {() => (
            <Second>
              {({ text }) => <Third number={10} text={text} />}
            </Second>
          )}
        </First> */}

        {/* <WithTabActiveStatus>
          {({ isActive: isTabActive }) => (
            <WithNetworkStatus>
              {({ isActive: isOnline }) => (
                <NetworkActiveDetail
                  isTabActive={isTabActive}
                  isOnline={isOnline}
                />
              )}
            </WithNetworkStatus>
          )}
        </WithTabActiveStatus> */}
        {/* <NetworkActiveDetail isTabActive={true} isOnline={true} /> */}
        <NetworkActiveDetail />

        {/* <WithNetworkStatus>
          {({ isActive: isOnline }) => (
            <NetworkActiveVisualizer
              onlineStatus={isOnline}
              isOnline={'blue'}
              isOffline={'yellow'}
            />
          )} */}
        {/* {({ isActive: isOnline }) => (
            <NetworkActiveVisualizer
              isOnline={isOnline}
              isOnlineColor={'blue'}
              isOfflineColor={'yellow'}
            />
          )} */}
        {/* </WithNetworkStatus> */}
        <NetworkActiveVisualizer
          isOnline={'blue'}
          isOffline={'red'}
        />
      </div>
    );
  }
}

export default App;
