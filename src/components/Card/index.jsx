import { FiCalendar, FiClipboard } from "react-icons/fi";
import Button from "../Button";
import { Container } from "./styled";

const Card = ({ title, date, onClick }) => {
  return (
    <Container>
      <span>
        <FiClipboard /> {title}
      </span>
      <hr />
      <time>
        <FiCalendar /> {date}
      </time>
      <Button onClick={onClick}>Remover</Button>
    </Container>
  );
};

export default Card;
