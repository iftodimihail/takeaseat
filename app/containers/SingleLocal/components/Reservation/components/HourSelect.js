import React from 'react';
import { TimePicker, Button } from 'antd';
import { hours } from '../../../../../utils/common';

/**
 * HourSelect component
 */
class HourSelect extends React.Component {
  state = {
    open: false,
    hour: null
  };

  handleOk = () => {
    this.setState({ open: false });
    this.props.handleOkHour(this.state.hour);
  };

  handleOpenChange = (open) => {
    this.setState({ open });
  };

  handleChange = (time, string) => this.setState({ hour: string });

  getDisabledHours = () => {
    const { openHour, closeHour } = this.props;
    if (openHour > closeHour) {
      return hours.filter((hour) => hour < openHour && hour > closeHour);
    }

    return hours.filter((hour) => hour < openHour || hour > closeHour);
  };

  render() {
    return (
      <div className="hour-selection-tab">
        <TimePicker
          onOpenChange={this.handleOpenChange}
          open={this.state.open}
          format="HH:mm"
          minuteStep={5}
          disabledHours={this.getDisabledHours}
          onChange={this.handleChange}
          placeholder="Ora"
          addon={() => (
            <Button size="small" type="primary" onClick={this.handleOk}>
              Selectează
            </Button>
          )}
        />
      </div>
    );
  }
}

export default HourSelect;
