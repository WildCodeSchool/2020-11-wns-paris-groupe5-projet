import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

//function Menu() {
//  return (
//    <div>Component Menu works</div>
//  );
//}

class Menu1 extends React.Component {
    state = {
      collapsed: false,
    };
  
    onCollapse = collapsed => {
      console.log(collapsed);
      this.setState({ collapsed });
    };
  
    render() {
      const { collapsed } = this.state;
      return (
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                Menu Principal
              </Menu.Item>
              <Menu.Item key="2" icon={<DesktopOutlined />}>
                Liste d'élèves
              </Menu.Item>
              <SubMenu key="sub1" icon={<UserOutlined />} title="Utilisateur">
                <Menu.Item key="3">Vincent</Menu.Item>
                <Menu.Item key="4">Ibra</Menu.Item>
                <Menu.Item key="5">Walid</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<TeamOutlined />} title="Equipe">
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9" icon={<FileOutlined />}>
                Exercices
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Utilisateur</Breadcrumb.Item>
                <Breadcrumb.Item>Formateur</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                Content
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Hello from GROUPE 5</Footer>
          </Layout>
        </Layout>
      );
    }
  }

export default Menu1;