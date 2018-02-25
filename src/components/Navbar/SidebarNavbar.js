import React from 'react';
import { Menu } from 'semantic-ui-react';
import NavLink from './NavLink';

const SidebarNavbar = () => (
  <div>
    <NavLink to="/">Hem</NavLink>
    <Menu.Item>
      <Menu.Header>Jämför lån</Menu.Header>

      <Menu.Menu>
        <NavLink to="/lan">Alla lån</NavLink>
        <NavLink to="/privatlan">Privatlån</NavLink>
        <NavLink to="/snabblan">Snabblån</NavLink>
        <NavLink to="billan">Billån</NavLink>
      </Menu.Menu>
    </Menu.Item>
  </div>
);

export default SidebarNavbar;
