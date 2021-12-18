import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { FaInstagram, FaGithub } from "react-icons/fa";

import Modal from "react-modal";

import hero from "@public/hero.svg";
import logo from "@public/logo.svg";

import { ContactModal } from "components/ContactModal";
import { ContactButton } from "components/ContactButton";

import { Banner, Contact, ContactSocial, Hero } from "styles/home";

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
          <div className="hero_content">
            <h1>
              <div className="logo_image">
                <Image src={logo} alt="Recursos EduTech Logo" />
              </div>
              Recursos EduTech
            </h1>
            <h2>Encontre os recursos educacionais mais próximos de você</h2>
          </div>
          <div className="hero_image">
            <Image src={hero} alt="Recursos EduTech Hero" />
          </div>
        </Hero>
      </Banner>

      <ContactModal
        isOpen={isContactModalOpen}
        onRequestClose={handleCloseContactModal}
      />
    </>
  );
};

export default Home;
