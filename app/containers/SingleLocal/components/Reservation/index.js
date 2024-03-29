import React from 'react';
import { Tabs } from 'antd';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment/moment';
import { faCalendarAlt, faClock, faUser } from '@fortawesome/free-regular-svg-icons';
import reducer from './reducer';
import injectReducer from '../../../../utils/injectReducer';
import saga from './saga';
import injectSaga from '../../../../utils/injectSaga';
import TabsIcon from './components/TabIcons';
import Calendar from './components/Calendar';
import NumberOfPersons from './components/NumberOfPersons';
import HourSelect from './components/HourSelect';
import InformationForm from './components/InformationForm';
import {
  selectReservationDate,
  selectNrOfPersons,
  selectReservationHour, makeReservationStart
} from './actions';
import { DAEMON } from '../../../../utils/constants';

/**
 * ReservationTabs component
 */
class ReservationTabs extends React.Component {
  state = {
    currentTab: '1',
    seeForm: false
  };

  componentDidUpdate() {
    const { date, persons, hour } = this.props;
    if (date && persons && hour && !this.state.seeForm) {
      this.nextTab('4');
      this.setState({ seeForm: true });
    }
  }

  onDateChange = (date) => {
    const { persons, hour } = this.props;
    this.setState({ seeForm: false });
    this.props.onSelectDate(date);
    if (!persons) {
      this.nextTab('2');
    } else if (!hour) {
      this.nextTab('3');
    }
  };

  onSelectPerson = (val) => () => {
    const { date, hour } = this.props;
    this.setState({ seeForm: false });
    this.props.onSelectPersons(val + 1);
    if (!date) {
      this.nextTab('1');
    } else if (!hour) {
      this.nextTab('3');
    }
  };

  handleOkHour = (hour) => {
    const { date, persons } = this.props;
    this.setState({ seeForm: false });
    this.props.onSelectHour(hour);
    if (!date) {
      this.nextTab('1');
    } else if (!persons) {
      this.nextTab('2');
    }
  };

  personsTabTitle = (persons) => persons === 1 ? '1 Persoană' : `${persons} Persoane`;

  nextTab = (currentTab) => this.setState({ currentTab });

  render() {
    const { date, persons, hour } = this.props;

    return (
      <Tabs activeKey={this.state.currentTab} onChange={this.nextTab}>
        <Tabs.TabPane
          tab={<TabsIcon icon={faCalendarAlt} data={date ? moment(date).locale('ro').format('DD MMM') : 'Data'} />}
          key="1"
        >
          <Calendar nextTab={this.nextTab} {...this.props} onDateChange={this.onDateChange} />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<TabsIcon icon={faUser} data={persons ? this.personsTabTitle(persons) : 'Nr. Persoane'} />}
          key="2"
        >
          <NumberOfPersons nextTab={this.nextTab} {...this.props} onSelectPerson={this.onSelectPerson} />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={<TabsIcon icon={faClock} data={hour || 'Ora'} />}
          key="3"
        >
          <HourSelect nextTab={this.nextTab} {...this.props} handleOkHour={this.handleOkHour} />
        </Tabs.TabPane>
        <Tabs.TabPane
          tab={null}
          key="4"
        >
          <InformationForm nextTab={this.nextTab} {...this.props} localId={this.props.localId} />
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
  const placesState = state.get('places');

  return {
    date: reservationState.get('date'),
    persons: reservationState.get('persons'),
    hour: reservationState.get('hour'),
    loading: reservationState.get('loading'),
    places: placesState ? placesState.get('data').toJS() : {}
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
  onSelectHour: (hour) => dispatch(selectReservationHour(hour)),
  makeReservation: (data, form, onSuccess) => dispatch(makeReservationStart(data, form, onSuccess))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'reservation', reducer });
const withSaga = injectSaga({ key: 'reservation', saga, mode: DAEMON });

export default compose(withReducer, withSaga, withConnect, withRouter)(ReservationTabs);
