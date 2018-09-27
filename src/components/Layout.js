import React from 'react';
import Helmet from 'react-helmet';

import config from '../../config/site';
import Navbar from '../components/Navbar';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <>
    <Helmet title={`${config.siteTitle}`} />
    <Navbar />
    <div>{children}</div>
  </>
);

export default TemplateWrapper;
