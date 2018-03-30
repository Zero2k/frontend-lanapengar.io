import gql from 'graphql-tag';

export const POST_QUERY = gql`
  query($limit: Int) {
    posts(limit: $limit) {
      id
      title
      category
      description
    }
  }
`;
