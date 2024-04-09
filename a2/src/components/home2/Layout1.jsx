import { Layout } from 'antd';
import Footer1 from './Footer1';
import Header1 from './Header1';
import Content1 from './Content1';
import { useState } from 'react';

const Layout1 = (props) => {
    
  const [currentYear, setCurrentYear] = useState('');

  const updateYear = (id) => {
    setCurrentYear(id);
  }

  

  return (
    <Layout>

      <Header1 update={updateYear}/>

      <Content1 update={currentYear} getFav1={props.getFav1} getFav2={props.getFav2} getFav3={props.getFav3}/>

      <Footer1 />

    </Layout>
  )
}

export default Layout1