import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  margin-left: 10px;
  padding: 5px;
  border-radius: 5px;
  font-size: 0.9rem;
  :hover {
    cursor: pointer;
  }
`;

const InputStyle = styled.input`
  margin-left: 40px;
  width: 200px;
  height: 1.4rem;
  font-size: 1rem;
`;

const AddChisme = props => (
  <div style={{ padding: '5px', marginTop: '5px' }}>
    <form onSubmit={props.handleSubmit}>
      <InputStyle
        type="text"
        name="addchisme"
        placeholder="titulo del chisme"
        onChange={props.handleChange}
        value={props.value}
      />
       <InputStyle
        type="text"
        name="contentchisme"
        placeholder="contenido"
        onChange={props.handleChange}
        value={props.value}
      />
      <ButtonStyle type="submit">Agregar Chisme</ButtonStyle>
    </form>
  </div>
);

export default AddChisme;