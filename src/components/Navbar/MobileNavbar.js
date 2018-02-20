import React from 'react';
import { Container, Button, Menu, Icon } from 'semantic-ui-react';
import ProfileModal from '../ProfileModal';

export default class MobileNavbar extends React.Component {
  state = {
    openSettings: false
  };

  toggleSettingsModal = () => {
    this.setState(state => ({ openSettings: !state.openSettings }));
  };

  render() {
    const { openSettings } = this.state;
    const { handleToggle } = this.props;
    return (
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
          <Menu.Item position="right">
            <Button onClick={this.toggleSettingsModal} inverted>
              Min profil
            </Button>
          </Menu.Item>
        </Menu>
        <ProfileModal onClose={this.toggleSettingsModal} open={openSettings} />
      </Container>
    );
  }
}
