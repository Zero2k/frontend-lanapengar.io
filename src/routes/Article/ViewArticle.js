import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import { SLUG_POST_QUERY } from '../../graphql/post';

import PageHeader from '../../components/PageHeader';
import RelatedPost from '../../components/RelatedPost';
import Footer from '../../components/Footer';

const overlayStyle = {
  float: 'left',
  margin: '0em 2em 1em 0em'
};

const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease'
};

const Text = styled.div`
  font-size: 16px;
`;

const Title = styled.h3`
  font-family: Varela Round;
  font-weight: 400;
  font-size: 20px;
  color: #00b5ad;
  border-bottom: 1px solid #dededf;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;

const ViewArticle = ({ slugPostQuery: { loading, postBySlug: post } }) => {
  if (loading) {
    return (
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  if (!post) {
    return <h1>No post exists</h1>;
  }

  return (
    <div>
      <PageHeader title={post.title} subTitle={post.description}>
        <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <Grid divided columns={2} stackable>
            <Grid.Row>
              <Grid.Column width={12}>
                <Image
                  src="https://cdn.money.co.uk/images/ugc/348x174/woman-holding-card-on-computer.CDN5a86eb46.jpg"
                  style={{
                    display: 'block',
                    width: '100%',
                    paddingBottom: '20px'
                  }}
                />
                <div style={overlayStyle}>
                  <Menu icon="labeled" style={overlayMenuStyle} vertical>
                    <a
                      target="blank"
                      rel="nofollow"
                      href={`https://twitter.com/intent/tweet?status=${
                        post.title
                      }+http://localhost:3000/artikel/${post.category}/${
                        post.slug
                      }&title=${post.title}`}
                    >
                      <Menu.Item>
                        <Icon name="twitter" style={{ color: '#55acee' }} />
                        Tweet
                      </Menu.Item>
                    </a>
                    <a
                      target="blank"
                      rel="nofollow"
                      href={`https://www.facebook.com/share.php?u=http://localhost:3000/artikel/${
                        post.category
                      }/${post.slug}&title=${post.title}`}
                    >
                      <Menu.Item>
                        <Icon name="facebook" style={{ color: '#3b5998' }} />
                        Share
                      </Menu.Item>
                    </a>
                    <a
                      target="blank"
                      rel="nofollow"
                      href={`mailto:?subject=${
                        post.title
                      }&amp;body=Check out this: http://localhost:3000/artikel/${
                        post.category
                      }/${post.slug}}`}
                    >
                      <Menu.Item>
                        <Icon name="mail" style={{ color: 'rgba(0,0,0,.6)' }} />
                        Email
                      </Menu.Item>
                    </a>
                  </Menu>
                </div>
                <Text dangerouslySetInnerHTML={{ __html: post.html }} />
                <Title>You may also like:</Title>
                <RelatedPost size="16px" list={post.relatedPosts} />
              </Grid.Column>
              <Grid.Column width={4}>
                <Segment>
                  <Header as="h4">Fler artiklar</Header>
                  <RelatedPost size="13px" list={post.relatedPosts} hideIcon />
                </Segment>
                <Segment>
                  <Header as="h4">Jämför</Header>
                  <List relaxed="very" divided>
                    <List.Item as="a">Privatlån</List.Item>
                    <List.Item as="a">Snabblån</List.Item>
                    <List.Item as="a">Billån</List.Item>
                  </List>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </PageHeader>
      <Footer />
    </div>
  );
};

export default graphql(SLUG_POST_QUERY, {
  name: 'slugPostQuery',
  options: (props) => ({
    fetchPolicy: 'network-only',
    variables: {
      slug: props.match.params.slug
    }
  })
})(ViewArticle);
