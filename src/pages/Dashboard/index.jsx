import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import { Redirect } from "react-router";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Container, InputContainer } from "./styles";

const Dashboard = ({ authenticated }) => {
  const { register, handleSubmit } = useForm();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <InputContainer>
        <section>
          ,
          <Input
            icon={FiEdit2}
            placeholder="Nova tecnologia"
            register={register}
            name="title"
          />
          <Button>Adicionar</Button>
        </section>
      </InputContainer>
    </Container>
  );
};

export default Dashboard;
