import { useMachine } from "@xstate/react";
import { ReactNode, createContext } from "react";

import { helperModalmachine } from "../machines";

// export const GlobalStateContext = createContext({
//   helperModalService: {} as InterpreterFrom<typeof helperModalmachine>,
// });

export const GlobalStateContext = createContext<any>({});

type Props = {
  children?: ReactNode;
};

export const GlobalStateProvider = ({ children }: Props) => {
  const [state, send] = useMachine(helperModalmachine, { devTools: true });

  return (
    <GlobalStateContext.Provider
      value={{
        state,
        handleToggle: () => send("TOGGLE"),
        handleClose: () => send("CLOSE"),
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};
