import React from 'react';
import { Drawer, Button } from 'antd';

const InfoDrawer = ({ title, content, open, closeDrawer }) => {
  return (
    <Drawer
      title={title}
      placement="right"
      closable={true}
      onClose={closeDrawer}
      open={open}
      width={1200}
    >
      {content}
    </Drawer>
  );
};

export default InfoDrawer;