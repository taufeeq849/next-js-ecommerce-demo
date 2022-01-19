const toJSON = (_: Response) => _.json();
//TODO replace with env
const fetcher = (url: string) => fetch(url).then(toJSON);
export default fetcher;
