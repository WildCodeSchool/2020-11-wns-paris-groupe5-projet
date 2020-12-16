import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { TableComponent } from "./TableComponent";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function Menu1() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [students, setStudents] = useState([]);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(false);
    // this.setState({ collapsed });
  };

  const sendEmail = async (email) => {
    try {
      return await axios.post("http://localhost:5000/api/student/sendEmail", {
        to: email,
        subject: "Retard",
        text: "Coucou, tu es en retard pour le cours",
      });
    } catch (e) {
      console.log("error, error");
    }
  };
  const sendSms = async (id) => {
    try {
      return await axios.post("http://localhost:5000/api/student/sendSms", { id });
    } catch (e) {
      console.log("error, error");
    }
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const result = await axios("http://localhost:5000/api/students/");
        console.log("result.data****", result.data);
        const formatedData = result.data.map((elt) => {
          return {
            key: elt._id,
            firstName: elt.firstName,
            lastName: elt.lastName,
            sendEmail: sendEmail,
            sendSms: sendSms,
            email: elt.email,
            phoneNumber: elt.phoneNumber,
          };
        });
        console.log("formatedData", formatedData);
        setStudents(formatedData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
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
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Utilisateur</Breadcrumb.Item>
            <Breadcrumb.Item>Formateur</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <div style={{ marginBottom: 16 }}></div>

            <TableComponent data={students} sendEmail={sendEmail} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Hello from GROUPE 5</Footer>
      </Layout>
    </Layout>
  );
}

export default Menu1;
