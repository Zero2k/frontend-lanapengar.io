import React from 'react';
import { Container, Menu, Dropdown } from 'semantic-ui-react';

import NavLink from './NavLink';

const Navbar = () => (
  <Container>
    <Menu.Item header>lanapengar.io</Menu.Item>
    <NavLink to="/">Startsida</NavLink>
    <Dropdown item text="Jämför lån">
      <Dropdown.Menu>
        <NavLink to="/lan">Alla lån</NavLink>
        <NavLink to="/privatlan">Privatlån</NavLink>
        <NavLink to="/snabblan">Snabblån</NavLink>
        <NavLink to="/billan">Billån</NavLink>
      </Dropdown.Menu>
    </Dropdown>
  </Container>
);

export default Navbar;
