export default function addDataInObjectDepth(path, value, obj, changeKey) {
  let schema = obj;
  let pList = path.split(".");
  let len = pList.length;

  for (let i = 0; i < len - 1; i++) {
    let elem = pList[i];
    if (changeKey && i === 1) schema[pList[pList.length - 2]] = {};
    if (!schema[elem]) schema[elem] = {};
    schema = schema[elem];
    // //console.log({ pList, len, elem, schema, value });
  }
  return (schema[pList[len - 1]] = value);
}
