import React from 'react';
import moment from 'moment';
import { Table, Tooltip } from 'antd';
import axios from '../../axios';

class ReservationHistory extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get('/reservations', { params: { localId: this.props.user.local_id, noPending: true } })
      .then((res) => this.setState({ data: res.data.data.map((reservation) => ({ key: reservation.id, ...reservation })) }));
  }

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
      title: 'Status',
      render: (row) => <span>{row.status === 'confirmed' ? 'Confirmat' : 'Respins'}</span>,
      key: 'status'
    }];

  render() {
    return (
      <div>
        <Table dataSource={this.state.data} columns={this.columns} />
      </div>
    );
  }
}

export default ReservationHistory;
