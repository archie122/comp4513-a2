import { useEffect, useState } from 'react';
import Supabase from '../../utility/f1-supabase.js'; //utility folder in src
import Layout from 'antd/lib/layout';
import { theme, Button, Space, List, Typography } from 'antd';
const { Sider, Content } = Layout;
const { Title } = Typography;

// components:
import InfoDrawer from './drawer/Drawer.jsx';



const Sider1 = (props) => {

  let currentSeasonSelected = props.update;
  console.log("type of props update" + typeof currentSeasonSelected);


  


const [open, setOpen] = useState([false, false]);
const toggleDrawer = (idx, target) => {
    setOpen((p) => {
      p[idx] = target;
      return [...p];
    });
};

const circuitDrawerContent = (
    <>
        <Button type="primary">Add circuit to favorites</Button>
        <p>Name</p>
        <p>Country</p>
        <p>URL</p>
    </>
);
const resultsDrawerContent = (
    <>
        <Button type="primary">Add results to favorites</Button>
        <p>Name</p>
        <p>Country</p>
        <p>URL</p>
    </>
);
const standingsDrawerContent = (
    <>
        <Button type="primary">Add standings to favorites</Button>
        <p>Name</p>
        <p>Country</p>
        <p>URL</p>
    </>
);

  const [races, setRaces] = useState([]);

  async function selectRaces() {
    console.log('getting from supabase ... here to check if I’ve gone infinite');
    const { data, error } = await Supabase.from('races')
                                          .select('*')
                                          .eq('year', currentSeasonSelected);
    if (error) {
      console.error('Error fetching races:', error);
      return;
    }
    setRaces(data);
  }
  useEffect(() => {
    selectRaces();
  }, [currentSeasonSelected]);

  const raceData = races
    .map((race) => ({
      key: race.raceId,
      name: race.name,
      year: race.year,
    }));

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  console.log('CURRENT YEAR: ' + "["+currentSeasonSelected+ "]");
  console.log('race data: ' + raceData);
  console.log('race data count:', raceData.length);

  return (
    <Content
      style={{
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
      width={500}
    >
      <div className='text-2xl text-center py-5'>{currentSeasonSelected} Races</div>


      <List
        style={{
          padding: '0 24px',
          minHeight: 280,
        }}
        itemLayout="horizontal"
        dataSource={raceData}
        renderItem=
        {item => (
          <List.Item
            style={{
              padding: '10px 0',
            }}
          >

          <Title className='text-2xl text-center py-5' level={2} style={{display: 'flex', justifyContent: 'center'}}>
            {props.update} Races
          </Title>

          <List.Item.Meta
              title={item.name}
            />

            <Space>
              <Button
                type="primary"
                size="small"
                onClick={() => toggleDrawer(1, true)}>Results</Button>
              <Button
                type="primary"
                size="small"
                onClick={() => toggleDrawer(2, true)}>Standings</Button>
            </Space>
          </List.Item>
        )}
      />


                <InfoDrawer
                    title="Circuit"
                    content={circuitDrawerContent}
                    open={open[0]}
                    closeDrawer={() => toggleDrawer(0, false)}
                />
                <InfoDrawer
                    title="Results"
                    content={resultsDrawerContent}
                    open={open[1]}
                    closeDrawer={() => toggleDrawer(1, false)}
                />
                <InfoDrawer
                    title="Standings"
                    content={standingsDrawerContent}
                    open={open[2]}
                    closeDrawer={() => toggleDrawer(2, false)}
                />
    </Content>
    )

};

export default Sider1;