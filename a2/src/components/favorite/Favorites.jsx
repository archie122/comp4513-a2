import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Flex, Typography, List} from 'antd';
import Footer1 from '../home2/Footer1';
import Header1 from './Header1';
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const Favorite = (props) => {
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
                    <Title style={{textAlign: 'center'}}>Drivers</Title>
                    <Content width={500}>
                        <List 
                            dataSource={props.getFav}
                            renderItem={item => (
                                <List.Item>
                                    {item.name}
                                </List.Item>
                            )}
                        />
                    </Content>
                </Content>
                
                <Content style={{padding: '24px 0', minHeight: 280, justifyContent: 'center', alignItems: 'center'}}>
                    <Title style={{textAlign: 'center'}}>Constructors</Title>
                    <Content width={500}>
                        <List 
                            dataSource={props.getFav}
                            renderItem={item => (
                                <List.Item>
                                    {item.name}
                                </List.Item>
                            )}
                        />
                    </Content>
                </Content>
                
                <Content style={{padding: '24px 0', minHeight: 280, justifyContent: 'center', alignItems: 'center' }}>
                    <Title style={{textAlign: 'center'}}>Circuits</Title>
                    <Content width={500}>
                        <List 
                            dataSource={props.getFav}
                            renderItem={item => (
                                <List.Item>
                                    {item.name}
                                </List.Item>
                            )}
                        />
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

export default Favorite;