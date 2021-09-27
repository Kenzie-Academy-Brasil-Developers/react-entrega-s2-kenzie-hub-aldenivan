import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit2, FiEdit3 } from "react-icons/fi";
import { Redirect } from "react-router";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import api from "../../services/api";
import { Container, InputContainer, TechnologyContainer } from "./styles";

const Dashboard = ({ authenticated }) => {
  const [techs, setTechs] = useState([]);
  const [token] = useState(JSON.parse(localStorage.getItem("@Kenziehub")));
  const { register, handleSubmit } = useForm({});

  const loadTechs = () => {
    api
      .get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTechs(response.data.techs))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTechs();
  }, []);

  const onSubmit = (data) => {
    console.log(data);

    if (!data.title || !data.status) {
      return toast.error("Complete todos os campos para enviar a tecnologia");
    }

    api
      .post(
        "/users/techs",
        {
          title: data.title,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => loadTechs())
      .catch((err) => console.log(err));
  };

  const tachDeleted = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => loadTechs())
      .catch((err) => console.log(err));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <InputContainer onSubmit={handleSubmit(onSubmit)}>
        <form>
          <Input
            icon={FiEdit2}
            placeholder="Nova tecnologia"
            register={register}
            name="title"
          />
          <Input
            icon={FiEdit3}
            placeholder="Status"
            register={register}
            name="status"
          />
          <Button type="submit">Adicionar</Button>
        </form>
      </InputContainer>
      <TechnologyContainer>
        {techs.map((tech) => (
          <Card
            key={tech.id}
            status={tech.status}
            title={tech.title}
            onClick={() => tachDeleted(tech.id)}
          />
        ))}
      </TechnologyContainer>
    </Container>
  );
};

export default Dashboard;
