import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

const Navbar = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control type="search" placeholder="Szukaj" />
      </Form.Group>
    </Form>
  );
};

export default Navbar;
