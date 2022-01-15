// function objToString(obj) {
//     var str = ``;
//     for (var p in obj) {
//         if (obj.hasOwnProperty(p)) {
//             str += p + ':' + obj[p] + '\n';
//         }
//     }
//     return str;

import { memo } from "react";
import getDirection from "../values/const/localstorage/getDirection";
import { connect } from "react-redux";
import { compose } from "redux";
import { directionSelector } from "../containers/WebDirectionReducer/selectors";
import { createStructuredSelector } from "reselect";

function ChangeLeftAndRightWithDirection2(name, props) {
  //console.log({ ChangeLeftAndRightWithDirection: props });
  return getDirection() === "ltr" ? name : name === `margin-right` ? `margin-left` : `margin-right`;
}
const mapStateToProps = createStructuredSelector({
  direction: directionSelector(),
});

const withConnect = connect(mapStateToProps);
export default compose(withConnect, memo)(ChangeLeftAndRightWithDirection2);
// export default ChangeLeftAndRightWithDirection2
