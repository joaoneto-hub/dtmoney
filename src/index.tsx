import React from "react";
import ReactDOM from "react-dom";
import { createServer } from "miragejs";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transections", () => {
      return [
        {
          id: 1,
          title: "Transections 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createdAt: "22/02/2022",
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
