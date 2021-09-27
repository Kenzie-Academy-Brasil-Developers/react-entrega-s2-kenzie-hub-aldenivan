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
import { Redirect, useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Signup = ({ authenticated }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório!"),
    bio: yup
      .string()
      .max(150, "Máximo 150 caracteres")
      .required("Campo Obrigatório!"),
    contact: yup.string().required("Campo Obrigatório!"),
    course_module: yup.string().required("Campo Obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo 8 digítos")
      .required("Campo Obrigatório!"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
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

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              icon={FiUser}
              label="Name"
              placeholder="Seu nome"
              name="name"
              error={errors.name?.message}
            />
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
              icon={FiBookOpen}
              label="Bio"
              placeholder="Fale um pouco de você"
              name="bio"
              error={errors.bio?.message}
            />
            <Input
              register={register}
              icon={FiPhone}
              label="Contact"
              placeholder="Contato"
              name="contact"
              error={errors.contact?.message}
            />
            <Input
              register={register}
              icon={FiBook}
              label="Course Module"
              placeholder="Qual quarter você está?"
              name="course_module"
              error={errors.course_module?.message}
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
            <Input
              register={register}
              icon={FiLock}
              label="Confirm Password"
              placeholder="Confirme sua senha"
              type="password"
              name="passwordConfirm"
              error={errors.passwordConfirm?.message}
            />
            <Button type="submit">Enviar</Button>
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
