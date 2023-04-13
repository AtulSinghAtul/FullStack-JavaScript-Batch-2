import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const element = React.createElement("h1", { id: "atul" }, "Atul singh");
// console.log(element);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

root.render(<App />);
