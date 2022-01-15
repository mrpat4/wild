/*eslint-disable */
const objectcountryVsLanguageConvert = data => {
  let returnData;
  if (data) {
    let resCountry = data && data.country;
    let resLanguage = data && data.language;
    if (data && resCountry && resLanguage)
      returnData = {
        _id: data._id,

        title: `${resCountry.title}-${resLanguage.title}`,
        countryCode: resCountry.countryCode.toLowerCase(),
        image: resCountry.flag && resCountry.flag.path,
        url: `${resCountry.title}-${resLanguage.title}`,
      };
  }
  return returnData;
};

export default objectcountryVsLanguageConvert;
