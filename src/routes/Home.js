import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Statistic,
  Segment,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import { graphql } from 'react-apollo';

import HomeHeader from '../components/HomeHeader';
import Footer from '../components/Footer';

import { POST_QUERY } from '../graphql/post';

const Home = ({ data: { loading, posts } }) => {
  if (loading || !posts) {
    return (
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  return (
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
                  Just nu jämför vi lån från mer än 80 olika banker och
                  långivare, ange dina kriterier så hjälper vi dig hitta de lån
                  som du har möjlighet att ansöka om. Sök baserat på lånebelopp,
                  typ av lån och återbetalningstid.
                </p>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Ansök snabbt och enkelt om att låna pengar
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  När du väl har hittat en långivare som passar dina behov kan
                  du enkelt gå direkt till långivarens hemsida och ansöka om
                  lånet.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image
                  bordered
                  rounded
                  centered
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
          <Grid
            celled="internally"
            columns="equal"
            stackable
            verticalAlign="middle"
          >
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  {'Jämför Privatlån, Snabblån och Billån'}
                </Header>
                <p
                  style={{
                    fontSize: '1.33em',
                    maxWidth: '630px',
                    margin: '0 auto',
                    paddingBottom: '15px'
                  }}
                >
                  <b>lanapengar.io</b> erbjuder en kostnadsfri jämförelsetjänst
                  där du kan jämföra några av de vanligaste lån typerna. Att
                  ansöka om lån är helt kostnadsfritt och en jämförelse via oss
                  påverkar varken räntan eller eventuella avgifter.
                </p>
                <Button as={Link} to="/om-oss" basic color="teal">
                  Information om tjänsten
                </Button>
              </Grid.Column>
              <Grid.Column
                style={{
                  paddingBottom: '5em',
                  paddingTop: '5em'
                }}
              >
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Statistik från lanapengar.io
                </Header>
                <Statistic.Group
                  widths="three"
                  style={{ justifyContent: 'center' }}
                >
                  <Statistic color="teal" size="large">
                    <Statistic.Value>82</Statistic.Value>
                    <Statistic.Label>Långivare</Statistic.Label>
                  </Statistic>
                  <Statistic color="orange" size="large">
                    <Statistic.Value>1,343</Statistic.Value>
                    <Statistic.Label>Lån</Statistic.Label>
                  </Statistic>
                  <Statistic color="violet" size="large">
                    <Statistic.Value>10,432</Statistic.Value>
                    <Statistic.Label>Besökare i veckan</Statistic.Label>
                  </Statistic>
                </Statistic.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              {posts[0].title}
            </Header>
            <p style={{ fontSize: '1.33em' }}>{posts[0].description}</p>
            <Button
              as={Link}
              to={`artikel/${posts[0].category}/${posts[0].slug}`}
              size="large"
              color="teal"
            >
              Läs Mer
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
              {posts[1].title}
            </Header>
            <p style={{ fontSize: '1.33em' }}>{posts[1].description}</p>
            <Button
              as={Link}
              to={`artikel/${posts[1].category}/${posts[1].slug}`}
              size="large"
              color="teal"
            >
              Läs Mer
            </Button>
          </Container>
        </Segment>
      </HomeHeader>
      <Footer />
    </div>
  );
};

export default graphql(POST_QUERY, {
  options: () => ({
    fetchPolicy: 'cache-and-network',
    variables: {
      limit: 2
    }
  })
})(Home);
