import React from 'react'
import styled from 'styled-components'

const IconContainer = styled.div`
	display: flex;
	.imgfavorito {
		margin-top: 5px;
		margin-right: -10px;
		width: 20px;
		height: 20px
	}

	.imgcompartilhar {
		margin-top: 16px;
		width: 20px;
		height: 20px;
	}
`
const IconImage = styled.img`
	margin-right: 5px;
`

export function IconeComContador(props) {
	return <IconContainer>
		<IconImage alt={'Icone'} src={props.icone} onClick={props.onClickIcone} className={props.classe} />
		<p>{props.valorContador}</p>
	</IconContainer>
}
