import React from 'react';
import { Container, Tab } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import FormPost from '../../../components/Form/FormPostSection';
import AdminNavbar from '../../../components/Navbar/AdminNavbar';

class NewPost extends React.Component {
  submit = async (values) => {
    try {
      await this.props.newPostMutation({
        variables: {
          title: values.title,
          category: values.category,
          keyword: values.keyword,
          description: values.description,
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

    this.props.history.push('/dashboard/post');
  };

  render() {
    return (
      <div>
        <AdminNavbar />
        <Container style={{ paddingTop: '20px' }}>
          <h3>New Post</h3>
          <Tab
            menu={{ pointing: true }}
            panes={[
              {
                menuItem: 'New',
                render: () => (
                  <Tab.Pane attached={false}>
                    <FormPost
                      submit={this.submit}
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

const newPostMutation = gql`
  mutation(
    $title: String
    $category: String
    $keyword: String
    $description: String
    $content: JSON
    $html: String
  ) {
    createPost(
      title: $title
      category: $category
      keyword: $keyword
      description: $description
      content: $content
      html: $html
    )
  }
`;

export default graphql(newPostMutation, {
  name: 'newPostMutation',
  options: { fetchPolicy: 'no-cache' }
})(NewPost);
