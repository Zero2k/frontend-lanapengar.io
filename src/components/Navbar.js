import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Dropdown,
  List,
  Menu,
  Card,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react';

import NavLink from './NavLink';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile, title, subTitle }) => (
  <Container>
    <Header
      as="h2"
      content={title}
      inverted
      style={{
        fontSize: mobile ? '2em' : '2.5em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '0.5em' : '1em'
      }}
    />
    <Header
      as="h3"
      content={subTitle}
      inverted
      style={{
        fontSize: mobile ? '1.2em' : '2em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.3em' : '0.5em'
      }}
    />
    <Card.Group
      style={{
        marginTop: mobile ? '0.5em' : '2em',
        marginBottom: mobile ? '0.5em' : '1.5em'
      }}
      centered
    >
      <Card
        style={{
          backgroundColor: '#7f246a',
          border: '2px solid rgba(255, 255, 255, 0.95)'
        }}
        link
      >
        <Card.Content
          style={{
            marginTop: mobile ? '0.5em' : '1.2em',
            marginBottom: mobile ? '0.5em' : '1.2em'
          }}
        >
          <Card.Content content={<Icon name="home" size="massive" />} />
          <Card.Header style={{ color: '#FFF' }}>Privatlån</Card.Header>
          <Card.Description style={{ color: '#FFF' }}>
            Låna från 5.000 upp till 500.000 kr i 1 till 5 år. Ränta från 5%
          </Card.Description>
        </Card.Content>
      </Card>

      <Card
        style={{
          backgroundColor: '#DB4D75',
          border: '2px solid rgba(255, 255, 255, 0.95)'
        }}
        link
      >
        <Card.Content
          style={{
            marginTop: mobile ? '0.5em' : '1.2em',
            marginBottom: mobile ? '0.5em' : '1.2em'
          }}
        >
          <Card.Content content={<Icon name="mobile" size="massive" />} />
          <Card.Header style={{ color: '#FFF' }}>Snabblån</Card.Header>
          <Card.Description style={{ color: '#FFF' }}>
            Låna från 500 upp till 40.000 kr i 3 till 24 månader. Ränta från 12%
          </Card.Description>
        </Card.Content>
      </Card>

      <Card
        style={{
          backgroundColor: '#F4793B',
          border: '2px solid rgba(255, 255, 255, 0.95)'
        }}
        link
      >
        <Card.Content
          style={{
            marginTop: mobile ? '0.5em' : '1.2em',
            marginBottom: mobile ? '0.5em' : '1.2em'
          }}
        >
          <Card.Content content={<Icon name="car" size="massive" />} />
          <Card.Header style={{ color: '#FFF' }}>Billån</Card.Header>
          <Card.Description style={{ color: '#FFF' }}>
            Låna från 1.000 upp till 500.000 kr i 6 månader till 15 år. Ränta
            från 2.95%
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
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
    const { children, title, subTitle } = this.props;
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
              minHeight: 450,
              padding: '1em 0em',
              background:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 298.97916 185.20834' height='700' width='1130'%3E%3Cdefs%3E%3ClinearGradient id='f'%3E%3Cstop offset='0' stop-color='%23651434'/%3E%3Cstop offset='1' stop-color='%23ba1735'/%3E%3C/linearGradient%3E%3ClinearGradient id='e'%3E%3Cstop offset='0' stop-color='%23661f4b'/%3E%3Cstop offset='1' stop-color='%2391254b'/%3E%3C/linearGradient%3E%3ClinearGradient id='d'%3E%3Cstop offset='0' stop-color='%2385285a'/%3E%3Cstop offset='1' stop-color='%23c0355a'/%3E%3C/linearGradient%3E%3ClinearGradient id='c'%3E%3Cstop offset='0' stop-color='%238e2d69'/%3E%3Cstop offset='1' stop-color='%23c83f6a'/%3E%3C/linearGradient%3E%3ClinearGradient id='b'%3E%3Cstop offset='0' stop-color='%23882d78'/%3E%3Cstop offset='1' stop-color='%23c2477b'/%3E%3C/linearGradient%3E%3ClinearGradient id='a'%3E%3Cstop offset='0' stop-color='%23882e86'/%3E%3Cstop offset='1' stop-color='%23b24386'/%3E%3C/linearGradient%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='226.32' x2='83.14' y1='130.54' x1='83.14' id='g' xlink:href='%23a'/%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='296.57' x2='71.61' y1='151.05' x1='71.61' id='h' xlink:href='%23b'/%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='277.97' x2='137.73' y1='161.14' x1='137.73' id='i' xlink:href='%23c'/%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='277.01' x2='162.86' y1='161.66' x1='162.86' id='j' xlink:href='%23d'/%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='189.69' x2='169.83' y1='112.16' x1='169.83' id='k' xlink:href='%23e'/%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='230.9' x2='227.01' y1='111.79' x1='227.01' id='l' xlink:href='%23f'/%3E%3C/defs%3E%3Cg fill-rule='evenodd'%3E%3Cpath d='M116.5 226.41l-80.25-66.2c-3.92-3.23-6.32-9.14-6.32-9.14s-1.95-8.53.98-14.2c2.92-5.66 7.84-6.99 11.67-6.37 3.83.63 6.06 1.6 6.06 1.6l89.09 29.04z' fill='url%28%23g%29' transform='translate%28-.04 -111.8%29'/%3E%3Cpath d='M116.5 226.41L93.64 297H67.18L29.93 151.07s2.1 5.66 6.32 9.14z' fill='url%28%23h%29' transform='translate%28-.04 -111.8%29'/%3E%3Cpath d='M137.73 161.14l51.36 115.95a14.13 14.13 0 0 1-9.64.28c-2.94-.9-6-3.63-6-3.63-2.68-2.67-56.95-47.33-56.95-47.33z' fill='url%28%23i%29' transform='translate%28-.04 -111.8%29'/%3E%3Cpath d='M137.73 161.14l62.4 28.59-3.9 76.63s-.16 1.9-1.04 4.18c-.89 2.3-3.61 5.57-6.1 6.55z' fill='url%28%23j%29' transform='translate%28-.04 -111.8%29'/%3E%3Cpath d='M137.73 161.14l22.34-49.35H204l-3.86 77.94z' fill='url%28%23k%29' transform='translate%28-.04 -111.8%29'/%3E%3Cpath d='M204 111.8H227l69.4 105.55c1.57 2.4 3.93 8.2.26 11.88-3.67 3.7-8.02.69-13.9-1.99l-82.64-37.51z' fill='url%28%23l%29' transform='translate%28-.04 -111.8%29'/%3E%3C/g%3E%3C/svg%3E\") 50% 50% no-repeat, radial-gradient(circle at 50% 80%,#DB4D75 20%,#924A8B 80%)"
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
              size="large"
            >
              <Container>
                <NavLink to="/">Hem</NavLink>
                <NavLink to="/privatlan">Privatlån</NavLink>
                <NavLink to="/snabblan">Snabblån</NavLink>
                <NavLink to="/billan">Billån</NavLink>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Min Profil
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading title={title} subTitle={subTitle} />
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
    const { children, title, subTitle } = this.props;
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
              minHeight: 450,
              padding: '1em 0em',
              background:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 298.97916 185.20834' height='700' width='1130'%3E%3Cdefs%3E%3ClinearGradient id='f'%3E%3Cstop offset='0' stop-color='%23651434'/%3E%3Cstop offset='1' stop-color='%23ba1735'/%3E%3C/linearGradient%3E%3ClinearGradient id='e'%3E%3Cstop offset='0' stop-color='%23661f4b'/%3E%3Cstop offset='1' stop-color='%2391254b'/%3E%3C/linearGradient%3E%3ClinearGradient id='d'%3E%3Cstop offset='0' stop-color='%2385285a'/%3E%3Cstop offset='1' stop-color='%23c0355a'/%3E%3C/linearGradient%3E%3ClinearGradient id='c'%3E%3Cstop offset='0' stop-color='%238e2d69'/%3E%3Cstop offset='1' stop-color='%23c83f6a'/%3E%3C/linearGradient%3E%3ClinearGradient id='b'%3E%3Cstop offset='0' stop-color='%23882d78'/%3E%3Cstop offset='1' stop-color='%23c2477b'/%3E%3C/linearGradient%3E%3ClinearGradient id='a'%3E%3Cstop offset='0' stop-color='%23882e86'/%3E%3Cstop offset='1' stop-color='%23b24386'/%3E%3C/linearGradient%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='226.32' x2='83.14' y1='130.54' x1='83.14' id='g' xlink:href='%23a'/%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='296.57' x2='71.61' y1='151.05' x1='71.61' id='h' xlink:href='%23b'/%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='277.97' x2='137.73' y1='161.14' x1='137.73' id='i' xlink:href='%23c'/%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='277.01' x2='162.86' y1='161.66' x1='162.86' id='j' xlink:href='%23d'/%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='189.69' x2='169.83' y1='112.16' x1='169.83' id='k' xlink:href='%23e'/%3E%3ClinearGradient gradientUnits='userSpaceOnUse' y2='230.9' x2='227.01' y1='111.79' x1='227.01' id='l' xlink:href='%23f'/%3E%3C/defs%3E%3Cg fill-rule='evenodd'%3E%3Cpath d='M116.5 226.41l-80.25-66.2c-3.92-3.23-6.32-9.14-6.32-9.14s-1.95-8.53.98-14.2c2.92-5.66 7.84-6.99 11.67-6.37 3.83.63 6.06 1.6 6.06 1.6l89.09 29.04z' fill='url%28%23g%29' transform='translate%28-.04 -111.8%29'/%3E%3Cpath d='M116.5 226.41L93.64 297H67.18L29.93 151.07s2.1 5.66 6.32 9.14z' fill='url%28%23h%29' transform='translate%28-.04 -111.8%29'/%3E%3Cpath d='M137.73 161.14l51.36 115.95a14.13 14.13 0 0 1-9.64.28c-2.94-.9-6-3.63-6-3.63-2.68-2.67-56.95-47.33-56.95-47.33z' fill='url%28%23i%29' transform='translate%28-.04 -111.8%29'/%3E%3Cpath d='M137.73 161.14l62.4 28.59-3.9 76.63s-.16 1.9-1.04 4.18c-.89 2.3-3.61 5.57-6.1 6.55z' fill='url%28%23j%29' transform='translate%28-.04 -111.8%29'/%3E%3Cpath d='M137.73 161.14l22.34-49.35H204l-3.86 77.94z' fill='url%28%23k%29' transform='translate%28-.04 -111.8%29'/%3E%3Cpath d='M204 111.8H227l69.4 105.55c1.57 2.4 3.93 8.2.26 11.88-3.67 3.7-8.02.69-13.9-1.99l-82.64-37.51z' fill='url%28%23l%29' transform='translate%28-.04 -111.8%29'/%3E%3C/g%3E%3C/svg%3E\") 50% 50% no-repeat, radial-gradient(circle at 50% 80%,#DB4D75 20%,#924A8B 80%)"
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
              size="large"
            >
              <Container>
                <NavLink to="/">Hem</NavLink>
                <NavLink to="/loan">Privatlån</NavLink>
                <NavLink to="/snabblan">Snabblån</NavLink>
                <NavLink to="/billan">Billån</NavLink>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Min Profil
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading title={title} subTitle={subTitle} />
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
    const { children, title, subTitle } = this.props;
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
            <Menu.Item as="a" active>
              Hem
            </Menu.Item>
            <Menu.Item as="a">Lån</Menu.Item>
            {/* <Menu.Item>
              <Input placeholder="Search..." />
            </Menu.Item>

            <Menu.Item>
              Hem
              <Menu.Menu>
                <Menu.Item name="search" onClick={this.handleItemClick}>
                  Search
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>

            <Menu.Item name="browse" onClick={this.handleItemClick}>
              <Icon name="grid layout" />
              Privatlån
            </Menu.Item>
            <Menu.Item name="messages" onClick={this.handleItemClick}>
              Snabblån
            </Menu.Item>

            <Dropdown item text="Fler lån">
              <Dropdown.Menu>
                <Dropdown.Item icon="edit" text="Edit Profile" />
                <Dropdown.Item icon="globe" text="Choose Language" />
                <Dropdown.Item icon="settings" text="Account Settings" />
              </Dropdown.Menu>
            </Dropdown> */}
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={sidebarOpened ? this.handleToggle : null}
            style={{ minHeight: '100%' }}
          >
            <Segment
              inverted
              textAlign="center"
              style={{
                minHeight: 350,
                padding: '1em 0em',
                background:
                  'radial-gradient(circle at 50% 80%,#DB4D75 20%,#924A8B 80%)'
              }}
              vertical
            >
              <Container>
                <Menu
                  inverted
                  pointing
                  secondary
                  style={{
                    border: 'none'
                  }}
                  size="large"
                >
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      My Profile
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile title={title} subTitle={subTitle} />
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
