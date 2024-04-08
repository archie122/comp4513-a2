import { Layout } from 'antd';
const { Footer } = Layout;

const Footer1 = () => { 

    return (
        <Footer style={{ textAlign: 'center'}}>
            ©{new Date().getFullYear()} Created by Jon Maquio and Archit Choudhary
        </Footer>
    )
}

export default Footer1;