import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, theme } from 'antd';
import { Button, Checkbox, Form, Input, Typography } from 'antd';

const From1 = () => {
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
                wrapperCol={{ offset: 3, span: 16 }}
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
    )
}

export default From1;