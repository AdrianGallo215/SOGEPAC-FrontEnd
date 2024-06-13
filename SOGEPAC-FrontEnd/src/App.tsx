// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/LogIn";
import NewPatientForm from "./components/NewPatientForm";
import BuscarHistoriaclinico from "./components/BuscarHistoriaclinico";

const App: React.FC = () => {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/new-patient" element={<NewPatientForm />} />
					<Route path="/BuscarHistoriaclinico" element={<BuscarHistoriaclinico />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
