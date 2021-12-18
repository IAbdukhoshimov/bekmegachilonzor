/**
 * /*eslint-disable
 *
 * @format
 */

import React from "react";

// reactstrap components

// core components

function IndexHeader() {
  return (
    <>
      <div className="page-header clear-filter" filter-color="orange">
        <div className="rellax-header rellax-header-sky" data-rellax-speed="-4">
          <div
            className="page-header-image"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-back-sky.jpg")
                  .default +
                ")",
            }}
          ></div>
        </div>
        <div
          className="rellax-header rellax-header-buildings"
          data-rellax-speed="0"
        >
          <div
            className="page-header-image page-header-city"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/presentation-page/nuk-pro-buildings.png")
                  .default +
                ")",
            }}
          ></div>
        </div>
        <div className="rellax-text-container">
          <h1 className="h1-seo rellax-text" data-rellax-speed="-1">
            Bek Mega Chilonzor
          </h1>
        </div>
      </div>
    </>
  );
}

export default IndexHeader;
