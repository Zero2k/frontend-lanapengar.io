import React from 'react';
import {
  Button,
  Icon,
  Table,
  Container,
  Header,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { POST_QUERY } from '../../../graphql/post';

import AdminNavbar from '../../../components/Navbar/AdminNavbar';

class Post extends React.Component {
  state = {
    hasMoreItems: true
  };
  render() {
    const { data: { loading, posts } } = this.props;
    if (loading || !posts) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }

    return (
      <div>
        <AdminNavbar />
        <Container style={{ paddingTop: '20px' }}>
          <Header size="medium">All posts</Header>
          <Table celled compact definition>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Slug</Table.HeaderCell>
                <Table.HeaderCell>category</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {posts.map((post) => (
                <Table.Row key={post.id}>
                  <Table.Cell width={1}>{post.id}</Table.Cell>
                  <Table.Cell width={4}>{post.title}</Table.Cell>
                  <Table.Cell width={4}>{post.slug}</Table.Cell>
                  <Table.Cell width={3}>{post.category}</Table.Cell>
                  <Table.Cell width={1}>
                    <Button.Group basic size="small">
                      <Button
                        as={Link}
                        to={`/dashboard/post/edit/${post.id}`}
                        icon="edit"
                      />
                      <Button icon="remove" />
                    </Button.Group>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>

            <Table.Footer fullWidth>
              <Table.Row>
                <Table.HeaderCell colSpan="2">
                  {this.state.hasMoreItems && (
                    <Button
                      onClick={() => {
                        this.props.data.fetchMore({
                          variables: {
                            offset: posts.length
                          },
                          updateQuery: (prev, { fetchMoreResult }) => {
                            if (!fetchMoreResult) {
                              return prev;
                            }

                            if (fetchMoreResult.sections.length < 20) {
                              this.setState({ hasMoreItems: false });
                            }

                            const res = {
                              ...prev,
                              sections: [
                                ...prev.sections,
                                ...fetchMoreResult.sections
                              ]
                            };
                            return res;
                          }
                        });
                      }}
                    >
                      Load more
                    </Button>
                  )}
                </Table.HeaderCell>
                <Table.HeaderCell colSpan="6">
                  <Button
                    floated="right"
                    icon
                    labelPosition="left"
                    primary
                    size="small"
                    as={Link}
                    to="/dashboard/post/new"
                  >
                    <Icon name="plus" /> Add post
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
      </div>
    );
  }
}

export default graphql(POST_QUERY, {
  options: () => ({
    fetchPolicy: 'network-only'
  })
})(Post);
