/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/NewPatientForm.tsx

import React, { useState } from "react";
import {
	Box,
	Button,
	TextField,
	Typography,
	Grid,
	MenuItem,
} from "@mui/material";
import axios from "axios";

const NewPatientForm: React.FC = () => {

	const [paciente, setPaciente] = useState({
		id: '',
		nombre: '',
		dni:'',
		edad: '',
		telefono: ''
	  });

	try {
		axios
			.get("http://localhost:8080/api/v1/paciente/all")
			.then(function (response) {
				setId(response.data.length + 1);
			})
			.catch(function (error) {
				console.error(error);
			});
	} catch (error) {
		console.error(error);
	}

	//axios.post("", {});

	//setId(listOfAllRegisters.length + 1);

	const handleChange = (e:any) => {
		const { name, value } = e.target;
		setPaciente({
		  ...paciente,
		  [name]: value
		});
	  };

	const handleSubmit = (e:any) => {
		e.preventDefault();
		console.log('Datos del formulario:', paciente);
		// Aquí puedes agregar la lógica para enviar los datos a un servidor
	};

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
				<form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={paciente.nombre}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">DNI:</label>
        <input
          id="dni"
          name="dni"
          value={paciente.dni}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="mensaje">Edad:</label>
        <input
          id="edad"
          name="edad"
          value={paciente.edad}
          onChange={handleChange}
        />
      </div>
	  <div>
        <label htmlFor="mensaje">telefono:</label>
        <input
          id="telefono"
          name="telefono"
          value={paciente.telefono}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
			</Box>
		</Box>
		
	);
};

export default NewPatientForm;

/* {/* <Box
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
							value={id}
							sx={{ marginTop: "10px" }}
							onChange={() => {setId(id)}}
						/>
					</Grid>

					<Grid item xs={12}>
						<Typography variant="h6">Datos de paciente</Typography>
						<TextField
							label="Nombre completo"
							fullWidth
							value={nombre}
							sx={{ marginTop: "10px", padding: "0px" }}
							onChange={() => {setNombre(nombre)}}
						/>
						{/* <TextField
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
							value={dni}
							sx={{ marginTop: "10px" }}
							onChange={() => {setDni(dni)}}
						/>
						{/* 	<TextField
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
							value={edad}
							sx={{ marginTop: "10px" }}
							onChange={() => {setEdad(edad)}}
						/>
					</Grid>

					<Grid item xs={12}>
						<Typography variant="h6">Datos de contacto</Typography>
						{/* <TextField
							label="Dirección"
							fullWidth
							sx={{ marginTop: "10px" }}
						/>
						<TextField
							label="Nro de teléfono"
							fullWidth
							sx={{ marginTop: "10px" }}
							value={telefono}
							onChange={() => {setTelefono(telefono)}}
						/>
						{/* <TextField
							label="Correo"
							fullWidth
							sx={{ marginTop: "10px" }}
						/>
					</Grid>

					{/* <Grid item xs={12}>
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
							type="submit"
							variant="contained"
							color="primary"
							sx={{ width: "48%" }}
							onClick={SendData}
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
		</Box>*/
