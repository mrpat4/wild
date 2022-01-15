
export default function convertArrayToObject(array) {
    return array.reduce(function (result, item) {
        let key = Object.keys(item)[0]; //first property: a, b, c
        result[key] = item[key];
        return result;
    }, {});
}