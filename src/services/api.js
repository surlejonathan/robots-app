export const callApi = (url) => fetch(url).then((response) => response.json());
