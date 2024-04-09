import { Button, List, Space } from 'antd';

const SingleRace = ({ race, toggleDrawer, getFav }) => {


  return (
  <List.Item style={{ padding: '10px 0' }}>
    <List.Item.Meta title={race.name} />
    <Space>
      <Button
        type="primary"
        size="big"
        shape="round"
        onClick={() => toggleDrawer(1, true)}
      >
        Results
      </Button>
      <Button
        type="primary"
        size="big"
        shape="round"
        onClick={() => toggleDrawer(2, true, race.round)}
      >
        Standings
      </Button>
      <Button 
        type="primary"
        size="big"
        shape="round"
        onClick={() => getFav(race)}
      >
        Favorite
      </Button>
    </Space>
  </List.Item>
);
}
export default SingleRace;