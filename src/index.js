import React from "react";
import { createRoot } from "react-dom/client";
import { useStoreRehydrated, StoreProvider } from "easy-peasy";

import store from "./store";

import App from "./App";

function WaitForStateRehydration({ children }) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StoreProvider store={store}>
    <WaitForStateRehydration>
      <App  />
    </WaitForStateRehydration>
  </StoreProvider>
);
