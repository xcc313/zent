/**
 * 本地上传
 */

import React, { Component, PureComponent } from 'react';
import Input from 'input';
import { formatMaxSize } from '../utils';

class LocalUpload extends (PureComponent || Component) {
  render() {
    let { prefix, options, accept, localFiles } = this.props;
    return (
      <div className={`${prefix}-local-image-region`}>
        <div className={`${prefix}-title`}>本地图片：</div>
        <div className={`${prefix}-content`}>
          <div>
            <ul className="image-list upload-local-image-list ui-sortable">
              {localFiles.map((item, index) => {
                return (
                  <li key={index} className="upload-local-image-item">
                    <div
                      className="image-box"
                      style={{
                        backgroundImage: `url(${item.src})`
                      }}
                    />
                    <span
                      className="close-modal small"
                      onClick={this.removeLocalImage.bind(this, item)}
                    >
                      ×
                    </span>
                    {item.progress
                      ? <div className="image-progress">{`${item.progress.toFixed(
                          1
                        )}%`}</div>
                      : ''}
                  </li>
                );
              })}
            </ul>
          </div>
          {!options.maxAmount || localFiles.length < options.maxAmount
            ? <div className={`${prefix}-add-local-image-button pull-left`}>
                +
                <Input {...options} onChange={this.processFiles} />
              </div>
            : ''}
          <div className={`${prefix}-local-tips c-gray`}>
            仅支持
            {accept.replace(/image\/?/g, '').replace(/, /g, '、')}
            三种格式, 大小不超过
            {formatMaxSize(options.maxSize)}
          </div>
        </div>
      </div>
    );
  }
}

export default LocalUpload;
