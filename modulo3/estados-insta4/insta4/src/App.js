import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const Formulario = styled.form`
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  input {
    background-color: transparent;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 5px;
    margin: 8px;
  }
`

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: 'Gabriel',
        fotoUsuario: 'img/gabriel.jpeg',
        fotoPost: 'img/mineradora-vale.jpg'
      },
      {
        nomeUsuario: 'Sabrina',
        fotoUsuario: 'img/sabrina.jpeg',
        fotoPost: 'img/foto.jpg'
      },
    ],
    adicionaUsuario: '',
    adicionaFotoUsuario: '',
    adicionaFotoPost: ''
  }

  OnchangeInputNomeUsuario = (event) => {
    this.setState({ adicionaUsuario: event.target.value });
  }

  OnchangeInputFotoUsuario = (event) => {
    this.setState({ adicionaFotoUsuario: event.target.value });
  }

  OnchangeInputFotoPost = (event) => {
    this.setState({ adicionaFotoPost: event.target.value });
  }

  OnclickPublicar = () => {
    const postagem = {
      nomeUsuario: this.state.adicionaUsuario,
      fotoUsuario: this.state.adicionaFotoUsuario,
      fotoPost: this.state.adicionaFotoPost
    }
    const novoPost = [...this.state.post, postagem]
    this.setState({post: novoPost})
  }

  render() {
    const listaDePosts = this.state.post.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <>
        <Formulario>
          <input  
            placeholder='Nome' 
            value={this.state.adicionaUsuario} 
            onChange={this.OnchangeInputNomeUsuario}
          />

          <input 
            placeholder='Foto do Usuario' 
            value={this.state.adicionaFotoUsuario} 
            onChange={this.OnchangeInputFotoUsuario}
          />

          <input 
            placeholder='Post' 
            value={this.state.adicionaFotoPost} 
            onChange={this.OnchangeInputFotoPost}
          />

          <button onClick={this.OnclickPublicar}>Publicar</button>
        </Formulario>

        <MainContainer>{listaDePosts}</MainContainer>
      </>
    );
  }
}

export default App;
