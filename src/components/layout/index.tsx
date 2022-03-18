import { Layout, Menu, Breadcrumb, Button } from 'antd'
import { BrowserRouter, HashRouter, Route, Router, Switch, Redirect } from 'react-router-dom';
import React from 'react'
import '../../css/home/home.css';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    LogoutOutlined,
    ShoppingCartOutlined,
    FileDoneOutlined,
    ShoppingOutlined,
    HomeOutlined
} from '@ant-design/icons';
import App from '../../App';
import { NavLink } from "react-router-dom";
// import MantenedorUsuarios from '../Usuarios/MantenedorUsuarios';
// import FormLogin from '../Login/FormLogin';
import img from '../../assets/img/ICONO.png';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

interface IHomeProps {
    data: any;
}

interface IHomeState {
    collapsed: boolean;
    loggedIn: boolean;
    current: string;
    currentUser: any;
}

export default class AppLayout extends React.Component<IHomeProps, IHomeState>{

    constructor(props: any) {
        super(props);
        this.state = {
            collapsed: false,
            loggedIn: false,
            current: '',
            currentUser: ''
        }

        this.logOut = this.logOut.bind(this);
    }

    componentDidMount() {
        const isLogged = (sessionStorage.getItem("usuario") !== null) ? true : false;
        //alert(isLogged)
        this.setState({
            loggedIn: isLogged
        })

        this.setState({ currentUser: sessionStorage.getItem("usuario") })
    }

    public handleHeaderMenuClick = (option: string) => {
        this.setState({ current: option });
    }

    onCollapse = (collapsed: any) => {

        this.setState({ collapsed });
    };

    public logOut() {
        // window.location.href='/';
        sessionStorage.clear();
        //this.setState({isLogged:true});
        //return (<Redirect to={{ pathname: '/login' }} />)
        window.location.pathname = "/login";

    }



    render() {
        const { collapsed } = this.state;
        // if (!this.state.loggedIn){
        //   return <FormLogin {...this.props.data} />;
        // }

        return (

            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo">

                    </div>
                    {/* <img src={img} style={{width:'100px'}}/> */}
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1" icon={<HomeOutlined />}><NavLink to="/home">{this.state.current == "usuarios"}<span>Home</span></NavLink>

                        </Menu.Item>
                        <Menu.Item key="2" icon={<UserOutlined />}><NavLink to="/usuarios">{this.state.current == "usuarios"}<span>Usuarios</span></NavLink>

                        </Menu.Item>
                        <Menu.Item key="3" icon={<DesktopOutlined />}><NavLink to="/clientes">{this.state.current == "usuarios"}<span>Clientes</span></NavLink>

                        </Menu.Item>
                        {/* <Menu.Item key="4" icon={<ShoppingOutlined />}><NavLink to="/productos">{this.state.current == "usuarios"}<span>Productos</span></NavLink>

            </Menu.Item> */}
                        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                  <Menu.Item key="3">Tom</Menu.Item>
                  <Menu.Item key="4">Bill</Menu.Item>
                  <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu> */}
                        <Menu.Item key="5" icon={<FileDoneOutlined />}><NavLink to="/pedidos">{this.state.current == "usuarios"}<span>Pedidos</span></NavLink>

                        </Menu.Item>
                        <Menu.Item key="6" icon={<ShoppingCartOutlined />}><NavLink to="/ventas"><span>Ventas</span></NavLink>

                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ background: '#ffffff' }}>
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        <span style={{ float: 'right', paddingRight: '10px' }}><Button type="primary" onClick={this.logOut} icon={<LogoutOutlined title="Cerra sesión" />}></Button></span>
                        <span style={{ float: 'right', paddingRight: '10px', color: 'white' }}>Bienvenido: {this.state.currentUser}</span>
                    </Header>

                    <Content style={{ margin: '0 5px' }}>
                        <div className="site-layout-background" style={{ padding: 8, background: '#ffffff' }}>

                            <App {...this.props.data} />
                        </div>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  Bill is a cat.
                </div> */}

                    </Content>
                    {/* <Footer style={{ textAlign: 'center' }}>Created by PowerData</Footer> */}
                </Layout>
            </Layout>
        )
    }


}
