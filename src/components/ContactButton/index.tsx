import Image from "next/image";

import contact_icon from "@public/contact_icon.svg";

import { Container } from "./styles";

interface ContactButtonProps {
  handleOpenContactModal: () => void;
}

export function ContactButton({ handleOpenContactModal }: ContactButtonProps) {
  return (
    <Container>
      <Image src={contact_icon} alt="Contact" width={30} />
      <button onClick={handleOpenContactModal}>Entre em contato</button>
    </Container>
  );
}
