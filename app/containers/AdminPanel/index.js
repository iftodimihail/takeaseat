import React from 'react';
import { Table } from 'antd';
import axios from 'axios';
import moment from 'moment/moment';

/**
 * AdminPanel Component
 */
class AdminPanel extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get('/localuri', { params: { localId: 3 } })
      .then((res) => console.log(res.data.data));
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
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Număr de Telefon',
      dataIndex: 'phone',
      key: 'phone'
    }
  ];

  render() {
    return (
      <div>
        <Table columns={this.columns} />
      </div>
    )
  }
}

export default AdminPanel;
