import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { BASE_URL } from "../requestMethods";
import { loginSuccess } from "../redux/userRedux";
import { useDispatch } from "react-redux";

import { useLocation } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({width: "75%"})}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const location = useLocation();

  const handleInput=(e)=>{
    e.preventDefault();
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const response = await fetch(`${BASE_URL}auth/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)

    });
    const data = await response.json();
    console.log("DAAATAAAATAA", data)
    if(data.error){
      window.alert("wrong credentails !")
    }else {
      if(data.accessToken)
      {
        window.localStorage.setItem('accessToken',data.accessToken);
        await dispatch(loginSuccess(data.username))
        window.alert(`${data.username} Logged in successfully`)
        window.location.replace(location.search = '/');
      }
    }
  }
const handleChange =()=>{
  window.location.replace(location.search = '/register');
}
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
        <Input placeholder="username" name='username' value={formData.username} onChange={(e)=> handleInput(e)} />
        <Input type={"password"} placeholder="password" name='password' value={formData.password} onChange={(e)=> handleInput(e)} />
          <Button onClick={handleSubmit}>LOGIN</Button>
          <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
          <Links onClick={handleChange}>CREATE A NEW ACCOUNT</Links>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;





