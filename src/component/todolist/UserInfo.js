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
  render: (text,record) => <Link to="/UserUpdate">{text}</Link>
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
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User',    // Column configuration not to be checked
  }),
};

class UserInfo extends Component{

  componentDidMount(){
    this.props.list(1);
  }

  render (){
    const {userlist} = this.props;

    return(
      <Content style={{ margin: '125px 100px', padding: 25, minHeight: 280,background: '#fff' }}>
          <Link to="/UserUpdate"><Button type="primary">UserUpdate</Button></Link>
          <Table rowKey="_id" rowSelection={rowSelection} columns={columns} dataSource={userlist} />
      </Content>
    );

  }
}

export default connect(
  state => {
    return ({userlist:state.update.userlist })
  },
  dispatch => {
    return {
      list : (n)=> dispatch(list(n))
    }
  }
)(UserInfo)
