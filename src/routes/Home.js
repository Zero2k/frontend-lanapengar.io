import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Form,
  Segment
} from 'semantic-ui-react';

import HomeHeader from '../components/HomeHeader';

const Home = () => (
  <div>
    <HomeHeader>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Vi jämför lån hos mer än 80 långivare
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Just nu jämför vi lån från mer än 80 olika banker och långivare,
                ange dina kriterier genom att klicka på Min profil uppe i menyn
                så hjälper vi dig hitta de lån som du har möjlighet att ansöka
                om.
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
              <Button color="teal" size="huge" as={Link} to="/lan">
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
            Instead of focusing on content creation and hard work, we have
            learned how to master the art of doing nothing by providing massive
            amounts of whitespace and generic content that can seem massive,
            monolithic and worth your attention.
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
            <Link to="/artiklar">Fler Artiklar</Link>
          </Divider>

          <Header as="h3" style={{ fontSize: '2em' }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Yes I know you probably disregarded the earlier boasts as
            non-sequitur filler content, but it's really true. It took years of
            gene splicing and combinatory DNA research, but our bananas can
            really dance.
          </p>
          <Button as="a" size="large" color="teal">
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>
    </HomeHeader>
  </div>
);

export default Home;
