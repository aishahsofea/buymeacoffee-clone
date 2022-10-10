import React, { ReactNode } from "react";

import HelperModal from "./HelperModal";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="relative">
      <Navbar />
      {children}
      <HelperModal />
    </div>
  );
};

export default Layout;
