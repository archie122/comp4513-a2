import { Dropdown, Button, Space, Menu, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Supabase from '../../utility/f1-supabase.js'; //utility folder in src
import { useEffect, useState } from 'react'; 


const Dropdown1 = (props) => {

  const [seasons, setSeasons] = useState([]);
  useEffect(() => {
    selectSeasons();
  }, []);

  async function selectSeasons() {
    console.log('getting from supabase ... here to check if I’ve gone infinite');
    const { data, error } = await Supabase.from('seasons').select('*');
    if (error) {
      console.error('Error fetching seasons:', error);
      return;
    }
    setSeasons(data);
  }

  const handleMenuClick = (e) => {
    // message.info('The year is ' + e.key);
    props.update(e.key);
  };

  const menuProps = {
    overlay: (
      <Menu onClick={handleMenuClick}>
      {seasons.map((season) => (
        <Menu.Item key={season.year} icon={<UserOutlined />}>
          {season.year}
        </Menu.Item>
      ))}
      </Menu>
    )
  };

  return (
    <Dropdown {...menuProps} style={{ flex: 1, marginLeft: 10 }}>
      <Button>
        <Space>
          Seasons
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  )
}

export default Dropdown1;