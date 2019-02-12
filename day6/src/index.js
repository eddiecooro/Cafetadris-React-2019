import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// function Paragraph(props) {
//   return (
//     <p style={{ fontSize: 30, ...props.style }}>{props.children}</p>
//   );
// }

// function MainDiv() {
//   return (
//     <>
//       <Paragraph style={{ color: 'blue' }}>Hi</Paragraph>
//       <Paragraph style={{ color: 'red' }}>Hi2</Paragraph>
//       <Paragraph style={{ color: 'green' }}>Hi3</Paragraph>
//       <p>How are you</p>
//     </>
//   );
// }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
