import React from 'react';
import FormUser from './components/FormUser'
import ListUsers from './components/ListUsers';
import './App.css';

export default class App extends React.Component {

  state = {
    pages: ''
  }
  
  render() {
    return (
      <div>
        <FormUser />
        <ListUsers />
      </div>
    )
  }
}