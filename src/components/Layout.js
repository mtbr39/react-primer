// src/components/Layout.js
import React from 'react';
import { Box } from '@primer/react';

const Layout = ({ children }) => {
  return (
    <Box>
      <header>Header</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </Box>
  );
};

export default Layout;
