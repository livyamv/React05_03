import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bem-vindo ao sistema de eventos</h1>
      <Link to="/eventos">Eventos</Link>
      <Link to="/organizadores">Organizadores</Link>
      <Link to="/ingressos">Ingressos</Link>
    </div>
  );
}

export default Home;