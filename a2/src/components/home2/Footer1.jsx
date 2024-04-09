import { Layout } from 'antd';
const { Footer } = Layout;

const Footer1 = () => { 

    return (
        <Footer style={{ textAlign: 'center'}}>
            ©{new Date().getFullYear()} Created by <a href='https://github.com/jonmaquio'>Jon Maquio</a> and <a href='https://github.com/ArchitChoudhary'>Archit Choudhary</a>
        </Footer>
    )
}

export default Footer1;