import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { NewData } from "./pages/newData/NewData";

function App() {
	return (
		<div className="app-container">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/newData" element={<NewData />} />
				<Route path="/history" />
			</Routes>
		</div>
	);
}

export default App;
