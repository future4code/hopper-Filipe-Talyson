import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeFavoritoPreto from '../../img/salvar-instagram-black.png'
import iconeFavoritoBranco from '../../img/salvar-instagram-white.png'
import iconeCompartilhar from '../../img/compartilhar.png'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import { IconesDeCompartilhamentos } from '../IconesDeCompartilhamentos/IconesDeCompartilhamentos'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;

  div {
    display: flex;
    margin-right: 10px;
  }
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    favorito: false,
    compartilhar: false
  }

  onClickCurtida = () => {
    if(this.state.curtido) {
      this.setState({
        curtido: false,
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    } else {
      this.setState({
        curtido: true,
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar
    })
  }

  onClickFavorito = () => {
    if(this.state.favorito){
      this.setState({
        imagem: iconeFavoritoPreto,
        favorito: false
      })
    } else {
      this.setState({
        imagem: iconeFavoritoBranco,
        favorito: true
      })
    }
  }

  render() {
    let iconeCurtida
    let iconeFavorito

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    if(this.state.favorito) {
      iconeFavorito = iconeFavoritoPreto
    } else {
      iconeFavorito = iconeFavoritoBranco
    }
    

    let componenteComentario
    let componenteIconesCompartilhar

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    if(this.state.compartilhar){
      componenteIconesCompartilhar = <IconesDeCompartilhamentos/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <div>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />

          <IconeComContador
            icone={iconeCompartilhar}
            onClickIcone={this.onClickCompartilhar}
            valorContador={this.state.compartilhar}
            classe={'imgcompartilhar'}
          />
        </div>

        <IconeComContador
          icone={iconeFavorito}
          onClickIcone={this.onClickFavorito}
          valorContador={this.state.favorito}
          classe={'imgfavorito'}
        />
      </PostFooter>
      {componenteComentario}
      {componenteIconesCompartilhar}
    </PostContainer>
  }
}

export default Post