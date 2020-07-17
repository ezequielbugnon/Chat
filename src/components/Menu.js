import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

const Menu = ({message}) => {

    return (
        <ScrollToBottom className="container" >
        
            {message ?
                message.map(msg => (
                    <div className="container_div" key={msg.date}>
                        <p>{msg.name}<span> {msg.date}</span></p>
                        <p>
                         Dice: {msg.message}
                        </p>
                    </div>
                )): null
            }

            
           
        </ScrollToBottom>
    );
}

export default Menu;