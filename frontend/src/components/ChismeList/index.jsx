import React, { Component } from 'react';
import styled from 'styled-components';
import AddChisme from '../AddChisme/index';
import Chisme from '../Chisme/index';
import uuidv4 from 'uuid/v4';

// styled components declarations
const ContainerStyle = styled.div`
  width: 400px;
  margin: auto;
  text-align: left;
  border-top: 1px solid #e4e4e4;
`;

const HeaderStyle = styled.h2`
  text-align: center;
`;

const LoadingStyle = styled.h4`
  text-align: center;
`;

class ChismeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chismes: [],
      loading: true,
      newChisme: ''
    };
    // these functions are bound so that they update state of the parent
    //  when passed down as props to child Chisme components
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postMethod = this.postMethod.bind(this);
  }

  async componentDidMount() {
    fetch('http://127.0.0.1:8000/api/')
      .then(response => response.json())
      .then(chismes => this.setState({ chismes , loading: false}))
      .catch(error => this.setState({ error, isLoading: false }));

  }

  async postMethod(addedChisme){
    const headers = new Headers();
    headers.append('Content-Type', 'applicaction/json');

    const options = {
      method: 'POST',
      headers,
      body: JSON.stringify(addedChisme),
    }

    const request = new Request('http://127.0.0.1:8000/api/', options);
    const response = await fetch(request);
    const status = await response.status; 
    console.log(status);
  }

  handleChange(e) {
    this.setState({
      newChisme: e.target.valuetitle
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newChisme.trim()) {
      return;
    }
    const addedChisme = {
      id: uuidv4(),
      title: this.state.newChisme,
      applied: false
    };
    this.setState({
      chismes: [...this.state.chismes, addedChisme],
      newChisme: ''
    });

    this.postMethod(addedChisme);   

  }

  toggleChisme(id) {
    const chismes = this.state.chismes.map(chisme => {
      if (chisme.id === id) {
        chisme.applied = !chisme.applied;
      }
      return chisme;
    });

    this.setState({ chismes });
  }

  removeChisme(id) {
    const chismes = this.state.chismes.filter(chismes => chismes.id !== id);
    this.setState({
      chismes
    });
  }

  render() {
    const companies = (
      <ContainerStyle>
        {this.state.chismes.map(chisme => (
          <Chisme
            // these functions are bound here to lock the ID param to the method
            toggleChisme={this.toggleChisme.bind(this, chisme.id)}
            removeChisme={this.removeChisme.bind(this, chisme.id)}
            key={chisme.id}
            {...chisme}
          />
        ))}
        <AddChisme
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          postMethod={this.postMethod}
          value={this.state.newChisme}
        />
      </ContainerStyle>
    );
    return (
      <div>
        <HeaderStyle> Chismes </HeaderStyle>
        {this.state.loading ? (
          <LoadingStyle> loading... </LoadingStyle>
        ) : (
          companies
        )}
      </div>
    );
  }
}

export default ChismeList;