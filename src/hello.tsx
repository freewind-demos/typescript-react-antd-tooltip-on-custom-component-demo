import { Space, Tooltip } from 'antd';
import React, { FC } from 'react';

const MyText: FC = ({ children }) => {
  return <span style={{ border: '1px solid red' }}>{children}</span>
}

export default function Hello() {
  return <Space>
    <Tooltip title="hello"><span style={{ border: '1px solid red' }}>Good Tooltip</span></Tooltip>
    <Tooltip title="hello"><MyText>No Tooltip</MyText></Tooltip>
  </Space>
};
