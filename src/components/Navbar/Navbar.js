import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

import NavLink from './NavLink';
import ProfileModal from '../ProfileModal';

export default class Navbar extends React.Component {
  state = {
    openSettings: false
  };

  toggleSettingsModal = () => {
    this.setState(state => ({ openSettings: !state.openSettings }));
  };

  render() {
    const { openSettings } = this.state;
    const { fixed } = this.props;
    return (
      <Container>
        <NavLink to="/">Hem</NavLink>
        <NavLink to="/privatlan">Privatlån</NavLink>
        <NavLink to="/snabblan">Snabblån</NavLink>
        <NavLink to="/billan">Billån</NavLink>
        <Menu.Item position="right">
          <Button onClick={this.toggleSettingsModal} inverted={!fixed}>
            Min Profil
          </Button>
        </Menu.Item>
        <ProfileModal onClose={this.toggleSettingsModal} open={openSettings} />
      </Container>
    );
  }
}
