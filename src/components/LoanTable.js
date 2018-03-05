import React from 'react';
import { Table, Button, Form, Dropdown } from 'semantic-ui-react';

const loanTypes = [
  {
    key: 1,
    id: 1,
    name: 'privatlan',
    text: 'Privatlån',
    value: 'privatlan'
  },
  {
    key: 2,
    id: 2,
    name: 'snabblan',
    text: 'Snabblån',
    value: 'snabblan'
  },
  {
    key: 3,
    id: 3,
    name: 'billan',
    text: 'Billån',
    value: 'billan'
  }
];

class LoanTable extends React.Component {
  state = { id: '', amount: 0, loan_type: '' };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  onItemClick = (item, e) => {
    const { id, amount, loan_type } = item;
    this.setState({ id, amount, loan_type });
  };

  handleSubmit = () => {
    this.props.submitLoan(this.state);
    /* const { id, amount, loan_type } = this.state; */
    /* if (!id) {
      console.log('New loan');
    } else {
      console.log('Edit loan');
      this.props.submitLoan(this.state, false);
    } */
  };

  render() {
    const { amount, loan_type } = this.state;
    const { loans } = this.props;

    return (
      <div>
        <Table celled compact definition>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Loan type</Table.HeaderCell>
              <Table.HeaderCell>Min amount</Table.HeaderCell>
              <Table.HeaderCell>Min amount</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {loans.map((loan) => (
              <Table.Row key={loan.id}>
                <Table.Cell width={3}>{loan.amount}</Table.Cell>
                <Table.Cell width={3}>{loan.loan_type}</Table.Cell>
                <Table.Cell width={3}>Test</Table.Cell>
                <Table.Cell width={3}>Test</Table.Cell>
                <Table.Cell width={1}>
                  <Button.Group basic size="small">
                    <Button
                      onClick={this.onItemClick.bind(this, loan)}
                      icon="edit"
                    />
                    <Button icon="remove" />
                  </Button.Group>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths={2}>
            <Form.Input
              placeholder="Amount"
              name="amount"
              value={amount}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Dropdown}
              onChange={this.handleChange}
              placeholder="Select type of loan"
              closeOnBlur
              selection
              value={loan_type}
              options={loanTypes}
              name="loan_type"
            />
          </Form.Group>
          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}

export default LoanTable;
