import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Assets/fonts/Fonts.scss";
import "./Styles/Normalize.css";

export const rootElement = document.querySelector("#root") || document.body;
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
