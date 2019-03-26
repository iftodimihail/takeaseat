import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';

/**
 * HorizontalMenu component
 */
class HorizontalMenu extends React.Component {
  state = {
    current: this.props.location.pathname.split('/')[2]
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname.split('/')[2] !== this.props.location.pathname.split('/')[2]) {
      this.setState({ current: this.props.location.pathname.split('/')[2] });
    }
  }

  handleClick = (e) => {
    this.setState({ current: e.key });
    this.props.history.push(`./${e.key}`);
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="prezentare">
          Prezentare
        </Menu.Item>
        <Menu.Item key="recenzii">
          Recenzii
        </Menu.Item>
        <Menu.Item key="locatie">
          Locație
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(HorizontalMenu);
