/**
 * Trigger
 */

import React, { Component, PropTypes } from 'react';

class Trigger extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }

  triggerClickHandler() {
    let { open } = this.state;
    this.props.onChange({
      open: !open
    });
  }

  render() {
    let Node = this.props.trigger;

    return <Node {...this.props} />;
  }
}

Trigger.propTypes = {
  trigger: PropTypes.any,
  open: PropTypes.bool
};

Trigger.defaultProps = {
  open: false
};

export default Trigger;
