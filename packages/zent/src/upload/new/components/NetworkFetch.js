/**
 * 网络提取
 */

import React, { Component, PureComponent } from 'react';
import Input from 'input';
import Button from 'button';

class NetworkFetch extends (PureComponent || Component) {
  static defaultProps = {
    buttonText: '提取'
  };

  handleConfirm = () => {
    this.props.onConfirm(this.url);
  };

  render() {
    let { prefix, loading, buttonText, networkImage = {} } = this.props;
    return (
      <div className={`${prefix}-network-image-region`}>
        <div className={`${prefix}-title`}>网络图片：</div>
        <div className={`${prefix}-content`}>
          <div className={`${prefix}-input-append`}>
            <Input
              type="text"
              placeholder="请添加网络图片地址"
              onChange={evt => (this.url = evt.target.value)}
            />
          </div>
          <Button
            type="primary"
            outline
            loading={loading}
            onClick={this.handleConfirm}
          >
            {buttonText}
          </Button>
          <div className={`${prefix}-image-preview`}>
            <img src={networkImage.attachment_url} alt="" role="presentation" />
          </div>
        </div>
      </div>
    );
  }
}

export default NetworkFetch;
