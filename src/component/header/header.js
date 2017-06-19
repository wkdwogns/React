import React, { Component } from 'react';
import { Layout,Icon } from 'antd';

const { Header } = Layout;

class header extends Component {
    state = {
      collapsed: false,
    };

    render() {
        return (
          <Header style={{ background: '#fff', padding: 0 }} >
            <Icon
              className="trigger"
              type={this.props.col ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.toggle}
            />
          </Header>
        );
    }

}

export default header;
