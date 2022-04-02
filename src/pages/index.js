import "bootstrap/dist/css/bootstrap.min.css";
import "../style/main.scss";

import App from "../components/App";
import { Helmet } from "react-helmet";
import React from "react";
import { headData } from "../data";

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet
        title={title}
        meta={[
          {
            property: "og:title",
            content: title,
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:description",
            content: description,
          },
          {
            property: "og:image",
            content:
              "https://filoscoder.netlify.app/static/c80f7757ad076ae146f5038df44646aa/89f4f/profile.jpg",
          },
        ]}
      >
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang || "en"} />
        <meta name="description" content={description} />
      </Helmet>
      <App />
    </>
  );
};
