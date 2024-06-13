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
	Icon,
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
			justifyContent="center"
			alignItems="center"
			minHeight="100vh"
			bgcolor="#f5f5f5"
		>
			<Card sx={{ maxWidth: 900, display: "flex" }}>
				<Grid container>
					<Grid item md={6}>
						<Box
							component="img"
							sx={{
								height: "100%",
								width: "100%",
								borderRadius: "4px 0 0 4px",
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
								<Icon sx={{ color: "#ff6219", fontSize: 40 }}>
									apps
								</Icon>
								<Typography
									variant="h4"
									component="span"
									sx={{ marginLeft: 2, fontWeight: "bold" }}
								>
									Logo
								</Typography>
							</Box>
							<Typography
								variant="h6"
								sx={{ marginBottom: 2, letterSpacing: "1px" }}
							>
								Sign into your account
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
								Forgot password?
							</Link>
							<Typography
								variant="body2"
								sx={{ marginTop: 3, color: "#393f81" }}
							>
								Don't have an account?{" "}
								<Link href="#" sx={{ color: "#393f81" }}>
									Register here
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
									Terms of use
								</Link>
								<Link href="#" variant="body2">
									Privacy policy
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
