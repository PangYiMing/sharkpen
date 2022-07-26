/*
 * @Author: pym
 * @Date: 2022-07-27 00:01:07
 * @LastEditors: pym
 * @Description: TODO xxx
 * @LastEditTime: 2022-07-27 00:02:18
 */
import React, { Component } from 'react';

const destroyElement = () => {
  const dom = document?.getElementById('my-div');
  dom && document?.getElementById('ReactDomErr')?.removeChild(dom);
};
interface ReactDomErrState {
  elementShown: boolean;
}
interface ReactDomErrProps {}
export default class ReactDomErr extends Component<ReactDomErrProps, ReactDomErrState> {
  constructor(props) {
    super(props);
    this.state = {
      elementShown: true,
    };
  }

  render() {
    const { elementShown } = this.state;
    return (
      <div id="ReactDomErr">
        <button onClick={() => destroyElement()}>Delete element via querySelector</button>
        <button
          onClick={() =>
            this.setState({
              elementShown: !elementShown,
            })
          }
        >
          Update element and state
        </button>
        <button
          onClick={() => {
            this.forceUpdate();
          }}
        >
          forceUpdate
        </button>
        {elementShown ? <div id="my-div">I am the element</div> : null}
      </div>
    );
  }
}
