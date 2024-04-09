import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, theme } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import Footer1 from './Footer1';
import Content1 from './Content1';

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
            <Content1 />
            <Footer1 />
        </Layout>
    );
};

export default Login;
