import React,{ useState }  from 'react';
import styled from 'styled-components'


const Contenedor = styled.div`
    background:#B8F0F0;
    grid-column:1/3;
    border-top: 1px solid #ADC8C8;

    & form{
        display:flex;
        justify-content:flex-end;
        align-items: center;
        height:100%;
    }
`


const Footer = ({setChatData, sendMessage}) => {


    const [messageChat, newMessageChat] = useState({
        messages:''
    }); 

    

    const onChangeMessageChat = e => {
            newMessageChat({
                ...messageChat,
                [e.target.name]: e.target.value
            })
    }

    const { messages } = messageChat;

    const onSubmit = (e) => {
        e.preventDefault();
        if( messages.trim() === ''){
            console.log('no envies mensajes vacios');
            return
        }
        
        sendData(messages);
        
        newMessageChat({
            messages:''
        })
    }

    const sendData = (data) => {
        setChatData(data);
     
    }

    return (
        <Contenedor>
            <form 
                    onSubmit={onSubmit} 
                    className="foot"
            >
                <input 
                        type="text"
                        name="messages"
                        placeholder="Envia tu mensaje"
                        onChange={onChangeMessageChat}
                        value={messages}
                />
                <button type="submit" >Enviar <i className="far fa-paper-plane"></i></button>
            </form>
        </Contenedor>
    );
}

export default Footer;