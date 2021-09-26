import { AnimationContainer, Background, Container, Content } from "./styles";
import Button from "../../components/Button";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Input from "../../components/Input";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastro</h1>
            <Input icon={FiUser} label="Name" placeholder="Seu nome" />
            <Input icon={FiMail} label="Email" placeholder="Seu melhor email" />
            <Input
              icon={FiLock}
              label="Password"
              placeholder="Uma senha segura"
              type="password"
            />
            <Input
              icon={FiLock}
              label="Confirm Password"
              placeholder="Confirme sua senha"
              type="password"
            />
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
