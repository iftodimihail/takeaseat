import React from 'react';
import { Menu } from 'antd';

/**
 * HorizontalMenu component
 */
class HorizontalMenu extends React.Component {
  state = {
    current: 'overview'
  };

  handleClick = (e) => this.setState({ current: e.key });

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="overview">
          Prezentare
        </Menu.Item>
        <Menu.Item key="reviews">
          Recenzii
        </Menu.Item>
        <Menu.Item key="location">
          Locație
        </Menu.Item>
      </Menu>
    );
  }
}

export default HorizontalMenu;
