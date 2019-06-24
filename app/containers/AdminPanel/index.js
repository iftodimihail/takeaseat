import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Table, Tooltip, Popconfirm } from 'antd';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import moment from 'moment/moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import RejectModal from './RejectModal';
import Container from '../ContainerPage';
import PageHeader from '../Localuri/components/PageHeader';
import ContainerInner from '../../components/ContainerInner';
import { successNotification } from '../../components/Notifications';

/**
 * AdminPanel Component
 */
class AdminPanel extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get('/reservations', { params: { localId: this.props.user.local_id } })
      .then((res) => this.setState({ data: res.data.data.map((reservation) => ({ key: reservation.id, ...reservation })) }));
  }

  onReject = (id) => () => this.setState({ data: this.state.data.filter((reservation) => reservation.id !== id) });

  approveReservation = (id) => () => {
    axios.put(`/reservations/change-reservation-status/${id}`, { status: 'confirmed' })
      .then(() => {
        this.setState({ data: this.state.data.filter((reservation) => reservation.id !== id) });
        successNotification('approvedReservation', 'Rezervare aprobată cu succes');
      });
  };

  columns = [
    {
      title: 'Nume',
      key: 'name',
      render: (row) => <span>{`${row.last_name} ${row.first_name}`}</span>
    },
    {
      title: 'Data',
      key: 'date',
      render: (row) => <span>{moment(row.date).format('DD.MM.YYYY')}</span>
    },
    {
      title: 'Ora',
      dataIndex: 'hour',
      key: 'hour'
    },
    {
      title: 'Număr Persoane',
      dataIndex: 'nr_persons',
      key: 'nrPersons'
    },
    {
      title: 'Email',
      key: 'email',
      render: (row) => <Tooltip title="Trimite Email"><a href={`mailto:${row.email}`}>{row.email}</a></Tooltip>
    },
    {
      title: 'Număr de Telefon',
      key: 'phone',
      render: (row) => <Tooltip title="Sună"><a href={`tel:${row.phone}`}>{row.phone}</a></Tooltip>
    },
    {
      title: 'Acțiuni',
      key: 'actions',
      render: (row) => (
        <div className="actions">
          <Popconfirm
            title="Ești sigur?"
            okText="Confirmă"
            cancelText="Anulează"
            onConfirm={this.approveReservation(row.id)}
          >
            <Tooltip title="Aprobă">
              <a className="approve"><FontAwesomeIcon icon={faCheckCircle} /></a>
            </Tooltip>
          </Popconfirm>
          <RejectModal
            onReject={this.onReject}
            record={row}
          />
        </div>
      )
    }
  ];

  render() {
    return (
      <Container>
        <Helmet>
          <title>Admin Panel</title>
        </Helmet>
        <PageHeader />
        <ContainerInner>
          <div className="admin-reservations-table">
            {window.innerWidth > 994 ?
              <Table dataSource={this.state.data} columns={this.columns} /> :
              <div className="information-wrapper">
                <div className="success-reservation">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <span>Logare cu succes</span>
                </div>
              </div>
            }
          </div>
        </ContainerInner>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  const globalState = state.get('global');
  return {
    user: globalState.get('user')
  };
};

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(AdminPanel);
