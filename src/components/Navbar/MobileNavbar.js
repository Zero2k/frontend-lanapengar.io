import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';

const MobileNavbar = ({ handleToggle }) => (
  <Container>
    <Menu
      inverted
      pointing
      secondary
      size="large"
      style={{
        border: 'none'
      }}
    >
      <Menu.Item onClick={handleToggle}>
        <Icon name="sidebar" />
      </Menu.Item>
    </Menu>
  </Container>
);

export default MobileNavbar;
