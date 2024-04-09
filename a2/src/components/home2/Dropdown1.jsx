import { Dropdown, Button, Space, Menu, message, Select } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Supabase from '../../utility/f1-supabase.js'; //utility folder in src
import { useEffect, useState } from 'react'; 
const { Option } = Select;


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
    const sortedData = data.sort((a, b) => a.year - b.year);
    setSeasons(sortedData);
  }

  
  const handleMenuClick = (value) => {
    // message.info('The year is ' + value);
    props.update(value);
  };
  
  return (
    <Select style={{ width: 120 }} onChange={handleMenuClick}>
      {seasons.map((season) => (
        <Option key={season.year} value={season.year}>
          {season.year}
        </Option>
      ))}
    </Select>
  );
}

export default Dropdown1;