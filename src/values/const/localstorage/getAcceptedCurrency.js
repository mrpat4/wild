/*eslint-disable */
// import React from 'react';

import titleStrings from '../../string/titleStrings';

const getAcceptedCurrency = () => {
  let locales = localStorage.getItem(titleStrings.currency);
  locales = JSON.parse(locales);
  if (locales) return locales;
};
export default getAcceptedCurrency;
