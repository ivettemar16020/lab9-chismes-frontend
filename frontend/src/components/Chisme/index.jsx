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
  font-weight: bold;
`;

const ContentStyle = styled.span`
  font-weight: normal;
`;

const XStyle = styled.div`
  float: right;
  :hover {
    color: red;
    cursor: pointer;
  }
`;


const More = styled.div`
  float: right;
  color: blue;
  :hover {
    color: ble;
    cursor: pointer;
  }
`;

// Chisme is a stateless functional component and is therefore pure
const Chisme = props => (
  <ListStyle applied={props.applied}>
    <NameStyle> {props.title} </NameStyle>
    <ContentStyle> {props.content} </ContentStyle>
    <XStyle onClick={props.removeChisme}>✘</XStyle>
    <More> ver mas </More>
  </ListStyle>
);

export default Chisme;