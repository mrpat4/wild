
import { useRouter } from 'next/router';
function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

const useQueryString = ({ limit = 10 } = "") => {

    const Router = useRouter();
    let location, search, queryString, queryStrings = { page: 1 };

    location = Router.asPath;
    console.log({ Router, split: location.split('?') });
    search = location.split('?');
    search?.length ? search = search[1] : '';
    queryString = search?.split("&")
    console.log({ queryString });

    queryString?.forEach((query) => {
        const queryParam = query.split("=");
        let queryKey = queryParam[0] && queryParam[0]
        let queryValue = queryParam[1] && queryParam[1]

        if (!queryKey || !queryValue) return
        if (isNumeric(queryValue)) return queryStrings[queryKey] = Number(queryValue);
        else return queryStrings[queryKey] = queryValue
    })

    return { ...queryStrings }
}

export default useQueryString;