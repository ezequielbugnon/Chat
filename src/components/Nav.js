import React from 'react';
import styled from 'styled-components';



const Contenedor = styled.div`
    display:flex;
    width:100%;
    height:7vh;
    align-items: center;
    justify-content: space-between;
    background:#ADC8C8;
    border-bottom:1px solid #688AB2;   
    grid-column: 1 / 3;
`

const Nav = () => {


    return (
        <Contenedor>
            <h1><i className="fas fa-smile"></i>Dardo Chat</h1>
      
            <a className="btn" href="/">Logout</a>
       
            
        </Contenedor>
    );
}

export default Nav;