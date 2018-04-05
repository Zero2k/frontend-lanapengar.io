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
              <Icon size="large" name="facebook official" />
              <Icon size="large" name="twitter" />
              <Icon size="large" name="google plus" />
              <Icon size="large" name="linkedin" />
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
          style={{ fontFamily: 'Varela Round', fontWeight: 100 }}
        >
          <List.Item as="a">Om oss</List.Item>
          <List.Item as={Link} to="/artiklar">
            Artiklar
          </List.Item>
          <List.Item as="a">Kontakta oss</List.Item>
          <List.Item as="a">Sidkarta</List.Item>
          <List.Item as="a">Villkor</List.Item>
        </List>
        {/* <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Information" />
              <List link inverted>
                <List.Item>Om oss</List.Item>
                <Link to="/artiklar">
                  <List.Item>Artiklar</List.Item>
                </Link>
                <List.Item>Kontakta oss</List.Item>
                <List.Item>Sidkarta</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon
                size="huge"
                bordered
                style={{ backgroundColor: '#3b5998' }}
                name="facebook official"
              />
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon
                size="huge"
                bordered
                style={{ backgroundColor: '#2795e9' }}
                name="twitter"
              />
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon
                size="huge"
                bordered
                style={{ backgroundColor: '#dd4b39' }}
                name="google plus"
              />
            </Grid.Column>
            <Grid.Column width={2}>
              <Icon
                size="huge"
                bordered
                style={{ backgroundColor: '#0077b5' }}
                name="linkedin"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid> */}
      </Container>
    </Segment>
  </Segment.Group>
);

export default Footer;
