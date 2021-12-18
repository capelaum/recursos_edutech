import { FaInstagram, FaGithub } from "react-icons/fa";

import { Container } from "./styles";

export function ContactSocial() {
  return (
    <Container>
      <a
        href="https://www.instagram.com/capelletto.lv"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram size={28} />
      </a>
      <a href="https://github.com/capelaum" target="_blank" rel="noreferrer">
        <FaGithub size={28} />
      </a>
    </Container>
  );
}
