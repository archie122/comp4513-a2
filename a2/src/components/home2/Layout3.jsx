import Layout from 'antd/lib/layout';
import Sider1 from './Sider1';
import Content2 from './Content2';
import { theme } from 'antd';
const { Content } = Layout;

const Layout3 = (props) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();  

    return (
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          
          <Sider1 update={props.update}/>
          
          <Content2 />
          
         
        </Layout>
    )
}

export default Layout3;