import React from 'react';
import './App.css';

import "antd/dist/antd.css";

import { Layout } from 'antd';

import Appheader from './component/common/header';
import AppHome from './views/home';
import AppFooter from './component/common/footer';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="mainLayout">

      <Header>
        <Appheader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
