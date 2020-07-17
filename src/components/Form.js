import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

const Formulario = styled.form`
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & div{
        margin: 1rem;
        display: flex;
        flex-direction: column;

        & label {
            margin-bottom: 1rem;
            font-size:2rem;
        }

        & input, select {
            height: 2rem;
            font-size: 1.4rem;
        }

    }

    & input[type=submit]{
        margin-left: 1rem;
        margin-right: 1rem;
        margin-top:1rem;
        font-size: 1.4rem;
        height:2rem;
    }
`

const Div = styled.div`
    width:100%;
    height:100%;
    display: flex;
`

const Form = () => {


    const [login, setLogin] = useState({
        name:'',
        room:''
    })

    const setChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

    const { name, room } = login;
    let history = useHistory();

    const onSubmited = (e) => {
       e.preventDefault();

        if(name.trim() === '' && room.trim() === ''){
            alert('Debes ingresar los datos para acceder');
        }else{
            history.push(`/main?name=${name}&room=${room}`)
        }
    }

    return (
        <Div>
        <Formulario 
                    onSubmit={onSubmited}
        >
           <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" 
                       name="name"
                       placeholder="Introduce tu nombre"
                       onChange={setChange}
                />
            </div>

            <div>
                <label htmlFor="room">Sala</label>
                <select name="room"
                        onChange={setChange}
                >
                        <option >----ELIGE UNA OPCION----</option>
                        <option value="JavaScript">JavaScript</option>
						<option value="Python">Python</option>
						<option value="PHP">PHP</option>
						<option value="C">C#</option>
						<option value="Ruby">Ruby</option>
						<option value="Java">Java</option>
                </select>
            </div>
            

            <input type="submit"/>

        </Formulario>
        </Div>
    );
}

export default Form;