import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

import NavLink from './NavLink';
import ProfileModal from '../ProfileModal';

class Navbar extends React.Component {
  state = {
    openSettings: false
  };

  toggleSettingsModal = () => {
    this.setState(state => ({ openSettings: !state.openSettings }));
  };

  render() {
    const { openSettings } = this.state;
    const { fixed, profile } = this.props;
    const { isSet } = profile;

    return (
      <Container>
        <NavLink to="/">Hem</NavLink>
        <NavLink to="/privatlan">Privatlån</NavLink>
        <NavLink to="/snabblan">Snabblån</NavLink>
        <NavLink to="/billan">Billån</NavLink>
        <Menu.Item position="right">
          <Button
            onClick={this.toggleSettingsModal}
            inverted={!fixed}
            color={isSet ? 'orange' : null}
          >
            Min Profil
          </Button>
        </Menu.Item>
        <ProfileModal
          onClose={this.toggleSettingsModal}
          open={openSettings}
          profile={profile}
        />
      </Container>
    );
  }
}

export default Navbar;
