import gql from 'graphql-tag';

export const POST_QUERY = gql`
  query($limit: Int) {
    posts(limit: $limit) {
      id
      title
      slug
      category
      description
    }
  }
`;

export const SINGLE_POST_QUERY = gql`
  query($id: Int) {
    postById(id: $id) {
      id
      title
      slug
      category
      description
      content
      html
    }
  }
`;

export const SLUG_POST_QUERY = gql`
  query($slug: String) {
    postBySlug(slug: $slug) {
      id
      title
      slug
      category
      description
      content
      html
    }
  }
`;

export const EDIT_POST_MUTATION = gql`
  mutation(
    $id: Int!
    $title: String
    $category: String
    $description: String
    $content: JSON
    $html: String
  ) {
    updatePost(
      id: $id
      title: $title
      category: $category
      description: $description
      content: $content
      html: $html
    )
  }
`;
