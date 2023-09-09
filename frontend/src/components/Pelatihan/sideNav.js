import React from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SideMenu = () => {
  return (
    <Sider width={200} className="site-layout-background" style={{ borderRight: '1px solid black',height:'100vh',position:'fixed' }}>
      <h2 style={{fontSize:'120%',marginLeft:'10%',fontWeight:'bold'}}>Filter</h2>
      <h4 style={{fontSize:'80%',marginLeft:'14%'}}>kategori</h4>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" >
          Kategori 1
        </Menu.Item>
        <Menu.Item key="2" >
          Kategori 2
        </Menu.Item>
        <Menu.Item key="3" >
          Kategori 3
        </Menu.Item>
        <Menu.Item key="4" >
          Kategori 4
        </Menu.Item>
        <Menu.Item key="5" >
          Kategori 5
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;
