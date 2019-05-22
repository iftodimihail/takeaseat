import React from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Form, Input, Rate, Button } from 'antd';
import { requiredMessage } from '../../utils/errors';
import Container from '../ContainerPage';
import PageHeader from '../Localuri/components/PageHeader';
import ContainerInner from '../../components/ContainerInner';
import axios from '../../axios';

/**
 * ReviewForm Component
 */
class ReviewForm extends React.Component {
  state = {
    reservationData: null
  };

  componentDidMount() {
    axios.get(`/reservations/${this.props.match.params.reservationId}`)
      .then((res) => this.setState({ reservationData: res.data.data }));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props;
    const { reservationData } = this.state;

    form.validateFields((err, values) => {
      if (!err) {
        axios.post('/reviews', {
          first_name: reservationData.first_name,
          last_name: reservationData.last_name,
          local_id: reservationData.local_id,
          date: new Date(),
          ...values
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Container>
        <Helmet>
          <title>Local</title>
        </Helmet>
        <PageHeader />
        <ContainerInner>
          <Form onSubmit={this.handleSubmit} style={{ paddingTop: 150 }}>
            <Form.Item label="Notă acordată">
              {getFieldDecorator('rating', {
                rules: [{ required: true, message: requiredMessage }]
              })(
                <Rate />
              )}
            </Form.Item>
            <Form.Item label="Descriere">
              {getFieldDecorator('review_text')(
                <Input.TextArea rows={8} />
              )}
            </Form.Item>
            <Button size="small" type="primary" htmlType="submit">Trimite recenzie</Button>
          </Form>
        </ContainerInner>
      </Container>
    );
  }
}

export default withRouter(Form.create()(ReviewForm));

