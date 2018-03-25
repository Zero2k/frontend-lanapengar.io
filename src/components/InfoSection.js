import React from 'react';
import { List, Header, Container, Grid } from 'semantic-ui-react';

const Info = ({ content }) => (
  <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
    <Grid stackable>
      <Grid.Column width={12}>
        {!content ? (
          <div>No Content</div>
        ) : (
          <div>
            <Header color="teal" as="h2">
              {content.title}
            </Header>
            <div dangerouslySetInnerHTML={{ __html: content.html }} />
          </div>
        )}
      </Grid.Column>
      <Grid.Column width={4}>
        <Header as="h3" dividing>
          Relaterade artiklar
        </Header>
        <List divided relaxed>
          <List.Item>
            <List.Content>
              <List.Header as="a">
                4 ways to borrow a small amount of money
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header as="a">
                What happens if you are unable to pay back your loan?
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header as="a">How to get a guarantor loan</List.Header>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  </Container>
);

export default Info;
