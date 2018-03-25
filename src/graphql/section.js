import gql from 'graphql-tag';

export const SINGLE_SECTION_QUERY = gql`
  query($id: Int!) {
    sectionById(id: $id) {
      id
      title
      category
      content
      html
    }
  }
`;

export const EDIT_SECTION_MUTATION = gql`
  mutation(
    $id: Int!
    $title: String
    $category: String
    $content: JSON
    $html: String
  ) {
    updateSection(
      id: $id
      title: $title
      category: $category
      content: $content
      html: $html
    )
  }
`;
