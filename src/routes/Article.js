import React from 'react';
import {
  Container,
  Card,
  Image,
  Button,
  Responsive,
  Icon
} from 'semantic-ui-react';

import PageHeader from '../components/PageHeader';

const CardItem = ({ perRow }) => (
  <Card.Group itemsPerRow={perRow}>
    <Card color="red">
      <div
        style={{
          display: 'block',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <span
          style={{
            bottom: 0,
            right: 0,
            borderBottom: '50px solid rgb(37, 186, 162)',
            borderLeft: '125px solid transparent',
            position: 'absolute',
            zIndex: 1,
            width: 0,
            height: 0,
            opacity: 0.8
          }}
        />
        <Image
          src="https://cdn.money.co.uk/images/ugc/348x174/woman-holding-card-on-computer.CDN5a86eb46.jpg"
          style={{ display: 'block', width: '100%' }}
        />
      </div>
      <Card.Content>
        <Card.Header>
          What is the difference between Visa and MasterCard?
        </Card.Header>
        <Card.Description>
          MasterCard and Visa do not issue credit, debit or prepaid cards but
          they do provide an important service when you spend. Here is what
          these companies do and how you can decide which one to use.
        </Card.Description>
      </Card.Content>
    </Card>
    <Card color="orange" />
    <Card color="teal" />
  </Card.Group>
);

const Desktop = () => (
  <Responsive style={{ marginTop: '20px' }} {...Responsive.onlyComputer}>
    <CardItem perRow={3} />
  </Responsive>
);

const Tablet = () => (
  <Responsive style={{ marginTop: '20px' }} {...Responsive.onlyTablet}>
    <CardItem perRow={2} />
  </Responsive>
);

const Mobile = () => (
  <Responsive style={{ marginTop: '20px' }} {...Responsive.onlyMobile}>
    <CardItem perRow={1} />
  </Responsive>
);

const ResponsiveContainer = () => (
  <div>
    <Desktop />
    <Tablet />
    <Mobile />
  </div>
);

const Article = () => (
  <div>
    <PageHeader
      title="Våra artiklar"
      subTitle="Our guides show you the best ways to make your money go further and work harder. They contain all the latest financial information and are set out clearly to help you make smart decisions."
    >
      <Container style={{ paddingBottom: '20px' }}>
        <ResponsiveContainer />
        <div
          style={{
            paddingTop: '20px',
            textAlign: 'center'
          }}
        >
          <Button color="orange">
            Se fler artiklar <Icon name="caret down" />
          </Button>
        </div>
      </Container>
    </PageHeader>
  </div>
);

export default Article;
