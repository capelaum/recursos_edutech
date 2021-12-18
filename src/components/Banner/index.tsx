import Image from "next/image";

import { ContactButton } from "components/ContactButton";
import { Container, Contact, ContactSocial, Hero, HeroContent } from "./styles";

import { FaInstagram, FaGithub } from "react-icons/fa";

import hero from "@public/hero.svg";
import logo from "@public/logo.svg";
import { Button } from "components/Button";

interface ButtonProps {
  handleOpenContactModal: () => void;
}

export function Banner({ handleOpenContactModal }: ButtonProps) {
  return (
    <Container>
      <Contact>
        <ContactButton handleOpenContactModal={handleOpenContactModal} />

        <ContactSocial>
          <a
            href="https://www.instagram.com/capelletto.lv"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://github.com/capelaum"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={28} />
          </a>
        </ContactSocial>
      </Contact>

      <Hero>
        <HeroContent>
          <h1>
            <div className="logo_image">
              <Image src={logo} alt="Recursos EduTech Logo" />
            </div>
            Recursos EduTech
          </h1>
          <h2>Encontre os recursos educacionais mais próximos de você</h2>
          <Button text="Criar conta gratuita" />
        </HeroContent>
        <div id="hero_image">
          <Image src={hero} alt="Recursos EduTech Hero" />
        </div>
      </Hero>
    </Container>
  );
}
