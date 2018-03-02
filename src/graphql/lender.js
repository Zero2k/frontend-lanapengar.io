import gql from 'graphql-tag';

export const singleLenderQuery = gql`
  query($id: Int!) {
    lenderById(id: $id) {
      success
      data {
        id
        name
        logo
        description
        information
        url
        loan_types
        amount_min
        amount_max
        interest_min
        interest_max
        term_min
        term_max
        fee
        require_annual_income
        min_age
        max_age
        credit_rating
        security
        permanent_resident
      }
    }
  }
`;
