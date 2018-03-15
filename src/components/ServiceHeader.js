import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  Icon,
  Menu,
  Card,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react';

import Navbar from './Navbar/Navbar';
import SidebarNavbar from './Navbar/SidebarNavbar';
import MobileNavbar from './Navbar/MobileNavbar';

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const ServiceHeader = ({ mobile, title, subTitle }) => (
  <Container>
    <Header
      as="h1"
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
        as={Link}
        to="/privatlan"
      >
        <Card.Content
          style={{
            marginTop: mobile ? '0.5em' : '1.2em',
            marginBottom: mobile ? '0.5em' : '1.2em'
          }}
        >
          <Card.Content
            content={
              <Icon style={{ color: '#FFF' }} name="home" size="massive" />
            }
          />
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
        as={Link}
        to="/snabblan"
      >
        <Card.Content
          style={{
            marginTop: mobile ? '0.5em' : '1.2em',
            marginBottom: mobile ? '0.5em' : '1.2em'
          }}
        >
          <Card.Content
            content={
              <Icon style={{ color: '#FFF' }} name="mobile" size="massive" />
            }
          />
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
        as={Link}
        to="/billan"
      >
        <Card.Content
          style={{
            marginTop: mobile ? '0.5em' : '1.2em',
            marginBottom: mobile ? '0.5em' : '1.2em'
          }}
        >
          <Card.Content
            content={
              <Icon style={{ color: '#FFF' }} name="car" size="massive" />
            }
          />
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

ServiceHeader.propTypes = {
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
                "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='900px' height='900px' viewBox='0 0 900 900' enable-background='new 0 0 900 900' xml:space='preserve'%3e%3cg id='Layer_1' display='none'%3e%3cimage display='inline' overflow='visible' width='450' height='470' xlink:href='data:image/jpeg;base64,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 jSozmRlFi7Wu3U2/8E//2Q==' transform='matrix(2.6891 0 0 2.6891 123.959 -337.5566)'%3e%3c/image%3e%3c/g%3e%3cg id='Layer_2'%3e%3cpolyline fill='%2389D1CC' points='234.928,-12.485 12.807,299.296 506.698,-12.485 '/%3e%3cpolyline fill='%239C54A1' points='667.07,912.485 889.193,600.702 395.303,912.485 '/%3e%3c/g%3e%3cg id='Layer_3'%3e%3cpolyline fill='%2325BAA2' points='506.698,-12.485 154.794,499.72 12.807,299.296 '/%3e%3cpolyline fill='%23C083B9' points='395.303,912.485 747.205,400.278 889.193,600.702 '/%3e%3c/g%3e%3cg id='Layer_4'%3e%3cpolyline fill='%2306897B' points='292.492,299.296 506.698,610.792 234.928,610.792 154.794,499.72 '/%3e%3cpolyline fill='%23853B96' points='609.508,600.702 395.303,289.206 667.07,289.206 747.205,400.278 '/%3e%3c/g%3e%3c/svg%3e\") 50% 50% no-repeat, radial-gradient(circle at 50% 80%,#DB4D75 20%,#924A8B 80%)"
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
            <ServiceHeader title={title} subTitle={subTitle} />
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
                "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='900px' height='900px' viewBox='0 0 900 900' enable-background='new 0 0 900 900' xml:space='preserve'%3e%3cg id='Layer_1' display='none'%3e%3cimage display='inline' overflow='visible' width='450' height='470' xlink:href='data:image/jpeg;base64,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 jSozmRlFi7Wu3U2/8E//2Q==' transform='matrix(2.6891 0 0 2.6891 123.959 -337.5566)'%3e%3c/image%3e%3c/g%3e%3cg id='Layer_2'%3e%3cpolyline fill='%2389D1CC' points='234.928,-12.485 12.807,299.296 506.698,-12.485 '/%3e%3cpolyline fill='%239C54A1' points='667.07,912.485 889.193,600.702 395.303,912.485 '/%3e%3c/g%3e%3cg id='Layer_3'%3e%3cpolyline fill='%2325BAA2' points='506.698,-12.485 154.794,499.72 12.807,299.296 '/%3e%3cpolyline fill='%23C083B9' points='395.303,912.485 747.205,400.278 889.193,600.702 '/%3e%3c/g%3e%3cg id='Layer_4'%3e%3cpolyline fill='%2306897B' points='292.492,299.296 506.698,610.792 234.928,610.792 154.794,499.72 '/%3e%3cpolyline fill='%23853B96' points='609.508,600.702 395.303,289.206 667.07,289.206 747.205,400.278 '/%3e%3c/g%3e%3c/svg%3e\") 50% 50% no-repeat, radial-gradient(circle at 50% 80%,#DB4D75 20%,#924A8B 80%)"
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
              <Navbar fixed={fixed} />
            </Menu>
            <ServiceHeader title={title} subTitle={subTitle} />
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
            <SidebarNavbar />
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
                  "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width='950px' height='950px' viewBox='0 0 900 900' enable-background='new 0 0 900 900' xml:space='preserve'%3e%3cg id='Layer_1' display='none'%3e%3cimage display='inline' overflow='visible' width='450' height='470' xlink:href='data:image/jpeg;base64,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 jSozmRlFi7Wu3U2/8E//2Q==' transform='matrix(2.6891 0 0 2.6891 123.959 -337.5566)'%3e%3c/image%3e%3c/g%3e%3cg id='Layer_2'%3e%3cpolyline fill='%2389D1CC' points='234.928,-12.485 12.807,299.296 506.698,-12.485 '/%3e%3cpolyline fill='%239C54A1' points='667.07,912.485 889.193,600.702 395.303,912.485 '/%3e%3c/g%3e%3cg id='Layer_3'%3e%3cpolyline fill='%2325BAA2' points='506.698,-12.485 154.794,499.72 12.807,299.296 '/%3e%3cpolyline fill='%23C083B9' points='395.303,912.485 747.205,400.278 889.193,600.702 '/%3e%3c/g%3e%3cg id='Layer_4'%3e%3cpolyline fill='%2306897B' points='292.492,299.296 506.698,610.792 234.928,610.792 154.794,499.72 '/%3e%3cpolyline fill='%23853B96' points='609.508,600.702 395.303,289.206 667.07,289.206 747.205,400.278 '/%3e%3c/g%3e%3c/svg%3e\") 50% 50% no-repeat, radial-gradient(circle at 50% 80%,#DB4D75 20%,#924A8B 80%)"
              }}
              vertical
            >
              <MobileNavbar handleToggle={this.handleToggle} />
              <ServiceHeader mobile title={title} subTitle={subTitle} />
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
