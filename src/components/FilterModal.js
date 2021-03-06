import React from 'react';
import { Form, Button, Modal, Select } from 'semantic-ui-react';
/* import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; */

/* import { addProfile } from '../reducers/profile'; */

const options = [
  { key: '1', text: 'Privatlån', value: 'privatlan' },
  { key: '2', text: 'Snabblån', value: 'snabblan' },
  { key: '3', text: 'Billån', value: 'billan' }
];

const optionsMonth = [
  { key: '1', text: '1 månad', value: '1' },
  { key: '2', text: '5 månader', value: '5' },
  { key: '3', text: '12 månader', value: '12' },
  { key: '4', text: '24 månader', value: '24' },
  { key: '5', text: '36 månader', value: '36' },
  { key: '6', text: '48 månader', value: '48' },
  { key: '7', text: '60 månader', value: '60' }
];

const defaultState = {
  values: {
    loanAmount: 1000,
    type: '',
    term: '12'
  },
  isSet: false
};

class FilterModal extends React.Component {
  /* state = this.props.profile.isSet ? this.props.profile : defaultState; */
  state = defaultState;

  submit = async () => {
    const { onClose } = this.props;
    /* await this.setState({ isSet: true });
    await this.props.addProfileAction(this.state); */
    this.props.data(this.state);
    onClose();
  };

  handleChange = (e, { name, value }) =>
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value
      },
      isSet: false
    }));

  numberWithSpaces = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  render() {
    const { open, onClose } = this.props;
    const { values: { loanAmount, type, term } } = this.state;

    return (
      <Modal size="tiny" open={open} onClose={onClose}>
        <Modal.Content>
          <Form size="large">
            <Form.Input
              label={`Belopp: ${this.numberWithSpaces(loanAmount)} kr `}
              min={1000}
              max={100000}
              name="loanAmount"
              onChange={this.handleChange}
              step={1000}
              type="range"
              value={loanAmount}
            />
            <Form.Group widths="equal">
              <Form.Field
                control={Select}
                label="Välj typ av lån du är intresserad av?"
                options={options}
                placeholder="Typ av lån"
                name="type"
                onChange={this.handleChange}
                value={type}
              />
              <Form.Field
                control={Select}
                label="Återbetalningstid"
                options={optionsMonth}
                placeholder="24 månader"
                name="term"
                onChange={this.handleChange}
                value={term}
              />
            </Form.Group>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={onClose}>Avbryt</Button>
          <Button
            color="teal"
            labelPosition="right"
            icon="checkmark"
            content="Sök"
            onClick={this.submit}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

/* export default connect(
  (state) => ({ profile: state.profile }),
  (dispatch) => bindActionCreators({ addProfileAction: addProfile }, dispatch)
)(FilterModal); */

export default FilterModal;
