import gql from 'graphql-tag';

export const SINGLE_SECTION_QUERY = gql`
  query($id: Int!) {
    sectionById(id: $id) {
      id
      title
      page
      content
    }
  }
`;

export const EDIT_SECTION_MUTATION = gql`
  mutation($id: Int!, $title: String, $page: String, $content: JSON) {
    updateSection(id: $id, title: $title, page: $page, content: $content)
  }
`;
