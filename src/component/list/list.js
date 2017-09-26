import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout,Table,Button } from 'antd';
import {Link} from 'react-router-dom';
import { list } from '../../action/action';

const { Content } = Layout;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: '_id',
  render: (text,record) => <Link to={{ pathname : "/UserUpdate" , state: { "id": record._id }  }}>{text}</Link>
}, {
  title: 'Id',
  dataIndex: 'userid'
}, {
  title: 'Phone',
  dataIndex: 'phone'
}, {
  title: 'E-mail',
  dataIndex: 'email'
}];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys: ${selectedRowKeys}', 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({ disabled: record.name === 'Disabled User' })
};

class List extends Component{

  componentDidMount(){
    this.props.list(this.props.match.path);
  }

  render (){
    const { listInfo } = this.props;

    return(
      <Content style={{ margin: '125px 100px', padding: 25, minHeight: 280,background: '#fff' }}>
          <Link to="/UserUpdate"><Button type="primary">UserUpdate</Button></Link>
          <Table rowKey="_id" rowSelection={rowSelection} columns={columns} dataSource={ listInfo } />
      </Content>
    );

  }
}

export default connect(
  state => {
    return ({ listInfo : state.list.list })
  },
  dispatch => {
    return {
      list : (n)=> dispatch(list(n))
    }
  }
)(List)
