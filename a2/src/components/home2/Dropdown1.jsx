import { Dropdown, Button, Space, Menu, message, Select } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import Supabase from '../../utility/f1-supabase.js'; //utility folder in src
import { useEffect, useState } from 'react'; 
const { Option } = Select;


const Dropdown1 = (props) => {

  const [seasons, setSeasons] = useState([]);

  async function selectSeasons() {
    
    console.log('getting from supabase ... here to check if I’ve gone infinite');
    const { data, error } = await Supabase.from('seasons').select('*').gte('year', 2000);
    if (error) {
      console.error('Error fetching seasons:', error);
      return;
    }
    const sortedData = data.sort((a, b) => a.year - b.year);
    setSeasons(sortedData);
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

  


  
  const handleMenuClick = (value) => {
    // message.info('The year is ' + value);
    props.update(value);
  };
  // const handleMenuClick = (e) => {
  //   // message.info('The year is ' + e.key);
  //   props.update(e.key);
  //   console.log(seasons);
  // };
  
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