import { Button, List, Space } from 'antd';

const SingleRace = ({ race, toggleDrawer }) => (
  <List.Item style={{ padding: '10px 0' }}>
    <List.Item.Meta title={race.name} />
    <Space>
      <Button
        type="primary"
        size="small"
        onClick={() => toggleDrawer(1, true)}
      >
        Results
      </Button>
      <Button
        type="primary"
        size="small"
        onClick={() => toggleDrawer(2, true, race.round)}
      >
        Standings
      </Button>
    </Space>
  </List.Item>
);

export default SingleRace;