import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, List, Segment, Icon } from 'semantic-ui-react';

const Footer = () => (
  <Segment.Group>
    <Segment inverted size="huge" color="teal">
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={8}>
              <p>Get connected with us on social networks!</p>
            </Grid.Column>
            <Grid.Column
              width={8}
              style={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
              <a target="blank" href="http://facebook.com">
                <Icon size="large" inverted name="facebook official" />
              </a>
              <a target="blank" href="http://twitter.com">
                <Icon size="large" inverted name="twitter" />
              </a>
              <a target="blank" href="http://google.com">
                <Icon size="large" inverted name="google plus" />
              </a>
              <a target="blank" href="http://linkedin.com">
                <Icon size="large" inverted name="linkedin" />
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
    <Segment
      vertical
      secondary
      textAlign="center"
      style={{ padding: '5em 0em' }}
    >
      <Container>
        <List
          celled
          horizontal
          size="huge"
          style={{ fontFamily: 'Varela Round', fontWeight: 400 }}
        >
          <List.Item as={Link} to="/om-oss">
            Om oss
          </List.Item>
          <List.Item as={Link} to="/artiklar">
            Artiklar
          </List.Item>
          <List.Item as="a">Kontakta oss</List.Item>
          <List.Item as="a">Sidkarta</List.Item>
          <List.Item as="a">Villkor</List.Item>
          <List.Item as="a"> Sekretess </List.Item>
        </List>
      </Container>
    </Segment>
    <Segment
      vertical
      tertiary
      textAlign="center"
      style={{ padding: '1em 0em' }}
    >
      <Container>
        <p>
          Vår tjänst är kostnadsfri, dvs helt gratis för dig som användare.
          Webbplatsen och tjänsten finansieras helt av de långivare som vi
          jämför. Du betalar alltså inget extra för att du jämför långivare och
          ansöker om lån genom lanapengar.io.{' '}
          <a href="/artiklar">Läs mer om hur webbplatsen fungerar</a>.
        </p>
      </Container>
    </Segment>
  </Segment.Group>
);

export default Footer;
