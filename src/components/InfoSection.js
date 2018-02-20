import React from 'react';
import { List, Header, Container, Grid } from 'semantic-ui-react';

const Info = () => (
  <Container style={{ paddingTop: '20px', paddingBottom: '20px' }}>
    <Grid>
      <Grid.Column width={12}>
        <Header as="h2">Så får du bäst ränta på privatlånet</Header>
        <p style={{ fontSize: '16px' }}>
          Nunc ac ligula fringilla, tristique ipsum id, facilisis turpis.
          Phasellus id arcu quis nunc posuere porta. Donec in quam suscipit,
          malesuada orci eu, laoreet lorem. Duis nulla neque, feugiat a erat
          vel, mollis maximus sem. Cras vitae condimentum eros. Maecenas quis
          massa mollis, vulputate massa convallis, aliquet lorem. Donec dolor
          risus, efficitur vel blandit ut, semper non velit. Nulla molestie id
          odio eu semper. Suspendisse felis lorem, dignissim id ullamcorper in,
          egestas vitae nulla. Proin nec massa a justo ullamcorper sollicitudin
          nec pharetra ante.
        </p>
      </Grid.Column>
      <Grid.Column width={4}>
        <Header as="h3" dividing>
          Relaterade artiklar
        </Header>
        <List divided relaxed>
          <List.Item>
            <List.Content>
              <List.Header as="a">
                4 ways to borrow a small amount of money
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header as="a">
                What happens if you are unable to pay back your loan?
              </List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header as="a">How to get a guarantor loan</List.Header>
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
    </Grid>
  </Container>
);

export default Info;
