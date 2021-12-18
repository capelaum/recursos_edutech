import { Container } from "./styles";

interface ButtonProps {
  text: string;
  isBlue?: boolean;
}

export function Button({ text, isBlue }: ButtonProps) {
  return (
    <Container title={text} isBlue={isBlue}>
      {text}
    </Container>
  );
}
