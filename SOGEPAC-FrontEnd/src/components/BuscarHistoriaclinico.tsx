// src/components/BuscarHistorialClinico.tsx

import React, { useState} from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DownloadIcon from "@mui/icons-material/Download";

const BuscarHistoriaclinico: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`/api/historial-clinico`, {
        params: { search: searchTerm },
      });
      setData(response.data);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ padding: "20px",backgroundColor: "#e0f7fa",minHeight: "100vh"}}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Buscar Historial Clínico
      </Typography>
      <Box sx={{ display: "flex", marginBottom: "20px" }}>
        <TextField
          label="Buscar en historias clínicas"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ marginLeft: "10px" }}
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </Box>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nro. de Historia</TableCell>
            <TableCell>Nombre del paciente</TableCell>
            <TableCell>Apellido del paciente</TableCell>
            <TableCell>Consultas</TableCell>
            <TableCell>Fecha de consulta</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.nombre}</TableCell>
              <TableCell>{item.apellido}</TableCell>
              <TableCell>{item.consultas}</TableCell>
              <TableCell>{item.fechaConsulta}</TableCell>
              <TableCell>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton>
                  <DownloadIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default BuscarHistoriaclinico;
