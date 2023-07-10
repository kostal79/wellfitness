export default function makeQueryParams(dataObject) {
    const queryParams = new URLSearchParams(dataObject).toString();
    return queryParams;
}