import { Layout } from 'antd';
import Footer1 from './Footer1';
import Header1 from './Header1';
import Content1 from './Content1';
import { useState } from 'react';

const Layout1 = () => {
    
  const [currentYear, setCurrentYear] = useState('');

  const updateYear = (id) => {
    setCurrentYear(id);
  }

  return (
    <Layout>

      <Header1 update={updateYear}/>

      <Content1 update={currentYear}/>

      <Footer1 />

    </Layout>
  )
}

export default Layout1