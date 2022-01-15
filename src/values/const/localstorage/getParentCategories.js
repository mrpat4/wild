/*eslint-disable */
// import React from 'react';

import titleStrings from '../../string/titleStrings';

const getParentCategories = () => {
  let locales = localStorage.getItem('parentCategories');
  locales = JSON.parse(locales);
  if (locales) return locales;
};
export default getParentCategories;
