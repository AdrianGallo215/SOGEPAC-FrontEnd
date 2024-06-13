// src/components/NewPatientForm.tsx

import React from "react";
import {
	Box,
	Button,
	TextField,
	Typography,
	Grid,
	MenuItem,
} from "@mui/material";

const NewPatientForm: React.FC = () => {

    

	return (
		<Box
			sx={{
				padding: "20px",
				backgroundColor: "#e0f7fa",
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					backgroundColor: "#e3f2fd",
					padding: "20px",
					borderRadius: "10px",
					width: "80%",
					maxWidth: "800px",
				}}
			>
				<Typography
					variant="h4"
					sx={{ textAlign: "center", marginBottom: "20px" }}
				>
					REGISTRAR NUEVO PACIENTE
				</Typography>

				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Typography variant="h6">Datos generales</Typography>
						<TextField
							label="Fecha"
							defaultValue="02/05/2024"
							fullWidth
							disabled
							sx={{ marginTop: "10px" }}
						/>
						<TextField
							label="Id Paciente"
							fullWidth
							disabled
							sx={{ marginTop: "10px" }}
						/>
					</Grid>

					<Grid item xs={12}>
						<Typography variant="h6">Datos de paciente</Typography>
						<TextField
							label="Nombre completo"
							fullWidth
							sx={{ marginTop: "10px", padding: "0px" }}
						/>
						<TextField
							label="Tipo de Documento de Identidad"
							select
							fullWidth
							sx={{ marginTop: "10px" }}
						>
							<MenuItem value="DNI">DNI</MenuItem>
							<MenuItem value="Passport">Passport</MenuItem>
							<MenuItem value="Other">Other</MenuItem>
						</TextField>
						<TextField
							label="Número de documento"
							fullWidth
							sx={{ marginTop: "10px" }}
						/>
						<TextField
							label="Sexo"
							select
							fullWidth
							sx={{ marginTop: "10px" }}
						>
							<MenuItem value="M">Masculino</MenuItem>
							<MenuItem value="F">Femenino</MenuItem>
							<MenuItem value="O">Otro</MenuItem>
						</TextField>
						<TextField
							label="Edad"
							fullWidth
							sx={{ marginTop: "10px" }}
						/>
					</Grid>

					<Grid item xs={12}>
						<Typography variant="h6">Datos de contacto</Typography>
						<TextField
							label="Dirección"
							fullWidth
							sx={{ marginTop: "10px" }}
						/>
						<TextField
							label="Nro de teléfono"
							fullWidth
							sx={{ marginTop: "10px" }}
						/>
						<TextField
							label="Correo"
							fullWidth
							sx={{ marginTop: "10px" }}
						/>
					</Grid>

					<Grid item xs={12}>
						<Typography variant="h6">
							Detalles de paciente
						</Typography>
						<TextField
							label="Condiciones"
							fullWidth
							multiline
							sx={{ marginTop: "10px" }}
						/>
						<TextField
							label="Alergias"
							fullWidth
							multiline
							sx={{ marginTop: "10px" }}
						/>
					</Grid>

					<Grid
						item
						xs={12}
						sx={{
							display: "flex",
							justifyContent: "space-between",
							marginTop: "20px",
						}}
					>
						<Button
							variant="contained"
							color="primary"
							sx={{ width: "48%" }}
						>
							Guardar
						</Button>
						<Button
							variant="outlined"
							color="secondary"
							sx={{ width: "48%" }}
						>
							Limpiar
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default NewPatientForm;