import React from "react";
import { Breadcrumb, Layout, Menu, MenuProps, theme } from "antd";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export default function LayoutDefault({ children }: any) {
    const navigate = useNavigate();
    const handleRedirect: MenuProps["onClick"] = (e) => {
        navigate(+e.key % 2 ? "" : "about");
    };
    return (
        <Layout>
            <Header
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    onClick={handleRedirect}
                    items={new Array(3).fill(null).map((_, index) => ({
                        key: String(index + 1),
                        label: `nav ${index + 1}`,
                    }))}
                />
            </Header>
            <Content className="site-layout">
                <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: "#ffffff",
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                Ant Design ©2023 Created by Ant UED
            </Footer>
        </Layout>
    );
}
