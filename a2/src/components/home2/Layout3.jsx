import Layout from 'antd/lib/layout'; //Layout template used from Ant Design
import MainContent from './MainContent';
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
          
          <MainContent update={props.update} getFav={props.getFav}/>
          
          {/* <Content2 /> */}
          
         
        </Layout>
    )
}

export default Layout3;