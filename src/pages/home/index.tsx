/*
 * @Author: pym
 * @Date: 2022-01-04 11:51:03
 * @LastEditors: pym
 * @Description:
 * @LastEditTime: 2022-07-27 00:09:08
 */
import React, { Component, useState } from 'react';
import Cardwrap from '../../component/Cardwrap';
import ReactDomErr from '../error/react-dom';
import './index.less';

function Home() {
  // fetch('/tripdocs/test/api', { method: 'POST' });
  return (
    <div>
      <Cardwrap name="ReactDomErr">
        <ReactDomErr />
      </Cardwrap>
    </div>
  );
}

export default Home;
