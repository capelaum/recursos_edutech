import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Modal from "react-modal";

import { ContactModal } from "components/ContactModal";
import { Banner } from "components/Banner";
import { Informations } from "components/Informations";
import { Container } from "styles/home";

Modal.setAppElement("#__next");

const Home: NextPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  function handleOpenContactModal() {
    setIsContactModalOpen(true);
  }

  function handleCloseContactModal() {
    setIsContactModalOpen(false);
  }

  return (
    <>
      <Head>
        <title>Recursos EduTech</title>
      </Head>

      <Banner handleOpenContactModal={handleOpenContactModal} />
      <Container>
        <Informations />

        <ContactModal
          isOpen={isContactModalOpen}
          onRequestClose={handleCloseContactModal}
        />
      </Container>
    </>
  );
};

export default Home;
