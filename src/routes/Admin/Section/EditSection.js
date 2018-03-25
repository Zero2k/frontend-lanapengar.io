import React from 'react';
import { Container, Tab, Dimmer, Loader } from 'semantic-ui-react';
import { graphql, compose } from 'react-apollo';
import {
  SINGLE_SECTION_QUERY,
  EDIT_SECTION_MUTATION
} from '../../../graphql/section';

import FormSection from '../../../components/Form/FormSection';
import AdminNavbar from '../../../components/Navbar/AdminNavbar';

class EditSection extends React.Component {
  submitEdit = async (values) => {
    try {
      await this.props.editSectionMutation({
        variables: {
          ...values
        }
        /* update: (store, { data: { updateProduct } }) => {
          const data = store.readQuery({ query: singleLenderQuery });
          data.products = data.products.map(x => (x.id === updateProduct.id ? updateProduct : x));
          store.writeQuery({ query: singleLenderQuery, data });
        } */
      });
      console.log(values);
    } catch (err) {
      console.log(err);
      return;
    }

    this.props.history.push('/dashboard/section');
  };

  render() {
    const { singleSectionQuery: { loading, sectionById } } = this.props;

    if (loading || !sectionById) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    }

    return (
      <div>
        <AdminNavbar />
        <Container style={{ paddingTop: '20px' }}>
          <h3>Edit - {sectionById.title}</h3>
          <Tab
            menu={{ pointing: true }}
            panes={[
              {
                menuItem: 'Edit',
                render: () => (
                  <Tab.Pane attached={false}>
                    <FormSection data={sectionById} submit={this.submitEdit} />
                  </Tab.Pane>
                )
              }
            ]}
          />
        </Container>
      </div>
    );
  }
}

export default compose(
  graphql(EDIT_SECTION_MUTATION, {
    name: 'editSectionMutation',
    options: { fetchPolicy: 'no-cache' }
  }),
  graphql(SINGLE_SECTION_QUERY, {
    name: 'singleSectionQuery',
    options: (props) => ({
      fetchPolicy: 'network-only',
      variables: {
        id: props.match.params.id
      }
    })
  })
)(EditSection);
