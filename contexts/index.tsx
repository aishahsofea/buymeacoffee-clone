import { useMachine } from "@xstate/react";
import { createContext } from "react";

import { helperModalmachine } from "../machines";

// export const GlobalStateContext = createContext({
//   helperModalService: {} as InterpreterFrom<typeof helperModalmachine>,
// });

export const GlobalStateContext = createContext<any>({});

export const GlobalStateProvider = (props) => {
  const [state, send] = useMachine(helperModalmachine, { devTools: true });

  return (
    <GlobalStateContext.Provider
      value={{
        state,
        handleToggle: () => send("TOGGLE"),
        handleClose: () => send("CLOSE"),
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};
