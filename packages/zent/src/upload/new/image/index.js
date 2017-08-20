import React, { Component, PureComponent } from 'react';
import Tabs from 'tabs';
import Components from '../components';

const TabPanel = Tabs.TabPanel;

class Image extends (PureComponent || Component) {
  state = {
    activeId: '1'
  };

  handleTabChange = id => {
    this.setState({
      activeId: id
    });
  };

  renderGroup() {
    let { group } = this.props;
    let { activeId } = this.state;
    return (
      <Tabs activeId={activeId} onTabChange={this.handleTabChange}>
        {group.map((item, index) => {
          return (
            <TabPanel key={index} id={`${index + 1}`} tab={item.tab}>
              {this.renderComponents(item.components)}
            </TabPanel>
          );
        })}
      </Tabs>
    );
  }

  renderComponents(components) {
    components = components || this.props.components;
    return (
      <div>
        {components.map((name, index) => {
          let Node = Components[name] || 'span';
          return <Node key={index} />;
        })}
      </div>
    );
  }

  render() {
    let { group } = this.props;
    return group && group.length > 0
      ? this.renderGroup()
      : this.renderComponents();
  }
}

export default Image;
