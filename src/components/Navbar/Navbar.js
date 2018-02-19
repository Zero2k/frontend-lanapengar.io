import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

import NavLink from './NavLink';

const Navbar = ({ fixed }) => (
  <Container>
    <NavLink to="/">Hem</NavLink>
    <NavLink to="/privatlan">Privatlån</NavLink>
    <NavLink to="/snabblan">Snabblån</NavLink>
    <NavLink to="/billan">Billån</NavLink>
    <Menu.Item position="right">
      <Button as="a" inverted={!fixed}>
        Min Profil
      </Button>
    </Menu.Item>
  </Container>
);

export default Navbar;
