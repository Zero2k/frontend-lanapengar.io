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
  Menu,
  Form
} from 'semantic-ui-react';
import Navbar from '../components/Navbar';

const ListExampleDivided = () => (
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
                  padding: '1.3em'
                }}
              >
                <span>Lånebelopp</span>
                <p style={{ fontSize: '17px' }}>5,000 - 25,000 kr</p>
              </Grid.Column>
              <Grid.Column
                style={{
                  backgroundColor: '#DB4D75',
                  color: '#FFF',
                  padding: '1.3em'
                }}
              >
                <span>Ränta</span>
                <p style={{ fontSize: '17px' }}>2,95% - 24,00%</p>
              </Grid.Column>
              <Grid.Column
                style={{
                  backgroundColor: '#F4793B',
                  color: '#FFF',
                  padding: '1.3em'
                }}
              >
                <span>Återbetalningstid</span>
                <p style={{ fontSize: '17px' }}>1 år till 15 år</p>
              </Grid.Column>
              <Grid.Column>
                <Button circular size="big" color="teal" fluid>
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
            Representativt exempel: Den representativa räntan är 2,8% (fast) så
            om du lånar 75.000 över 5 år med en ränta på 2,8%, så kommer du att
            betala tillbaka 1339 kr per månad och totalt 80.038 kr. En
            uppläggningsavgift på 200 kr tillkommer.
          </p>
        </Responsive>
      </div>
    }
    content={<ListExampleDivided />}
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
          <h3
            style={{
              paddingTop: '10px',
              paddingLeft: '2em',
              fontSize: '20px'
            }}
          >
            M&S Bank Personal Loan (tablet)
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
                  backgroundColor: '#FAA73F',
                  color: '#FFF',
                  padding: '1.2em'
                }}
              >
                <span>Lånebelopp</span>
                <p style={{ fontSize: '14px' }}>5,000 - 25,000 kr</p>
              </Grid.Column>
              <Grid.Column
                style={{
                  backgroundColor: '#F4793B',
                  color: '#FFF',
                  padding: '1.2em'
                }}
              >
                <span>Ränta</span>
                <p style={{ fontSize: '14px' }}>2,95% - 24,00%</p>
              </Grid.Column>
              <Grid.Column
                style={{
                  backgroundColor: '#DB4D75',
                  color: '#FFF',
                  padding: '1.2em'
                }}
              >
                <span>Återbetalningstid</span>
                <p style={{ fontSize: '14px' }}>1 år till 15 år</p>
              </Grid.Column>
              <Grid.Column>
                <Button circular size="small" color="purple" fluid>
                  Ansök nu
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <p style={{ paddingTop: '10px', textAlign: 'center' }}>
            Representativt exempel: Den representativa räntan är 2,8% (fast) så
            om du lånar 75.000 över 5 år med en ränta på 2,8%, så kommer du att
            betala tillbaka 1339 kr per månad och totalt 80.038 kr. En
            uppläggningsavgift på 200 kr tillkommer.
          </p>
        </Responsive>
      </div>
    }
    content={<ListExampleDivided />}
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
          <h3
            style={{
              paddingTop: '10px',
              textAlign: 'center',
              fontSize: '20px'
            }}
          >
            M&S Bank Personal Loan (Mobile)
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
                  backgroundColor: '#FAA73F',
                  color: '#FFF',
                  padding: '1.3em'
                }}
              >
                <span>Lånebelopp</span>
                <p style={{ fontSize: '17px' }}>5,000 - 25,000 kr</p>
              </Grid.Column>
              <Grid.Column
                style={{
                  backgroundColor: '#F4793B',
                  color: '#FFF',
                  padding: '1.3em'
                }}
              >
                <span>Ränta</span>
                <p style={{ fontSize: '17px' }}>2,95% - 24,00%</p>
              </Grid.Column>
              <Grid.Column
                style={{
                  backgroundColor: '#DB4D75',
                  color: '#FFF',
                  padding: '1.3em'
                }}
              >
                <span>Återbetalningstid</span>
                <p style={{ fontSize: '17px' }}>1 år till 15 år</p>
              </Grid.Column>
              <Grid.Column>
                <Button circular size="big" color="purple" fluid>
                  Ansök nu
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <p style={{ paddingTop: '10px', textAlign: 'center' }}>
            Representativt exempel: Den representativa räntan är 2,8% (fast) så
            om du lånar 75.000 över 5 år med en ränta på 2,8%, så kommer du att
            betala tillbaka 1339 kr per månad och totalt 80.038 kr. En
            uppläggningsavgift på 200 kr tillkommer.
          </p>
        </Responsive>
      </div>
    }
    content={<ListExampleDivided />}
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
    <Navbar title="Jämför lån" subTitle="Vilken typ av lån letar du efter?" />
    <Container style={{ paddingBottom: '20px' }}>
      {/* <Segment style={{ marginTop: '20px' }}>
        <Form>
          <Form.Group inline>
            <Form.Field
              control={Checkbox}
              label={{ children: 'Show me affiliated products first' }}
            />
          </Form.Group>
          <Form.Group inline>
            <Form.Dropdown label="sorted by:" control="select">
              <option value="popular">Most popular</option>
              <option value="low-apr">Lowest representative APR</option>
            </Form.Dropdown>
          </Form.Group>
        </Form>
      </Segment> */}
      <Form>
        <Menu size="medium" style={{ marginTop: '20px' }}>
          <Menu.Item>
            <Form.Field
              control={Checkbox}
              label={{ children: 'Vissa lån baserat på min profil' }}
              onClick={() => console.log('Clicked')}
            />
          </Menu.Item>

          <Menu.Menu position="right">
            <Dropdown item text="sorted by: ">
              <Dropdown.Menu>
                <Dropdown.Item>Most popular</Dropdown.Item>
                <Dropdown.Item>Lowest representative APR</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Form>
      <ResponsiveContainer />
      <ResponsiveContainer />
    </Container>
  </div>
);

export default Loan;
