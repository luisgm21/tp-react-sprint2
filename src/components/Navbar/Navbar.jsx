import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/about">Acerca</Link> |{" "}
      <Link to="/user/123">Usuario 123</Link>
    </nav>
  );
}

export default Navbar