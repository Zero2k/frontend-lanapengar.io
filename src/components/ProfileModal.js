import React from 'react';
import { Form, Button, Modal, Select, Checkbox } from 'semantic-ui-react';

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
  { key: '5', text: '36 månader', value: '36' }
];

const ProfileModal = ({ open, onClose }) => (
  <Modal size="tiny" open={open} onClose={onClose}>
    <Modal.Content>
      <Form size="large">
        <Form.Input
          label="Belopp: 100000 kr "
          min={1000}
          max={100000}
          name="duration"
          onChange={this.handleChange}
          step={1000}
          type="range"
        />
        {/* <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Belopp"
            placeholder="Från 1 000 till 500 000"
          />
        </Form.Group> */}
        <Form.Group widths="equal">
          <Form.Field
            control={Select}
            label="Välj typ av lån du är intresserad av"
            options={options}
            placeholder="Typ av lån"
          />
          <Form.Field
            control={Select}
            label="Återbetalningstid"
            options={optionsMonth}
            placeholder="24 månader"
          />
        </Form.Group>
        <Form.Group inline>
          <label>Övrigt</label>
          <Form.Field
            control={Checkbox}
            label="Betalningsnmärkning"
            value="1"
            checked
            onChange={this.handleChange}
          />
          <Form.Field
            control={Checkbox}
            label="Utan UC"
            value="2"
            onChange={this.handleChange}
          />
          <Form.Field
            control={Checkbox}
            label="Första lånet"
            value="3"
            onChange={this.handleChange}
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
        content="Spara"
      />
    </Modal.Actions>
  </Modal>
);

export default ProfileModal;
