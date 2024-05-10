import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./Apps/config/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import HooksLearn from "./test/HooksLearn";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

const helmetContext = {};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <HelmetProvider context={helmetContext}>
          <PersistGate loading={null} persistor={persistor}>
            {/* <App /> */}
            <HooksLearn />
          </PersistGate>
        </HelmetProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
