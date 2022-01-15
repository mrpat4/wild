/*eslint-disable */
const countryVsLanguageConvert = data => {
  const returnData = [];
  if (data && data.length)
    for (const key in data) {
      const resCountry = data[key] && data[key].country;
      const resLanguage = data[key] && data[key].language;
      if (data[key] && resCountry && resLanguage)
        returnData.push({
          _id: data[key]._id,

          title: `${resCountry.title}-${resLanguage.title}`,
          countryCode: resCountry.countryCode.toLowerCase(),
          languageCode: resLanguage.code.toLowerCase(),
          image: resCountry.flag && resCountry.flag.path,
          url: `${resCountry.title}-${resLanguage.title}`,
        });
    }
  return returnData;
};

export default countryVsLanguageConvert;
