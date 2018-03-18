import React from 'react';
import { Container, Tab, Dimmer, Loader } from 'semantic-ui-react';
import { graphql, compose } from 'react-apollo';
import {
  SINGLE_LENDER_QUERY,
  EDIT_LENDER_MUTATION
} from '../../../graphql/lender';
import {
  ADD_LOAN_MUTATION,
  EDIT_LOAN_MUTATION,
  DELETE_LOAN_MUTATION
} from '../../../graphql/loan';

import FormLender from '../../../components/Form/FormLender';
import AdminNavbar from '../../../components/Navbar/AdminNavbar';
import Table from '../../../components/LoanTable/Table';

class EditLender extends React.Component {
  submitEdit = async (values) => {
    try {
      await this.props.editLenderMutation({
        variables: {
          id: values.id,
          ...values
        }
        /* update: (store, { data: { updateProduct } }) => {
          const data = store.readQuery({ query: singleLenderQuery });
          data.products = data.products.map(x => (x.id === updateProduct.id ? updateProduct : x));
          store.writeQuery({ query: singleLenderQuery, data });
        } */
      });
    } catch (err) {
      console.log(err);
      return;
    }

    this.props.history.push('/dashboard/lender');
  };

  submitLoan = async (values) => {
    if (!values.id) {
      try {
        await this.props.addLoanMutation({
          variables: {
            ...values
          },
          update: (store, { data: { addLoan } }) => {
            // Read the data from our cache for this query.
            const data = store.readQuery({
              query: SINGLE_LENDER_QUERY,
              variables: { id: this.props.match.params.id }
            });
            // Add our comment from the mutation to the end.
            data.lenderById.loans.push(addLoan);
            // Write our data back to the cache.
            store.writeQuery({
              query: SINGLE_LENDER_QUERY,
              data,
              variables: { ...values }
            });
          }
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await this.props.editLoanMutation({
          variables: {
            ...values
          }
          /* update: (store, { data: { updateLoan } }) => {
            const data = store.readQuery({ query: updateLoan });
            data.updateLoan = data.updateLoan.map((x) =>
              (x.id === updateLoan.id ? { __typename: 'Loan', updateLoan } : x));
            store.writeQuery({ query: updateLoan, data });
          } */
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  deleteLoan = async (values) => {
    if (values.id) {
      try {
        await this.props.deleteLoanMutation({
          variables: {
            id: values.id
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  render() {
    const { singleLenderQuery: { loading, lenderById } } = this.props;

    if (loading || !lenderById) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }

    const { loans } = lenderById;

    return (
      <div>
        <AdminNavbar />
        <Container style={{ paddingTop: '20px' }}>
          <h3>Edit - {lenderById.name}</h3>
          <Tab
            menu={{ pointing: true }}
            panes={[
              {
                menuItem: 'Edit',
                render: () => (
                  <Tab.Pane attached={false}>
                    <FormLender data={lenderById} submit={this.submitEdit} />
                  </Tab.Pane>
                )
              },
              {
                menuItem: 'Loans',
                render: () => (
                  <Tab.Pane attached={false}>
                    <Table
                      loans={loans}
                      submitLoan={this.submitLoan}
                      deleteLoan={this.deleteLoan}
                    />
                  </Tab.Pane>
                )
              }
            ]}
          />
        </Container>
      </div>
    );
  }
}

export default compose(
  graphql(EDIT_LENDER_MUTATION, {
    name: 'editLenderMutation',
    options: { fetchPolicy: 'no-cache' }
  }),
  graphql(SINGLE_LENDER_QUERY, {
    name: 'singleLenderQuery',
    options: (props) => ({
      fetchPolicy: 'network-only',
      variables: {
        id: props.match.params.id
      }
    })
  }),
  graphql(ADD_LOAN_MUTATION, {
    name: 'addLoanMutation',
    options: (props) => ({
      variables: {
        fetchPolicy: 'no-cache',
        lenderId: props.match.params.id
      }
    })
  }),
  graphql(EDIT_LOAN_MUTATION, {
    name: 'editLoanMutation',
    options: (props) => ({
      variables: {
        fetchPolicy: 'no-cache',
        lenderId: props.match.params.id
      }
    })
  }),
  graphql(DELETE_LOAN_MUTATION, {
    name: 'deleteLoanMutation',
    options: {
      fetchPolicy: 'no-cache'
    }
  })
)(EditLender);
