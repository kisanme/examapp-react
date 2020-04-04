/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const response = await fetch('http://0.0.0.0:8000/api/exams/?format=json', {
    mode: 'no-cors',
  });
  const exams = await response.json();
  if (!exams) throw new Error('Failed to load the exams.');
  return {
    title: 'K-Exams App',
    chunks: ['home'],
    component: (
      <Layout>
        <Home exams={exams} />
      </Layout>
    ),
  };
}

export default action;
