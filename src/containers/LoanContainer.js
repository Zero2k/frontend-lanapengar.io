import React from 'react';
import {
  Segment,
  Popup,
  Responsive,
  Table,
  Icon,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import graphql from 'react-apollo/graphql';
import { lendersQuery } from '../graphql/lender';

import LoanInfo from '../components/LoanInfo';

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

const Desktop = ({ lenders }) => (
  <div>
    {!lenders.length && (
      <h3 style={{ textAlign: 'center', paddingTop: '20px' }}>
        No lenders found
      </h3>
    )}
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
                paddingLeft="2em"
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
                paddingLeft="1em"
                padding="1.1em"
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
                paddingLeft="0em"
                padding="1.3em"
                textAlign="center"
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

const LoanContainer = ({ data: { loading, lendersFilter: lenders } }) => {
  if (loading || !lenders) {
    return (
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    );
  }

  return (
    <div>
      <ResponsiveContainer lenders={lenders} />
    </div>
  );
};

export default graphql(lendersQuery, {
  options: () => ({
    fetchPolicy: 'network-only',
    variables: {
      amount: 2000,
      term: 12,
      offset: 0
    }
  })
})(LoanContainer);
