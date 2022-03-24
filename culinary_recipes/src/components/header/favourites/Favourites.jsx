import { Dropdown } from "react-bootstrap";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Favourites.css";

const Favourites = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-secondary">
        Ulubione <FontAwesomeIcon icon={faHeart} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">1 pozycja</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2 pozycja</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3 pozycja</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Favourites;
