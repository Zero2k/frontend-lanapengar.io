import React from 'react';
import { Container } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';
import AdminNavbar from '../../components/Navbar/AdminNavbar';

/* class Dashboard extends React.Component {
  state = {
    openModal: false
  };

  toggleOpenModal = () => {
    this.setState(state => ({ openModal: !state.openModal }));
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
                    onClick={this.toggleOpenModal}
                  >
                    <Icon name="plus" /> Add lender
                  </Button>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
        <NewLenderModal
          open={this.state.openModal}
          onClose={this.toggleOpenModal}
        />
      </div>
    );
  }
} */

const Dashboard = () => (
  <div>
    <AdminNavbar />
    <Container style={{ paddingTop: '20px' }}>
      <p>Welcome to dashboard</p>
    </Container>
  </div>
);

export default Dashboard;
