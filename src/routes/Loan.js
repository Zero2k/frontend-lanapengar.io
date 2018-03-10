import React from 'react';
import {
  Grid,
  Image,
  Container,
  Button,
  Segment,
  Popup,
  Responsive,
  Table,
  Checkbox,
  Icon,
  Menu,
  Form,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import gql from 'graphql-tag';
import graphql from 'react-apollo/graphql';

import ServiceHeader from '../components/ServiceHeader';

import Info from '../components/InfoSection';

const CalculateApr = ({ fee, loanType }) => {
  let apr;
  let amount;
  let amountEx;
  let term;
  if (loanType === 'privatlan') {
    apr = 5.2;
    amount = 100000;
    amountEx = '100 000';
    term = 5;
  } else if (loanType === 'snabblan') {
    apr = 8;
    amount = 20000;
    amountEx = '20 000';
    term = 1;
  } else if (loanType === 'billan') {
    apr = 7;
    amount = 200000;
    amountEx = '200 000';
    term = 3;
  }
  // prettier-ignore
  const interest = Math.round(((amount * apr) / 100) / 12);
  const total = interest * 12 * term;
  const totalWithFee = total + fee;
  return `Den representativa räntan är ${apr}%
    (fast) så om du lånar ${amountEx} över ${term} år med en ränta på ${apr}%, så
    kommer du att betala tillbaka ${interest} kr per månad och totalt ${total}
    kr. ${
  fee ? `En uppläggningsavgift på ${fee} kr tillkommer. ` : ''
} Så den total kostnaden blir
    ${!totalWithFee ? total : totalWithFee} kr`;
};

const ListDivided = ({ lender }) => (
  <div>
    <span style={{ fontSize: '15px', color: '#f7498e' }}>
      Innan du fortsätter...
    </span>
    <br />
    <span>Se till att du uppfyller följande krav:</span>
    <Table striped compact unstackable>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Svensk medborgare</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            {lender.permanent_resident ? (
              <Icon color="green" size="large" name="checkmark" />
            ) : (
              <Icon color="red" size="large" name="minus" />
            )}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ålder</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            {lender.min_age} år
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Årlig inkomst</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            {lender.require_annual_income ? (
              <Icon color="green" size="large" name="checkmark" />
            ) : (
              <Icon color="red" size="large" name="minus" />
            )}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Betalningsanmärkning</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            {lender.credit_rating ? (
              <Icon color="green" size="large" name="checkmark" />
            ) : (
              <Icon color="red" size="large" name="minus" />
            )}
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

const LoanInfo = ({
  lender, padding, fontSize, buttonSize
}) => (
  <div>
    <h3
      style={{
        paddingTop: '10px',
        paddingLeft: '2em',
        fontSize: '23px',
        color: '#00b5ad'
      }}
    >
      {lender.name}
    </h3>
    <Grid
      celled="internally"
      relaxed
      textAlign="center"
      verticalAlign="middle"
      stackable
      columns={5}
    >
      <Grid.Row>
        <Grid.Column>
          <Image
            src="https://www.money.co.uk/images/logos/129x75/mands-bank-1.png"
            centered
          />
        </Grid.Column>
        <Grid.Column
          style={{
            backgroundColor: '#7f246a',
            color: '#FFF',
            padding
          }}
        >
          <span>Lånebelopp</span>
          <p style={{ fontSize }}>
            {lender.amount_min} - {lender.amount_max} kr
          </p>
        </Grid.Column>
        <Grid.Column
          style={{
            backgroundColor: '#DB4D75',
            color: '#FFF',
            padding
          }}
        >
          <span>Ränta</span>
          <p style={{ fontSize }}>
            {lender.interest_min}% - {lender.interest_max}%
          </p>
        </Grid.Column>
        <Grid.Column
          style={{
            backgroundColor: '#F4793B',
            color: '#FFF',
            padding
          }}
        >
          <span>Återbetalningstid</span>
          <p style={{ fontSize }}>
            {lender.term_min} år till {lender.term_max} år
          </p>
        </Grid.Column>
        <Grid.Column>
          <Button circular size={buttonSize} color="teal" fluid>
            Ansök nu
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <p
      style={{
        paddingTop: '10px',
        textAlign: 'center',
        fontWeight: '700'
      }}
    >
      <CalculateApr fee={lender.fee} loanType={lender.loan_types} />
    </p>
  </div>
);

const Desktop = ({ lenders }) => (
  <div>
    {lenders.map((lender) => (
      <Popup
        key={lender.id}
        flowing
        trigger={
          <div>
            <Responsive
              as={Segment}
              style={{ marginTop: '20px' }}
              {...Responsive.onlyComputer}
            >
              <LoanInfo
                lender={lender}
                padding="1.3em"
                fontSize="17px"
                buttonSize="big"
              />
            </Responsive>
          </div>
        }
        content={<ListDivided lender={lender} />}
        position="right center"
      />
    ))}
  </div>
);

const Tablet = ({ lenders }) => (
  <div>
    {lenders.map((lender) => (
      <Popup
        key={lender.id}
        flowing
        trigger={
          <div>
            <Responsive
              as={Segment}
              style={{ marginTop: '20px' }}
              {...Responsive.onlyTablet}
            >
              <LoanInfo
                lender={lender}
                padding="1.2em"
                fontSize="14px"
                buttonSize="small"
              />
            </Responsive>
          </div>
        }
        content={<ListDivided lender={lender} />}
        position="bottom center"
      />
    ))}
  </div>
);

const Mobile = ({ lenders }) => (
  <div>
    {lenders.map((lender) => (
      <Popup
        key={lender.id}
        flowing
        trigger={
          <div>
            <Responsive
              as={Segment}
              style={{ marginTop: '20px' }}
              {...Responsive.onlyMobile}
            >
              <LoanInfo
                lender={lender}
                padding="1.3em"
                fontSize="17px"
                buttonSize="big"
              />
            </Responsive>
          </div>
        }
        content={<ListDivided lender={lender} />}
        position="bottom center"
      />
    ))}
  </div>
);

const ResponsiveContainer = ({ lenders }) => (
  <div>
    <Desktop lenders={lenders} />
    <Tablet lenders={lenders} />
    <Mobile lenders={lenders} />
  </div>
);

const Loan = ({ data: { loading, lenders } }) => {
  if (loading || !lenders) {
    return (
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }
  console.log(lenders);

  return (
    <div>
      <ServiceHeader
        title="Jämför lån"
        subTitle="Vilken typ av lån letar du efter?"
      />
      <Container style={{ paddingBottom: '20px' }}>
        <Form>
          <Menu size="large" style={{ marginTop: '20px' }}>
            <Menu.Item>
              <Form.Field
                control={Checkbox}
                label={{ children: 'Vissa lån baserat på min profil' }}
                onClick={() => console.log('Clicked')}
              />
            </Menu.Item>
          </Menu>
        </Form>
        <ResponsiveContainer lenders={lenders} />
        <div
          style={{
            paddingTop: '20px',
            textAlign: 'center'
          }}
        >
          <Button color="orange">
            Vissa fler <Icon name="caret down" />
          </Button>
        </div>
        <Info />
      </Container>
    </div>
  );
};

const lendersQuery = gql`
  query($offset: Int) {
    lenders(offset: $offset) {
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

export default graphql(lendersQuery, {
  options: () => ({
    fetchPolicy: 'network-only',
    variables: {
      offset: 0
    }
  })
})(Loan);
