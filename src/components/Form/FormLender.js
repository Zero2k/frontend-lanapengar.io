import React from 'react';
import { Input, Form, Checkbox, Button, Dropdown } from 'semantic-ui-react';
import TextArea from 'semantic-ui-react/dist/commonjs/addons/TextArea/TextArea';

const defaultState = {
  name: '',
  logo: '',
  url: '',
  loan_types: '',
  description: '',
  information: '',
  amount_min: 0,
  amount_max: 0,
  interest_min: 0,
  interest_max: 0,
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
      ...defaultState,
      ...data
    };
  }

  onChangeText = (e, { name, value }) =>
    this.setState({ ...this.state, [name]: value });

  submit = async () => {};

  handleCheckBox = (e, { name }) => {
    this.setState(prevState => ({
      ...this.state,
      [name]: !prevState[name]
    }));
  };

  render() {
    const {
      name,
      logo,
      url,
      amount_min,
      amount_max,
      interest_min,
      interest_max,
      term_min,
      term_max,
      min_age,
      max_age,
      credit_rating,
      loan_types,
      description,
      information,
      require_annual_income,
      permanent_resident,
      security
    } = this.state;

    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              defaultValue={name}
              onChange={this.onChangeText}
              type="text"
              name="name"
              label="Name"
              placeholder="Name"
            />
            <Form.Field
              control={Input}
              defaultValue={logo}
              onChange={this.onChangeText}
              type="text"
              name="logo"
              label="Logo"
              placeholder="Logo"
            />
            <Form.Field
              control={Input}
              defaultValue={url}
              onChange={this.onChangeText}
              type="text"
              name="url"
              label="Url"
              placeholder="Url"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              defaultValue={amount_min}
              type="number"
              onChange={this.onChangeText}
              name="amount_min"
              label="Min amount"
              placeholder="Min amount"
            />
            <Form.Field
              control={Input}
              defaultValue={amount_max}
              type="number"
              onChange={this.onChangeText}
              name="amount_max"
              label="Max amount"
              placeholder="Max amount"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              defaultValue={interest_min}
              type="number"
              onChange={this.onChangeText}
              name="interest_min"
              label="Min intrest"
              placeholder="Min intrest"
            />
            <Form.Field
              control={Input}
              defaultValue={interest_max}
              type="number"
              onChange={this.onChangeText}
              name="interest_max"
              label="Max intrest"
              placeholder="Max intrest"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              defaultValue={term_min}
              type="number"
              onChange={this.onChangeText}
              name="term_min"
              label="Min term"
              placeholder="Min term"
            />
            <Form.Field
              control={Input}
              defaultValue={term_max}
              type="number"
              onChange={this.onChangeText}
              name="term_max"
              label="Max term"
              placeholder="Max term"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              defaultValue={min_age}
              type="number"
              onChange={this.onChangeText}
              name="min_age"
              label="Min age"
              placeholder="Min age"
            />
            <Form.Field
              control={Input}
              defaultValue={max_age}
              type="number"
              onChange={this.onChangeText}
              name="max_age"
              label="Max age"
              placeholder="Max age"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Dropdown}
              onChange={this.onChangeText}
              placeholder="Select loan"
              closeOnBlur
              selection
              label="Select loan"
              defaultValue={loan_types}
              options={loanTypes}
              name="loan_types"
            />
            <Form.Field
              control={Input}
              defaultValue={credit_rating}
              type="text"
              onChange={this.onChangeText}
              name="credit_rating"
              label="Credit rating"
              placeholder="Credit rating"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={TextArea}
              defaultValue={description}
              onChange={this.onChangeText}
              type="text"
              name="description"
              label="Description"
              placeholder="Description"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              readOnly
              control={TextArea}
              defaultValue={information}
              onChange={this.onChangeText}
              name="information"
              label="Information"
              placeholder="Information"
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
              checked={require_annual_income}
              label="Income"
              name="require_annual_income"
              onChange={this.handleCheckBox}
              toggle
            />
            <Form.Field
              control={Checkbox}
              checked={permanent_resident}
              label="Resident"
              name="permanent_resident"
              onChange={this.handleCheckBox}
              toggle
            />
            <Form.Field
              control={Checkbox}
              checked={security}
              label="Security"
              name="security"
              onChange={this.handleCheckBox}
              toggle
            />
          </Form.Group>
          <Form.Field control={Button}>Save</Form.Field>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
