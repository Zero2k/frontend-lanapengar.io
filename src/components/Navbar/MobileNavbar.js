import React from 'react';
import { Button, Menu, Icon } from 'semantic-ui-react';

const MobileNavbar = () => (
  <div>
    <Menu.Item onClick={this.handleToggle}>
      <Icon name="sidebar" />
    </Menu.Item>
    <Menu.Item position="right">
      <Button as="a" inverted>
        Min profil
      </Button>
    </Menu.Item>
  </div>
);

export default MobileNavbar;
