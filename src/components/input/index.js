import { Container } from "./style";

function Input({ id, label, value, handler, ...rest }) {
  return (
    <Container>
      <input id={id} {...rest} value={value} onChange={handler} placeholder=" " />
      <label htmlFor={id}>{label}</label>
    </Container>
  );
}

export default Input;
