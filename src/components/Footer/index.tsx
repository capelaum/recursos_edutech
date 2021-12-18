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
        <div className="content_left">
          <Logo />
          <div>
            <span>Dúvidas?</span>
            <ContactButton handleOpenContactModal={handleOpenContactModal} />
          </div>
        </div>

        <div className="content_center">
          <Link href="#banner">Início</Link>
          <ContactSocial />
        </div>

        <div className="content_right">
          Recursos EduTech © 2021.
          <span>
            Feito com 💜 por
            <a
              href="https://github.com/capelaum"
              target="_blank"
              rel="noreferrer"
            >
              Luís Vinicius Capelletto
            </a>
          </span>
        </div>
      </Content>
    </Container>
  );
}
