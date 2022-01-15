/*eslint-disable */
const currencyConvert = (data, currencies, localeData) => {
  const returnData = [];
  const firstCurrencies = [];
  if (localeData && data && data.length) {
    for (const key in data) {
      const resCurrency = data[key] && data[key].currency;
      const ressecondaryCurrency = data[key] && data[key].secondaryCurrency;
      if (data.length && resCurrency) {
        if (data[key]._id === localeData._id) {
          for (const index in currencies) {
            if (currencies[index]._id === resCurrency._id || currencies[index]._id === ressecondaryCurrency._id) {
              firstCurrencies.push({
                title: currencies[index].code,
                _id: currencies[index]._id,
                image: currencies[index].thumbnail && currencies[index].thumbnail.path,
              });
            } else {
              returnData.push({
                title: currencies[index].code,
                _id: currencies[index]._id,
                image: currencies[index].thumbnail && currencies[index].thumbnail.path,
              });
            }
          }
        }
      }
    }
    returnData.unshift(...firstCurrencies);
  }
  // //console.log({ data, currencies, localeData, returnData });

  // //console.log({
  //   data,
  //   returnData,
  //   firstCurrencies,
  //   currencies,
  //   localeData,
  // });
  return returnData;
};

export default currencyConvert;
