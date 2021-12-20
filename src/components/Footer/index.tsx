import Link from "next/link";

import { Logo } from "components/Logo";
import { ContactSocial } from "components/ContactSocial";
import { ContactButton } from "components/ContactButton";

import {
  Container,
  Content,
  ContentCenter,
  ContentLeft,
  ContentRight,
} from "./styles";

interface FooterProps {
  handleOpenContactModal: () => void;
}

export function Footer({ handleOpenContactModal }: FooterProps) {
  return (
    <Container>
      <Content>
        <ContentLeft>
          <Logo />
          <div>
            <span>Dúvidas?</span>
            <ContactButton handleOpenContactModal={handleOpenContactModal} />
          </div>
        </ContentLeft>

        <ContentCenter>
          <Link href="#banner">Início</Link>
          <ContactSocial />
        </ContentCenter>

        <ContentRight>
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
        </ContentRight>
      </Content>
    </Container>
  );
}
