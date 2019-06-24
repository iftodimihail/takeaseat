import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { NavLink, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
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
    reservationData: null,
    loading: false,
    confirmed: false
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
        this.setState({ loading: true });
        axios.post('/reviews', {
          reservation_id: reservationData.id,
          first_name: reservationData.first_name,
          last_name: reservationData.last_name,
          local_id: reservationData.local_id,
          date: new Date(),
          ...values
        })
          .then(() => this.setState({ loading: false, confirmed: true }));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    if (this.state.confirmed || (!isEmpty(this.state.reservationData) && this.state.reservationData.reviewed)) {
      return (
        <div className="reservation-confirm">
          <div className="information-wrapper">
            <div className="success-reservation">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>Recenzia a fost adaugată cu success.</span>
            </div>
          </div>
          <div>
            <NavLink to="/">
              <Button type="primary" size="small">Acasă</Button>
            </NavLink>
          </div>
        </div>
      );
    }

    return (
      <Container>
        <Helmet>
          <title>Local</title>
        </Helmet>
        <PageHeader />
        <ContainerInner smallMargin>
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
            <Button size="small" type="primary" htmlType="submit" loading={this.state.loading}>Trimite recenzie</Button>
          </Form>
        </ContainerInner>
      </Container>
    );
  }
}

export default withRouter(Form.create()(ReviewForm));

