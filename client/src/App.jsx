import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Customer } from "./pages/customer/Customer";
import { ErrorPage } from "./pages/errorPage/ErrorPage";
import { AddMedicine } from "./pages/addMedicine/AddMedicine";
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute";
import { History } from "./pages/history/History";

function App() {
	return (
		<div className="app-container">
			<Routes>
				<Route path="/" element={<Home />} />
				
				<Route element={<ProtectedRoute />}>
					<Route path="/customer" element={<Customer />} />
					<Route path="/addMed/:_id" element={<AddMedicine />} />
					<Route path="/history" element={<History/>} />
				</Route>

				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
}

export default App;
