import "bootstrap/dist/css/bootstrap-grid.rtl.min.css";
import { Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Row className="footer">
      <Col className="d-flex flex-column justify-content-center align-itrms-center">
        <p className="d-flex my-2 my-md-3 p-md-1 justify-content-center">
          &copy; Culinary heven 2022
        </p>
        <p className="d-flex m-0 mb-2 mb-md-3 p-md-1 justify-content-center">
          Wszystkie prawa zastrzeżone.
        </p>
      </Col>
    </Row>
  );
};
export default Footer;
