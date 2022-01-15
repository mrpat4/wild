export default function CleanArray(params) {
    return params && params.length && params.filter((param) => param && param.trim());
}