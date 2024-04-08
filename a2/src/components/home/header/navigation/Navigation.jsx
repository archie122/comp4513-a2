import React from 'react';
import { Link } from 'react-router-dom'; 
import { Menu } from 'antd';

const Navigation = () => {
    const items = [
        {
            key: '1',
            label: 'About',
            name: 'About',
        },
        {
            key: '2',
            label: 'Results',
            name: 'Results',
        },
        {
            key: '3',
            label: 'Standings',
            name: 'Standings',
        },
        {
            key: '4',
            label: 'Favorites',
            name: 'Favorites',
        },
        {
            key: '5',
            label: 'Logout',
            name: 'Logout',
        },
    ];

    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to="/home/about">About</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/home/results">Results</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/home/standings">Standings</Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to="/home/favorites">Favorites</Link>
            </Menu.Item>
            <Menu.Item key="5">
                <Link to="/comp4513-a2">Logout</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navigation;