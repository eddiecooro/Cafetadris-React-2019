import React, { Component } from 'react';
import posed from 'react-pose';
import { transform } from 'popmotion';
const { interpolate, clamp, blendColor, pipe } = transform;

const Box = posed.div({
  draggable: 'x',
  hoverable: true,
  hover: {
    scale: 1.1
    // scaleY: 1.5,
    // transformOrigin: '50% 0'
  },
  init: {
    // scaleY: 1,
    scale: 1
    // transformOrigin: '50% 0'
  },
  drag: {
    scale: 0.9
  },
  dragEnd: {
    transition: {
      type: 'spring'
    },
    x: 0,
    y: 0
  },
  passive: {
    // y: ['x', x => x * Math.sin(x * 0.01)]
    opacity: ['x', interpolate([-200, 0, 200], [0, 1, 0])]
  }
});

const Sidebar = posed.div({
  open: {
    x: '0%',
    delayChildren: 300,
    staggerChildren: 50
  },
  close: {
    delay: 300,
    staggerChildren: 20,
    staggerDirection: -1,
    x: '-100%'
  }
});

const Item = posed.div({
  open: {
    opacity: 1,
    y: 0
  },
  close: {
    opacity: 0,
    y: ({ i }) => i * 60,
    transition: {
      opacity: {
        duration: 300
      },
      y: {
        duration: 400
      }
    }
  }
});

function PoseTest() {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    setInterval(() => setIsOpen(isOpen => !isOpen), 2000);
  }, []);
  return (
    // <Sidebar
    //   pose={isOpen ? 'open' : 'close'}
    //   style={{
    //     position: 'absolute',
    //     left: 0,
    //     width: '200px',
    //     height: '500px',
    //     backgroundColor: 'aqua'
    //   }}>
    //   <Item
    //     i={1}
    //     style={{
    //       width: '100%',
    //       height: '40px',
    //       margin: '20px',
    //       backgroundColor: 'red'
    //     }}
    //   />
    //   <Item
    //     i={2}
    //     style={{
    //       width: '100%',
    //       height: '40px',
    //       margin: '20px',
    //       backgroundColor: 'red'
    //     }}
    //   />
    //   <Item
    //     i={3}
    //     style={{
    //       width: '100%',
    //       height: '40px',
    //       margin: '20px',
    //       backgroundColor: 'red'
    //     }}
    //   />
    //   <Item
    //     i={4}
    //     style={{
    //       width: '100%',
    //       height: '40px',
    //       margin: '20px',
    //       backgroundColor: 'red'
    //     }}
    //   />
    // </Sidebar>
    <Box style={{ width: '100px', height: '100px', backgroundColor: 'red' }} />
  );
}

export default PoseTest;
