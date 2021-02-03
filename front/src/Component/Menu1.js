// import React, { useState } from "react"
// import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
// import { Layout, Menu, Breadcrumb } from "antd";
// import { DesktopOutlined, PieChartOutlined, FileOutlined } from "@ant-design/icons";

// import Calendrier from "./Calendrier"
// import Forum from './Forum'
// // import Documents from "./Documents"
// import FetchData from "./FetchData"

// const { Header, Content, Footer, Sider } = Layout;

// function DashBoard() {
//   const [collapsed, setCollapsed] = useState(false)
//   // const onCollapse = collapsed => {
//   //   console.log(collapsed)
//   // };

//   return (
//     <Router>
//       <Switch>
//         <Layout style={{ minHeight: '100vh' }}>
//           <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
//             <div />
//             <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
//               <Menu.Item key="1" icon={<PieChartOutlined />}>
//                 <Link to="/"> Home </Link>
//               </Menu.Item>
//               <Menu.Item key="2" icon={<DesktopOutlined />}>
//                 <Link to="/calendrier"> Calendrier </Link>
//               </Menu.Item>
//               <Menu.Item key="3" icon={<FileOutlined />}>
//                 <Link to="/forum"> Forum </Link>
//               </Menu.Item>
//               <Route path="/calendrier" exact component={Calendrier} />
//               <Route path="/forum" component={Forum} />
//             </Menu>
//           </Sider>
//           <Layout className="site-layout">
//             <Header className="header">
//               <div className="logo" />
//               <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
//                 <Menu.Item key="1" style={{ position: "absolute", left: "95%" }} >Sign In</Menu.Item>
//                 <Menu.Item key="2" style={{ position: "absolute", left: "90%" }}><Link to='/registrationForm'>Sign up</Link></Menu.Item>
//                 {/* <Menu.Item key="4"><Link to='/chat'>Chat</Link></Menu.Item>
//                 <Menu.Item key="3"><Link to='/:roomId'>Room</Link></Menu.Item> */}
//               </Menu>
//             </Header>
//             <Content style={{ margin: "0 16px" }}>
//               <Breadcrumb style={{ margin: "16px 0" }}>
//                 <Breadcrumb.Item>Utilisateur</Breadcrumb.Item>
//                 <Breadcrumb.Item>Formateur</Breadcrumb.Item>
//               </Breadcrumb>
//               <div
//                 className="site-layout-background"
//                 style={{ padding: 24, minHeight: 360 }}
//               >
//                 <FetchData />
//               </div>
//             </Content>
//             <Footer style={{ textAlign: "center" }}> Hello from GROUPE 5</Footer>
//           </Layout>
//         </Layout>
//       </Switch>
//     </Router>
//   )
// }

// export default function Menu1() {
//   return <DashBoard />
// }
import React from 'react'


function Welcome() {
  return (
    <div>
      bienvenue
    </div>
  )
}

export default function Menu1() {
  return <Welcome />
}