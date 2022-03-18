import { Button, Form, Select } from 'antd';
import React from 'react';
import logo from '../../assets/img/bittrex_logo.png';
import wallpaper from '../../assets/img/wallpaper.jpeg';
import '../../css/login.css';
import 'antd/dist/antd.css';
import Texty from 'rc-texty';


interface ILoginProps {
}

interface ILoginStates {
    showWelcome: any;
}


export default class Login extends React.Component<ILoginProps, ILoginStates>{

    private refCondiciones: any;
    constructor(props: any) {
        super(props);
        this.state = {
            showWelcome: false,
        }
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    onClick = () => {
        // this.setState({
        //     showImage: true, showWelcome: true
        // });
        window.location.pathname = "/home";
    }

    public componentDidMount() {
        this.setState({
            showWelcome: true
        })
    }

    render() {
        return (
            <div className='login-background' style={{ backgroundImage: `url(${wallpaper})` }}>
                <Form name="login"
                    // className="login-form" onFinish={this.handleSubmit}
                    className="login-form"
                >
                    <div className="login-img" >
                        <img className='login-form-img' src={logo}></img>
                    </div>
                    <div className="login-img" >
                        <Texty
                            duration={5000}
                            delay={200}
                            type={'flash'}
                            className={"login-form-welcome"}
                        >
                            {this.state.showWelcome && '¡Bienvenido!'}
                        </Texty>
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => this.onClick()}>
                            Comenzar
                        </Button>
                    </Form.Item>
                </Form>
            </div >
        )
    }
}

