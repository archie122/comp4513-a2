import Layout from 'antd/lib/layout';
import { theme, Button, Space, List, Typography } from 'antd';
const { Sider, Content } = Layout;
const { Title } = Typography;

const races = [
    {
      "circuits":
      {
        "name": "Bahrain International Circuit",
        "country":"Bahrain",
        "location":"Sakhir"
      }
    },
    {
      "circuits":
      {
        "name": "Sepang International Circuit",
        "country":"Malaysia",
        "location":"Kuala Lumpur"
      }
    },
    {
      "circuits":
      {
        "name": "Albert Park Grand Prix Circuit",
        "country":"Australia",
        "location":"Melbourne"
      }
    },
    {
      "circuits":
      {
        "name": "Autodromo Enzo e Dino Ferrari",
        "country":"Italy",
        "location":"Imola"
      }
    },
    {
      "circuits":
      {
        "name": "Nürburgring",
        "country":"Germany",
        "location":"Nürburg"
      }
    },
    {
      "circuits":
      {
        "name": "Circuit de Barcelona-Catalunya",
        "country":"Spain",
        "location":"Montmeló"
      }
    },
    {
      "circuits":
      {
        "name": "Circuit de Monaco",
        "country":"Monaco",
        "location":"Monte-Carlo"
      }
    },
  ]

const Sider1 = (props) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();  

    return (
        <Content
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
            width={500}
          >

          <Title className='text-2xl text-center py-5' level={2} style={{display: 'flex', justifyContent: 'center'}}>
            {props.update} Races
          </Title>

          <List
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
            itemLayout="horizontal"
            dataSource={races}
            renderItem={
              item => (
                  <List.Item 
                    style={{ 
                      padding: '10px 0',
                    }}>
                  <List.Item.Meta title={item.circuits.name}/>
                    <Space>
                      
                      <Button 
                        type="primary" 
                        size="small" 
                        onClick={() => alert("Result")}>
                          Results
                      </Button>
                      
                      <Button 
                        type="primary" 
                        size="small" 
                        onClick={() => alert("Standing")}>
                          Standing
                      </Button>
                    
                    </Space>
                  </List.Item>
                )}
            />
        </Content>
    )

};

export default Sider1;