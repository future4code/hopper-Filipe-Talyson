import React from 'react';
import './App.css';
import styled from 'styled-components'
import Playlist from './components/Playlist';

const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: #369a5d;
  box-shadow: 2px 0 5px black;
  display: flex;
  justify-content: start;
  align-items: center;
  font-weight: bold;
  font-size: 1.5em;
  color: white;
`

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <div className='center'>
            LABEFY
          </div>
        </Header>
        <div className='center'>
          <Playlist />
        </div>
      </div>
    )
  }
}
