import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { NewData } from "./pages/newData/NewData";
import { ErrorPage } from "./pages/errorPage/ErrorPage";
import { AddMedicine } from "./pages/addMedicine/AddMedicine";

function App() {
	return (
		<div className="app-container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/newData" element={<NewData />} />
				<Route path="/addMed" element={<AddMedicine />} />
				<Route path="/history" />
				<Route path="*" element={<ErrorPage/>} />
			</Routes>
		</div>
	);
}

export default App;
