import { Col, Card } from "react-bootstrap";
import "./Category.css";

const Category = (props) => {
  return (
    <Col>
      <Card key={props.id} className="card border-secondary h-100">
        <div className="card-img">
          <Card.Img
            className="image"
            variant="top"
            src={props.image}
            alt={props.title}
          />
        </div>
        <Card.Body className="border-top">
          <Card.Title className="text-center">
            <h3>{props.title}</h3>
          </Card.Title>
          {/* <Card.Text>Tu będzie opis</Card.Text> */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Category;
