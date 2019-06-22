import React from 'react';

/**
 * Scroll To Top On Mount
 * @function ScrollToTopOnMount
 * @description ScrollToTopOnMount component
 */
class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export default ScrollToTopOnMount;
