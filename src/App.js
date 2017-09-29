import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Route,Link} from 'react-router-dom';

import Home from './component/todolist/home';
import List2 from './component/todolist/list';
import Header from './component/header/header';
import Footer from './component/footer/footer';

import List from './component/list/list';
import UserUpdate from './component/todolist/UserUpdate';

import './App.css';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

const Topic = () => (
  <div>
    <h3>Topic</h3>
  </div>
)

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

        <Sider breakpoint="lg"
               collapsedWidth="0"
               onCollapse={(collapsed, type) => { console.log(collapsed, type); }}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
            >
              <Menu.Item key="1"><Link to="/users">UserInfo</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/topics">Topics</Link></Menu.Item>
            </SubMenu>

            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
            >
              <Menu.Item key="4">Team 1</Menu.Item>
              <Menu.Item key="5">Team 2</Menu.Item>
            </SubMenu>

            <Menu.Item key="6">
              {/* <Link to="/list2">List</Link> */}
            </Menu.Item>

          </Menu>
        </Sider>

        <Layout>
          <Header col={this.state.collapsed} toggle={this.toggle} />

          <Route exact path="/users" component={List}/>
          <Route path="/topics" component={Topic}/>
          <Route path="/UserUpdate/" component={UserUpdate}/>

          <Footer />
        </Layout>
      </Layout>
    );
  }
}

export default App;
