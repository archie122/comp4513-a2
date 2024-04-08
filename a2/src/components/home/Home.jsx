import React, { useState } from 'react';

import { Link, Route } from 'react-router-dom';
import { Button, Space, Layout, theme  } from 'antd';

import Navigation from './header/navigation/Navigation.jsx';
import InfoDrawer from './drawer/Drawer.jsx';


const { Content, Footer } = Layout;

const Home = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [open, setOpen] = useState([false, false]);
    const toggleDrawer = (idx, target) => {
        setOpen((p) => {
          p[idx] = target;
          return [...p];
        });
    };

    const circuitDrawerContent = (
        <>
            <Button type="primary">Add to favorites</Button>
            <p>Name</p>
            <p>Country</p>
            <p>URL</p>
        </>
    );
    const resultsDrawerContent = (
        <>
            <Button type="primary">Add to favorites</Button>
            <p>Name</p>
            <p>Country</p>
            <p>URL</p>
        </>
    );
    const standingsDrawerContent = (
        <>
            <Button type="primary">Add to favorites</Button>
            <p>Name</p>
            <p>Country</p>
            <p>URL</p>
        </>
    );

    return (
        <Layout>
            <Navigation />
            <Layout>

                <Space>
                    <Button type="primary" onClick={() => toggleDrawer(0, true)}>
                        Circuit
                    </Button>
                    <Button type="primary" onClick={() => toggleDrawer(1, true)}>
                        Results
                    </Button>
                    <Button type="primary" onClick={() => toggleDrawer(2, true)}>
                        Standings
                    </Button>
                </Space>

                <InfoDrawer
                    title="Circuit"
                    content={circuitDrawerContent}
                    open={open[0]}
                    closeDrawer={() => toggleDrawer(0, false)}
                />

                <InfoDrawer
                    title="Results"
                    content={resultsDrawerContent}
                    open={open[1]}
                    closeDrawer={() => toggleDrawer(1, false)}
                />
                <InfoDrawer
                    title="Standings"
                    content={standingsDrawerContent}
                    open={open[2]}
                    closeDrawer={() => toggleDrawer(2, false)}
                />





                <Content
                    style={{
                        margin: 0,
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        content
                    </div>
                </Content>

                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default Home;