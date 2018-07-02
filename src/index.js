import React from "react";
import ReactDOM from "react-dom";

import "./styles/css/index.css";
import { pokemons, types } from "./seed";

import App from "./layout/App";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <App pokemons={pokemons} types={types} />,
  document.getElementById("root")
);

registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}
