import React from 'react';
import styled from 'styled-components'

const Contenedor = styled.div`
    background:#B8F0F0;
    width:200px;
    height:100%;
    border-right:1px solid #ADC8C8;

        & i{
            margin: .6rem
        }
`


const Aside = ({roomData}) => {

    const {room, users} = roomData
   

    return (
        <Contenedor>
            <div><i className="far fa-comment-alt"></i>${room}</div>
            <div><i className="fas fa-users"></i> Usuarios</div>
            <ul className="list-users">
            {
                users.map(user => ( <li  key={user.id}>${user.username}</li>) )
            }
            </ul>
        </Contenedor>
    );
}

export default Aside;