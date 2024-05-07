import { Space, Tooltip } from 'antd';
import React, { FC } from 'react';

const MyBadWrapper: FC = ({ children }) => {
  return <span style={{ border: '1px solid red' }}>{children}</span>
}

// NOTE have to accept extra props from the outer and pass into inner component
const MyGoodWrapper: FC = ({ children, ...rest }) => {
  return <span style={{ border: '1px solid red' }} {...rest}>{children}</span>
}
export default function Hello() {
  return <Space>
    <Tooltip title="hello"><span style={{ border: '1px solid red' }}>Good Tooltip</span></Tooltip>
    <Tooltip title="hello"><MyGoodWrapper>Good Custom Tooltip</MyGoodWrapper></Tooltip>
    <Tooltip title="hello"><MyBadWrapper>No Tooltip</MyBadWrapper></Tooltip>
  </Space>
};
