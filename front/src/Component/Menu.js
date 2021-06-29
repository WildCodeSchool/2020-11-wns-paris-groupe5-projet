import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { DesktopOutlined, PieChartOutlined, FileOutlined } from "@ant-design/icons";
import { Layout, Menu as MenuAntD } from "antd";
import Forum from "./Forum";
// import Chat from "./Chat";
import Space from "../Component/Space/Space"
import Chat from "../Component/Chat/Chat"
import Documents from "./Documents";
import FetchData from "./FetchData";
import RegistrationForm from "./RegistrationForm";
import { useAuthContexts } from "../hooks/context";


const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {

  const {user} = useAuthContexts();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <MenuAntD theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <MenuAntD.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/">HomePage </Link>
              </MenuAntD.Item>
              <MenuAntD.Item key="2" icon={<DesktopOutlined />}>
                <Link to="/elevesliste">Liste des élèves</Link>
              </MenuAntD.Item>
              <MenuAntD.Item key="4" icon={<FileOutlined />}>
                <Link to="/forum">Forum</Link>
              </MenuAntD.Item>
              <MenuAntD.Item key="5" icon={<FileOutlined />}>
                <Link to="/chat">Chat</Link>
              </MenuAntD.Item>
              <MenuAntD.Item key="6" icon={<FileOutlined />}>
                <Link to="/:roomId">Room</Link>
              </MenuAntD.Item>
              <MenuAntD.Item key="7" icon={<FileOutlined />}>
                <Link to="/documents">Documents</Link>
              </MenuAntD.Item>
            </MenuAntD>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{ padding: 0, textAlign: "right", color: "white" }}
            >
              <p style={{ marginRight: "50px" }}>
            {user ? <Link to={"/logout"}>Logout</Link> : <Link to={"/login"}>Login</Link>}
              </p>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div>
                  <h1>Bienvenue {user?.firstName} !</h1>
                  <Switch>
                  <Route path="/registrationForm" exact component={RegistrationForm} />
                  <Route path="/elevesliste" component={FetchData} />
                  <Route path="/forum" component={Forum} /> 
                  <Route path="/chat" component={Space} />
                  <Route path="/room/:roomId" component={Chat}/>
                  <Route path="/documents" component={Documents} />
                </Switch>
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: "center", fontWeight: "bold" }}>
              Designed by Groupe 5
            </Footer>
          </Layout>
        </Layout>
    </div>
  );
}

export default function Menu() {
  return <Dashboard />;
}
