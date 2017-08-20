import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import open from './common/open';

const defaultProps = {
  type: 'image',
  title: '上传图片',
  className: '',
  triggerClassName: 'zent-upload-trigger',
  prefix: 'zent'
};

class Upload extends Component {
  static defaultProps = defaultProps;

  static propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    group: PropTypes.array,
    components: PropTypes.array,
    className: PropTypes.string,
    prefix: PropTypes.string
  };

  handleOpen = () => {
    open.call(this, this.props);
  };

  render() {
    let { prefix, className, triggerClassName } = this.props;

    return (
      <div className={cx(`${prefix}-upload`, className)}>
        <div className={triggerClassName} onClick={this.handleOpen}>
          +
        </div>
      </div>
    );
  }
}

Upload.open = options => {
  options = { ...defaultProps, ...options };
  open.call(this, options);
};

export default Upload;
