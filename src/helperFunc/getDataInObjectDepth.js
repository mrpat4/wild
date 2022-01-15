export default function getDataInObjectDepth(path, obj) {
  // //console.log({ path });
  if (!path) return obj;

  let prop,
    props = path.split(".");
  let i;
  let iLen = props.length - 1;
  for (i = 0, iLen; i < iLen; i++) {
    prop = props[i];

    let candidate = obj[prop];
    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }
  return obj[props[i]];
}
