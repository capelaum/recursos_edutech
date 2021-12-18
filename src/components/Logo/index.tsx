import Image from "next/image";

import logo from "@public/logo.svg";

import { Container } from "./styles";

export function Logo() {
  return (
    <Container>
      <div className="logo_image">
        <Image src={logo} alt="Recursos EduTech Logo" />
      </div>
      Recursos EduTech
    </Container>
  );
}
