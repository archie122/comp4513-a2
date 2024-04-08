import { Dropdown, Button, Space, Menu, message } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const Dropdown1 = (props) => {

  const list2 = [
    {
      label : '2000',
      key : '2000',
      icon : <UserOutlined />
    },
    {
      label : '2002',
      key : '2002',
      icon : <UserOutlined />
    },
    {
      label : '2003',
      key : '2003',
      icon : <UserOutlined />
    }, 
    {
      label : '2004',
      key : '2004',
      icon : <UserOutlined />
    },
    {
      label : '2005',
      key : '2005',
      icon : <UserOutlined />
    },
    {
      label : '2006',
      key : '2006',
      icon : <UserOutlined />
    },
    {
      label : '2007',
      key : '2007',
      icon : <UserOutlined />
    },
    {
      label : '2008',
      key : '2008',
      icon : <UserOutlined />
    },
    {
      label : '2009',
      key : '2009',
      icon : <UserOutlined />
    },
    {
      label : '2010',
      key : '2010',
      icon : <UserOutlined />
    },
    {
      label : '2011',
      key : '2011',
      icon : <UserOutlined />
    },
    {
      label : '2012',
      key : '2012',
      icon : <UserOutlined />
    },
    {
      label : '2013',
      key : '2013',
      icon : <UserOutlined />
    },
    {
      label : '2014',
      key : '2014',
      icon : <UserOutlined />
    },
    {
      label : '2015',
      key : '2015',
      icon : <UserOutlined />
    },
    {
      label : '2016',
      key : '2016',
      icon : <UserOutlined />
    },
    {
      label : '2017',
      key : '2017',
      icon : <UserOutlined />
    },
    {
      label : '2018',
      key : '2018',
      icon : <UserOutlined />
    },
    {
      label : '2019',
      key : '2019',
      icon : <UserOutlined />
    },
    {
      label : '2020',
      key : '2020',
      icon : <UserOutlined />
    },
    {
      label : '2021',
      key : '2021',
      icon : <UserOutlined />
    },
    {
      label : '2022',
      key : '2022',
      icon : <UserOutlined />
    },
    {
      label : '2023',
      key : '2023',
      icon : <UserOutlined />
    }
  ];

  const handleMenuClick = (e) => {
    // message.info('The year is ' + e.key);
    props.update(e.key);
  };

  const menuProps = {
    overlay: (
      <Menu onClick={handleMenuClick}>
        {list2.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    )
  };


    return (
        <Dropdown {...menuProps} style={{ flex : 1, marginLeft: 10 }}>
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