import Layout from 'antd/lib/layout';
const { Content } = Layout;
import Layout3 from './Layout3';

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

const Content1 = (props) => {

    return (
      <Content
          style={{
            padding: '0 48px ',
          }}
        >
        
        <div style={{ minHeight: 20 }} />
        
        <Layout3 update={props.update}/>
      
      </Content>
    )
}

export default Content1;