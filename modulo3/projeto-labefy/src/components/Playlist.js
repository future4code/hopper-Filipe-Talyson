import axios from 'axios';
import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    .criarPlaylist {
        padding: 15px;
        width: 400px;
        text-align: center;
        border: 1px solid black;
        button {
            background-color: #369a5d;
            padding: 5px 10px;
            border-radius: 10px;
            box-shadow: 2px 2px 8px black;
        }
    }
    .listPlaylist {
        width: 400px;
        text-align: center;
        border: 1px solid black;
        padding: 15px;
        h4 {
            margin-bottom: 20px;
        }
    }
    .listMusic {

    }
    input {
        width: 200px;
        background-color: #2d3d54;
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
        linkMusica: ''
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

    musica = (id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {
            headers: {
                Authorization: "filipe-talyson-hopper"
            }
        }).then((res) => {
            console.log(res)
            this.setState({musicasPlaylist: res.data.result.tracks})
        }).catch((err) => {
            console.log(err)
        })
    }

    criarMusica = (id) => {
        const body = {
            name: this.state.nomeMusica, 
            artist: this.state.nomeArtista,
            url: this.state.linkMusica
        }
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {
            headers: {
                Authorization: "filipe-talyson-hopper"
            }
        }).then(() => {
            alert('Música criada com sucesso')
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
            this.todasPlaylists()
        }).catch(() =>{
            alert('Ocorreu um erro ao criar sua playlist')
        })
    }
  render() {
    const listPlaylist = this.state.nomesPlaylist.map((playlist) => {
        return (
            <>
                <p><button onClick={() => this.musica(playlist.id)}>{playlist.name}</button><button>X</button></p>

                <h4>Adicionar músicas a esta playlist</h4>
                <input placeholder="Nome da música" value={this.state.nomeMusica} onChange={this.onchangeNomeMusica}/>
                <input placeholder="Nome do artista ou banda" value={this.state.nomeArtista} onChange={this.onchangeNomeArtista}/>
                <input placeholder="Link da música" value={this.state.linkMusica} onChange={this.onchangeLinkMusica}/>
                <button onClick={() => this.criarMusica(playlist.id)}>Criar</button>
            </>
        )
    })
    
    const listMusicas = this.state.musicasPlaylist.map((musica) => {
        return <p>{musica.name}</p>
    })

    return (
      <Container>
        <div>
            <div className='criarPlaylist'>
                <h3>Crie uma playlist</h3>
                <input placeholder="Nome da sua playlist" value={this.state.inputNome} onChange={this.onchangeNomePlaylist}/>
                <button onClick={this.criarNomePlaylist}>Salvar</button>
            </div>

            <div className='listPlaylist'>
                <h4>Minhas playlists</h4>
                {listPlaylist}
            </div>
        </div>
        <div className='listMusic'>
            {listMusicas}
        </div>
      </Container>
    )
  }
}
