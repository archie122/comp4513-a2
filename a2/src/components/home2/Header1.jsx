import { Layout } from 'antd';
const { Header } = Layout;
import Dropdown1 from './Dropdown1';
import Menu1 from './Menu1';



const Header1 = (props) => {

    return (
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <Dropdown1 update={props.update}/>

          <div style={{ padding: '24px' }} className='text-white text-3xl'>
              F1 Dashboard Project
          </div>

          <Menu1 />
        
      </Header>
    )
}

export default Header1;