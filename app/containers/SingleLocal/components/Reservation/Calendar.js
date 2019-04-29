import React, { Component } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment/moment';

/**
 * ReservationCalendar component
 */
class ReservationCalendar extends Component {
  onChange = (date) => {
    this.props.onSelectDate(date);
    this.props.nextTab('2');
  };

  render() {
    return (
      <Calendar
        next2Label={null}
        prev2Label={null}
        minDate={moment().toDate()}
        maxDate={moment().add(1, 'months').toDate()}
        minDetail="month"
        onChange={this.onChange}
        value={this.props.data || null}
        locale="ro-RO"
        showNeighboringMonth={false}
      />
    );
  }
}

export default ReservationCalendar;
