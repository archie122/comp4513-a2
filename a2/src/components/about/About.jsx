import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Flex, Typography, List} from 'antd';
import Footer1 from '../home2/Footer1';
import Header1 from './Header1';
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const About = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

    return (
        <Layout>
        <Header1 />
        <Content
          style={{
            padding: '0 48px',
          }}
        >
          
          <div style={{ minHeight: 40 }} />

          <Layout
            style={{
              padding: '24px 0',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Content
              style={{
                padding: '0 24px',
                minHeight: 280,
              }}
            >
            
            <Flex style={{ flexDirection: 'row' }}>
                <Content style={{padding: '24px 0', minHeight: 280, justifyContent: 'center', alignItems: 'center' }}>
                    <Title style={{textAlign: 'center'}}>About</Title>
                    <Content width={500} style={{textAlign: 'center'}}>
                        Jon and Archie worked on this project.
                    </Content>
                </Content>
            </Flex>
            
            </Content>
          </Layout>
        </Content>
        <Footer1 />
      </Layout>
    )
}

export default About;