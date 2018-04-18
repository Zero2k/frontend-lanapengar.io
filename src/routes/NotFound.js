import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Header, Container } from 'semantic-ui-react';

import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

const NotFound = () => (
  <center>
    <PageHeader
      title="404"
      subTitle="We can't seem to find the page you're looking for.."
    >
      <Container
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          minHeight: '690px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Header as="h2" icon>
          <Icon name="warning sign" size="massive" />
          404
          <Header.Subheader style={{ margin: '10px' }}>
            Something went wrong. Click the link below to
          </Header.Subheader>
          <Link to="/">Return to Home Page</Link>
        </Header>
      </Container>
    </PageHeader>
    <Footer />
  </center>
);

export default NotFound;
