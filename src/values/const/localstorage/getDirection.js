/*eslint-disable */
// import React from 'react';

// import titleStrings from '../../string/titleStrings';

const getDirection = async () => {
  let direction = localStorage.getItem(`direction`);

  //console.log({ direction });
  if (direction) return direction;
};

export default getDirection;
