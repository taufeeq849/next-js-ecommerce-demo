const toJSON = (_: Response) => _.json();
const fetcher = (url: string) => fetch(url).then(toJSON);
export default fetcher;
