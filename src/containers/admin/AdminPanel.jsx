import React, {useState} from 'react'
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import {Avatar} from "antd";
import * as AiIcons from "react-icons/ai";
import {ReactComponent as HairByEstelleLogo} from "../../assets/logo/hairbyestelle.svg";
import UserOutlined from "@ant-design/icons/lib/icons/UserOutlined";
import Dashboard from "./dashboard/Dashboard";
import {sidebarMenuData} from "./sidebarMenuData";
import SidebarMenuItem from "./sidebarItem/SidebarMenuItem";
import Orders from "./orders/Orders";

const Container = styled.div`
//#ff9955
`

const AdminNavbar = styled.nav`
  height: 4rem;
  background: #022d42;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 4px 8px #3e3e3e;
`

const ConnectedUserInfo = styled.button`
  border: none;
  padding: 8px;
  background: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &:hover{
    background: #023e5a;
    transition: all .3s ease;
  }
`
const Username = styled.span`
  color: antiquewhite;
  margin-right: 8px;
`
const AdminContentWrapper = styled.div`
  display: flex;
  position: relative;
`
const LeftMenuPanel = styled.div`
  background: #02334c;
  width: ${({showSidebar}) => showSidebar ? '300' : '75'}px;
  position: fixed;
  top: 4rem;
  height: 100vh;
  left: 0;
  transition: 350ms;
  z-index: 10;
`
const AppContentWrapper = styled.div`
  background: white;
  position: relative;
  top: .6rem;
  border: 1px solid springgreen;
  left: ${({showSidebar}) => showSidebar ? '300' : '85'}px;
  transition: 350ms;
`
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #868686;
`

const AdminPanel = (props) => {
    const [showSidebar, setShowSidebar] = useState(false)

    const toggleSidebar = () => {
        setShowSidebar(prevState => !prevState)
    }

    return (
        <Container>
            <AdminNavbar>
                <div>
                    <AiIcons.AiOutlineBars onClick={toggleSidebar}
                                           style={{color: 'antiquewhite', fontSize: '1.5rem', marginRight: 16}}/>
                    <HairByEstelleLogo/>
                </div>
                <ConnectedUserInfo>
                    <Username>
                        Username
                    </Username>
                    {/*// TODO: Get image of connected user, and set it into avatar*/}
                    <Avatar icon={<UserOutlined/>}/>
                </ConnectedUserInfo>
            </AdminNavbar>
            <AdminContentWrapper>
                <LeftMenuPanel showSidebar={showSidebar}>
                    {
                        sidebarMenuData.map((item, index) => (
                            <SidebarMenuItem menuItem={item} key={index}/>
                        ))
                    }
                </LeftMenuPanel>
                <AppContentWrapper showSidebar={showSidebar}>
                    <Switch>
                        <Route path='/secure-admin/dashboard' component={Dashboard}/>
                        <Route path='/secure-admin/orders' component={Orders}/>
                    </Switch>
                </AppContentWrapper>
            </AdminContentWrapper>
            {/*<Footer>*/}
            {/*    <span>Hair by Estelle, &copy;2022 all rights reserved</span>*/}
            {/*</Footer>*/}
        </Container>
    )
}

export default AdminPanel
