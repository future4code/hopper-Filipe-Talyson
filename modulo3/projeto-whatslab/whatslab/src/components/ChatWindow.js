import React from 'react'
import styled from 'styled-components'

const ChatWindow = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    .chatWindow-header {
        height: 60px;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .chatWindow-headerinfo {
            display: flex;
            align-items: center;
            cursor: pointer;
            .chatWindow-avatar{
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-left: 15px;
                margin-right: 15px;
            }
            .chatWindow-name {
                font-size: 17px;
                color: #000;
            }
        }
        .chatWindow-headerbuttons {
            display: flex;
            align-items: center;
            margin-right: 15px;
            .chatWindow-btn {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }
        }
    }

    .chatWindow-body {
        flex: 1;
        overflow-y: auto;
        background-color: #e5ddd5;
        background-position: center;
        background-size: cover;
        background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIVFRUXFxcXFRUXFxUXFxcXFxUWFxUXFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0NDg0NDjcZFRkrKysrKysrKysrKysrKysrKysrKysrNzcrLSsrKysrKysrKysrKysrKysrKysrKysrK//AABEIAL0BCgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIDB//EACQQAQEBAAICAQMFAQAAAAAAAAABERNhAgMSIUFxMZGhwfBR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/APXUtUZaSC4QADQRahAULEwCkq0oJpFoAVFADACoqYCmpVAKAM6tMXAAARU0lAiliAU1YzfLsFqhQC1KSAED4gupb9VwoBiUgFhV1NADDQUQBRJF0CiYoJKuIQF1J9FAKRKgKFMBdTyXDAIIAqfH8KfIBLABdTTSAqQSAunitqQFGFnQLAKBarK6CkiEoCfJaQCXQNBMaS00FLEhADTTAVKIC1L9Wk0FtKz5RN/cGj4lNv8AwELSJiC6SsyqC79i0gBDQ0AIAn4N+0Ji2goyoBRNBpIABYaAjSGgkUn6pYCym9VmqC6akWgkatRAXSwLAL/v6TaVZnQIqEoFJEi2ABKQF1E1QASAqoAUiANIQoEDSgGsroLp8jSgVUoCpnaVQBFBUtLUgLEVNBpNKoM6WhoJ5eS6YaCiUgFKUwEWIoAAFMADCkAKQkT5AuEACAAWmhoJaeNUlAVIkBpDCQEq6igaYGAlPGlIKhipQXRloDEqghATRVSqQEipKsEKajQqaiw0AABdSJQWoqYC1FKAVFgGFAE8VRQD5EqZf9oJI0zaUFqWqWgSgAqJFoM41DCAWpq4AusrpaAABYUMAKmloLFZUEsUqA0lqLKBKrK6AIoJ5QioCpsXEAlJUtWIJVADBKmg0aeJoEpolBdJUp4gthEpYBqphP0A0oaBLFtJEBYJ91BNXUpKC1FIAIaCmpFA0tEBTYhnYJV7SEA0WFoFMTsAFIAEgAhamg0RN6WUFqEqYCkQBTEv4AU1DxBdTClBdTStaCFiABYsICRUxaAfsM/IFJUUAiaoBEhaCxLVhQZ8a1qQBRKAtSFpoBFSAtBKCjNAaIkUA1FAp9DTQCJVoFNRQZlaqFBab2amAkqul9XZwdg5prpxdrxdkHM114u0vp7BzHTi7OLsHKUrrPV2X09g5wrpxdnF2DmOl9PZxd/wDlq1uenteLsHO1HWersnp7Bz1HXi7L6uwcqsdOHs4ewcldOLtOHsGIjrxdnF3/AOY6cXa8XYOKuk9PZxdg5WrXTi7OHsHKLjpxdnD2D/2Q==');
    }

    .chatWindow-footer {
        height: 62px;
        display: flex;
        align-items: center;
        .chatWindow-pre {
            display: flex;
        }
        .chatWindow-inputarea {
            flex: 1;
            .chatWindow-input {
                width: 100%;
                height: 40px;
                border: 0;
                outline: 0;
                background-color: #fff;
                border-radius: 20px;
                font-size: 15px;
                color: #4a4a4a;
                padding-left: 15px;
            }
        }
        .chatWindow-pos {
            display: flex;
        }
    }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <ChatWindow>
            <div className='chatWindow-header'>
                <div className='chatWindow-headerinfo'>
                    <img className='chatWindow-avatar' src='https://img.elo7.com.br/product/main/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg'/>
                    <div className='chatWindow-name'>Filipe Vidal</div>
                </div>

                <div className='chatWindow-headerbuttons'>

                    <div className='chatWindow-btn'>
                        icone
                    </div>
                    <div className='chatWindow-btn'>
                        icone
                    </div>
                    <div className='chatWindow-btn'>
                        icone
                    </div>

                </div>
            </div>

            <div className='chatWindow-body'>

            </div>

            <div className='chatWindow-footer'>
                <div className='chatWindow-pre'>

                    <div className='chatWindow-btn'>
                        icone
                    </div>

                </div>

                <div className='chatWindow-inputarea'>
                    <input className='chatWindow-input' type='text' placeholder='Digite uma mensagem'/>
                </div>

                <div className='chatWindow-pos'>

                    <div className='chatWindow-btn'>
                        icone
                    </div>

                </div>
            </div>
        </ChatWindow>
    )
}