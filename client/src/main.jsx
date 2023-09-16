import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { InputProvider } from "./contextAPI/InputContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<InputProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</InputProvider>
);
