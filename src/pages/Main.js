import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import Nav from '../components/Nav'
import Aside from '../components/Aside'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import socketIOClient from 'socket.io-client'
import queryString from 'query-string';
const ENDPOINT = "http://localhost:4000";

const Background = styled.div`
   background-color: #FFDEE9;
   background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
   width:100%;
   height:100vh;
   display: flex;
   align-items: center;
   justify-content:center;

`    

const Contenedor = styled.div`
   width:80%;
   height:80%;
   background: white;
   -webkit-box-shadow: 1px 3px 5px 4px rgba(199,199,199,1);
   -moz-box-shadow: 1px 3px 5px 4px rgba(199,199,199,1);
   box-shadow: 1px 3px 5px 4px rgba(199,199,199,1);
   display: grid;
   grid-template-rows: 7vh 1fr 9vh;
   grid-template-columns: 200px 1fr;
` 

let socket;

const Main = ({ location }) => {

   const [message, changeMessage] = useState([]);
   const [roomData, setRoomData ] = useState({
      room: '',
      users: []
   })
   const [dataChat, setChatData] = useState('');

   useEffect(() => {
      socket = socketIOClient(ENDPOINT);
      
      const { name, room } = queryString.parse(location.search);
   
     if(name && room){
        
         socket.emit('joinRoom',  name, room );


         socket.on('roomUsers', ( room, users ) => {
            setRoomData(room, users)
         });
     }
      
    }, [location.search]);

   useEffect(() => {
      
      socket.on('message', data => {
         
         changeMessage([...message,data]);
      });
   }, [message])

   useEffect(() =>{
      console.log(dataChat)
      if(dataChat.trim() !== '') {
        socket.emit('chat', dataChat);
      }
    }, [dataChat])




   return (
      <Background>
          <Contenedor>
             <Nav/>
             <Aside
               roomData = { roomData }
             />
             <Menu
                message = {message}
             />
             <Footer
               setChatData = {setChatData}
            
             />
          </Contenedor>
      </Background>
   )
   
};

export default Main;