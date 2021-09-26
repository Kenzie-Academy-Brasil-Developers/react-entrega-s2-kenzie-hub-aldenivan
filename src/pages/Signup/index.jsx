import { AnimationContainer, Background, Container, Content } from "./styles";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <Button>Enviar</Button>
            <p>
              Ja tem uma conta? Faça seu <Link to="/login">login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
