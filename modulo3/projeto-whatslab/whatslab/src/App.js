/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import './App.css'
import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';
// import DonutLargeIcon from '@mui/icons-material/DonutLarge';
// import ChatIcon from '@mui/icons-material/Chat';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

const AppWindow = styled.div`
  display: flex;
  height: 100vh;
  background-color: #EDEDED;
  .sidebar{
    width: 35%;
    max-width: 415px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #DDD;
    header {
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      .header-avatar {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        cursor: pointer;
      }
      .header-buttons {
        display: flex;
        .header-btn {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
    .search {
      background-color: #f6f6f6;
      border-bottom: 1px solid #eee;
      padding: 5px 15px;
      .search-input{
        background-color: #fff;
        height: 40px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        padding: 0 10px;
        input{
          flex: 1;
          border: 0;
          outline: 0;
          background-color: transparent;
          margin-left: 10px;
        }
      }
    }
    .chatList{
      flex: 1;
      background-color: #FFF;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2)
      }
    }
  }
  .contentarea{
    flex: 1;
  }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [chatlist, setChatList] = useState([
    {
      chatId: 1, 
      title: 'Joana', 
      image: 'https://img.elo7.com.br/product/main/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg'
    },
    {
      chatId: 2, 
      title: 'Aline', 
      image: 'https://img.elo7.com.br/product/main/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg'
    },
    {
      chatId: 3, 
      title: 'Pedro', 
      image: 'https://img.elo7.com.br/product/main/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg'
    },
    {
      chatId: 4, 
      title: 'Henrique', 
      image: 'https://img.elo7.com.br/product/main/3E26D20/desenho-personalizado-para-perfil-desenho-personalizado.jpg'
    }
  ]);

  const [activeChat, setActiveChat] = useState({});

  return (
    <AppWindow>
      <div className='sidebar'>
          
        <header>
          <img className='header-avatar' src='https://www.w3schools.com/howto/img_avatar.png' />
          <div className='header-buttons'>
            <div className='header-btn'>
              {/* <DonutLargeIcon style={{color: '#919191'}}/> */}
              ...
            </div>

            <div className='header-btn'>
              {/* <ChatIcon style={{color: '#919191'}}/> */}
              ...
            </div>

            <div className='header-btn'>
              {/* <MoreVertIcon style={{color: '#919191'}}/> */}
              ...
            </div>
          </div>
        </header>

        <div className='search'>
          <div className='search-input'>
            icone
            <input type="search" placeholder='Pesquisar ou começar uma nova conversa'/>
          </div>
        </div>

        <div className='chatList'>
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={()=>setActiveChat(chatlist[key])}
            />
          ))}
        </div>

      </div>

      <div className='contentarea'>
        {activeChat.chatId !== undefined && <ChatWindow />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </AppWindow>
  )
}
