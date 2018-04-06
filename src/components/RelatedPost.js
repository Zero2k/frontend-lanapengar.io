import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import styled from 'styled-components';

const Root = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: ${(props) => props.size};
`;

const RelatedList = ({ article, size, hideIcon }) => (
  <Root size={size}>
    <List.Item as={Link} to={`/artikel/${article.category}/${article.slug}`}>
      {!hideIcon ? <List.Icon name="newspaper" /> : ''}
      {article.title}
    </List.Item>
  </Root>
);

const RelatedPosts = ({ list, size, hideIcon }) => (
  <List>
    {list.map((article) => (
      <RelatedList
        key={article.id}
        size={size}
        article={article}
        hideIcon={hideIcon}
      />
    ))}
  </List>
);

export default RelatedPosts;
