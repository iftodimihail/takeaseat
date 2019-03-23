import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import ErrorList from '../../ErrorList';

const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const { form, onLogin } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        onLogin({ ...values, userType: this.props.userType || 'clients' });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading, error } = this.props;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <ErrorList error={error} className="m-b-md" />
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email' }]
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" autoComplete="off" type="email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password' }]
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" autoComplete="off" />
          )}
        </FormItem>
        <div className="flex flex-space-between flex-vertical-center">
          <NavLink className="login-form-forgot" to="/forgot-password">Forgot password</NavLink>
          <Button type="primary" htmlType="submit" className="login-form-button" disabled={loading} loading={loading}>Log in</Button>
        </div>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
