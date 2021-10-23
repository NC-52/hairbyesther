import React, {useState} from 'react'
import {Avatar, Breadcrumb, Layout, Menu, Popover} from "antd";
import Title from "antd/es/typography/Title";
import {
    AppstoreOutlined,
    LogoutOutlined,
    MailOutlined,
    PieChartOutlined,
    SettingOutlined,
    UserOutlined
} from '@ant-design/icons';

const {Sider, Header, Content, Footer} = Layout
const {SubMenu} = Menu

const AdminPanel = (props) => {
    const [popVisible, setPopVisible] = useState(false)
    const popoverHandler = visible => {
        setPopVisible(visible)
    }
    const popHide = () => {
        setPopVisible(false)
    }
    return (<>
        <Layout>
            <Header
                style={{
                    background: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <Title level={3}>Estelle admin</Title>
                <Popover
                    content={<Menu mode='inline'>
                        <Menu.Item icon={<UserOutlined />}>User Settings</Menu.Item>
                        <Menu.Item icon={<LogoutOutlined/>}>Logout</Menu.Item>
                    </Menu>}
                    // content={<a onClick={popHide}>Logout</a>}
                    // title="Title"
                    // trigger="click"
                    visible={popVisible}
                    onVisibleChange={popoverHandler}
                >
                    <Avatar icon={<UserOutlined/>}/>
                </Popover>
            </Header>
            <Layout>
                <Sider>
                    <Menu
                        defaultSelectedKeys={['0']}
                        defaultOpenKeys={['sub1']}
                        style={{height: '100%', borderRight: 0}}
                        mode="inline"
                    >
                        <Menu.Item key="0" icon={<PieChartOutlined/>}>Dashboard</Menu.Item>
                        <SubMenu key="sub1" icon={<MailOutlined/>} title="Products">
                            <Menu.ItemGroup key="g1" title="In Stock">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup key="g2" title="Issues">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Orders">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" icon={<SettingOutlined/>} title="Navigation Three">
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Breadcrumb style={{margin: '16px 24px'}}>
                        <Breadcrumb.Item>General Overview</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{
                        margin: '0 24px',
                        minHeight: '90vh',
                        background: '#fff',
                        padding: '0 24px 24px'
                    }}>

                        Content
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Hair by Estelle Services, All right reserved ©2021</Footer>
                </Layout>
            </Layout>
        </Layout>
    </>)
}

export default AdminPanel
