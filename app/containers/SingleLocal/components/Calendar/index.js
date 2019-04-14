import React, { Component } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment/moment';

/**
 * RezervationCalendar component
 */
class ReservationCalendar extends Component {
  state = {
    date: new Date()
  };

  onChange = (date) => this.setState({ date });

  render() {
    return (
      <Calendar
        next2Label={null}
        prev2Label={null}
        minDate={moment().toDate()}
        maxDate={moment().add(6, 'months').toDate()}
        onChange={this.onChange}
        locale="ro-RO"
      />
    );
  }
}

export default ReservationCalendar;
