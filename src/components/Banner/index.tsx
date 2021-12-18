import Image from "next/image";

import hero from "@public/hero.svg";

import { ContactButton } from "components/ContactButton";
import { ContactSocial } from "components/ContactSocial";
import { Button } from "components/Button";
import { Logo } from "components/Logo";

import { Container, Contact, Hero, HeroContent } from "./styles";
interface ButtonProps {
  handleOpenContactModal: () => void;
}

export function Banner({ handleOpenContactModal }: ButtonProps) {
  return (
    <Container>
      <Contact>
        <ContactButton handleOpenContactModal={handleOpenContactModal} />
        <ContactSocial />
      </Contact>

      <Hero>
        <HeroContent>
          <Logo />
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
