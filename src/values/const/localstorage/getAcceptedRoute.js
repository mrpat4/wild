/*eslint-disable */
// import React from 'react';

import titleStrings from '../../string/titleStrings';

const getAcceptedRoute = () => {
  let locales = localStorage.getItem(titleStrings.route);
  if (locales != 'undefined') locales = JSON.parse(locales);
  if (locales) return locales;
};

export default getAcceptedRoute;
