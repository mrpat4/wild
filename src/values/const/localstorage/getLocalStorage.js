/*eslint-disable */
// import React from 'react';

const getLocalStorage = name => {
  let locales = localStorage.getItem(name);
  locales = JSON.parse(locales);
  if (locales) return locales;
};
export default getLocalStorage;
