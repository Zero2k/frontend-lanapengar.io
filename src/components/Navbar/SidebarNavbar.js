import React from 'react';

import NavLink from './NavLink';

const SidebarNavbar = () => (
  <div>
    <NavLink to="/">Hem</NavLink>
    <NavLink to="/privatlan">Privatlån</NavLink>
    <NavLink to="/snabblan">Snabblån</NavLink>
    <NavLink to="billan">Billån</NavLink>
  </div>
);

export default SidebarNavbar;
