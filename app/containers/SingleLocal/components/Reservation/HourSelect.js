import React from 'react';
import { TimePicker, Button } from 'antd';

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

  render() {
    return (
      <div className="hour-selection-tab">
        <TimePicker
          onOpenChange={this.handleOpenChange}
          open={this.state.open}
          format="HH:mm"
          minuteStep={5}
          onChange={this.handleChange}
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
