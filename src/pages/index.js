import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

import { Helmet } from 'react-helmet';
import React from 'react';
import App from '../components/App';
import { headData } from '../data';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} data-rh="true" />
        <meta property="og:description" content={description} data-rh="true" />
        <meta
          property="og:image"
          content="https://filoscoder.netlify.app/static/c80f7757ad076ae146f5038df44646aa/89f4f/profile.jpg"
          data-rh="true"
        />
      </Helmet>
      <App />
    </>
  );
};
