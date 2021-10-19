import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { StyledLayout } from "./Layout.styled";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout = React.memo<Props>(({ children }) => {
  return (
    <StyledLayout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} collapsed className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            theme="dark"
            style={{ height: "100%", borderLeft: 0 }}
          >
            <Menu.Item key="1" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <SubMenu key="sub2" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </StyledLayout>
  );
});

export default AppLayout;
