import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(false);

	const fetchUser = (data) => {
		setUser(data);
		// setUser('Sonal');
	};

	// useEffect(() => {
	// 	fetchUser();
	// }, []);

	return <AuthContext.Provider value={{ user, fetchUser }}>{children}</AuthContext.Provider>;
};
