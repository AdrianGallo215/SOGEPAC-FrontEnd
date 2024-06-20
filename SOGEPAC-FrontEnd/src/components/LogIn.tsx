// src/components/LogIn.tsx

import React from "react";
import {
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	TextField,
	Typography,
	Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LogIn: React.FC = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		// Add login logic here
		// For now, we simply navigate to the dashboard
		navigate("/Home");
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			minHeight="100vh"
			bgcolor="#8DA9C4"
		>
			<Card
				sx={{
					maxWidth: 900,
					display: "flex",
					backgroundColor: "#8DA9C4",
				}}
			>
				<Grid container>
					<Grid item md={6}>
						<Box
							component="img"
							sx={{
								height: "100%",
								width: "100%",
								borderRadius: "4px 0 0 4px",
								backgroundColor: "#8DA9C4",
							}}
							alt="login form"
							src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
						/>
					</Grid>
					<Grid item md={6}>
						<CardContent
							sx={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								padding: 4,
							}}
						>
							<Box
								display="flex"
								flexDirection="row"
								alignItems="center"
								mb={2}
							>
								<Typography
									variant="h4"
									component="span"
									sx={{
										marginLeft: 2,
										fontWeight: "bold",
										fontFamily: "Nunito Sans, Helvetica",
										color: "#C8D6E5",
									}}
								>
									SOGEPjjjjjjAC
								</Typography>
							</Box>
							<Typography
								variant="h6"
								sx={{
									marginBottom: 2,
									letterSpacing: "1px",
									color: "#c8d6e5",
								}}
							>
								Inicie sesión
							</Typography>
							<TextField
								label="Email address"
								variant="outlined"
								fullWidth
								margin="normal"
							/>
							<TextField
								label="Password"
								type="password"
								variant="outlined"
								fullWidth
								margin="normal"
							/>
							<Button
								variant="contained"
								color="primary"
								size="large"
								onClick={handleLogin}
								sx={{ marginTop: 2 }}
							>
								Login
							</Button>
							<Link
								href="#"
								variant="body2"
								sx={{ marginTop: 2 }}
							>
								Olvidaste la contraseña?
							</Link>
							<Typography
								variant="body2"
								sx={{ marginTop: 3, color: "#393f81" }}
							>
								No tienes una cuenta?{" "}
								<Link href="#" sx={{ color: "#393f81" }}>
									Reístrate aquí!
								</Link>
							</Typography>
							<Box
								display="flex"
								flexDirection="row"
								justifyContent="start"
								mt={2}
							>
								<Link
									href="#"
									variant="body2"
									sx={{ marginRight: 1 }}
								>
									Términos de uso
								</Link>
								<Link href="#" variant="body2">
									Política de privacidad
								</Link>
							</Box>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
		</Box>
	);
};

export default LogIn;
