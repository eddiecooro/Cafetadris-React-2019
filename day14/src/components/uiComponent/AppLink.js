import styled from 'styled-components';

let AppLink = styled.a`
  color: #09070e;
  &:hover {
    background-color: ${props => props.activeBackgroundColor};
  }
  &:active,
  &:hover,
  &:link {
    text-decoration: none;
  }
`;

export default AppLink;
