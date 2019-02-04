import data from './data.json';

function createColumn(data) {
  const column = document.createElement('td');
  column.appendChild(document.createTextNode(data));
  return column;
}

function createHeaderColumn(data) {
  const headerC = document.createElement('th');
  headerC.appendChild(document.createTextNode(data));
  return headerC;
}

function createRow(columns) {
  const row = document.createElement('tr');
  columns.forEach(c => row.appendChild(c));
  return row;
}

const root = document.getElementById('root');

const table = document.createElement('table');
table.setAttribute('id', 'asia-cup');

const firstRowColumns = ['Club', 'MP', 'W', 'D', 'L'].map(c =>
  createHeaderColumn(c)
);
const firstRow = createRow(firstRowColumns);
table.appendChild(firstRow);

data.forEach(d => {
  const columns = [d.name, d.games, d.wins, d.deals, d.loses].map(e =>
    createColumn(e)
  );
  const row = createRow(columns);
  table.appendChild(row);
});

root.appendChild(table);
