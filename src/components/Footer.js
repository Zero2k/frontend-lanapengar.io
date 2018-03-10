import React from 'react';
import { Link } from 'react-router-dom';
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
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
