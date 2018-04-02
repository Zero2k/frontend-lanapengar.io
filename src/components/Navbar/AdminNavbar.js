import React from 'react';
import { Container, Menu, Input } from 'semantic-ui-react';
import NavLink from './NavLink';

const AdminNavbar = () => (
  <div>
    <Menu pointing>
      <Container>
        <NavLink to="/dashboard">Start</NavLink>
        <NavLink to="/dashboard/lender">Lenders</NavLink>
        <NavLink to="/dashboard/post">Posts</NavLink>
        <NavLink to="/dashboard/section">Sections</NavLink>
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Item name="logout" onClick={this.handleItemClick} />
        </Menu.Menu>
      </Container>
    </Menu>
  </div>
);

export default AdminNavbar;
