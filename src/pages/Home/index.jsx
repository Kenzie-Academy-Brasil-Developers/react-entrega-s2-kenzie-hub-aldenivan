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
          <button>Cadastre-se</button>
          <button>Login</button>
        </div>
      </Content>
    </Container>
  );
};

export default Home;
