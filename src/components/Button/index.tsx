import { Container } from "./styles";

interface ButtonProps {
  text: string;
  isBlue?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export function Button({ text, isBlue, type }: ButtonProps) {
  return (
    <Container title={text} isBlue={isBlue} type={type}>
      {text}
    </Container>
  );
}
