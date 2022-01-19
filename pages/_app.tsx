import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  QueryClientProvider,
  useQuery,
  QueryClient,
  Hydrate,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { CartProvider } from "../components/cart/context/cartContext";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <Hydrate state={pageProps.dehydratedState}>
        <CartProvider>
          <Component {...pageProps} />{" "}
        </CartProvider>
        <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
