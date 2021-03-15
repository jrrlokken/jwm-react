import * as React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Footer</p>
    </StyledFooter>
  );
}

export default Footer;