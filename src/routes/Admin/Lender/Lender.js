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

class Lender extends React.Component {
  state = {
    hasMoreItems: true
  };
  render() {
    const { lendersQuery: { loading, lenders } } = this.props;
    if (loading || !lenders) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }
    const { data } = lenders;

    return (
      <div>
        <AdminNavbar />
        <Container style={{ paddingTop: '20px' }}>
          <Header size="medium">All lenders</Header>
          <Table celled compact definition>
            <Table.Header fullWidth>
              <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Loan type</Table.HeaderCell>
                <Table.HeaderCell>Min amount</Table.HeaderCell>
                <Table.HeaderCell>Max amount</Table.HeaderCell>
                <Table.HeaderCell>Url</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {data.map((lender) => (
                <Table.Row key={lender.id}>
                  <Table.Cell width={2}>{lender.name}</Table.Cell>
                  <Table.Cell width={3}>{lender.loan_types}</Table.Cell>
                  <Table.Cell width={2}>{lender.amount_min}</Table.Cell>
                  <Table.Cell width={2}>{lender.amount_max}</Table.Cell>
                  <Table.Cell>{lender.url}</Table.Cell>
                  <Table.Cell width={1}>
                    <Button.Group basic size="small">
                      <Button
                        as={Link}
                        to={`/dashboard/lender/edit/${lender.id}`}
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
                <Table.HeaderCell colSpan="3">
                  {this.state.hasMoreItems && (
                    <Button
                      onClick={() => {
                        this.props.lendersQuery.fetchMore({
                          variables: {
                            offset: this.props.lendersQuery.lenders.data.length
                          },
                          updateQuery: (
                            previousResult,
                            { fetchMoreResult }
                          ) => {
                            if (!fetchMoreResult) {
                              return previousResult;
                            }

                            if (fetchMoreResult.lenders.data.length < 10) {
                              this.setState({ hasMoreItems: false });
                            }

                            return {
                              ...previousResult,
                              data: [
                                ...previousResult.lenders.data,
                                ...fetchMoreResult.lenders.data
                              ]
                            };
                          }
                        });
                      }}
                    >
                      Load more
                    </Button>
                  )}
                </Table.HeaderCell>
                <Table.HeaderCell colSpan="4">
                  <Button
                    floated="right"
                    icon
                    labelPosition="left"
                    primary
                    size="small"
                    as={Link}
                    to="/dashboard/lender/new"
                  >
                    <Icon name="plus" /> Add lender
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

/* const Dashboard = ({ lendersQuery: { loading, lenders } }) => {
  if (loading || !lenders) {
    return (
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  const { data: list } = lenders;

  return (
    <div>
      <AdminNavbar />
      <Container style={{ paddingTop: '20px' }}>
        <Header size="medium">All lenders</Header>
        <Table celled compact definition>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Loan type</Table.HeaderCell>
              <Table.HeaderCell>Min amount</Table.HeaderCell>
              <Table.HeaderCell>Max amount</Table.HeaderCell>
              <Table.HeaderCell>Url</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {list.map(lender => (
              <Table.Row key={lender.id}>
                <Table.Cell width={2}>{lender.name}</Table.Cell>
                <Table.Cell width={3}>{lender.loan_types}</Table.Cell>
                <Table.Cell width={2}>{lender.amount_min}</Table.Cell>
                <Table.Cell width={2}>{lender.amount_max}</Table.Cell>
                <Table.Cell>{lender.url}</Table.Cell>
                <Table.Cell width={1}>
                  <Button.Group basic size="small">
                    <Button
                      as={Link}
                      to={`/dashboard/lender/edit/${lender.id}`}
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
              <Table.HeaderCell colSpan="3">
                <Menu pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="left chevron" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="right chevron" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
              <Table.HeaderCell colSpan="4">
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                  as={Link}
                  to="/dashboard/lender/new"
                >
                  <Icon name="plus" /> Add lender
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
      <NewLenderModal open={false} />
    </div>
  );
}; */

const lendersQuery = gql`
  query($offset: Int!) {
    lenders(offset: $offset) {
      success
      data {
        id
        name
        loan_types
        amount_max
        amount_min
        url
      }
    }
  }
`;

export default graphql(lendersQuery, {
  name: 'lendersQuery',
  options: (props) => ({
    fetchPolicy: 'network-only',
    variables: {
      offset: 0
    }
  })
})(Lender);
