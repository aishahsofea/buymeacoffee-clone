import React from "react";

interface IHelperModalProps {
  modalMachineState: {
    value: unknown;
    context: unknown;
  };
  sendEvent: (event: string) => void;
}

const HelperModal = ({ modalMachineState, sendEvent }: IHelperModalProps) => {
  return (
    <>
      <div className="fixed bottom-10 right-10 flex flex-col justify-items-end">
        {modalMachineState.value === "displayModal" && (
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
            className="flex items-center justify-center rounded-full w-14 h-14 bg-slate-600 cursor-pointer"
            onClick={() => sendEvent("TOGGLE")}
          >
            ?
          </div>
        </div>
      </div>
    </>
  );
};

export default HelperModal;
