/** @jsx Eddie.createElement */
// import React from 'react';
// import ReactDOM from 'react-dom';
import Eddie from './Eddie';
import data from './data.json';

function TableRow(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.games}</td>
      <td>{props.wins}</td>
      <td>{props.deals}</td>
      <td>{props.loses}</td>
    </tr>
  );
}
const table = (
  <table className="asia-cup" id="asia-cup">
    <tr>
      <th>Club</th>
      <th>MP</th>
      <th>W</th>
      <th>D</th>
      <th>L</th>
    </tr>
    {data.map(team => (
      <TableRow
        name={team.name}
        games={team.games}
        wins={team.wins}
        deals={team.deals}
        loses={team.loses}
      />
    ))}
  </table>
);

const root = document.getElementById('root');
Eddie.render(table, root);
