import React, { useState } from "react";
import { Row, Col, Form, Input, Button, Checkbox, Card, Layout, Menu, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { useAuthContexts } from "../hooks/context";
import logo from '../image/logo-books.jpg';

const { Header } = Layout;

const Login = () => {
  const { login, user } = useAuthContexts();
  const [error, setError] = useState("");

  const onFinish = async ({ email, password }) => {
    try {
      const erorLogin = await login({ email, password });
      setError(erorLogin.error);
    } catch (error) {}
  };

  if (user) return <Redirect to="/" />;
  
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Row justify="space-around" align="middle">
          <Col>
            <Card
              style={{ marginTop: "5rem", boxShadow: "rgb(50 50 93 / 25%) 0px 6px 12px -2px" }}
              className="cardlogin"
              justify="space-around"
              align="middle"
            >
              <img src={logo} alt="Logo" style={{ width: "120px", borderRadius: "50%" }}/>
              <h1>Run<span style={{ color: "orange" }}>School</span></h1>
              <h4 style={{ color: "rgb(74 74 74 / 85%)", marginTop: "20px" }}>Connectez-vous</h4>
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item name="email" rules={[{ required: true, message: "Remplir le champ" }]}>
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Adresse e-mail"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Remplir le champ" }]}
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
                {error && <p style={{ color: "red" }}>{error}</p>}

                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button" style={{ margin: "0 10px 0 10px"}}>
                    Se connecter
                  </Button>
                  <Link className="link" to={"/registrationForm"} style={{ margin: "0 10px 0 10px"}}>
                    {" "}
                    Pas encore inscrit ?
                  </Link>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
};

export default Login;
