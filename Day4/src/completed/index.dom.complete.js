import data from './data.json';

const root = document.getElementById('root');

const table = document.createElement('table');
table.setAttribute('id', 'asia-cup');

const firstRow = document.createElement('tr');
const firstRowFirstColumn = document.createElement('th');
firstRowFirstColumn.appendChild(document.createTextNode('Name'));
const firstRowSecondColumn = document.createElement('th');
firstRowSecondColumn.appendChild(document.createTextNode('MP'));
const firstRowThirdColumn = document.createElement('th');
firstRowThirdColumn.appendChild(document.createTextNode('W'));
const firstRowFourthColumn = document.createElement('th');
firstRowFourthColumn.appendChild(document.createTextNode('L'));
const firstRowFifthColumn = document.createElement('th');
firstRowFifthColumn.appendChild(document.createTextNode('D'));
firstRow.appendChild(firstRowFirstColumn);
firstRow.appendChild(firstRowSecondColumn);
firstRow.appendChild(firstRowThirdColumn);
firstRow.appendChild(firstRowFourthColumn);
firstRow.appendChild(firstRowFifthColumn);

table.appendChild(firstRow);

data.forEach(d => {
  const row = document.createElement('tr');
  const firstC = document.createElement('td');
  firstC.appendChild(document.createTextNode(d.name));
  const secondC = document.createElement('td');
  secondC.appendChild(document.createTextNode(d.games));
  const thirdC = document.createElement('td');
  thirdC.appendChild(document.createTextNode(d.wins));
  const fourthC = document.createElement('td');
  fourthC.appendChild(document.createTextNode(d.loses));
  const fifthC = document.createElement('td');
  fifthC.appendChild(document.createTextNode(d.deals));
  row.appendChild(firstC);
  row.appendChild(secondC);
  row.appendChild(thirdC);
  row.appendChild(fourthC);
  row.appendChild(fifthC);
  table.appendChild(row);
});
root.appendChild(table);
