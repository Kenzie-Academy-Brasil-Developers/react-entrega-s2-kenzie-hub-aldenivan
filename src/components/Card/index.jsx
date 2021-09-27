import { FiBarChart2, FiCpu } from "react-icons/fi";
import Button from "../Button";
import { Container } from "./styled";

const Card = ({ title, status, onClick }) => {
  return (
    <Container>
      <span>
        <FiCpu /> {title}
      </span>
      <hr />
      <time>
        <FiBarChart2 /> {status}
      </time>
      <Button onClick={onClick}>Remover</Button>
    </Container>
  );
};

export default Card;
