import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 6px #6f6f6f;
  margin: 8px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.span`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #3e3e3e;
  border-radius: 0 0 8px 8px;
  font-size: 20px;
  color: antiquewhite;
  padding: 4px 8px;
  display: flex;
  justify-content: flex-end;
`
const ItemInfo = styled.div`
  display: flex;
  font-size: 32px;
  color: #1e1e1e;
  padding: 16px;
  justify-content: center;
  font-weight: bold;
`
const Icon = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 50px;
  border: none;
  color: #2e2e2e;
`


const StatCard = ({itemDetails}) => {
    return <CardContainer>
        <ItemInfo>
            {itemDetails.value}
        </ItemInfo>
        <Icon>{itemDetails.icon && itemDetails.icon}</Icon>
        <Title>{itemDetails.title}</Title>
    </CardContainer>
}

export default StatCard
