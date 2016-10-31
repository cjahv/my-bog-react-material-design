/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';

export default {

  path: '/',

  async action() {
    const resp = await fetch('/graphql', {
      body: JSON.stringify({query: '{article{title,createDate,reading}}'})
    });
    const { data } = await resp.json();
    if (!data) throw new Error('Failed to load the news feed.');
    return {
      title: 'React Starter Kit',
      component: <Home articles={data.article} />,
    };
  },

};
