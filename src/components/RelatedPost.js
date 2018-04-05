import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import styled from 'styled-components';

const Root = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: ${(props) => props.size};
`;

const RelatedList = ({ article, size }) => (
  <Root size={size}>
    <List.Item as={Link} to={`/artikel/${article.category}/${article.slug}`}>
      <List.Icon name="newspaper" />
      {article.title}
    </List.Item>
  </Root>
);

const RelatedPosts = ({ list, size }) => (
  <List>
    {list.map((article) => (
      <RelatedList key={article.id} size={size} article={article} />
    ))}
  </List>
);

export default RelatedPosts;
