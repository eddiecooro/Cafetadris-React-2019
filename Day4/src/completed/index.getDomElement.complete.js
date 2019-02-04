import data from './data.json';

function appendChild(dom, child) {
  if (Array.isArray(child)) {
    child.forEach(c => appendChild(dom, c));
  } else if (typeof child === 'object') {
    dom.appendChild(child);
  } else {
    dom.appendChild(document.createTextNode(child));
  }
  return dom;
}

function getDomElement(type, props, ...children) {
  const dom = document.createElement(type);
  Object.keys(props).forEach(p => dom.setAttribute(p, props[p]));
  appendChild(dom, children);
  return dom;
}

const root = document.getElementById('root');

const firstRowColumns = ['Club', 'MP', 'W', 'D', 'L'].map(c =>
  getDomElement('th', {}, c)
);
const firstRow = getDomElement('tr', {}, firstRowColumns);

const rows = data.map(d => {
  const columns = [d.name, d.games, d.wins, d.deals, d.loses].map(e =>
    getDomElement('td', {}, e)
  );
  return getDomElement('tr', {}, columns);
});

const table = getDomElement('table', { id: 'asia-cup' }, firstRow, rows);

root.appendChild(table);
