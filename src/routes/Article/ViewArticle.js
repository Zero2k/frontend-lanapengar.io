import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Grid,
  Accordion,
  Dimmer,
  Image,
  Loader
} from 'semantic-ui-react';
import { graphql, compose } from 'react-apollo';
import { SLUG_POST_QUERY, RELATED_POST_QUERY } from '../../graphql/post';

import PageHeader from '../../components/PageHeader';
import RelatedPost from '../../components/RelatedPost';

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

const ViewArticle = ({
  slugPostQuery: { loading, postBySlug: post },
  relatedPostQuery: { relatedPosts }
}) => {
  if (loading || !post || !relatedPosts) {
    return (
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    );
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
                <Text dangerouslySetInnerHTML={{ __html: post.html }} />
                <Title>You may also like:</Title>
                <RelatedPost size="16px" list={relatedPosts} />
              </Grid.Column>
              <Grid.Column width={4}>
                <Accordion
                  styled
                  defaultActiveIndex={0}
                  panels={[
                    {
                      title: 'Fler artiklar',
                      content: [<RelatedPost size="13px" list={relatedPosts} />]
                    },
                    {
                      title: 'Jämför',
                      content: [
                        'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
                        'guest in many households across the world.'
                      ].join(' ')
                    }
                  ]}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </PageHeader>
    </div>
  );
};

export default compose(
  graphql(SLUG_POST_QUERY, {
    name: 'slugPostQuery',
    options: (props) => ({
      fetchPolicy: 'network-only',
      variables: {
        slug: props.match.params.slug
      }
    })
  }),
  graphql(RELATED_POST_QUERY, {
    name: 'relatedPostQuery',
    options: (props) => ({
      fetchPolicy: 'network-only',
      variables: {
        keyword: props.slugPostQuery.loading
          ? ''
          : props.slugPostQuery.postBySlug.keyword
      }
    })
  })
)(ViewArticle);
