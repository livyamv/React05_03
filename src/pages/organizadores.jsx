import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from "../axios/axios";

function listOrganizadores() {
  const [events, setOrganizadores] = useState([]);

  async function getOrganizadores() {
    //Chamada da Api
    await api.getOrganizadores().then(
      (response) => {
        console.log(response.data.events);
        setOrganizadores(response.data.events);
      },
      (error) => {
        console.log("Erro ", error);
      }
    );
  }

  const listOrganizadores = events.map((organizadores) => {
    return (
      <TableRow key={organizador.id_organizador}>
        <TableCell align="center">{organizador.nome}</TableCell>
        <TableCell align="center">{organizador.email}</TableCell>
        <TableCell align="center">{organizador.senha}</TableCell>
        <TableCell align="center">{organizador.telefone}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getEventos();
  }, []);

  return (
    <div>
      <h5>Eventos:</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead
            style={{ backgroundColor: "#f4d6f6", borderStyle: "solid" }}
          >
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">E-mail</TableCell>
              <TableCell align="center">Senha</TableCell>
              <TableCell align="center">Telefone</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>{listOrganizadores}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default listOrganizadores;
