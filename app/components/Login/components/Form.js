import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Helmet } from 'react-helmet';
import ErrorList from '../../ErrorList';
import Container from '../../../containers/ContainerPage';
import PageHeader from '../../../containers/Localuri/components/PageHeader';
import ContainerInner from '../../ContainerInner';
import Footer from '../../Footer';

const FormItem = Form.Item;

/**
 * Login form
 */
class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const { form, onLogin } = this.props;

    form.validateFields((err, values) => {
      if (!err) {
        onLogin({ ...values, userType: this.props.userType || 'admins' });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading, error } = this.props;

    return (
      <Container>
        <Helmet>
          <title>Admin Login</title>
        </Helmet>
        <PageHeader />
        <ContainerInner>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <div className="form-title">
              Admin Login
            </div>
            <ErrorList error={error} className="m-b-md" />
            <FormItem>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Te rugăm să introduci adresa de email' }]
              })(
                <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" type="email" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Te rugăm să introduci parola' }]
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <div className="flex flex-space-between flex-vertical-center">
              <Button type="primary" size="small" htmlType="submit" className="login-form-button m-l-a" disabled={loading} loading={loading}>Log in</Button>
            </div>
          </Form>
        </ContainerInner>
        <Footer />
      </Container>
    );
  }
}

export default Form.create()(LoginForm);
