import Layout from 'antd/lib/layout';
const { Content } = Layout;
import Layout3 from './Layout3';



const Content1 = (props) => {

    return (
      <Content
          style={{
            padding: '0 48px ',
          }}
        >
        
        <div style={{ minHeight: 20 }} />
        
        <Layout3 update={props.update}/>
      
      </Content>
    )
}

export default Content1;