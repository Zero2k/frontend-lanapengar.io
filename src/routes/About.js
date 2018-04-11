import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react';

import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';

const Text = styled.p`
  font-size: 16px;
`;

const About = () => (
  <div>
    <PageHeader
      title="Om oss"
      subTitle="Här hittar du information om hur sidan fungerar."
    >
      <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Grid divided columns={2} stackable>
          <Grid.Row>
            <Grid.Column width={12}>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi.
              </Text>
              <Text>
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
                nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
                nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                condimentum rhoncus, sem quam semper libero, sit amet adipiscing
                sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
                pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                tincidunt tempus. Donec vitae sapien ut libero venenatis
                faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
                nibh. Donec sodales sagittis magna. Sed consequat, leo eget
                bibendum sodales, augue velit cursus nunc,
              </Text>
              <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi.
              </Text>
            </Grid.Column>
            <Grid.Column width={4}>
              <Segment>
                <Header as="h4">Om sidan</Header>
              </Segment>
              <Segment>
                <Header as="h4">Relevanta länkar</Header>
                <List relaxed="very" divided>
                  <List.Item as="a">Kontakta oss</List.Item>
                  <List.Item as="a">Sidkarta</List.Item>
                  <List.Item as="a">Villkor</List.Item>
                  <List.Item as="a">Sekretess</List.Item>
                </List>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </PageHeader>
    <Footer />
  </div>
);

export default About;
