import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./app/store";
import 'tachyons';
import './index.css';
import App from "./containers/App";

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);