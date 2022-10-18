import { ApolloProvider } from "@apollo/client";
import React, { ReactNode } from "react";

import { GlobalStateProvider } from "../contexts";
import apolloClient from "../lib/apollo";
import HelperModal from "./HelperModal";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStateProvider>
        <div className="relative">
          <Navbar />
          {children}
          <HelperModal />
        </div>
      </GlobalStateProvider>
    </ApolloProvider>
  );
};

export default Layout;
