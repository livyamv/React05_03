import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from "../axios/axios";

function ListOrganizador() {
  const [events, setOrganizador] = useState([]);

  async function getOrganizador() {
    // Chamada da API
    await api.getOrganizador().then(
      (response) => {
        console.log(response.data.organizador);
        setOrganizador(response.data.organizador); // Supondo que 'events' seja um array
      },
      (error) => {
        console.log("Erro ", error);
      }
    );
  }

  useEffect(() => {
    getOrganizador();
  }, []);

  // Verifique se events é um array válido antes de usar o map
  const listOrganizadores = Array.isArray(events) ? (
    events.map((organizador) => {
      return (
        <TableRow key={organizador.id_organizador}>
          <TableCell align="center">{organizador.nome}</TableCell>
          <TableCell align="center">{organizador.email}</TableCell>
          <TableCell align="center">{organizador.senha}</TableCell>
          <TableCell align="center">{organizador.telefone}</TableCell>
        </TableRow>
      );
    })
  ) : (
    <TableRow>
      <TableCell colSpan="4" align="center">Nenhum organizador encontrado</TableCell>
    </TableRow>
  ); // Exibe uma mensagem caso a lista de organizadores esteja vazia ou inválida

  return (
    <div>
      <h2>Organizadores:</h2>
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

export default ListOrganizador;
