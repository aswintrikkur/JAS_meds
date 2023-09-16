import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { NewDataProvider } from "./contextAPI/NewDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<NewDataProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
	</NewDataProvider>
);
