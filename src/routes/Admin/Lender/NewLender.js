import React from 'react';
import { Container, Tab } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FormLender from '../../../components/Form/FormLender';
import AdminNavbar from '../../../components/Navbar/AdminNavbar';

class NewLender extends React.Component {
  submit = async (values) => {
    try {
      await this.props.newLenderMutation({
        variables: {
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

  render() {
    return (
      <div>
        <AdminNavbar />
        <Container style={{ paddingTop: '20px' }}>
          <h3>New Lender</h3>
          <Tab
            menu={{ pointing: true }}
            panes={[
              {
                menuItem: 'New',
                render: () => (
                  <Tab.Pane attached={false}>
                    <FormLender submit={this.submit} />
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

const newLenderMutation = gql`
  mutation(
    $name: String!
    $logo: String
    $description: String
    $information: String
    $url: String
    $loan_types: String!
    $amount_min: Int
    $amount_max: Int
    $interest_min: Float
    $interest_max: Float
    $term_min: Int
    $term_max: Int
    $fee: Int
    $require_annual_income: Boolean
    $min_age: Int
    $max_age: Int
    $credit_rating: Boolean
    $security: Boolean
    $permanent_resident: Boolean
  ) {
    createLender(
      name: $name
      logo: $logo
      description: $description
      information: $information
      url: $url
      loan_types: $loan_types
      amount_min: $amount_min
      amount_max: $amount_max
      interest_min: $interest_min
      interest_max: $interest_max
      term_min: $term_min
      term_max: $term_max
      fee: $fee
      require_annual_income: $require_annual_income
      min_age: $min_age
      max_age: $max_age
      credit_rating: $credit_rating
      security: $security
      permanent_resident: $permanent_resident
    )
  }
`;

export default graphql(newLenderMutation, {
  name: 'newLenderMutation',
  options: { fetchPolicy: 'no-cache' }
})(NewLender);
