import React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';

const CalculateApr = ({ fee, repInterest, loanType }) => {
  let apr;
  let amount;
  let amountEx;
  let term;
  if (loanType === 'privatlan') {
    apr = repInterest;
    amount = 100000;
    amountEx = '100 000';
    term = 5;
  } else if (loanType === 'snabblan') {
    apr = repInterest;
    amount = 20000;
    amountEx = '20 000';
    term = 1;
  } else if (loanType === 'billan') {
    apr = repInterest;
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
} Så den total kostnaden för lånet blir
    ${!totalWithFee ? total : totalWithFee} kr`;
};

const LoanInfo = ({
  lender,
  padding,
  paddingLeft,
  textAlign,
  fontSize,
  buttonSize
}) => (
  <div>
    <h3
      style={{
        paddingTop: '10px',
        paddingLeft,
        textAlign,
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
            src="http://localhost:8080/static/logo/euroloan_125_80.png"
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
        <Grid.Column style={{ padding }}>
          <Button circular size={buttonSize} color="teal" fluid>
            Ansök nu
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <p
      style={{
        paddingTop: '10px',
        borderTop: '1px solid rgba(171, 171, 171, 0.36)',
        textAlign: 'center',
        fontWeight: '700'
      }}
    >
      <CalculateApr
        fee={lender.fee}
        repInterest={lender.interest_min}
        loanType={lender.loan_types}
      />
    </p>
  </div>
);

export default LoanInfo;
