import React from 'react';
import Form from '../components/Form';
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height:100vh;
`
const Background = styled.div`
    background-color: #FFDEE9;
    background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
    flex: 0 0 60%;
`    

const Login = () => {
      


    return (
        <Div>
            <Form/>
            <Background/>
        </Div>
    );
}

export default Login;