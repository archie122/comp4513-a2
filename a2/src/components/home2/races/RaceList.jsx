import { List } from 'antd';
import SingleRace from './SingleRace';

const RaceList = ({ raceData, toggleDrawer, setStandingsContent  }) => (
  <List
    style={{
      padding: '0 24px',
      minHeight: 280,
    }}
    itemLayout="horizontal"
    dataSource={raceData}
    renderItem={(race) => (
      <SingleRace race={race} toggleDrawer={toggleDrawer} setStandingsContent={setStandingsContent} />
    )}
  />
);

export default RaceList;
