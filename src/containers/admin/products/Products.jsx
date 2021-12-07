import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 16px;
`

const Products = () => {
    return <Container>
        <h1 style={{color: '#868686', fontSize: 32}}>Product management</h1>
    </Container>
}

export default Products
