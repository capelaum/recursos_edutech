import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Modal from "react-modal";

import { informations } from "data/informations";
import { resources } from "data/resources";
import { partners } from "data/partners";

import { Banner } from "components/Banner";
import { ContactModal } from "components/ContactModal";
import { GridSection } from "components/GridSection";
import { AidSection } from "components/AidSection";
import { Footer } from "components/Footer";

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
        <ContactModal
          isOpen={isContactModalOpen}
          onRequestClose={handleCloseContactModal}
        />

        <GridSection data={informations} sectionTitle="Como funciona" />
        <GridSection data={resources} sectionTitle="Recursos" />

        <AidSection />
        <GridSection data={partners} sectionTitle="Parceiros" />

        <Footer handleOpenContactModal={handleOpenContactModal} />
      </Container>
    </>
  );
};

export default Home;
