import { createMachine } from "xstate";

export const helperModalmachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAswBsAOYBOBZA9hAIZoB0EAlrBmkQJ4HFoDEAKgPIDinAMgKKJQGfLAoAXCvgB2gkAA9EAWgCMAVgBMAFlIAOAOx7NATmUBmfaYAMqgDQg6iHaXV6dlrep3Lr35XoC+-naomDiMJORUNPThLADCPOwAygJIIMKiEtKyCggqqspOqu7Gypo6psrqfnYOeQBs6rqW9cr1li069UbupoHB6Fh4hBHIFBBgsWxcvKlCIuKSMmm5+Vq6BqXmela29krqRqqkqqammtam6tddLYFBIFKEcLIhQ7GR1LQMI2iyGYtsislH5TMcykZqvVTPVDGDNLUDp5dJpPJYzpZ9EZzPV+iA3mFfqQxhNYv8FlllqBVmZuqQrH5Ie5vHp1Hs6oo2ZZSO1Tjo2YUuocAg8CcMmOTMksciC9KojKQIVCYXDVAj9nkVSczqjGno2pp6rj7kA */
  createMachine({
    tsTypes: {} as import("./helperModalMachine.typegen").Typegen0,
    predictableActionArguments: true,
    id: "helperModal",
    initial: "hideModal",
    states: {
      displayModal: {
        on: {
          TOGGLE: {
            target: "hideModal",
          },
          CLOSE: {
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
