import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, HashRouter, Route, Router, Switch, Redirect } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';

// import Home from './Components/Home/Home';
import Login from './components/login/index';
import Home from './components/home/index';
// import MantenedorUsuarios from './Components/Usuarios/MantenedorUsuarios';
// import MantenedorClientes from './Components/Clientes/MantenedorClientes';

// import MantenedorProductos from './Components/Productos/MantenedorProductos';
// import AppLayout from './Components/Layout/Layout';

// import MantenedorPedidos from './Components/Pedidos/MantenedorPedidos';
// import MantenedorVentas from './Components/Ventas/MantenedorVentas';
// import DetallePedido from './Components/Pedidos/DetallePedido';


interface IAppProps {
  onUnauthorizedAction?: any;
  token?: string;
  search?: string;
  resetFilter?: any;
  data: any;
  dataPedidos: any;
}

interface IAppState {
  loggedIn: boolean;

}

const AuthComponent = (loggedIn: any) => {
  return loggedIn ? <Redirect to="/" /> : <Redirect to="/login" />
}

class App extends React.Component<IAppProps, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {
    // const isLogged = (sessionStorage.getItem("usuario") !== null) ? true : false;

    // this.setState({
    //   loggedIn: isLogged
    // })
  }

  public render() {
    return (
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        {/* <Route exact path="/usuarios" render={(routeProps) => (
              <MantenedorUsuarios {...this.props} />
            )} />
            <Route exact path="/clientes" render={(routeProps) => (
              <MantenedorClientes {...this.props} />
            )} /> */}
        <Route exact path="/" render={(routeProps) => (<Login {...this.props.data} />)} />
        <Route exact path="/home" render={(routeProps) => (<Home {...this.props.data} />)} />
        {/* <Route exact path="/pedidos" render={(routeProps) => (
              <MantenedorPedidos {...this.props} />
            )} />
            <Route exact path="/productos" render={(routeProps) => (
              <MantenedorProductos {...this.props} />
            )} />
            <Route exact path="/ventas" render={(routeProps) => (
              <MantenedorVentas {...this.props} />
            )} />
            <Route exact path="/detalle-pedido" render={(routeProps) => (
              <DetallePedido {...this.props} data={routeProps} />
            )} /> */}
      </Switch>








    );
  }

}

export default App;
