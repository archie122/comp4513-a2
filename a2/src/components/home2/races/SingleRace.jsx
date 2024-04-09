import { Button, List, Space, Typography, Flex} from 'antd';
import Layout from 'antd/lib/layout';
import { useEffect, useState } from 'react';
import Supabase from '../../../utility/f1-supabase.js'; //utility folder in src
const { Title } = Typography;
const { Content } = Layout;

const SingleRace = ({ race, toggleDrawer, setStandingsContent, setResultsContent, getFav1, getFav2, getFav3 }) => {
    const [driverStandings, setDriverStandings] = useState([]);
    async function selectDriverStandings() {
        console.log('getting from supabase ... here to check if I’ve gone infinite');
        const { data, error } = await Supabase.from('driverStandings')
          .select('drivers!inner( driverId, forename, surname ), points, position, positionText, wins')
          .eq('raceId', race.key);
        if (error) {
          console.error('Error fetching driver standings:', error);
          return;
        }
        setDriverStandings(data);
      }
      useEffect(() => {
        selectDriverStandings();
      }, [race]);

      const driverStandingsData = driverStandings
      .map((driverStanding) => ({
        key: driverStanding.driverStandingsId,
        raceId: driverStanding.raceId,
        driverId: driverStanding.driverId,
        points: driverStanding.points,
        position: driverStanding.position,
        positionText: driverStanding.positionText,
        wins: driverStanding.wins,
        forename: driverStanding.drivers.forename,
        surname: driverStanding.drivers.surname
      }));

      //////////////


      const [constructorStandings, setConstructorStandings] = useState([]);
      async function selectConstructorStandings() {
          // console.log('getting from supabase ... here to check if I’ve gone infinite');
          const { data, error } = await Supabase.from('constructorStandings')
            .select('constructors!inner( constructorId, name ), points, position, positionText, wins')
            .eq('raceId', race.key);
          if (error) {
            console.error('Error fetching constructor standings:', error);
            return;
          }
          setConstructorStandings(data);
        }
        useEffect(() => {
          selectConstructorStandings();
        }, [race]);
  
        const constructorStandingsData = constructorStandings
        .map((constructorStanding) => ({
          key: constructorStanding.constructorStandingsId,
          raceId: constructorStanding.raceId,
          constructorId: constructorStanding.constructorId,
          points: constructorStanding.points,
          position: constructorStanding.position,
          positionText: constructorStanding.positionText,
          wins: constructorStanding.wins,
          name: constructorStanding.constructors.name,
        }));


        //////////   

        const [results, setResults] = useState([]);
        async function selectResults() {
          // console.log('getting from supabase ... here to check if I’ve gone infinite');
          const { data, error } = await Supabase.from('results')
            .select('drivers!inner( driverId, forename, surname ), points, laps, races (raceId, year, circuits!inner ( circuitRef, name ))')
            .eq('raceId', race.key);
          if (error) {
            console.error('Error fetching results:', error);
            return;
          }
          setResults(data);
        }
        useEffect(() => {
          selectResults();
        }, [race]);


        const resultsData = results
        .map((result) => ({
          key: result.driverId,
          raceId: result.races.raceId,
          driverId: result.driverId,
          points: result.points,
          laps: result.laps,
          year: result.races.year,
          circuit: result.races.circuits.circuitRef,
          circuitName: result.races.circuits.name,
          forename : result.drivers.forename,
          surname : result.drivers.surname
        }));

        
        ////////////

        const [qualifying, setQualify] = useState([]);
        async function selectQualify() {
          // console.log('getting from supabase ... here to check if I’ve gone infinite');
          const { data, error } = await Supabase.from('qualifying')
            .select('drivers!inner( driverId, forename, surname ), q1, q2, q3, raceId, position')
            .eq('raceId', race.key);
          if (error) {
            console.error('Error fetching qualify:', error);
            return;
          }
          setQualify(data);
        }
        useEffect(() => {
          selectQualify();
        }, [race]);        
        
        
        const qualifyData = qualifying
        .map((qualify) => ({
          key: qualify.qualifyId,
          raceId: qualify.raceId,
          driverId: qualify.driverId,
          constructorId: qualify.constructorId,
          number: qualify.number,
          position: qualify.position,
          q1: qualify.q1,
          q2: qualify.q2,
          q3: qualify.q3,
          forename : qualify.drivers.forename,
          surname : qualify.drivers.surname
        }));
        

        
        const standingsDrawerContent = (
            <>
              {/* <Button type="primary">Add standings to favorites</Button> */}
              <Title style={{textAlign: 'center'}}>Standings</Title>
              <h3>After round: {race.round}</h3>
              <Flex style={{ flexDirection: 'row' }}>
                      <Content style={{padding: '24px 0', minHeight: 280, justifyContent: 'center', alignItems: 'center' }}>
                          <Title style={{textAlign: 'center'}}>Drivers</Title>
                          <Content width={500}>
                          <List
                                dataSource={driverStandingsData}
                                renderItem={(driverStanding) => (
                                <List.Item>
                                    <List.Item.Meta title={`${driverStanding.forename + ' ' + driverStanding.surname}`} 
                                                    description={`Points: ${driverStanding.points}` + ` | Wins: ${driverStanding.wins}`} />
                                </List.Item>
                                )}
                            />
                          </Content>
                      </Content>
                      
                      <Content style={{padding: '24px 0', minHeight: 280, justifyContent: 'center', alignItems: 'center'}}>
                          <Title style={{textAlign: 'center'}}>Constructors</Title>
                          <Content width={500}>
                          <List
                                dataSource={constructorStandingsData}
                                renderItem={(constructorStanding) => (
                                <List.Item>
                                    <List.Item.Meta title={`${constructorStanding.name}`} 
                                                    description={`Points: ${constructorStanding.points}` + ` | Wins: ${constructorStanding.wins}`} />
                                    <Button onClick={() => getFav2(constructorStanding.name)}>Contructor Favorite</Button>
                                </List.Item>
                                )}
                            />
                          </Content>
                      </Content>
              </Flex>
            </>
          );

          const resultsDrawerContent = (
            <>
              <Title style={{textAlign: 'center'}}>Results</Title>
              <Flex style={{ flexDirection: 'row' }}>
                      <Content style={{padding: '24px 0', minHeight: 280, justifyContent: 'center', alignItems: 'center' }}>
                          <Title style={{textAlign: 'center'}}>Qualifying</Title>
                          <Content width={500}>
                          <List
                                dataSource={qualifyData}
                                renderItem={(qualify) => (
                                <List.Item>
                                    <List.Item.Meta title={`${qualify.forename + ' ' + qualify.surname}`} 
                                                    description={`Position: ${qualify.position}`} />
                                      <Button onClick={() => getFav1(qualify.forename + ' ' + qualify.surname)}>Driver Favorite</Button>
                                </List.Item>
                                )}
                            />
                          </Content>
                      </Content>
                      
                      <Content style={{padding: '24px 0', minHeight: 280, justifyContent: 'center', alignItems: 'center'}}>

                          <Title style={{textAlign: 'center'}}>Results</Title>
                          <Content width={500}>
                          <List
                                dataSource={resultsData}
                                renderItem={(result) => (
                                <List.Item>
                                    {/* <Button>Favorite</Button> */}
                                    <p>Circut : {result.circuitName}</p>
                                    <List.Item.Meta title={`${result.forename + ' ' + result.surname}`} 
                                                    description={`Points: ${result.points}` + ` | Laps: ${result.laps}`} />
                                    <Button onClick={() => getFav3(result.circuitName)}>Circuit Favorite</Button>
                                </List.Item>

                                )}
                            />
                                
                          </Content>
                      </Content>
              </Flex>
            </>
          );


// console.log('RACE ID: '+race.key);
// console.log('DRIVER STANDINGS' + driverStandings)
// console.log('DRIVER STANDINGS length' + driverStandings.length)


  return (
    <List.Item style={{ padding: '10px 0' }}>
      <List.Item.Meta title={race.name} />
      <Space>

        <Button
          type="primary"
          size="big"
          shape="round"
          onClick={() => {
            toggleDrawer(1, true);
            setResultsContent(resultsDrawerContent);
          
          }}
        >
          Results

        </Button>

        <Button
          type="primary"
          size="big"
          shape="round"
          onClick={() => {
            toggleDrawer(2, true);
            setStandingsContent(standingsDrawerContent);
          }}
        >
          Standings
        </Button>
      </Space>
    </List.Item>
  );
};

export default SingleRace;