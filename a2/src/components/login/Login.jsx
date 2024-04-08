import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, theme } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

const { Content, Footer } = Layout;

const Login = () => {
    const { colorBgContainer, borderRadiusLG } = theme.useToken();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const isFormEmpty = !username || !password;


    return (
        <Layout>
            <Content
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    background: `url('https://images.unsplash.com/photo-1467277378664-19a209d31b02?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                    backgroundSize: 'cover',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <div style={{ 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    textAlign: 'center', 
                    background: colorBgContainer, 
                    borderRadius: borderRadiusLG, 
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                    margin: '5vh auto', 
                    maxWidth: '40vw' }}
                >
                    <h1>F1 OnTrack</h1>
                </div>
                <div style={{ textAlign: 'center', background: colorBgContainer, borderRadius: borderRadiusLG, backgroundColor: 'rgba(255, 255, 255, 0.8)', margin: '5vh auto', padding: 16, maxWidth: '50vw' }}>
                    <h2>Login</h2>
                    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '4vh' }}>
                        <Form
                            name="basic"
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            style={{ maxWidth: 600 }}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true}]}
                            >
                                <Input onChange={handleUsernameChange} />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true}]}
                            >
                                <Input.Password onChange={handlePasswordChange} />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{ offset: 8, span: 16 }}
                            >
                                <Checkbox>
                                    Remember me
                                </Checkbox>
                            </Form.Item>

                            {isFormEmpty ? ( 
                                // if form isn't empty, show actual Submit button. else show dummy disabled out button
                                <div>
                                    <Button type="primary" disabled>Submit</Button>
                                </div>
                            ) : (        
                                <Link to="/home">
                                    <Button type="primary" htmlType="submit">Submit</Button>
                                </Link>
                            )}
                        </Form>
                    </div>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created with Layout Template from Ant UED</Footer>
        </Layout>
    );
};

export default Login;
