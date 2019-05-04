import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import Calendar from 'react-calendar';
import moment from 'moment/moment';
import axios from '../../../../axios';

/**
 * ReservationCalendar component
 */
class ReservationCalendar extends Component {
  state = {
    local_id: 0
  };

  componentDidMount() {
    if (isEmpty(this.props.places)) {
      axios.get(`/localuri/${this.props.match.params.localName}`)
        .then((res) => this.setState({ local_id: res.data.data.id }));
    } else {
      this.setState({ local_id: this.props.places.filter((place) => place.uniqueLink === this.props.match.params.localName)[0].id });
    }
  }

  render() {
    return (
      <Calendar
        next2Label={null}
        prev2Label={null}
        minDate={moment().toDate()}
        maxDate={moment().add(1, 'months').toDate()}
        minDetail="month"
        onChange={this.props.onDateChange}
        value={this.props.data || null}
        locale="ro-RO"
        showNeighboringMonth={false}
      />
    );
  }
}

export default ReservationCalendar;
