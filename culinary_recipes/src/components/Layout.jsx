import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";
import { Container } from "react-bootstrap";

function Layout() {
  return (
    <Container fluid className="py-4">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default Layout;
