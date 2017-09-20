import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd';
import { update } from '../../action/action'

const FormItem = Form.Item;

class UserUpdate extends Component{

  handleSubmit = () => {

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.update(values);
      }
    });
  }

  render (){
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };

    return(
      <Form>

        <FormItem {...formItemLayout} label="ID" hasFeedback >
          {getFieldDecorator('id', {
          rules: [{ required: true, message: 'Please input your ID!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Password"
          hasFeedback
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }],
          })(
            <Input type="password" />
          )}
        </FormItem>


        <FormItem
          {...formItemLayout}
          label="Name"
          hasFeedback
        >
          {getFieldDecorator('name', {
          rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Phone Number"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input style={{ width: '100%' }} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="E-mail"
          hasFeedback
        >
          {getFieldDecorator('email', {
          rules: [{type: 'email', message: 'The input is not valid E-mail!'},
            {required: true, message: 'Please input your E-mail!'}],
        })(
          <Input />
        )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={()=>this.handleSubmit()}>Register</Button>
        </FormItem>

      </Form>

    );

  }
}

const WrappedRegistrationForm = Form.create()(UserUpdate);

export default connect(
  state => {
    return ({number: state.update.number }) },
    dispatch => {
      return {
        update : (obj) => dispatch(update(obj))
      }
    }
)(WrappedRegistrationForm)
