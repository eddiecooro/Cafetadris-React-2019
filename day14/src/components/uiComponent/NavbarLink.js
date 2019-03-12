import styled from 'styled-components';

let NavbarLink = styled.li`
  padding: 15px;
  &:hover {
    cursor: pointer;
    background-color: #131118;
  }
  & * {
    color: white;
  }
  & a:link,
  & a:active,
  & a:visited {
    text-decoration: none;
  }
`;

export default NavbarLink;
