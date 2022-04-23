import React from 'react';
import styled from 'styled-components'

const SmallCard = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 70px;
`

const ImgCard = styled.img`
    width: 30px;
`

const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <SmallCard>
            <ImgCard src={ props.imagem } />
            <DivCard>
                <p>{ props.descricao }</p>
            </DivCard>
        </SmallCard>
    )
}

export default CardGrande;