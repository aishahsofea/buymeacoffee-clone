import { render } from "@testing-library/react";

import { GlobalStateProvider } from "../contexts";

const Provider = ({ children }) => {
  return <GlobalStateProvider>{children}</GlobalStateProvider>;
};

export const renderWithContext = (ui, options = {}) => {
  render(ui, { wrapper: Provider, ...options });
};
