import { useEffect, useState } from 'react';
import Supabase from '../../utility/f1-supabase.js'; //utility folder in src
import Layout from 'antd/lib/layout';
import { theme, Button, Space, List, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

// components:
import RaceList from './races/RaceList';
import InfoDrawer from './drawer/Drawer.jsx';



const MainContent = (props) => {

  let currentSeasonSelected = props.update;
  console.log("type of props update" + typeof currentSeasonSelected);

  const [open, setOpen] = useState([false, false]);
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
      circuit: race.circuitId,
      year: race.year,
      date: race.date,
      time: race.time,
      round: race.round,
      url: race.url,
    }));

    const toggleDrawer = (idx, target) => {
      setOpen((p) => {
        p[idx] = target;
        return [...p];
      });
    };  
    const resultsDrawerContent = (
      <>
        <p>Name</p>
        <p>Country</p>
        <p>URL</p>
      </>
    );
    // const standingsDrawerContent = (
    //   <>
    //     <h1>After round: (selected SingleRace's round)</h1>
    //     <p>Country</p>
    //     <p>URL</p>
    //   </>
    // );
    const standingsDrawerContent = (round) => (
      <>
        <Button type="primary">Add standings to favorites</Button>
        <p>Round: {round}</p>
        <p>Country</p>
        <p>URL</p>
      </>
    );
    

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  console.log('CURRENT YEAR: ' + "[" + currentSeasonSelected + "]");
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
      <Title className='text-2xl text-center py-5' level={2} style={{ display: 'flex', justifyContent: 'center' }}>
        {props.update} Races
      </Title>

      <RaceList raceData={raceData} toggleDrawer={toggleDrawer} />

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

export default MainContent;