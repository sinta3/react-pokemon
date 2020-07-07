import React,{useState} from 'react'
import {useHistory} from 'react-router-dom';


import styled from 'styled-components'

const Form = styled.form`
    margin:auto;
    margin-top:50px;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    border:1px solid teal;
    height:200px;
    width:300px;
`;

const Input = styled.input`
    width:200px;
    text-align:center;
    margin:auto;
`;

const Button = styled.button`
    width:200px;
    text-align:center;
    margin:auto;
    padding:0;
    background-color:teal;
`;

const Title = styled.h4`
    text-align: center;
`;
function Login() {
    let history = useHistory();

    const [userLog,setUserLog] = useState({
        email:'',
        password:'',
    });

    function handleChange(event){
        setUserLog({
            ...userLog,
            [event.target.name] : [event.target.value]

        });
    };

    function handleSubmit(event){
        event.preventDefault();

        localStorage.setItem('user',JSON.stringify(userLog));
        
        history.push('./pokemons')
    }
    return (
        <div>
            <Title>Sign In to access pokemon</Title>
           <Form onSubmit={handleSubmit}>
          
                 <Input type="text" name="email" value={userLog.email} placeholder="email" onChange={handleChange}/>
            
                 <Input type="password" name="password" value={userLog.password} placeholder="password" onChange={handleChange}/>
             
             <Button type="submit" >Login</Button> 
           </Form> 
        </div>
    )
}

export default Login
