import React, { Component } from 'react';
import { Layout,Row, Col, Card  } from 'antd';

const { Content } = Layout;

class List extends Component {
    render() {
        return (
          <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>

            <Row gutter={12}>
              <Col span={12}><div style={{ background: '#fff'}}>col-12</div></Col>
              <Col span={12}><div style={{ background: '#fff'}}>col-12</div></Col>
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
        );
    }
}

export default List;
