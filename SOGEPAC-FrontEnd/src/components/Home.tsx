// src/components/Dashboard.tsx

import React from "react";
import {
	Box,
	Grid,
	Card,
	CardContent,
	Typography,
	IconButton,
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import EmergencyIcon from "@mui/icons-material/Warning";
import "./Home.css";

const Home: React.FC = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#e0f7fa",
				minHeight: "100vh",
				width: "100vw",
				position: "relative",
				boxSizing: "content-box",
			}}
		>
			<Box
				sx={{
					backgroundColor: "#90caf9",
					display: "flex",
					alignItems: "center",
					justifyContent: "start",
					borderRadius: "10px",
					maxWidth: "100vw",
					height: "45vh !important",
					padding: "0px 36px",
				}}
			>
				<Box
					sx={{
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<Typography
						variant="h2"
						sx={{ color: "#fff", fontWeight: "bold" }}
					>
						SOGEPAC
					</Typography>
					<Typography variant="h6" sx={{ color: "#fff" }}>
						Better systems, Better lives
					</Typography>
				</Box>
			</Box>
			<Grid
				container
				spacing={3}
				sx={{
					margin: "0px",
					marginTop: "0px",
					position: "absolute",
					top: "calc(45vh - 55px)",
					maxWidth: "100vw",
					padding: "0px 64px",
					boxSizing: "border-box",
					display: "grid !important",
					gridTemplateColumns: "auto auto auto",
				}}
			>
				<Grid item xs={12}>
					<Card
						sx={{
							textAlign: "center",
							padding: "20px",
							backgroundColor: "#C8D6E5",
							transition: "background-color 0.3s",
							color: "#009485",

							"&:hover": {
								backgroundColor: "#009485",
								color: "#C8D6E5",
							},
						}}
					>
						<CardContent>
							<IconButton>
								<HistoryIcon fontSize="large" />
							</IconButton>
							<Typography variant="h5">
								Generar historial clínico
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card
						sx={{
							textAlign: "center",
							padding: "20px",
							backgroundColor: "#C8D6E5",
							transition: "background-color 0.3s",
							color: "#009485",
							"&:hover": {
								backgroundColor: "#009485",
								color: "#C8D6E5",
							},
						}}
					>
						<CardContent>
							<IconButton>
								<SearchIcon fontSize="large" />
							</IconButton>
							<Typography variant="h5">
								Buscar historial clínico
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card
						sx={{
							textAlign: "center",
							padding: "20px",
							backgroundColor: "#C8D6E5",
							transition: "background-color 0.3s",
							color: "#009485",
							"&:hover": {
								backgroundColor: "#009485",
								color: "#C8D6E5",
							},
						}}
					>
						<CardContent>
							<IconButton>
								<PersonSearchIcon fontSize="large" />
							</IconButton>
							<Typography variant="h5">
								Buscar doctores
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card
						sx={{
							textAlign: "center",
							padding: "20px",
							backgroundColor: "#C8D6E5",
							transition: "background-color 0.3s",
							color: "#009485",
							"&:hover": {
								backgroundColor: "#009485",
								color: "#C8D6E5",
							},
						}}
					>
						<CardContent>
							<IconButton>
								<PersonAddIcon fontSize="large" />
							</IconButton>
							<Typography variant="h5">
								Agregar paciente
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card
						sx={{
							textAlign: "center",
							padding: "20px",
							backgroundColor: "#C8D6E5",
							transition: "background-color 0.3s",
							color: "#009485",
							"&:hover": {
								backgroundColor: "#009485",
								color: "#C8D6E5",
							},
						}}
					>
						<CardContent>
							<IconButton>
								<PersonSearchIcon fontSize="large" />
							</IconButton>
							<Typography variant="h5">
								Buscar paciente
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12}>
					<Card
						sx={{
							textAlign: "center",
							padding: "20px",
							backgroundColor: "#C8D6E5",
							transition: "background-color 0.3s",
							color: "#009485",
							"&:hover": {
								backgroundColor: "#009485",
								color: "#C8D6E5",
							},
						}}
					>
						<CardContent>
							<IconButton>
								<EmergencyIcon fontSize="large" />
							</IconButton>
							<Typography variant="h5">
								Crear orden de emergencia
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Home;
