import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from "@ant-design/icons";
import FetchData from "./FetchData";


const { Header, Content, Footer, Sider } = Layout;


function DashBoard() {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };

  return (
    <Router>
      <Switch>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Liste des élèves
                </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Calendrier
                </Menu.Item>
              <Menu.Item key="3" icon={<FileOutlined />}>
                Exercices
            </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="header">
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                <Menu.Item key="1">Sign in</Menu.Item>
                <Menu.Item key="2"><Link to='/registrationForm'>Sign up</Link></Menu.Item>
                <Menu.Item key="4"><Link to='/chat'>Chat</Link></Menu.Item>
                <Menu.Item key="3"><Link to='/:roomId'>Room</Link></Menu.Item>
              </Menu>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Utilisateur</Breadcrumb.Item>
                <Breadcrumb.Item>Formateur</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <FetchData />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Hello from GROUPE 5</Footer>
          </Layout>
        </Layout>
      </Switch>
    </Router>
  );
}

export default function Menu1() {
  return <DashBoard />
}