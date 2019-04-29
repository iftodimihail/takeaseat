import React from 'react';
import { Tabs } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment/moment';
import { faCalendarAlt, faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import reducer from './reducer';
import injectReducer from '../../../../utils/injectReducer';
import NotFound from '../../../NotFound';
import Calendar from './Calendar';
import NumberOfPersons from './NumberOfPersons';
import TabsIcon from './TabIcons';
import {
  selectReservationDate,
  selectNrOfPersons,
  selectReservationHour
} from './actions';

/**
 * ReservationTabs component
 */
class ReservationTabs extends React.Component {
  state = {
    currentTab: '2'
  };

  nextTab = (currentTab) => this.setState({ currentTab });

  personsTabTitle = (persons) => persons === 1 ? '1 Persoană' : `${persons} Persoane`;

  render() {
    const { date, persons, hour } = this.props;

    return (
      <Tabs activeKey={this.state.currentTab} onChange={this.nextTab}>
        <Tabs.TabPane
          tab={<TabsIcon icon={faCalendarAlt} data={date ? moment(date).locale('ro').format('DD MMM') : 'Data'} />}
          key="1"
        >
          <Calendar nextTab={this.nextTab} {...this.props} />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<TabsIcon icon={faUser} data={persons ? this.personsTabTitle(persons) : 'Nr. Persoane'} />}
          key="2"
        >
          <NumberOfPersons nextTab={this.nextTab} {...this.props} />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<TabsIcon icon={faClock} data={hour ? moment(hour).locale('ro').format('HH:mm') : 'Ora'} />}
          key="3"
        >
          <NotFound />
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

/**
 * State to props
 * @function mapStateToProps
 * @param  {function} state
 * @description Get state properties
 * @returns {object} data
 */
const mapStateToProps = (state) => {
  const reservationState = state.get('reservation');

  return {
    date: reservationState.get('date'),
    persons: reservationState.get('persons'),
    hour: reservationState.get('hour')
  };
};

/**
 * Dispatch to props
 * @function mapDispatchToProps
 * @param  {function} dispatch
 * @returns {object} onLogin
 */
const mapDispatchToProps = (dispatch) => ({
  onSelectDate: (date) => dispatch(selectReservationDate(date)),
  onSelectPersons: (persons) => dispatch(selectNrOfPersons(persons)),
  onSelectHour: (hour) => dispatch(selectReservationHour(hour))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'reservation', reducer });

export default compose(withReducer, withConnect)(ReservationTabs);
