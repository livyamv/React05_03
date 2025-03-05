import axios from "axios";

const api = axios.create({
  baseURL:"http://localhost:5000/api/v1/",
  header:{
    'accept': 'application/json'
  }  
});

const sheets ={
    getEventos:()=>api.get("/evento"),
    getIngressos:()=>api.get("/ingressos"),
    getOrganizador:()=>api.get("/organizador")

}

export default sheets;