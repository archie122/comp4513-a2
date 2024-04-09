import { useEffect, useState } from 'react';
import Supabase from '../../utility/f1-supabase.js'; //utility folder in src
import Layout from 'antd/lib/layout';
import { theme, Button, Space, List, Typography, Flex } from 'antd';
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
  const [standingsContent, setStandingsContent] = useState(<></>);
  const [results, setResultsContent] = useState(<></>);

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
        <Title style={{textAlign: 'center'}}>Results</Title>
        <Flex style={{ flexDirection: 'row' }}>
                <Content style={{padding: '24px 0', minHeight: 280, justifyContent: 'center', alignItems: 'center' }}>
                    <Title style={{textAlign: 'center'}}>Qualifying</Title>
                    <Content width={500}>
                        <List />
                    </Content>
                </Content>
                
                <Content style={{padding: '24px 0', minHeight: 280, justifyContent: 'center', alignItems: 'center'}}>
                    <Title style={{textAlign: 'center'}}>Results</Title>
                    <Content width={500}>
                        <List />
                    </Content>
                </Content>
          </Flex>
      </>
    );
    
    // const standingsDrawerContent = (round) => (
    //   <>
    //     <Button type="primary">Add standings to favorites</Button>
    //     <p>Round: {round}</p>
    //     <p>Country</p>
    //     <p>URL</p>
    //   </>
    // );
    
    const standingsDrawerContent = (
      <>
        {/* <Button type="primary">Add standings to favorites</Button> */}
        <Title style={{textAlign: 'center'}}>Standings</Title>
        <Flex style={{ flexDirection: 'row' }}>
                <Content style={{padding: '24px 0', minHeight: 280, justifyContent: 'center', alignItems: 'center' }}>
                    <Title style={{textAlign: 'center'}}>Drivers</Title>
                    <Content width={500}>
                        <List />
                    </Content>
                </Content>
                
                <Content style={{padding: '24px 0', minHeight: 280, justifyContent: 'center', alignItems: 'center'}}>
                    <Title style={{textAlign: 'center'}}>Constructors</Title>
                    <Content width={500}>
                        <List />
                    </Content>
                </Content>
        </Flex>
      </>
    );

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // console.log('CURRENT YEAR: ' + "[" + currentSeasonSelected + "]");
  // console.log('race data: ' + raceData);
  // console.log('race data count:', raceData.length);

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

      <RaceList raceData={raceData} toggleDrawer={toggleDrawer} setStandingsContent={setStandingsContent} setResultsContent={setResultsContent} getFav={props.getFav}/>

      <InfoDrawer
        title="Results"
        content={results}
        open={open[1]}
        closeDrawer={() => toggleDrawer(1, false)}
      />
      <InfoDrawer
        title="Standings"
        content={standingsContent}
        open={open[2]}
        closeDrawer={() => toggleDrawer(2, false)}
      />
                
    </Content>
  )
};

export default MainContent;
