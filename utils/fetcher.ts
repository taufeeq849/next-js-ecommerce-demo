const toJSON = (_: Response) => _.json();
const fetcher = () => fetch("https://fakestoreapi.com/products").then(toJSON);
export default fetcher;
