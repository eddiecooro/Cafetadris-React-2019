import React, { Component } from 'react';
import styled from 'styled-components';

const barWidth = 200;
const SliderBar = styled.div`
  width: ${barWidth}px;
  height: 8px;
  background-color: white;
  border-radius: 4px;
`;

const handleWidth = 16;
const SliderHandle = styled.div`
  width: ${handleWidth}px;
  height: ${handleWidth}px;
  border-radius: ${handleWidth / 2}px;
  background-color: white;
  transform: ${props => `translate(${props.position}px, -25%)`};
  transition: transform 0.7s cubic-bezier(0.08, 1.1, 0.47, 1.4);
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #ddd;
  }
`;

function Slider({ num, value, onChange }) {
  const clicked = React.useRef(false);
  const bar = React.useRef(null);
  const currentValue = React.useRef(value);
  React.useEffect(() => {
    currentValue.current = value;
  }, [value]);

  const step = (barWidth - handleWidth) / num;
  const [position, setPosition] = React.useState(step * value);
  console.log('Position is', value);

  const handleEnd = () => {
    clicked.current = false;
  };

  // React.useEffect(() => {
  //   const target = value * step;
  //   const interval = setInterval(() => {
  //     setPosition(position =>
  //       target < position ? position - 2 : position + 2
  //     );
  //   }, 15);
  //   return () => clearInterval(interval);
  // }, [value]);

  const handleStart = () => {
    clicked.current = true;
    document.addEventListener('mouseup', handleEnd, { once: true });
  };

  const getHandlePositionFromMousePosition = mousePosition => {
    return Math.min(
      Math.max(Math.floor((mousePosition - bar.current.offsetLeft) / step), 0),
      num
    );
  };

  const handleMove = e => {
    const newHandlePosition = getHandlePositionFromMousePosition(e.screenX);
    if (newHandlePosition !== currentValue.current) onChange(newHandlePosition);
  };
  React.useEffect(() => {
    let handleMoveEventListener = e => {
      if (clicked.current) handleMove(e);
    };
    document.addEventListener('mousemove', handleMoveEventListener);
    return () =>
      document.removeEventListener('mousemove', handleMoveEventListener);
  }, []);

  return (
    <SliderBar ref={bar}>
      <SliderHandle onMouseDown={handleStart} position={value * step} />
    </SliderBar>
  );
}

export default Slider;
