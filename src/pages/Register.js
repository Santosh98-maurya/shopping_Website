import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import {BASE_URL} from '../requestMethods';

import { useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  ${mobile({width: "75%"})}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Loginbtn = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-left: 10px;
`;

const Register = () => {

 
  const location = useLocation();

  const [user, setUser] = useState({
    name: '',
    lastname:'',
    username:'',
    email:'',
    password: '',
    cpassword:''
  })

  const handleInput=(e)=>{
    e.preventDefault();
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();

        
    if(user.password !== user.cpassword){
        window.alert("Password and Confirm password must be same !!!");
    }else{

      const response = await fetch(BASE_URL+'auth/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
        
      });
      const res = await response.json();
      if (res.err) {
      window.alert("User is already registered");
      } else {
        window.alert("User Register Sucessfully");
        setUser({...user,
          name: '',
          lastname:'',
          username:'',
          email:'',
          password: '',
          cpassword:''})
          window.location.replace( location.search = "/login")
        }
      }
       
  }
  const handleLogin = (e)=>{
    e.preventDefault();
    window.location.replace( location.search = "/login")
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"  name='name' value={user.name} onChange={(e)=> handleInput(e)} />
          <Input placeholder="last name" name='lastname' value={user.lastname} onChange={(e)=> handleInput(e)} />
          <Input placeholder="username"  name='username' value={user.username} onChange={(e)=> handleInput(e)} />
          <Input placeholder="email"  name='email' value={user.email} onChange={(e)=> handleInput(e)} />
          <Input type={"password"} placeholder="password"  name='password' value={user.password} onChange={(e)=> handleInput(e)} />
          <Input type={"password"} placeholder="confirm password"  name='cpassword' value={user.cpassword} onChange={(e)=> handleInput(e)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit}>CREATE</Button>
          <Loginbtn onClick={handleLogin}>LOGIN</Loginbtn>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;