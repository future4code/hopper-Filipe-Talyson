import React from 'react'
import styled from 'styled-components'

const ChatIntro = styled.div`
    background-color: #f8f9fa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-bottom: 6px solid #4adf83;
    img {
        width: 250px;
        height: auto;
    }
    h1 {
        font-size: 32px;
        color: #525252;
        font-weight: normal;
        margin-top: 30px;
    }
    h2 {
        font-size: 14px;
        color: #777;
        font-weight: normal;
        margin-top: 20px;
        line-height: 20px;
        text-align: center;
    }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <ChatIntro>
            <img src='' alt='Imagem whatsapp'/>
            <h1>WhatsApp Web</h1>
            <h2>Agora voce pode enviar e receber mensagens sem precisar manter seu celular conectado á internet</h2>
            <h2>Use o WhatsApp em até quatro aparelhos conectados e um celular ao mesmo tempo</h2>
        </ChatIntro>
    )
}