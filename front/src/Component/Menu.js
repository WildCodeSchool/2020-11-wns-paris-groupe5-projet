import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { ProfileOutlined, FileOutlined, MessageOutlined, HomeOutlined } from "@ant-design/icons";
import { Layout, Menu as MenuAntD } from "antd";
import Forum from "./Forum";
import Chat from "./Chat";
import Documents from "./Documents";
import FetchData from "./FetchData";
import RegistrationForm from "./RegistrationForm";
import { useAuthContexts } from "../hooks/context";
import logo from '../image/logo-books.jpg';


const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {

  const {user} = useAuthContexts();

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div>
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
            <MenuAntD theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <div style={{ textAlign: "center", marginBottom: "40px"}}>
              <img src={logo} alt="Logo" style={{ 
                maxWidth: "50%", 
                borderRadius: "50%", 
                margin: "auto", 
                display: "block",
                marginTop: "20px",
                marginBottom: "20px" }}/>
              <h1 style={{ color: "white", fontSize: "1.2vw"}}>Run<span style={{ color: "orange" }}>School</span></h1>
              </div>

              <MenuAntD.Item key="1" icon={<HomeOutlined />}>
                <Link to="/">HomePage </Link>
              </MenuAntD.Item>
              <MenuAntD.Item key="2" icon={<ProfileOutlined />}>
                <Link to="/elevesliste">Liste des élèves</Link>
              </MenuAntD.Item>
              <MenuAntD.Item key="4" icon={<FileOutlined />}>
                <Link to="/forum">Forum</Link>
              </MenuAntD.Item>
              <MenuAntD.Item key="5" icon={<MessageOutlined />}>
                <Link to="/chat">Chat</Link>
              </MenuAntD.Item>
              <MenuAntD.Item key="6" icon={<FileOutlined />}>
                <Link to="/documents">Documents</Link>
              </MenuAntD.Item>
            </MenuAntD>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{ padding: 0, 
                textAlign: "right", 
                color: "white", 
                background: "#f0f2f5",
                display: "inline-flex",
                justifyContent: "space-between" }}
            >
              <h1 style={{ marginLeft: "40px", fontSize: "20px" }}>Bienvenue {user?.firstName} !</h1>
              <p style={{ marginRight: "50px" }}>
            {user ? <Link style={{ color: "grey", fontWeight: "bold", backgroundColor: "lightgrey", padding: "10px", borderRadius: "10px" }}to={"/logout"}>Logout</Link> : <Link to={"/login"}>Login</Link>}
              </p>
            </Header>
            <Content style={{ margin: "0 16px" }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div>
                  <Switch>
                  <Route path="/registrationForm" exact component={RegistrationForm} />
                  <Route path="/elevesliste" component={FetchData} />
                  <Route path="/forum" component={Forum} />
                  <Route path="/chat" component={Chat} />
                  <Route path="/documents" component={Documents} />
                </Switch>
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: "center", fontWeight: "bold" }}>
            </Footer>
          </Layout>
        </Layout>
    </div>
  );
}

export default function Menu() {
  return <Dashboard />;
}
