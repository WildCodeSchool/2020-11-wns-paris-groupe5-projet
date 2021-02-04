import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Checkbox, Card, Layout, Menu } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import { Alert } from 'antd';

const { Header } = Layout;

const Login = () => {
    const [token, setToken] = useState("");

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    
        axios.post('http://localhost:5000/api/user/login', values)
          .then(res => {
            setToken(true);
          })

          .catch(err => {
            console.log(err)
          });
    
      };

      if (token === true) return <Redirect to="/Menu1" />;


  return (
    <Router>
        <Layout style={{ minHeight: "100vh" }}>
            <Header className="header">
            <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                    <Menu.Item key="2">
                    <Link to="/">Home</Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Row justify="space-around" align="middle">
            <Col>
                <Card justify="space-around" align="middle">
                <h1>Connectez-vous</h1>
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: 'Remplir le champ' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Adresse e-mail" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Remplir le champ' }]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Mot de passe"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Se souvenir de moi</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="/registrationForm">
                    Mot de passe oublié ?
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    Se connecter
                    </Button>
                    <Link className="link" to={"/registrationForm"}> Pas encore inscrit ?</Link>
                </Form.Item>
                </Form>
                </Card>
            </Col>
            </Row>
        </Layout>
    </Router>
  );
};

export default Login;
