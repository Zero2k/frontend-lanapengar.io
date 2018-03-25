import React from 'react';
import { Container, Tab } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FormSection from '../../../components/Form/FormSection';
import AdminNavbar from '../../../components/Navbar/AdminNavbar';

class NewSection extends React.Component {
  submit = async (values) => {
    try {
      await this.props.newSectionMutation({
        variables: {
          title: values.title,
          category: values.category,
          content: values.content,
          html: values.html
        }
        /* update: (store, { data: { updateProduct } }) => {
          const data = store.readQuery({ query: singleLenderQuery });
          data.products = data.products.map(x => (x.id === updateProduct.id ? updateProduct : x));
          store.writeQuery({ query: singleLenderQuery, data });
        } */
      });
    } catch (err) {
      console.log(err);
      return;
    }

    this.props.history.push('/dashboard/section');
  };

  render() {
    return (
      <div>
        <AdminNavbar />
        <Container style={{ paddingTop: '20px' }}>
          <h3>New Section</h3>
          <Tab
            menu={{ pointing: true }}
            panes={[
              {
                menuItem: 'New',
                render: () => (
                  <Tab.Pane attached={false}>
                    <FormSection submit={this.submit} />
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

const newSectionMutation = gql`
  mutation($title: String, $category: String, $content: JSON, $html: String) {
    createSection(
      title: $title
      category: $category
      content: $content
      html: $html
    )
  }
`;

export default graphql(newSectionMutation, {
  name: 'newSectionMutation',
  options: { fetchPolicy: 'no-cache' }
})(NewSection);
