import React, { ReactNode } from "react";

import { GlobalStateProvider } from "../contexts";
import HelperModal from "./HelperModal";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <GlobalStateProvider>
      <div className="relative">
        <Navbar />
        {children}
        <HelperModal />
      </div>
    </GlobalStateProvider>
  );
};

export default Layout;
