import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined, FileOutlined } from '@ant-design/icons';

import Menu1 from './Component/Menu1'
import FetchData from './Component/FetchData'
import Forum from './Component/Forum'
import RegistrationForm from "./Component/RegistrationForm";
import Chat from './Component/Chat'
import Documents from './Component/Documents';

const { Header, Content, Footer, Sider } = Layout;

function DashBoard() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">HomePage  </Link>
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
          <Header className="site-layout-background" style={{ padding: 0, textAlign: 'right', color: "white" }}>
            <p><Link to='/registrationForm'>Sign up</Link></p>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Switch>
                <Route exact path="/" component={Menu1} />
                <Route path="/fetchData" component={FetchData} />
                <Route path="/registrationForm" component={RegistrationForm} />
                <Route path="/forum" component={Forum} />
                <Route path="/chat" component={Chat} />
                <Route path="/documents" component={Documents} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', fontWeight: 'bold' }}>XP3000 designed by Vincent Kouoï</Footer>
        </Layout>
      </Layout>
    </Router>
  )
}

export default function App() {
  return <DashBoard />
}