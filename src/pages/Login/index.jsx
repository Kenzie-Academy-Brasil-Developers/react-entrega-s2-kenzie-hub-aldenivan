import { AnimationContainer, Background, Container, Content } from "./styles";
import Button from "../../components/Button";
import {
  FiUser,
  FiMail,
  FiLock,
  FiBookOpen,
  FiPhone,
  FiBook,
} from "react-icons/fi";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo 8 digítos")
      .required("Campo Obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitForm = ({
    email,
    name,
    password,
    course_module,
    bio,
    contact,
  }) => {
    const user = { email, name, password, course_module, bio, contact };

    api
      .post("/users", user)
      .then((_) => {
        toast.success("Sucesso ao criar a Conta");
        return history.push("/login");
      })
      .catch((err) => toast.error("Erro ao criar a Conta, tente outro email"));
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <h1>Login</h1>
            <Input
              register={register}
              icon={FiMail}
              label="Email"
              placeholder="Seu melhor email"
              name="email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              icon={FiLock}
              label="Password"
              placeholder="Uma senha segura"
              type="password"
              name="password"
              error={errors.password?.message}
            />
            <Button type="submit">Enviar</Button>
            <p>
              Não tem uma conta? Faça seu <Link to="/signup">cadastro</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
