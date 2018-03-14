import React from 'react';
import {
  Container,
  Button,
  Segment,
  Popup,
  Responsive,
  Table,
  Icon,
  Menu,
  Form,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import gql from 'graphql-tag';
import graphql from 'react-apollo/graphql';

import FilterModal from '../components/FilterModal';
import ServiceHeader from '../components/ServiceHeader';

import Info from '../components/InfoSection';
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

class Loan extends React.Component {
  state = {
    openSettings: false
  };

  toggleSettingsModal = () => {
    this.setState((state) => ({ openSettings: !state.openSettings }));
  };

  updateQuery = async (data) => {
    const variables = {
      amount: data.values.loanAmount,
      loanType: data.values.type,
      term: data.values.term
    };
    await this.props.data.refetch(variables);
  };

  render() {
    const { openSettings } = this.state;
    const { data: { loading, lendersFilter: lenders } } = this.props;
    if (loading || !lenders) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }
    return (
      <div>
        <ServiceHeader
          title="Jämför lån"
          subTitle="Vilken typ av lån letar du efter?"
        />
        <Container style={{ paddingBottom: '20px' }}>
          <Form>
            <Menu size="large" style={{ marginTop: '20px' }}>
              <Menu.Menu position="right">
                <Menu.Item onClick={this.toggleSettingsModal}>
                  Filtrera
                </Menu.Item>
              </Menu.Menu>
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
        <FilterModal
          onClose={this.toggleSettingsModal}
          open={openSettings}
          data={this.updateQuery}
        />
      </div>
    );
  }
}

const lendersQuery = gql`
  query($amount: Int, $term: Int, $loanType: String, $offset: Int) {
    lendersFilter(
      amount: $amount
      term: $term
      loanType: $loanType
      offset: $offset
    ) {
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
      amount: 2000,
      term: 12,
      loanType: '',
      offset: 0
    }
  })
})(Loan);
