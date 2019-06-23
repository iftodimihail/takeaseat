import React from 'react';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import axios from '../../axios';
import Preloader from '../../components/Preloader';

/**
 * ReservationConfirmation Component
 */
class ReservationConfirmation extends React.Component {
  state = {
    reservationData: {},
    locationName: null,
    loading: true,
    confirmed: false
  };

  componentDidMount() {
    axios.get(`/reservations/${this.props.match.params.reservationId}`)
      .then((res) => {
        axios.get(`/localuri?id=${res.data.data.local_id}`)
          .then((localRes) => this.setState({ reservationData: res.data.data, locationName: localRes.data.data.name, loading: false }));
      });
  }

  onReservationConfirm = () => {
    axios.put(`/reservations/confirm-arrival/${this.props.match.params.reservationId}`,
      { local_id: this.state.reservationData.local_id, confirmed: true })
      .then(() => this.setState({ confirmed: true }));
  };

  render() {
    const { reservationData, locationName, loading } = this.state;

    if (loading) {
      return <Preloader />;
    }

    if (this.state.reservationData.status !== 'pending' || this.state.confirmed) {
      return (
        <div className="reservation-confirm">
          <div className="information-wrapper">
            <div className="success-reservation">
              <FontAwesomeIcon icon={faCheckCircle} />
              <span>{this.state.confirmed ?
                'Reservare confirmată cu success.' :
                'Reservare a fost deja revizuită.'}
              </span>
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
      <div className="reservation-confirm">
        <div className="information-wrapper">
          <div className="title">
            <span>Locație:</span>
            <span>Nume:</span>
            <span>Prenume:</span>
            <span>Persoane:</span>
            <span>Data și ora:</span>
          </div>
          <div className="values">
            <span>{locationName}</span>
            <span>{reservationData.last_name}</span>
            <span>{reservationData.first_name}</span>
            <span>{reservationData.nr_persons} {reservationData.nr_persons > 1 ? 'persoane' : 'persoană'}</span>
            <span>{moment(reservationData.date).format('DD.MM.YYYY')} {reservationData.hour}</span>
          </div>
        </div>
        <Button type="primary" onClick={this.onReservationConfirm}>Confirmă</Button>
      </div>
    );
  }
}

export default withRouter(ReservationConfirmation);
