import React from 'react';
import {
  Container,
  Card,
  Image,
  Button,
  Responsive,
  Icon,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import { graphql } from 'react-apollo';

import PageHeader from '../components/PageHeader';

import { POST_QUERY } from '../graphql/post';

const CardItem = ({ posts, color, perRow }) => (
  <Card.Group itemsPerRow={perRow}>
    {posts.map((post, index) => (
      <Card key={post.id} color={color[index]}>
        <div
          style={{
            display: 'block',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <span
            style={{
              bottom: 0,
              right: 0,
              borderBottom: '50px solid rgb(37, 186, 162)',
              borderLeft: '125px solid transparent',
              position: 'absolute',
              zIndex: 1,
              width: 0,
              height: 0,
              opacity: 0.8
            }}
          />
          <Image
            src="https://cdn.money.co.uk/images/ugc/348x174/woman-holding-card-on-computer.CDN5a86eb46.jpg"
            style={{ display: 'block', width: '100%' }}
          />
        </div>
        <Card.Content>
          <Card.Header>{post.title}</Card.Header>
          <Card.Description>
            MasterCard and Visa do not issue credit, debit or prepaid cards but
            they do provide an important service when you spend. Here is what
            these companies do and how you can decide which one to use.
          </Card.Description>
        </Card.Content>
      </Card>
    ))}
  </Card.Group>
);

const Desktop = ({ posts, color }) => (
  <Responsive style={{ marginTop: '20px' }} {...Responsive.onlyComputer}>
    <CardItem posts={posts} color={color} perRow={3} />
  </Responsive>
);

const Tablet = ({ posts, color }) => (
  <Responsive style={{ marginTop: '20px' }} {...Responsive.onlyTablet}>
    <CardItem posts={posts} color={color} perRow={2} />
  </Responsive>
);

const Mobile = ({ posts, color }) => (
  <Responsive style={{ marginTop: '20px' }} {...Responsive.onlyMobile}>
    <CardItem posts={posts} color={color} perRow={1} />
  </Responsive>
);

const ResponsiveContainer = ({ posts, color }) => (
  <div>
    <Desktop posts={posts} color={color} />
    <Tablet posts={posts} color={color} />
    <Mobile posts={posts} color={color} />
  </div>
);

class Article extends React.Component {
  state = {
    color: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      color: this.generateColors(nextProps.data.posts.length)
    });
  }

  generateColors = (length) => {
    const colorLists = [];
    let colorList = [];
    const colors = ['purple', 'orange', 'teal'];
    for (let i = 0; i < length / 3; i++) {
      for (let y = 0; y < 1; y++) {
        colors.push(colors.shift());
      }

      const string = colors.reduce((prev, number) => `${prev} ${number}`, '');
      colorLists.push(string.trim().split(' '));
    }
    colorList = `${colorLists[0]},${colorLists[1]},${colorLists[2]}`;
    return colorList.split(',');
  };

  render() {
    const { data: { loading, posts } } = this.props;
    const { color } = this.state;
    if (loading || !posts) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }
    return (
      <div>
        <PageHeader
          title="Våra artiklar"
          subTitle="Our guides show you the best ways to make your money go further and work harder. They contain all the latest financial information and are set out clearly to help you make smart decisions."
        >
          <Container style={{ paddingBottom: '20px' }}>
            <ResponsiveContainer posts={posts} color={color} />
            <div
              style={{
                paddingTop: '20px',
                textAlign: 'center'
              }}
            >
              <Button color="orange">
                Se fler artiklar <Icon name="caret down" />
              </Button>
            </div>
          </Container>
        </PageHeader>
      </div>
    );
  }
}

export default graphql(POST_QUERY)(Article);
