import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`

const ImgCard = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const cardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

const H4Card = styled.h4`
    margin-bottom: 15px;
`

function CardGrande(props) {
    return (
        <Card>
            <ImgCard src={ props.imagem } />
            <cardDiv>
                <H4Card>{ props.nome }</H4Card>
                <p>{ props.descricao }</p>
            </cardDiv>
        </Card>
    )
}

export default CardGrande;