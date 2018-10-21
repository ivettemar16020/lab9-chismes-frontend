import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.li`
  padding: 5px;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  list-style: none;
  text-decoration: ${props => (props.applied ? 'line-through' : 'none')};
`;

const NameStyle = styled.span`
  margin-left: 20px;
`;

const XStyle = styled.div`
  float: right;
  :hover {
    color: red;
    cursor: pointer;
  }
`;

// Chisme is a stateless functional component and is therefore pure
const Chisme = props => (
  <ListStyle applied={props.applied}>
    <NameStyle> {props.title} </NameStyle>
    <XStyle onClick={props.removeChisme}>✘</XStyle>
  </ListStyle>
);

export default Chisme;