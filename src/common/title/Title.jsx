import React from "react";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { PRODUCT_NAME, PAGE_TITLES } from "../../constans/constans";

const HeadTitle = props => {
  const page = PAGE_TITLES.find(pg => props.location.pathname === pg.urlBase);
  const title = page && page.title;

  return (
    <Helmet
      titleTemplate={`${PRODUCT_NAME} - %s`}
      defaultTitle={PRODUCT_NAME}
      value
    >
      <title>{title}</title>
    </Helmet>
  );
};

export default withRouter(HeadTitle);
