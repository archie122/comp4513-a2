import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, theme } from 'antd';
import { Button, Checkbox, Form, Input, Typography } from 'antd';
const { Title } = Typography;
import Form1 from './Form1';

const { Content } = Layout;

const Content1 = () => {
    const { colorBgContainer, borderRadiusLG } = theme.useToken();

    return (
        <Content style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '94vh',
                background: `url('https://images.unsplash.com/photo-1467277378664-19a209d31b02?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundSize: 'cover',
            }}>
                <div style={{ 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    textAlign: 'center', 
                    background: colorBgContainer, 
                    borderRadius: '10px', 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    margin: '5vh auto', 
                    padding: '2vh',
                    maxWidth: '20vw' 
                }}>
                    <Title>F1 OnTrack</Title>
                </div>
                <div style={{ 
                    textAlign: 'center', 
                    background: colorBgContainer, 
                    borderRadius: '10px', 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    margin: '5vh auto', 
                    padding: '4vh', 
                    maxWidth: '30vw' 
                }}>
                    <h2>Login</h2>
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '4vh' }}>
                        <Form1 />
                    </div>
                </div>
        </Content>
    )
}

export default Content1;