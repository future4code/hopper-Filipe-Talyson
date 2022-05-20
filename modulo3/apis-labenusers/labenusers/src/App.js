import React from 'react';
import FormUser from './components/FormUser'
import ListUsers from './components/ListUsers';
import './App.css';

export default class App extends React.Component {

  state = {
    pages: true
  }

  changePage = () => {
    this.setState({pages: false})
  }
  
  render() {
    return (
      <div>
        {this.state.pages ? <FormUser onclickButton={this.changePage}/> : <ListUsers />}
      </div>
    )
  }
}