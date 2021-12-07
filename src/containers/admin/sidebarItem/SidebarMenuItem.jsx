import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const Container = styled(NavLink)``
const Title = styled.span`
  color: antiquewhite;
`

const SidebarMenuItem = ({menuItem}) => {
    return <Container to={menuItem.path}>
        {menuItem.icon}
        <Title>{menuItem.title}</Title>
    </Container>
}

export default SidebarMenuItem
