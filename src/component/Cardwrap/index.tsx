/*
 * @Author: pym
 * @Date: 2022-07-27 00:06:30
 * @LastEditors: pym
 * @Description: TODO xxx
 * @LastEditTime: 2022-07-27 00:08:35
 */
import React, { Component } from 'react';

export default class Cardwrap extends Component<{ name: string; children: any }> {
  render() {
    const { name, children } = this.props;
    return (
      <div style={{ border: '1px solid gray', padding: 5 }}>
        {name}
        <div style={{ padding: 10 }}>{children}</div>
      </div>
    );
  }
}
