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
import { graphql } from 'react-apollo';
import { SLUG_POST_QUERY } from '../../graphql/post';
import './Style.css';

import PageHeader from '../../components/PageHeader';

const Text = styled.div`
  font-size: 16px;
`;

const panels = [
  {
    title: 'Fler artiklar',
    content: [
      'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome',
      'guest in many households across the world.'
    ].join(' ')
  },
  {
    title: 'Jämför',
    content: [
      'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog',
      'that they find to be compatible with their own lifestyle and desires from a companion.'
    ].join(' ')
  }
];

const ViewArticle = ({ slugPostQuery: { loading, postBySlug: post } }) => {
  if (loading || !post) {
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
              </Grid.Column>
              <Grid.Column width={4}>
                <Accordion styled defaultActiveIndex={0} panels={panels} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </PageHeader>
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
