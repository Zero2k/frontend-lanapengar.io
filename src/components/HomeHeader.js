import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Button,
  Sidebar,
  Visibility
} from 'semantic-ui-react';

import bg from '../images/Background_alt5.jpg';

import Navbar from './Navbar/Navbar';
import SidebarNavbar from './Navbar/SidebarNavbar';
import MobileNavbar from './Navbar/MobileNavbar';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container>
    <Header
      as="h1"
      content="Jämför och Hitta Bästa Privatlån, Snabblån eller Billån med oss"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <Button
      color="teal"
      size="huge"
      style={{ marginTop: mobile ? '0.5em' : '1.5em' }}
      as={Link}
      to="/privatlan"
    >
      Jämför privatlån
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI, nor Semantic UI React don't offer a responsive navbar, hover it can be easily implemented.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 700,
              padding: '1em 0em',
              background: `url(${bg}) 50% no-repeat`,
              backgroundSize: 'cover'
            }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              style={{
                border: 'none'
              }}
              size="huge"
            >
              <Navbar fixed={fixed} />
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class TabletContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...Responsive.onlyTablet}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 700,
              padding: '1em 0em',
              background: `url(${bg}) 50% no-repeat`,
              backgroundSize: 'cover'
            }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              style={{
                border: 'none'
              }}
              size="huge"
            >
              <Navbar fixed={fixed} />
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

TabletContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="push"
            /* inverted */
            vertical
            visible={sidebarOpened}
          >
            <SidebarNavbar />
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={sidebarOpened ? this.handleToggle : null}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{
                minHeight: 350,
                padding: '1em 0em',
                background: `url(${bg}) 50% no-repeat`,
                backgroundSize: 'cover'
              }}
              vertical
            >
              <MobileNavbar handleToggle={this.handleToggle} />
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children, title, subTitle }) => (
  <div>
    <DesktopContainer title={title} subTitle={subTitle}>
      {children}
    </DesktopContainer>
    <TabletContainer title={title} subTitle={subTitle}>
      {children}
    </TabletContainer>
    <MobileContainer title={title} subTitle={subTitle}>
      {children}
    </MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainer;
