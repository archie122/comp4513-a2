import { Layout, Typography } from 'antd';
const { Header } = Layout;
import Menu1 from './Menu1';
const { Title } = Typography;


const Header1 = (props) => {

    return (
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

          <Title style={{ padding: '24px', color: 'white', justifyContent: 'center', alignItems: 'center'}}>
              F1 Dashboard Project
          </Title>

          <Menu1 />
        
      </Header>
    )
}

export default Header1;