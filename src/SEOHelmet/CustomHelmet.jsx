import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
const CustomHelmet = ({title, content}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={content} />
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="Bek Mega Chilonzor– Textile Service/Product" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Helmet>
  );
};

CustomHelmet.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default CustomHelmet;
