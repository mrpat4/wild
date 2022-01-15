/*eslint-disable */
import getAcceptedRoute from "../values/const/localstorage/getAcceptedRoute";
import countryVsLanguageConvert from "../values/const/convertor/countryVsLanguageConvert";
import titleStrings from "../values/string/titleStrings";
// import ChangeUrl from './changeUrl';

const CheckUrl = async ({ location, history, onLocaleToggle, onAddNewDirection }) => {
  // //console.log({ CheckUrl: 'CheckUrl' });
  // localStorage.removeItem('route');
  // const history = useHistory();
  // //console.log({ CheckUrl: onLocaleToggle });

  // //console.log({ systemSettings });
  // //console.log({ CheckUrlLocation: location });
  let defaultLocaleIndex = 1;
  if (localesData)
    (localesData || []).some((locale, index) => {
      if (locale.default) return (defaultLocaleIndex = index);
    });
  let localesData = localStorage.getItem(titleStrings.locales);
  localesData = JSON.parse(localesData);
  const accepted = getAcceptedRoute();
  let bool = false;
  // const converForDropDown = countryVsLanguageConvert(localesData);
  // //console.log({ localesData });
  let URL = [];
  if (localesData && localesData.length)
    for (const index in localesData) {
      URL.push({
        index,
        name: `${localesData[index].country.countryCode.toLowerCase()}-${localesData[index].language.code || localesData[index].title}`,
      });
    }
  // //console.log({ URL });
  function acceptedData(index) {
    if (localesData && localesData.length) {
      // //console.log({ localesData });
      if (onAddNewDirection) {
        switch (localesData[index].language.code) {
          case "ar":
            onAddNewDirection("rtl");
            break;

          default:
            onAddNewDirection("ltr");
            break;
        }
      }

      let newUrl = URL[index] && URL[index].name;
      localStorage.setItem(
        titleStrings.local,
        JSON.stringify(localesData[index])
        // JSON.stringify(converForDropDown[index]),
      );
      localStorage.setItem(titleStrings.route, JSON.stringify(newUrl));
      if (onLocaleToggle) {
        onLocaleToggle(localesData[index].language.code);
      }
      // //console.log({ titleStrings: localStorage.getItem(titleStrings.route), newUrl: JSON.stringify(newUrl) });
      // if (localStorage.getItem(titleStrings.route) !== JSON.stringify(newUrl)) //console.log({ newLocale: "new locale" })
    }
  }

  if (accepted) {
    const beforePathname = location.pathname;
    let afterPathname;
    const splicePath = beforePathname.split("/");

    let urlRequestIndex = URL.filter((urlData) => {
      if (urlData.name === splicePath[1]) return urlData;
    });

    urlRequestIndex = urlRequestIndex[0];

    let AcceptedUrlBool = false;
    for (const index in URL) {
      if (URL[index].name === accepted) AcceptedUrlBool = true;
    }
    if (!AcceptedUrlBool) {
      acceptedData(defaultLocaleIndex);
      return;
    }
    if (urlRequestIndex) {
      acceptedData(urlRequestIndex.index);
    } else if (!urlRequestIndex) {
      if (localesData.length) {
        splicePath.splice(1, 0, accepted);
        afterPathname = splicePath.join("/");
        history.push(afterPathname + location.search);
      }
    }

    bool = true;
  } else {
    if (localesData) {
      acceptedData(defaultLocaleIndex);
    }
    bool = false;
  }

  return bool;
};
export default CheckUrl;
