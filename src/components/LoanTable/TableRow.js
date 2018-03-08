import React from 'react';
import { Table, Button } from 'semantic-ui-react';

class TableRow extends React.PureComponent {
  onDeleteClick = () => {
    this.props.onDelete(this.props.loan);
  };

  onEditClick = () => {
    this.props.onEdit(this.props.loan);
  };

  render() {
    return (
      <Table.Row>
        <Table.Cell width={3}>{this.props.loan.amount}</Table.Cell>
        <Table.Cell width={3}>{this.props.loan.loan_type}</Table.Cell>
        <Table.Cell width={3}>Test</Table.Cell>
        <Table.Cell width={3}>Test</Table.Cell>
        <Table.Cell width={1}>
          <Button.Group basic size="small">
            <Button onClick={this.onEditClick} icon="edit" />
            <Button onClick={this.onDeleteClick} icon="remove" />
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default TableRow;
