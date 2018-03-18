import gql from 'graphql-tag';

export const singleLenderQuery = gql`
  query($id: Int!) {
    lenderById(id: $id) {
      __typename
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
      loans {
        __typename
        id
        amount
        loan_type
      }
    }
  }
`;

export const lendersQuery = gql`
  query($amount: Int, $term: Int, $offset: Int) {
    lendersFilter(amount: $amount, term: $term, offset: $offset) {
      id
      name
      url
      loan_types
      fee
      amount_max
      amount_min
      interest_max
      interest_min
      term_max
      term_min
      min_age
      permanent_resident
      security
      credit_rating
      require_annual_income
    }
  }
`;

export const editLenderMutation = gql`
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
