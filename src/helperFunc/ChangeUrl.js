/*eslint-disable */
import getAcceptedRoute from "../values/const/localstorage/getAcceptedRoute";
import getLocales from "../values/const/localstorage/getLocales";

const ChangeUrl = ({ location, history, reloadWithAfterChanged }) => {
  let localesData = getLocales();
  const accepted = getAcceptedRoute();
  let bool = false;
  if (accepted) {
    let beforePathname = location.pathname;
    if (location.search) beforePathname = beforePathname + location.search;
    // //console.log({ beforePathname, location });
    let afterPathname;
    const splicePath = beforePathname.split("/");
    const URL = [];
    for (const index in localesData) {
      URL.push(`${localesData[index].country.countryCode.toLowerCase()}-${localesData[index].language.code || localesData[index].title}`);
    }

    if (URL.includes(splicePath[1])) {
      if (splicePath[1] != accepted) {
        splicePath[1] = accepted;
        afterPathname = splicePath.join("/");
        if (reloadWithAfterChanged) window.location.replace(afterPathname);
        else history.push(afterPathname);
      }
    } else if (!URL.includes(splicePath[1])) {
      if (localesData.length) {
        splicePath.splice(1, 0, accepted);
        afterPathname = splicePath.join("/");
        if (reloadWithAfterChanged) window.location.replace(afterPathname);
        else history.push(afterPathname);
      }
    }

    bool = true;
  } else {
    // localStorage.setItem('route', JSON.stringify('turkey-title'));
    // window.location.reload(true);
  }

  return bool;
};
export default ChangeUrl;
