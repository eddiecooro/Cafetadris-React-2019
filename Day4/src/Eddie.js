function flattenArray(arr) {
  return arr.reduce((newArr, element) => {
    if (Array.isArray(element)) {
      return newArr.concat(flattenArray(element));
    } else {
      return newArr.concat(element);
    }
  }, []);
}

/*
  type: th
  props: {id: 'first_table_header', class: 'table_header'}

  returns: 
    {
      type: th,
      props: {id: 'first_table_header', class: 'table_header'}
    }
*/
export function createElement(type, props, ...children) {
  if (typeof type === 'string') {
    return {
      type,
      props: props ? props : {},
      children: flattenArray(children),
      isEddieElement: true
    };
  } else if (typeof type === 'function') {
    return type(props, flattenArray(children));
  } else {
    throw new Error('Unsupported type');
  }
}

/*
  element: {
    type: 'div',
    props: {},
    children: []
  }
*/
function getDomNodeForElement(element) {
  const dom = document.createElement(element.type);
  Object.keys(element.props).forEach(prop => {
    dom.setAttribute(prop, element.props[prop]);
  });
  element.children.forEach(child => {
    if (child.isEddieElement) {
      dom.appendChild(getDomNodeForElement(child));
    } else if (typeof child === 'object') {
      dom.appendChild(child);
    } else {
      dom.appendChild(document.createTextNode(child));
    }
  });
  return dom;
}

export function render(domNode, eddieElement) {
  domNode.appendChild(getDomNodeForElement(eddieElement));
}

export default {
  createElement,
  render
};
