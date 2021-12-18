import Link from "next/link";

import { Logo } from "components/Logo";
import { ContactSocial } from "components/ContactSocial";
import { ContactButton } from "components/ContactButton";

import { Container, Content } from "./styles";

interface FooterProps {
  handleOpenContactModal: () => void;
}

export function Footer({ handleOpenContactModal }: FooterProps) {
  return (
    <Container>
      <Content>
        <div>
          <Logo />
          Dúvidas?
          <ContactButton handleOpenContactModal={handleOpenContactModal} />
        </div>

        <div>
          <Link href="#banner">Início</Link>
          <ContactSocial />
        </div>

        <div>
          Recursos EduTech © 2021. Feito com 💜 por
          <a
            href="https://github.com/capelaum"
            target="_blank"
            rel="noreferrer"
          >
            Luís Vinicius Capelletto
          </a>
        </div>
      </Content>
    </Container>
  );
}
