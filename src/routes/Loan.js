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
  Dropdown,
  Icon,
  Menu,
  Form
} from 'semantic-ui-react';
import ServiceHeader from '../components/ServiceHeader';

import Info from '../components/InfoSection';

const ListDivided = () => (
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
            10 hours ago
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ålder</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            10 hours ago
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Årlig inkomst</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            10 hours ago
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Betalningsanmärkning</Table.Cell>
          <Table.Cell collapsing textAlign="right">
            10 hours ago
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);

const LoanInfo = ({ padding, fontSize, buttonSize }) => (
  <div>
    <h3
      style={{
        paddingTop: '10px',
        paddingLeft: '2.2em',
        fontSize: '20px'
      }}
    >
      M&S Bank Personal Loan (desktop)
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
          <p style={{ fontSize }}>5,000 - 25,000 kr</p>
        </Grid.Column>
        <Grid.Column
          style={{
            backgroundColor: '#DB4D75',
            color: '#FFF',
            padding
          }}
        >
          <span>Ränta</span>
          <p style={{ fontSize }}>2,95% - 24,00%</p>
        </Grid.Column>
        <Grid.Column
          style={{
            backgroundColor: '#F4793B',
            color: '#FFF',
            padding
          }}
        >
          <span>Återbetalningstid</span>
          <p style={{ fontSize }}>1 år till 15 år</p>
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
      Representativt exempel: Den representativa räntan är 2,8% (fast) så om du
      lånar 75.000 över 5 år med en ränta på 2,8%, så kommer du att betala
      tillbaka 1339 kr per månad och totalt 80.038 kr. En uppläggningsavgift på
      200 kr tillkommer. Så den total kostnad blir 80.238 kr
    </p>
  </div>
);

const Desktop = () => (
  <Popup
    flowing
    trigger={
      <div>
        <Responsive
          as={Segment}
          style={{ marginTop: '20px' }}
          {...Responsive.onlyComputer}
        >
          <LoanInfo padding="1.3em" fontSize="17px" buttonSize="big" />
        </Responsive>
      </div>
    }
    content={<ListDivided />}
    position="right center"
  />
);

const Tablet = () => (
  <Popup
    flowing
    trigger={
      <div>
        <Responsive
          as={Segment}
          style={{ marginTop: '20px' }}
          {...Responsive.onlyTablet}
        >
          <LoanInfo padding="1.2em" fontSize="14px" buttonSize="small" />
        </Responsive>
      </div>
    }
    content={<ListDivided />}
    position="bottom center"
  />
);

const Mobile = () => (
  <Popup
    flowing
    trigger={
      <div>
        <Responsive
          as={Segment}
          style={{ marginTop: '20px' }}
          {...Responsive.onlyMobile}
        >
          <LoanInfo padding="1.3em" fontSize="17px" buttonSize="big" />
        </Responsive>
      </div>
    }
    content={<ListDivided />}
    position="bottom center"
  />
);

const ResponsiveContainer = () => (
  <div>
    <Desktop />
    <Tablet />
    <Mobile />
  </div>
);

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
];

const Loan = () => (
  <div>
    <ServiceHeader
      title="Jämför lån"
      subTitle="Vilken typ av lån letar du efter?"
    />
    <Container style={{ paddingBottom: '20px' }}>
      <Form>
        <Menu size="medium" style={{ marginTop: '20px' }}>
          <Menu.Item>
            <Form.Field
              control={Checkbox}
              label={{ children: 'Vissa lån baserat på min profil' }}
              onClick={() => console.log('Clicked')}
            />
          </Menu.Item>
        </Menu>
      </Form>
      <ResponsiveContainer />
      <ResponsiveContainer />
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

export default Loan;
