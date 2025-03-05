import { useState, useEffect } from "react";
// Imports para criação de tabela
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
// TableHead é onde colocamos os titulos
import TableHead from "@mui/material/TableHead";
// TableBody é onde colocamos o conteúdo
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from "../axios/axios";

function listIngressos() {
  const [ingressos, setIngressos] = useState([]);

  async function getIngressos() {
    //Chamada da Api
    await api.getIngressos().then(
      (response) => {
        console.log(response.data.events);
        setIngressos(response.data.events);
      },
      (error) => {
        console.log("Erro ", error);
      }
    );
  }

  const listIngressos = ingressos.map((ingresso) => {
    return (
      <TableRow key={ingresso.id_ingresso}>
        <TableCell align="center">{ingresso.preco}</TableCell>
        <TableCell align="center">{ingresso.tipo}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getIngressos();
  }, []);

  return (
    <div>
      <h2>Lista de ingressos</h2>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead style={{ backgroundColor: "#f4d6f6", borderStyle: "solid" }}>
            <TableRow>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Tipo</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>{listIngressos}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default listIngressos;
