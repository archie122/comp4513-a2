import React from 'react';
import { Layout } from 'antd';
import Navigation from './navigation/Navigation.jsx'
import SeasonDropdown from './dropdown/SeasonDropdown.jsx'

const { Header } = Layout;

const SiteHeader = () => {
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="demo-logo" />
      <SeasonDropdown/>
      <Navigation/>
    </Header>
  );
};

export default SiteHeader;