import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { DesktopOutlined, PieChartOutlined, FileOutlined } from "@ant-design/icons";
import FetchData from "./FetchData"

const { Header, Content, Footer, Sider } = Layout;

function DashBoard() {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = collapsed => {
    console.log(collapsed)
  };

  return (
    <Router>
      <Switch>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div />
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
                <Menu.Item key="1">Sign In</Menu.Item>
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
            <Footer style={{ textAlign: "center" }}> Hello from GROUPE 5</Footer>
          </Layout>
        </Layout>
      </Switch>
    </Router>
  )
}

export default function Menu1() {
  return <DashBoard />
}
// import React from "react";
// import { Link } from "react-router-dom";
// import { Layout, Menu, Breadcrumb } from "antd";
// import {
//   DesktopOutlined,
//   PieChartOutlined,
//   FileOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import FetchData from "./FetchData";

// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;


// class Menu1 extends React.Component {
//   state = {
//     collapsed: false,
//     selectedRowKeys: [], // Check here to configure the default column
//     loading: false,
//   };

//   start = () => {
//     this.setState({ loading: true });
//     // ajax request after empty completing
//     setTimeout(() => {
//       this.setState({
//         selectedRowKeys: [],
//         loading: false,
//       });
//     }, 1000);
//   };

//   onSelectChange = (selectedRowKeys) => {
//     console.log("selectedRowKeys changed: ", selectedRowKeys);
//     this.setState({ selectedRowKeys });
//   };

//   onCollapse = (collapsed) => {
//     console.log(collapsed);
//     this.setState({ collapsed });
//   };

//   render() {
//     const { collapsed } = this.state;
//     return (
//       <Layout style={{ minHeight: "100vh" }}>
//         <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
//           <div className="logo" />
//           <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
//             <Menu.Item key="1" icon={<PieChartOutlined />}>
//             <Link to='/'>Menu Principal</Link>
//             </Menu.Item>
//             <Menu.Item key="2" icon={<DesktopOutlined />}>
//               Liste d'élèves
//             </Menu.Item>
//             <SubMenu key="sub1" icon={<UserOutlined />} title="Utilisateur">
//               <Menu.Item key="3">Vincent</Menu.Item>
//               <Menu.Item key="4">Ibra</Menu.Item>
//               <Menu.Item key="5">Walid</Menu.Item>
//             </SubMenu>
//             <SubMenu key="sub2" icon={<TeamOutlined />} title="Equipe">
//               <Menu.Item key="6">Team 1</Menu.Item>
//               <Menu.Item key="8">Team 2</Menu.Item>
//             </SubMenu>
//             <Menu.Item key="9" icon={<FileOutlined />}>
//               Exercices
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout className="site-layout">
//           <Header className="header">
//             <div className="logo" />
//             <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
//               <Menu.Item key="1">Sign in</Menu.Item>
//               <Menu.Item key="2"><Link to='/registrationForm'>Sign up</Link></Menu.Item>
//             </Menu>
//           </Header>
//           <Content style={{ margin: "0 16px" }}>
//             <Breadcrumb style={{ margin: "16px 0" }}>
//               <Breadcrumb.Item>Utilisateur</Breadcrumb.Item>
//               <Breadcrumb.Item>Formateur</Breadcrumb.Item>
//             </Breadcrumb>
//             <div
//               className="site-layout-background"
//               style={{ padding: 24, minHeight: 360 }}
//             >
//               <FetchData  />
//             </div>
//           </Content>
//           <Footer style={{ textAlign: "center" }}>Hello from GROUPE 5</Footer>
//         </Layout>
//       </Layout>
//     );
//   }
// }

// export default Menu1;
