import React, { Component, PureComponent } from 'react';
/**
 * 素材银行
 */

import Icon from 'icon';
import Pagination from 'pagination';
import Select from 'select';
import fullfillImage from 'zan-utils/fullfillImage';

class Materials extends (PureComponent || Component) {
  static defaultProps = {
    mediaList: [],
    categoryList: []
  };

  render() {
    let {
      mediaList,
      categoryList,
      onSelectMedia,
      onGetMediaList,
      onSetCategoryId,
      options
    } = this.props;
    return (
      <div>
        <div className="category-list-region">
          <Select
            data={categoryList}
            optionValue="id"
            optionText="name"
            onChange={onSetCategoryId}
          />
        </div>
        <ul className="image-list">
          {mediaList.length > 0
            ? mediaList.map((media, index) => {
                return (
                  <li
                    key={index}
                    className="image-item"
                    onClick={onSelectMedia.bind(this, media)}
                  >
                    <div
                      className="image-box"
                      style={{
                        backgroundImage: `url(${fullfillImage(
                          media.attachmentFullUrl,
                          '!240x240.jpg',
                          {
                            imgcdn: options.imgcdn
                          }
                        )})`
                      }}
                    />
                    <div className="image-meta">
                      {media.width}*{media.height}
                    </div>
                    <div className="image-title-wrap">
                      <p className="image-title">
                        {media.attachmentTitle.substr(
                          0,
                          media.attachmentTitle.length - 6
                        )}
                      </p>
                      <p className="image-title-ext">
                        {media.attachmentTitle.substr(-6)}
                      </p>
                    </div>
                    {media.selected
                      ? <div className="attachment-selected">
                          <Icon type="check" />
                        </div>
                      : ''}
                  </li>
                );
              })
            : <div
                style={{
                  color: '#999',
                  textAlign: 'center',
                  paddingTop: '130px',
                  fontSize: '12px'
                }}
              >
                当前暂无图片
              </div>}
        </ul>
        <div className="attachment-pagination">
          <Pagination
            current={1}
            pageSize={21}
            totalItem={1}
            onChange={onGetMediaList}
          />
        </div>
      </div>
    );
  }
}

export default Materials;
