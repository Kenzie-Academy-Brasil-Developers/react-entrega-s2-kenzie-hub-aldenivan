import Button from "../../components/Button";
import { Container, Content } from "./styles";

const Home = () => {
  return (
    <Container>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize-se de forma fácil e efetiva</span>
        <div>
          <Button whiteSchema>Cadastre-se</Button>
          <Button>Login</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
