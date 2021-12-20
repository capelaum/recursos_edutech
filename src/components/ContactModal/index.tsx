import { FormEvent } from "react";
import Modal from "react-modal";
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "react-toastify";

import { MdClose } from "react-icons/md";

import { Button } from "components/Button";
import { CepInput } from "components/CepInput";

import { Container } from "./styles";

interface ContactModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ContactModal({ isOpen, onRequestClose }: ContactModalProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    toast.success("Contato enviado com sucesso!", {
      position: "top-right",
      theme: "colored",
    });

    onRequestClose();
  }

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
      <Container onSubmit={e => handleSubmit(e)}>
        <h1>Contato</h1>

        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome*"
            required
          />
        </label>

        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail*"
            required
          />
        </label>

        <CepInput />

        <label htmlFor="subject">
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Assunto*"
            required
          />
        </label>

        <TextareaAutosize
          name="message"
          id="message"
          placeholder="Mensagem*"
          maxRows={10}
          minRows={5}
          required
        />

        <Button type="submit" text="Enviar" />
      </Container>
    </Modal>
  );
}
