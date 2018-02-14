import React from 'react';
import {
  Container,
  Grid,
  List,
  Header,
  Segment,
  Icon
} from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Header inverted as="h4" content="Information" />
            <List link inverted>
              <List.Item as="a">Om oss</List.Item>
              <List.Item as="a">Artiklar</List.Item>
              <List.Item as="a">Kontakta oss</List.Item>
              <List.Item as="a">Sidkarta</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted as="h4" content="Tjänster" />
            <List link inverted>
              <List.Item as="a">Banana Pre-Order</List.Item>
              <List.Item as="a">DNA FAQ</List.Item>
              <List.Item as="a">How To Access</List.Item>
              <List.Item as="a">Favorite X-Men</List.Item>
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
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
