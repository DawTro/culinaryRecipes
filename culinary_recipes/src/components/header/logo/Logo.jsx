import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookieBite } from "@fortawesome/free-solid-svg-icons";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <h1>
          <FontAwesomeIcon icon={faCookieBite} /> Culinary heven
        </h1>
      </div>
    </>
  );
};
export default Logo;
