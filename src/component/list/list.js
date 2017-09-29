import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout,Row, Table,Button } from 'antd';
import {Link} from 'react-router-dom';
import { list } from '../../action/action';

const { Content } = Layout;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: '_id',
  render:(text,record) => <Link to={{ pathname : "/UserUpdate" , state: { "id": record._id }  }}>{ text?text:'이름없음' }</Link>
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

  handleTableChange(pagination, filters, sorter){
    //const pager = { ...this.state.pagination };
    //pager.current = pagination.current;
    console.log(pagination);
    console.log(filters);
    console.log(sorter);
    // let obj = {
    //   results: pagination.pageSize,
    //   page: pagination.current,
    //   sortField: sorter.field,
    //   sortOrder: sorter.order
    // };
    //
    // this.props.list(this.props.match.path,obj);
  }

  getList(obj={}){
    this.props.list(this.props.match.path,obj);
  }

  componentDidMount(){
    this.getList();
  }

  render (){
    const { listInfo,pagination,loading } = this.props;

    return(
      <Content style={{ margin: '125px 100px', padding: 25, minHeight: 280,background: '#fff' }}>
          <Link to="/UserUpdate"><Button type="primary" style={{marginBottom : '10px'}}>UserUpdate</Button></Link>
          <Table rowKey="_id" rowSelection={rowSelection} columns={columns} dataSource={listInfo} pagination={pagination} loading={loading} onChange={this.handleTableChange}/>
      </Content>
    );

  }
}

export default connect(
  state => {
    console.log(state.list);
    return ({ listInfo : state.list.list, pagination : state.list.pagination,loading : state.list.loading })
  },
  dispatch => {
    return {
      list : (path,obj)=> dispatch(list(path,obj))
    }
  }
)(List)
