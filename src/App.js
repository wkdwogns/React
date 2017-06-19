import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col, Card  } from 'antd';
import {Link} from 'react-router-dom';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import './App.css';

const SubMenu = Menu.SubMenu;
const { Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>

        <Sider trigger={null} breakpoint="lg" collapsed={this.state.collapsed} onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
            >
              <Menu.Item key="1">Tom</Menu.Item>
              <Menu.Item key="2">Bill</Menu.Item>
              <Menu.Item key="3">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
            >
              <Menu.Item key="4">Team 1</Menu.Item>
              <Menu.Item key="5">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="6">
              <span>
                <Icon type="file" />
                <span className="nav-text">File</span>
              </span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header col={this.state.collapsed} toggle={this.toggle} />

          <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>

            <Row gutter={12}>
              <Col span={12}><div style={{ background: '#00A0E9'}}>col-12</div></Col>
              <Col span={12}><div style={{ background: '#00A0E9'}}>col-12</div></Col>
            </Row>

            <Row gutter={32}>
              <Col span={8}><div style={{ background: '#fff'}}>col-8</div></Col>
              <Col span={8}><div style={{ background: '#fff'}}>col-8</div></Col>
              <Col span={8}><div style={{ background: '#fff'}}>col-8</div></Col>
            </Row>

            <Row gutter={16}>
              <Col span={6}><div style={{ background: '#00A0E9'}}>col-6</div></Col>
              <Col span={6}><div style={{ background: '#00A0E9'}}>col-6</div></Col>
              <Col span={6}><div style={{ background: '#00A0E9'}}>col-6</div></Col>
              <Col span={6}><div style={{ background: '#00A0E9'}}>col-6</div></Col>
            </Row>

            <Card bordered={false} style={{ width: 300 }}>
              <h3>Europe Street beat</h3>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>

          </Content>


          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>

          <Footer />

        </Layout>
      </Layout>
    );
  }
}

export default App;
