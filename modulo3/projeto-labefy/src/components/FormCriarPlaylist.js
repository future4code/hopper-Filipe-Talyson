import React from 'react';
import styled from 'styled-components'


export default class FormCriarPlaylist extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.nomePlaylist}</h1>
            <h4>Adicionar músicas a esta playlist</h4>
            <input placeholder="Nome da música" value={this.props.valorInputNomeMusica} onChange={this.props.onchangeNomeMusica}/>
            <input placeholder="Nome do artista ou banda" value={this.props.valorInputNomeArtista} onChange={this.props.onchangeNomeArtista}/>
            <input placeholder="Link da música" value={this.props.valorInputLinkMusica} onChange={this.props.onchangeLinkMusica}/>
            <button onClick={this.props.onclickCriarMusica}>Criar</button>
            <div className='listMusicas'>
                {this.props.listaMusicas}
            </div>
      </div>
    )
  }
}
