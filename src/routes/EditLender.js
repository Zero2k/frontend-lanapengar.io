import React from 'react';
import { Container, Menu, Input, Tab, Dimmer, Loader } from 'semantic-ui-react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { singleLenderQuery } from '../graphql/lender';

import FormLender from '../components/Form/FormLender';

class EditLender extends React.Component {
  submit = async (values) => {
    console.log(values);

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

    this.props.history.push('/dashboard');
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

    const { data } = lenderById;

    return (
      <div>
        <Menu pointing>
          <Container>
            <Menu.Item name="Start" onClick={this.handleItemClick} />
            <Menu.Item name="Lenders" />
            <Menu.Item name="Posts" />
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item name="logout" onClick={this.handleItemClick} />
            </Menu.Menu>
          </Container>
        </Menu>
        <Container style={{ paddingTop: '20px' }}>
          <h3>Edit - {data.name}</h3>
          <Tab
            menu={{ pointing: true }}
            panes={[
              {
                menuItem: 'Edit',
                render: () => (
                  <Tab.Pane attached={false}>
                    <FormLender data={data} submit={this.submit} />
                  </Tab.Pane>
                )
              },
              {
                menuItem: 'Loans',
                render: () => (
                  <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
                )
              }
            ]}
          />
        </Container>
      </div>
    );
  }
}

const editLenderMutation = gql`
  mutation(
    $id: Int!
    $name: String
    $logo: String
    $description: String
    $information: String
    $url: String
    $loan_types: String
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
    updateLender(
      id: $id
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

export default compose(
  graphql(editLenderMutation, {
    name: 'editLenderMutation',
    options: { fetchPolicy: 'no-cache' }
  }),
  graphql(singleLenderQuery, {
    name: 'singleLenderQuery',
    options: props => ({
      fetchPolicy: 'network-only',
      variables: {
        id: props.match.params.id
      }
    })
  })
)(EditLender);
