import { Dropdown, Button, Space, Menu, message } from 'antd'; //Dropdown template from Ant Design
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Supabase from '../../utility/f1-supabase.js'; //utility folder in src
import { useEffect, useState } from 'react'; 


const Dropdown1 = (props) => {

  const [seasons, setSeasons] = useState([]);

  async function selectSeasons() {
    
    console.log('getting from supabase ... here to check if I’ve gone infinite');
    const { data, error } = await Supabase.from('seasons').select('*');
    if (error) {
      console.error('Error fetching seasons:', error);
      return;
    }
    setSeasons(data);
  }
  
  useEffect(() => {
    selectSeasons();
  }, []); // Empty dependency array ensures this effect runs only once

  // const dropDownItems = seasons.map((item, index) => ({
  //   key: `${index + 1}`,
  //   label: (
  //     <a target="_blank" rel="noopener noreferrer" href={`"${item.url}"`}>
  //       {item.year} season
  //     </a>
  //   ),
  // }));

  


  const handleMenuClick = (e) => {
    // message.info('The year is ' + e.key);
    props.update(e.key);
    console.log(seasons);
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
    <Dropdown {...menuProps} style={{ flex: 1, marginLeft: 10 }} autoAdjustOverflow="true">
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