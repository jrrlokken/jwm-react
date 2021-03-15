import * as React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const Logo = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  color: antiquewhite;
  text-decoration: none;
  text-shadow: 2px 2px 8px rgba(82, 168, 236, 0.6), 2px 2px 4px #ffffff;
`;

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="bar">
        <Logo>JWM</Logo>
        <Nav />
      </div>
    </StyledHeader>
  );
}

export default Header;