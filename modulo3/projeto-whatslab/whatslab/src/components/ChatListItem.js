/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line import/no-anonymous-default-export
const ChatListItem = styled.div`
  display: flex;
  &:hover {
    background-color: #f5f5f5;
  }
  cursor: pointer;
  align-items: center;
  height: 70px;
  .chatListItem-avatar{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 15px;
  }
  .chatListItem-lines{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #eee;
    padding-right: 15px;
    margin-left: 15px;
    flex-wrap: wrap;
    min-width: 0;
    .chatListItem-line{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .chatListItem-name{
            font-size: 17px;
            color: #000;
        }
        .chatListItem-date{
            font-size: 17px;
            color: #999;
        }
        .chatListItem-lastMsg{
            font-size: 14px;
            color: #999;
            display: flex;
            width: 100%;
            p {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                margin: 0;
            }
        }
    }
  }
`
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <ChatListItem>
            <img className='chatListItem-avatar' src='https://www.w3schools.com/howto/img_avatar.png'/>
            <div className='chatListItem-lines'>
                <div className='chatListItem-line'>
                    <div className='chatListItem-name'>
                      Aline Santos
                    </div>
                    <div className='chatListItem-date'>
                      19:00
                    </div>
                </div>
                <div className='chatListItem-line'>
                    <div className='chatListItem-lastMsg'>
                        <p>Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem? Opa, tudo bem?</p>
                    </div>
                </div>
            </div>
        </ChatListItem>
    )
}