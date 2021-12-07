import * as AiIcons from "react-icons/ai";

export const sidebarMenuData = [
    {
        title: 'Dashboard',
        icon: <AiIcons.AiFillDashboard/>,
        path: '/secure-admin/dashboard'
    },
    {
        title: 'Orders',
        icon: <AiIcons.AiOutlineSolution/>,
        path: '/secure-admin/orders'
    },
    {
        title: 'Products',
        icon: <AiIcons.AiFillSkin/>,
        path: '/secure-admin/products'
    },
    {
        title: 'Customers',
        icon: <AiIcons.AiOutlineTeam/>,
        path: '/secure-admin/customers'
    },
    {
        title: 'Messages',
        icon: <AiIcons.AiFillMail/>,
        path: '/secure-admin/messages'
    },
    {
        title: 'Settings',
        icon: <AiIcons.AiFillSetting/>,
        path: '/secure-admin/settings'
    },
    {
        title: 'Help',
        icon: <AiIcons.AiFillQuestionCircle/>,
        path: '/secure-admin/help'
    }
]
