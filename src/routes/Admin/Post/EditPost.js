import React from 'react';
import { Container, Tab, Dimmer, Loader } from 'semantic-ui-react';
import { graphql, compose } from 'react-apollo';
import { SINGLE_POST_QUERY, EDIT_POST_MUTATION } from '../../../graphql/post';

import FormPost from '../../../components/Form/FormPostSection';
import AdminNavbar from '../../../components/Navbar/AdminNavbar';

class EditPost extends React.Component {
  submitEdit = async (values) => {
    try {
      await this.props.editPostMutation({
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

    this.props.history.push('/dashboard/post');
  };

  render() {
    const { singlePostQuery: { loading, postById } } = this.props;

    if (loading || !postById) {
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
          <h3>Edit - {postById.title}</h3>
          <Tab
            menu={{ pointing: true }}
            panes={[
              {
                menuItem: 'Edit',
                render: () => (
                  <Tab.Pane attached={false}>
                    <FormPost
                      data={postById}
                      submit={this.submitEdit}
                      existDescription
                      existKeyword
                    />
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
  graphql(EDIT_POST_MUTATION, {
    name: 'editPostMutation',
    options: { fetchPolicy: 'no-cache' }
  }),
  graphql(SINGLE_POST_QUERY, {
    name: 'singlePostQuery',
    options: (props) => ({
      fetchPolicy: 'network-only',
      variables: {
        id: props.match.params.id
      }
    })
  })
)(EditPost);
