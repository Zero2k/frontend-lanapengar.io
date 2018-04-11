import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

const NotFound = () => (
  <center>
    <PageHeader
      title="404"
      subTitle="Här hittar du information om hur sidan fungerar."
    >
      <Container
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          minHeight: '700px'
        }}
      />
      <Link to="/">Return to Home Page</Link>
      <Container />
    </PageHeader>
    <Footer />
  </center>
);

export default NotFound;
