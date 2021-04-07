import React, { useState } from "react";
import FetchData from "./FetchData";
import Forum from "./Forum";
import Chat from "./Chat";
import Documents from "./Documents";
import { useAuthContexts } from "../hooks/context";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined, FileOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {
  const { user } = useAuthContexts();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">HomePage </Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/fetchData">FetchData</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<FileOutlined />}>
                <Link to="/forum">Forum</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<FileOutlined />}>
                <Link to="/chat">Chat</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<FileOutlined />}>
                <Link to="/documents">Documents</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{ padding: 0, textAlign: "right", color: "white" }}
            >
              <p>
                <Link to="/registrationForm">Sign up</Link>
              </p>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div>
                  <h1>Bienvenue {user?.firstName} !</h1>
                </div>
                <Switch>
                  <Route exact path="/login">
                    <h3>Please select a topic.</h3>
                  </Route>
                  <Route path="/fetchData" component={FetchData} />
                  <Route path="/forum" component={Forum} />
                  <Route path="/chat" component={Chat} />
                  <Route path="/documents" component={Documents} />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center", fontWeight: "bold" }}>
              XP3000 designed by Vincent Kouoï
            </Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default function Menu1() {
  return <Dashboard />;
}
