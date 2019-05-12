import React, { Component } from 'react';
import styled from 'styled-components';

const barWidth = 200;
const handleWidth = 16;
const SliderBar = styled.div`
  width: ${barWidth}px;
  background-color: white;
  height: 8px;
  border-radius: 4px;
`;

const SliderButton = styled.div`
  width: ${handleWidth}px;
  height: ${handleWidth}px;
  background-color: white;
  transform-origin: 0% 50%;
  transform: ${props => `translate(${props.position || 0}px, -25%)`};
  border-radius: ${handleWidth / 2}px;
  border: 1px solid black;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: #ddd;
  }
`;

function Slider({ num = 10, value, onChange }) {
  const clicked = React.useRef(false);
  const handle = React.useRef(null);
  const bar = React.useRef(null);
  const step = (barWidth - handleWidth) / num;

  const getBarPositionFromMousePosition = mouseOffset => {
    return Math.min(
      Math.max(Math.floor((mouseOffset - bar.current.offsetLeft) / step), 0),
      num
    );
  };

  const handleStart = e => {
    const handleMouseUp = () => {
      clicked.current = false;
    };
    clicked.current = true;
    document.addEventListener('mouseup', handleMouseUp, { once: true });
  };

  const handleMove = e => {
    if (clicked.current) {
      const handlePosition = getBarPositionFromMousePosition(e.screenX);
      onChange(handlePosition);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    return () => document.addEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#9B4DCA',
        padding: '20px',
        borderRadius: '5px'
      }}>
      <input
        type="text"
        placeholder="name"
        style={{ backgroundColor: 'white' }}
      />
      <SliderBar ref={bar}>
        <SliderButton
          ref={handle}
          position={value * step}
          onPointerDown={handleStart}
        />
      </SliderBar>
    </div>
  );
}

export default Slider;
