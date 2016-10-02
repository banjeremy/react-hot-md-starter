import React from 'react';
import { title, html } from './index.md';

const HomeView = () => (
  <div className="container">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);

export default HomeView;
