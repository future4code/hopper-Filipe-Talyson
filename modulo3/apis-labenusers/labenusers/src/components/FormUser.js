import React from "react";
import axios from "axios";
import styled from 'styled-components'

const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    input {
        margin: 10px;
        padding: 5px 10px;
        background-color: #2D3D54;
        border: none;
        border-radius: 10px;
        font-size: 1em;
        color: white;
        box-shadow: 0 0 3px #000;
    }
`


export default class ListUsers extends React.Component {
    state = {
        inputName: '',
        inputEmail: ''
    }

    onChangeInputName = (event) => {
    this.setState({inputName: event.target.value})
    }
    
    onChangeInputEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }

    createUsers = () => {
        const body = {
          name: this.state.inputName,
          email: this.state.inputEmail
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
          headers: {
            Authorization: 'filipe-talyson-hopper'
          }
        }).then(() => {
          this.setState({inputName: '', inputEmail: ''})
          alert('Usuário criado com sucesso')
        }).catch(() => {
          alert('Erro ao criar usuário')
        })
    }

    render() {

        return (
            <Form>
                <h2>Cadastre-se</h2>
                <input value={this.state.inputName} onChange={this.onChangeInputName} placeholder='Nome' />
                <input value={this.state.inputEmail} onChange={this.onChangeInputEmail} placeholder='Email' />
                <button onClick={this.createUsers}>Criar Usuário</button>
            </Form>
        )
    }
}