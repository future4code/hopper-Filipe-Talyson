import React, {Component} from 'react'
import styled from 'styled-components'
import { IconeComContador } from '../IconeComContador/IconeComContador'
import iconeFacebook from '../../img/facebook.png'
import iconeInstagram from '../../img/instagram.png'
import iconeTwitter from '../../img/twitter.png'

const IconesContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;

	img {
		width: 20px;
		height: 20px;
		margin: 5px 20px;
	}
`

export class IconesDeCompartilhamentos extends Component {
	onClickFacebook = () => {
		alert('Post compartilhado no Facebook')
	}
	onClickInstagram = () => {
		alert('Post compartilhado no Instagram')
	}
	onClickTwitter = () => {
		alert('Post compartilhado no Twitter')
	}

	render() {
		return (
			<IconesContainer>
				<IconeComContador
					icone={iconeFacebook}
					onClickIcone={this.onClickFacebook}
				/>

				<IconeComContador
					icone={iconeInstagram}
					onClickIcone={this.onClickInstagram}
				/>

				<IconeComContador
					icone={iconeTwitter}
					onClickIcone={this.onClickTwitter}
				/>
			</IconesContainer>
		)
	}
}
