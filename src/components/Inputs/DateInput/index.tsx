import { Container, Error, SInput } from "./styles";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: any;
  register: any;
  name: string;
}

const DateInput: React.FC<IProps> = ({
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
        label={label}
        {...rest}
        type="date"
        error={!!error}
      />
      <Error>{!!error && <span>{error}</span>}</Error>
    </Container>
  );
};

export default DateInput;
