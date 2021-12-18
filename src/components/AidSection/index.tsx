import Image from "next/image";

import aid from "@public/aid.svg";

import { Button } from "components/Button";

import { Container, Content, ContentText } from "./styles";

export function AidSection() {
  return (
    <Container>
      <Content>
        <ContentText>
          <h1>Auxílio Educacional</h1>
          <p>
            Você pode se declarar uma pessoa de baixa renda e receber auxílio de
            nossos parceiros e colaboradores, bastando informar seus dados e
            comprovar sua situação através do envio de documentos pelo nosso
            formulário.
          </p>
          <p>
            Assim que recebermos seus dados, avaliaremos o seu caso e entraremos
            em contato o mais breve possível com a possibilidade de lhe oferecer
            diversos auxílios, variando desde a disponibilização de bolsas de
            estudos em cursos de nossos parceiros, fornecimento de equipamentos
            e até disponibilizar aulas gratuitas de professores particulares!
          </p>
          <Button text="Peça seu auxílio" isBlue />
        </ContentText>

        <div className="aid_image">
          <Image src={aid} alt="Auxílio Educacional" />
        </div>
      </Content>
    </Container>
  );
}
