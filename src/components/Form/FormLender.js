import React from 'react';
import { Input, Form, Checkbox, Button, Dropdown } from 'semantic-ui-react';

const defaultState = {
  values: {
    name: '',
    logo: '',
    url: '',
    loan_types: '',
    description: '',
    information: '',
    amount_min: 0,
    amount_max: 0,
    intrest_min: 0,
    intrest_max: 0,
    term_min: 0,
    term_max: 0,
    fee_min: 0,
    fee_max: 0,
    require_annual_income: false,
    min_age: 0,
    max_age: 0,
    credit_rating: '',
    permanent_resident: true,
    security: false
  }
};

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

class CustomForm extends React.Component {
  constructor(props) {
    super(props);
    const { data = {} } = props;
    this.state = {
      values: {
        ...defaultState.values,
        ...data
      }
    };
  }

  onChangeText = (e, { name, value }) =>
    this.setState({ values: { ...this.state.values, [name]: value } });

  submit = async () => {};

  render() {
    const { values } = this.state;
    console.log(this.props.data);

    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              defaultValue={values.name}
              onChange={this.onChangeText}
              name="name"
              label="Name"
              placeholder="Name"
            />
            <Form.Field
              control={Input}
              defaultValue={values.logo}
              onChange={this.onChangeText}
              name="logo"
              label="Logo"
              placeholder="Logo"
            />
            <Form.Field
              control={Input}
              defaultValue={values.url}
              onChange={this.onChangeText}
              name="url"
              label="Url"
              placeholder="Url"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              defaultValue={values.amount_min}
              onChange={this.onChangeText}
              name="amount_min"
              label="Min amount"
              placeholder="Min amount"
            />
            <Form.Field
              control={Input}
              defaultValue={values.amount_max}
              onChange={this.onChangeText}
              name="amount_max"
              label="Max amount"
              placeholder="Max amount"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              defaultValue={values.intrest_min}
              onChange={this.onChangeText}
              name="intrest_min"
              label="Min intrest"
              placeholder="Min intrest"
            />
            <Form.Field
              control={Input}
              defaultValue={values.intrest_max}
              onChange={this.onChangeText}
              name="intrest_max"
              label="Max intrest"
              placeholder="Max intrest"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              defaultValue={values.min_age}
              onChange={this.onChangeText}
              name="min_age"
              label="Min age"
              placeholder="Min age"
            />
            <Form.Field
              control={Input}
              defaultValue={values.max_age}
              onChange={this.onChangeText}
              name="max_age"
              label="Max age"
              placeholder="Max age"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              defaultValue={values.credit_rating}
              onChange={this.onChangeText}
              name="credit_rating"
              label="Credit rating"
              placeholder="Credit rating"
            />
          </Form.Group>
          <Form.Group>
            <Form.Field
              control={Dropdown}
              onChange={this.onChangeText}
              placeholder="Select loan"
              closeOnBlur
              selection
              label="Select loan"
              defaultValue={values.loan_types}
              options={loanTypes}
              name="loan_types"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              defaultValue={values.description}
              onChange={this.onChangeText}
              name="description"
              label="Description"
              placeholder="Description"
            />
          </Form.Group>
          <p>
            <b>Representativt exempel:</b> Den representativa räntan är 2,8%
            (fast) så om du lånar 75.000 över 5 år med en ränta på 2,8%, så
            kommer du att betala tillbaka 1339 kr per månad och totalt 80.038
            kr. En uppläggningsavgift på 200 kr tillkommer. Så den total kostnad
            blir 80.238 kr
          </p>
          <Form.Group inline>
            <label>Requirements</label>
            <Form.Field
              control={Checkbox}
              checked={values.require_annual_income}
              label="Income"
              value="require_annual_income"
              onChange={this.onChangeText}
            />
            <Form.Field
              control={Checkbox}
              label="Resident"
              value="2"
              onChange={this.handleChange}
            />
            <Form.Field
              control={Checkbox}
              label="Security"
              value="3"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field control={Button}>Save</Form.Field>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
