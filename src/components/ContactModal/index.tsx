import Modal from "react-modal";

import { MdClose } from "react-icons/md";

import { Container } from "./styles";

interface ContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ContactModal({ isOpen, onRequestClose }: ContactModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content "
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <MdClose size={24} className="react-modal-close-checkout" />
      </button>
      <Container>
        <h1>Contato</h1>

        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            required
          />
        </label>

        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            required
          />
        </label>

        <label htmlFor="CEP">
          <input type="text" name="CEP" id="CEP" placeholder="CEP" required />
        </label>

        <label htmlFor="subject">
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Assunto"
            required
          />
        </label>

        <textarea name="message" id="message" placeholder="Mensagem" />

        <button type="submit">Enviar</button>
      </Container>
    </Modal>
  );
}
