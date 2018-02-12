import React from 'react';
import styled from 'styled-components';

import Footer from '../components/Footer';

const Root = styled.div``;

const Layout = ({ children }) => (
  <Root>
    {children}
    <Footer />
  </Root>
);

export default Layout;
