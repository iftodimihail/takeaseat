import React, { Component } from 'react';
import Calendar from 'react-calendar';

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
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          locale="ro-RO"
        />
      </div>
    );
  }
}

export default ReservationCalendar;
