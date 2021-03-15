import React, { useState } from 'react';
import styled from 'styled-components';
import Contact from './Contact';


const NavStyles = styled.ul`
  margin: 0;
  padding-right: 2rem;
  display: flex;
  justify-self: end;
  font-size: 1.5rem;
  li {
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
  }
`;


const Nav = props => {
  return (
    <NavStyles>
      <li>Work</li>
      <li>Gear</li>
      <li>Contact</li>
      {/* {isOpen ? (
        <Contact />
      ) : (<button onClick={handleOpenContactModal}>Contact</button>)} */}
    </NavStyles>
  );
}

export default Nav;