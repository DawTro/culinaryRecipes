import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import "./Header.css";
import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <>
      <Row>
        <Col
          md
          className="d-flex p-0 p-md-2 justify-content-center align-items-center">
          <Logo />
        </Col>
        <Col
          md
          className="d-flex p-0 p-md-2 my-3 my-md-0 justify-content-center align-items-center">
          <Navbar />
        </Col>
        <Col
          md
          className="d-flex mb-3 mb-md-0 p-0 p-md-2 justify-content-center align-items-center">
          <Navbar />
        </Col>
      </Row>
    </>
  );
}

export default Header;
