import webRoute from "../values/string/routes/webRoute"

export default function ConvertBannerLinke(param) {
    if (param.linkedCategory) {
        return `${webRoute().BASE_ROUTE}category/${param.linkedCategory.slug}`
    } else if (param.linkedBrand) {
        return `${webRoute().BASE_ROUTE}search?[brands]=${param.linkedBrand.slug}`
    } else if (param.linkedVariant) {
        return `${webRoute().BASE_ROUTE}product/${param.linkedVariant.slug}`
    }
}