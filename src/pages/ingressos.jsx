import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import api from "../axios/axios";

function listIngressos() {
  const [events, setIngressos] = useState([]);

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

  const listIngressos = events.map((ingresso) => {
    return (
      <TableRow key={ingresso.id_ingresso}>
        <TableCell align="center">{evento.preco}</TableCell>
        <TableCell align="center">{evento.tipo}</TableCell>
      </TableRow>
    );
  });

  useEffect(() => {
    getIngressos();
  }, []);

  return (
    <div>
      <h5>Ingressos:</h5>
      <TableContainer component={Paper} style={{ margin: "2px" }}>
        <Table size="small">
          <TableHead
            style={{ backgroundColor: "#f4d6f6", borderStyle: "solid" }}
          >
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
