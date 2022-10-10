import { useMachine } from "@xstate/react";
import React from "react";
import { createMachine } from "xstate";

const helperModalmachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAswBsAOYBOBZA9hAIZoB0EAlrBmkQJ4HFoDEAKgPIDinAMgKKJQGfLAoAXCvgB2gkAA9EAWgAcATgAMpAEwBWACwA2LQGYt6nQePrlAGhB1Eyg6WPL1hgOzGLTix4C+-naomDiMJKTIFBBg4Swc3PyywqIS0rIKCCoa2vpGpuaW1nYOWXo6pKomah7KylpaBnpagUEgUoRwsiFYeIQRlNS0DP1oySLikjJI8koAjOqqqqQeqgYGi3Meeh4eWiWIZisbOh5zyh7qlnOGBoHB6L1xkdGxo+OpUxlKXnqkBrUqq5jKoQco5gcspoljoLjp1LVlHo5gtVDp7iAemF3jMUpN0jNMooUSYVmsNqotjs9pDiVtKtVavo9CCtFVWv4gA */
  createMachine({
    id: "helperModal",
    initial: "hideModal",
    states: {
      displayModal: {
        on: {
          TOGGLE: {
            target: "hideModal",
          },
        },
      },
      hideModal: {
        on: {
          TOGGLE: {
            target: "displayModal",
          },
        },
      },
    },
  });

const HelperModal = () => {
  const [state, send] = useMachine(helperModalmachine);

  return (
    <>
      <div className="fixed bottom-10 right-10 flex flex-col justify-items-end cursor-pointer">
        {state.value === "displayModal" && (
          <div>
            <ul className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                FAQ
              </li>
              <li className="py-2 px-4 w-full border-b border-gray-200 dark:border-gray-600">
                Feature Requests
              </li>
              <li className="py-2 px-4 w-full rounded-b-lg">Help Center</li>
            </ul>
          </div>
        )}
        <div className="flex justify-end my-2">
          <div
            className="flex items-center justify-center rounded-full w-14 h-14 bg-slate-600"
            onClick={() => send("TOGGLE")}
          >
            ?
          </div>
        </div>
      </div>
    </>
  );
};

export default HelperModal;
