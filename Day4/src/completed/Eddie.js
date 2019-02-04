function flatArray(arr) {
  return arr.reduce((flattenArray, element) => {
    if (Array.isArray(element)) {
      return flattenArray.concat(flatArray(element));
    } else {
      return flattenArray.concat(element);
    }
  }, []);
}

export function createElement(type, props, ...children) {
  children = flatArray(children);
  if (typeof type === 'string') {
    return {
      type,
      props: props ? props : {},
      children,
      isEddieElement: true
    };
  } else if (typeof type === 'function') {
    return type(props, children);
  } else throw new Error('Unsupported type');
}

function getDomForElement(element) {
  const dom = document.createElement(element.type);
  Object.keys(element.props).forEach(p =>
    dom.setAttribute(p, element.props[p])
  );

  element.children.forEach(child => {
    if (child.isEddieElement) {
      dom.appendChild(getDomForElement(child));
    } else {
      dom.appendChild(document.createTextNode(child));
    }
  });

  return dom;
}

export function render(rootNode, reactElement) {
  rootNode.appendChild(getDomForElement(reactElement));
}

export default {
  createElement,
  render
};
