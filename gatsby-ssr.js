/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="favicon-svg" rel="icon" type="image/svg+xml" href="/favicon.svg" />,
    <link key="favicon-ico" rel="icon" type="image/x-icon" href="/favicon.svg" />,
  ]);
};