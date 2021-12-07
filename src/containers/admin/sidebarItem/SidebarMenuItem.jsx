import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled(NavLink)`
  display: flex;
  height: 3rem;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  color: antiquewhite;
  padding: 0 13px;
  text-decoration: none;
  &:hover{
    color: #ffbe00;
    background: #57341c;
    border-left: 5px solid #ffbe00;
    transition: all .35s ease;
  }
`
const Title = styled.span`
  margin-left: 16px;
`

const SidebarMenuItem = ({showSidebar, menuItem}) => {
    return <Container to={menuItem.path}>
        {menuItem.icon}
        {showSidebar && <Title>{menuItem.title}</Title>}
    </Container>
}

export default SidebarMenuItem
