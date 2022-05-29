import axios from 'axios';
import React from 'react';
import styled from 'styled-components'
import FormCriarPlaylist from './FormCriarPlaylist';

const Container = styled.div`
    display: flex;
    .criarPlaylist {
        padding: 15px;
        width: 400px;
        text-align: center;
        background-color: orange;
        margin: 10px;
        border-radius: 15px;
        h3 {
            color: #ececf6;
        }
        .inputButton {
            display: flex;
            flex-direction: column;
            align-items: center;
            button {
                background-color: #369a5d;
                color: white;
                padding: 5px 10px;
                border-radius: 10px;
            }
        }
    }
    .listPlaylist {
        width: 400px;
        margin: 10px;
        border-radius: 15px;
        background-color: #141f36;
        color: black;
        text-align: center;
        padding: 15px;
        h4 {
            margin-bottom: 20px;
            color: #ececf6;
        }
        .itensListPlaylist {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            p {
                background-color: #2d3d54;
                margin: 5px;
                border-radius: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                button {
                    color: #ececf6;
                }
                button.excluir {
                    background-color: #df484a;
                    padding: 5px;
                    margin: 5px;
                    border-radius: 5px;
                }
            }
        }
    }
    .listMusic {
    }

    input {
        width: 200px;
        border: none;
        padding: 5px 10px;
        border-radius: 10px;
        margin: 10px;
    }
`

export default class Playlist extends React.Component {
    state = {
        nomesPlaylist: [],
        musicasPlaylist: [],
        inputNome: "",
        nomeMusica: '',
        nomeArtista: '',
        linkMusica: '',
        playlist: {},
        nomePlaylist: ''
    }

    componentDidMount() {
        this.todasPlaylists()
    }

    todasPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers: {
                Authorization: "filipe-talyson-hopper"
            }
        }).then((res) => {
            this.setState({nomesPlaylist: res.data.result.list})
        }).catch((err) => {
            console.log(err)
        })
    }

    musica = (playlist) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`, {
            headers: {
                Authorization: "filipe-talyson-hopper"
            }
        }).then((res) => {
            console.log(res)
            this.setState({musicasPlaylist: res.data.result.tracks, playlist: playlist, nomePlaylist: playlist.name})
        }).catch((err) => {
            console.log(err)
        })
    }

    criarMusica = (playlist) => {
        const body = {
            name: this.state.nomeMusica, 
            artist: this.state.nomeArtista,
            url: this.state.linkMusica
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`, body, {
            headers: {
                Authorization: "filipe-talyson-hopper"
            }
        }).then(() => {
            alert('Música criada com sucesso')
            this.musica(playlist)
        }).catch(() => {
            alert('Erro ao criar musica')
        })        
    }

    onchangeNomePlaylist = (event) => {
        this.setState({ inputNome: event.target.value })
    }
    onchangeNomeMusica = (event) => {
        this.setState({ nomeMusica: event.target.value })
    }
    onchangeNomeArtista = (event) => {
        this.setState({ nomeArtista: event.target.value })
    }
    onchangeLinkMusica = (event) => {
        this.setState({ linkMusica: event.target.value })
    }
    
    criarNomePlaylist = () => {
        const body = {
            name: this.state.inputNome
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers: {
                Authorization: "filipe-talyson-hopper"
            }
        }).then(() => {
            alert('Playlist criada com sucesso')
            this.setState({nomePlaylist: this.state.inputNome})
            this.todasPlaylists()
        }).catch(() =>{
            alert('Ocorreu um erro ao criar sua playlist')
        })
    }
  render() {
    const listPlaylist = this.state.nomesPlaylist.map((playlist) => {
        return (
            <p><button onClick={() => this.musica(playlist)}>{playlist.name}</button><button className='excluir'>X</button></p>
        )
    })
    
    const listMusicas = this.state.musicasPlaylist.map((musica) => {
        return <p>{musica.name}</p>
    })

    return (
      <Container>
        <div>
            <div className='criarPlaylist'>
                <h3>CRIE UMA PLAYLIST</h3>
                <div className='inputButton'>
                    <input placeholder="Nome da playlist" value={this.state.inputNome} onChange={this.onchangeNomePlaylist} autoComplete="none"/>
                    <button onClick={this.criarNomePlaylist}>Salvar</button>
                </div>
            </div>

            <div className='listPlaylist'>
                <h4>MINHAS PLAYLISTS</h4>
                <div className='itensListPlaylist'>
                    {listPlaylist}
                </div>
            </div>
        </div>
        {this.state.nomePlaylist ? <FormCriarPlaylist 
                nomePlaylist={this.state.nomePlaylist}
                valorInputNomeMusica={this.state.nomeMusica}
                onchangeNomeMusica={this.onchangeNomeMusica}
                valorInputNomeArtista={this.state.nomeArtista}
                onchangeNomeArtista={this.onchangeNomeArtista}
                valorInputLinkMusica={this.state.linkMusica}
                onchangeLinkMusica={this.onchangeLinkMusica}
                onclickCriarMusica={() => this.criarMusica(this.state.playlist)}
                listaMusicas={listMusicas}
            /> : <p>Selecione uma playlist</p>}
      </Container>
    )
  }
}
