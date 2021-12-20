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
            Declare-se como uma pessoa de baixa renda e tenha a possibilidade de
            receber auxílio de nossos parceiros e colaboradores, basta informar
            seus dados e comprovar sua situação através do envio de documentos
            pelo nosso formulário.
          </p>

          <Button type="button" text="Peça seu auxílio" isBlue />
        </ContentText>

        <div className="aid_image">
          <Image src={aid} alt="Auxílio Educacional" />
        </div>
      </Content>
    </Container>
  );
}
