import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

class header extends Component {
    state = {
      collapsed: false,
    };

    render() {
        return (
          <Header style={{ background: '#fff', padding: 0 }} ></Header>
        );
    }

}

export default header;
