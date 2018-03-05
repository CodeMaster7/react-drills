import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  userName(name) {
    this.setState({ username: name })
  }

  userPassword(pass) {
    this.setState({ password: pass })
  }

  handleLogin() {
    alert(`Username: ${ this.state.username} Password: ${this.state.password}`)
  }

  render() {
    return (
      <div className="App">
        <input onChange={(e) => this.userName( e.target.value )} type="text" placeholder="Username"/>
        <input onChange={(e) => this.userPassword( e.target.value )} type="text" placeholder="Password"/>
        <button onClick={ () => this.handleLogin()}>Login</button>
      </div>
    );
  }
}

export default App;
