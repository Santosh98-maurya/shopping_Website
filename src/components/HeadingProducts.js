import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  height: 15vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  letter-spacing: 15px;
  font-family: emoji;
  font-size: 80px;
  margin-bottom: 50px;
`;

const HeadingProducts = () => {
  return (
    <Container>
      <Title>PRODUCTS</Title>
    </Container>
  )
}

export default HeadingProducts
