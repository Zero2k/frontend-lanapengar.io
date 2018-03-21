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
import gql from 'graphql-tag';
import AdminNavbar from '../../../components/Navbar/AdminNavbar';

class Section extends React.Component {
  state = {
    hasMoreItems: true
  };
  render() {
    const { data: { loading, sections } } = this.props;
    if (loading || !sections) {
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
          <Header size="medium">All sections</Header>
          <Table celled compact definition>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Page</Table.HeaderCell>
                <Table.HeaderCell>Content</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {sections.map((section) => (
                <Table.Row key={section.id}>
                  <Table.Cell width={1}>{section.id}</Table.Cell>
                  <Table.Cell width={2}>{section.title}</Table.Cell>
                  <Table.Cell width={2}>{section.page}</Table.Cell>
                  <Table.Cell>{section.content}</Table.Cell>
                  <Table.Cell width={1}>
                    <Button.Group basic size="small">
                      <Button
                        as={Link}
                        to={`/dashboard/section/edit/${section.id}`}
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
                            offset: sections.length
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
                    to="/dashboard/section/new"
                  >
                    <Icon name="plus" /> Add section
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

const sectionsQuery = gql`
  query {
    sections {
      id
      title
      page
      content
    }
  }
`;

export default graphql(sectionsQuery, {
  options: () => ({
    fetchPolicy: 'network-only'
  })
})(Section);
