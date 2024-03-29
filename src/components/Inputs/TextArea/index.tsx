import { Container, Error, STextarea } from "./styles";

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error: any;
  register: any;
  name: string;
}

const TextArea: React.FC<IProps> = ({
  label,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container>
      <STextarea
        labelPlaceholder={label}
        error={!!error}
        {...register(name)}
        {...rest}
      />
      <Error>{!!error && <span>{error}</span>}</Error>
    </Container>
  );
};

export default TextArea;
