import "../styles/globals.css";
import "../styles/tailwind.css";

import { ApolloProvider } from "@apollo/client";
import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";

import { Layout } from "../components";
import { GlobalStateProvider } from "../contexts";
import apolloClient from "../lib/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <GlobalStateProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </GlobalStateProvider>
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;
