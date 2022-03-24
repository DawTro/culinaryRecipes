import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { Container } from "react-bootstrap";
import "./Layout.css";

function Layout() {
  return (
    <Container fluid className="d-flex flex-column">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default Layout;
