import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";
import Favourites from "./favourites/Favourites";
import "./Header.css";
import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <>
      <Row className="border-bottom border-secondary py-4 py-md-3">
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
          className="d-flex pt-2 pt-md-0 p-md-2 justify-content-center align-items-center">
          <Favourites />
        </Col>
      </Row>
    </>
  );
}

export default Header;
