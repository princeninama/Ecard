import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/states/api.js";
import { AuthContextProvider } from "./context/useAuthcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthContextProvider>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </AuthContextProvider>
  </Provider>
);
