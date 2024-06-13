// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/LogIn";
import NewPatientForm from "./components/NewPatientForm";

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/new-patient" element={<NewPatientForm />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
