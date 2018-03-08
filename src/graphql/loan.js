import gql from 'graphql-tag';

export const addLoanMutation = gql`
  mutation($amount: Int!, $lenderId: Int!) {
    addLoan(amount: $amount, lenderId: $lenderId)
  }
`;

export const editLoanMutation = gql`
  mutation($id: Int!, $amount: Int!, $loan_type: String, $lenderId: Int!) {
    updateLoan(
      id: $id
      amount: $amount
      loan_type: $loan_type
      lenderId: $lenderId
    )
  }
`;

export const deleteLoanMutation = gql`
  mutation($id: Int!) {
    deleteLoan(id: $id)
  }
`;
