import { Container, Error, SInput } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: any;
  register: any;
  name: string;
}

const GeneralInput: React.FC<IProps> = ({
  label,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container>
      <SInput
        {...register(name)}
        labelPlaceholder={label}
        {...rest}
        error={!!error}
      />
      <Error>{!!error && <span>{error}</span>}</Error>
    </Container>
  );
};

export default GeneralInput;
