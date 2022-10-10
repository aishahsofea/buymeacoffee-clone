import { useMachine } from "@xstate/react";
import React, { ReactNode } from "react";

import { helperModalmachine } from "../machines";
import HelperModal from "./HelperModal";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const [state, send] = useMachine(helperModalmachine);

  return (
    <div className="relative">
      <Navbar sendEvent={send} />
      {children}
      <HelperModal modalMachineState={state} sendEvent={send} />
    </div>
  );
};

export default Layout;
