import axios from "axios";
import React from "react";


export default class ListUsers extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.Users()
    }

    Users = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: 'filipe-talyson-hopper'
            }
        }).then((res) => {
            console.log(res)
            this.setState({users: res.data})
        }).then((err) => {
            console.log(err)
        })
    }

    deleteUser = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: 'filipe-talyson-hopper'
            }
        }).then((res) => {
            if(alert('Tem certeza que deseja excluir este usuário?')) {
                this.Users()
                alert('Usuário deletado com sucesso')
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        const list = this.state.users.map((user) => {
            return <li>{user.name} <button onClick={() => this.deleteUser(user.id)}>X</button></li>
        })
        return (
            <ul>
                {list}
            </ul>
        )
    }
}