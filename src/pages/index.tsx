import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { FaInstagram } from "react-icons/fa";

import Modal from "react-modal";

import hero from "@public/hero.svg";
import logo from "@public/logo.svg";
import contact_icon from "@public/contact_icon.svg";

import { ContactModal } from "components/ContactModal";

import { Banner, Contact } from "styles/home";

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
      <Banner>
        <Contact>
          <div>
            <Image src={contact_icon} alt="Contact" />
            <button onClick={handleOpenContactModal}>Entre em contato</button>
          </div>
          <a
            href="https://www.instagram.com/capelletto.lv"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={28} />
          </a>
        </Contact>
        <h1>
          <Image src={logo} alt="Recursos EduTech Logo" />
          Recursos EduTech
        </h1>
        <Image src={hero} alt="Recursos EduTech Hero" />
      </Banner>

      <ContactModal
        isOpen={isContactModalOpen}
        onRequestClose={handleCloseContactModal}
      />
    </>
  );
};

export default Home;
