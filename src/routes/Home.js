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
  Menu,
  Form,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react';
import NavLink from '../components/NavLink';

import bg from '../images/Background_alt5.jpg';

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
              <Container>
                <NavLink to="/">Hem</NavLink>
                <NavLink to="/privatlan">Privatlån</NavLink>
                <NavLink to="/snabblån">Snabblån</NavLink>
                <NavLink to="/billan">Billån</NavLink>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Min Profil
                  </Button>
                </Menu.Item>
              </Container>
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
            <Menu.Item as="a" active>
              Hem
            </Menu.Item>
            <Menu.Item as="a">Privatlån</Menu.Item>
            <Menu.Item as="a">Billån</Menu.Item>
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
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Min profil
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
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

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const Home = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Vi jämför lån hos mer än 80 långivare
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Just nu jämför vi lån från mer än 80 olika banker och långivare,
              ange dina kriterier genom att klicka på Min profil uppe i menyn så
              hjälper vi dig hitta de lån som du har möjlighet att ansöka om.
            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Ansök snabbt och enkelt om att låna pengar
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              När du väl har hittat en långivare som passar dina behov kan du
              enkelt gå direkt till långivarens hemsida och ansöka om lånet.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="https://react.semantic-ui.com/assets/images/wireframe/white-image.png"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button color="teal" size="huge">
              Se alla långivare
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Få tips och råd om privatekonomi till din <br />e-post varje
              vecka.
            </Header>
            <Form
              widths="equal"
              onSubmit={this.handleSubmit}
              style={{ display: 'inline-block' }}
            >
              <Form.Group>
                <Form.Input
                  placeholder="Namn"
                  name="name"
                  onChange={this.handleChange}
                />
                <Form.Input
                  placeholder="E-post"
                  name="email"
                  onChange={this.handleChange}
                />
                <Form.Button content="Skicka" color="orange" />
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large" color="teal">
          Read More
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href="#">Fler Artiklar</a>
        </Divider>

        <Header as="h3" style={{ fontSize: '2em' }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it's really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large" color="teal">
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default Home;
