/*
 * @Author: pym
 * @Date: 2022-01-04 11:51:03
 * @LastEditors: pym
 * @Description:
 * @LastEditTime: 2022-07-27 15:05:21
 */
import React, { useState } from 'react';
import './index.less';

function setCache(key: any, val: any) {
  if (!window.cache) {
    window.cache = {};
  }
  window.cache[key] = val;
}
function getCache(key: any) {
  if (!window.cache) {
    window.cache = {};
  }
  return window.cache[key];
}
const addElement = () => {
  const dom = getCache('dom');
  document?.getElementById('app')?.appendChild(dom);
};
const destroyElement = () => {
  const dom = document?.getElementById('my-div');
  setCache('dom', dom);
  dom && document?.getElementById('app')?.removeChild(dom);
};

const TestDom = () => {
  const [elementShown, updateElement] = useState(true);

  return (
    <div id="app">
      <button onClick={() => destroyElement()}>Delete element via querySelector</button>
      <button onClick={() => updateElement(!elementShown)}>Update element and state</button>
      <button onClick={() => addElement()}>Add element</button>
      {elementShown ? <div id="my-div">I am the element</div> : null}
    </div>
  );
};

export default TestDom;
