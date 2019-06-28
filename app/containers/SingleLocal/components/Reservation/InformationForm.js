import React from 'react';
import { Form, Input, Button } from 'antd';
import { requiredMessage } from '../../../../utils/errors';

/**
 * InformationForm component
 */
class InformationForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const {
      form, makeReservation, localId, date, persons, hour
    } = this.props;

    form.validateFields((err) => {
      if (!err) {
        const data = {
          local_id: localId,
          nr_persons: persons,
          date,
          hour
        };
        makeReservation(data, form, () => this.props.nextTab('1'));
      }
    });
  };

  render() {
    const { loading } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="reservation-information-form">
        <Form.Item>
          {getFieldDecorator('last_name', {
            rules: [{ required: true, message: requiredMessage }]
          })(
            <Input placeholder="Nume *" autoComplete="off" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('first_name', {
            rules: [{ required: true, message: requiredMessage }]
          })(
            <Input placeholder="Prenume *" autoComplete="off" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: requiredMessage }]
          })(
            <Input placeholder="Email *" type="email" autoComplete="off" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('phone', {
            rules: [{
              required: true,
              message: 'Te rugăm să completezi cu un număr de telefon valid',
              pattern: '^(\\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\\s|\\.|\\-)?([0-9]{3}(\\s|\\.|\\-|)){2}$'
            }]
          })(
            <Input placeholder="Telefon *" autoComplete="off" />
          )}
        </Form.Item>
        <div>
          <Button size="small" type="primary" htmlType="submit" loading={loading} disabled={loading}>Rezervă</Button>
        </div>
      </Form>
    );
  }
}

export default Form.create()(InformationForm);
