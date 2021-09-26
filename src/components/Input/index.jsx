import { Container, InputContainer } from "./styles";

const Input = ({ label, icon: Icon, name, register, error, ...rest }) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>

      <InputContainer>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};

export default Input;
