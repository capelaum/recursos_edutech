import info_1 from "@public/info/info_1.svg";
import info_2 from "@public/info/info_2.svg";
import info_3 from "@public/info/info_3.svg";

import { SectionTitle } from "components/SectionTitle";
import { GridItem } from "components/GridItem";

import { Container, GridContainer } from "./styles";

const informations = [
  {
    image: info_1,
    text: "Ao criar uma conta, você pode especificar diversos recursos dos quais precisa, incluindo livros, cursos, instrumentos, notebooks, acesso à internet, coworkings e afins.",
    alt: "Recursos",
  },
  {
    image: info_2,
    text: "Baseado em sua localização, identificaremos os lugares mais próximos que disponibilizam os recursos que você precisa para estudar.",
    alt: "Localização",
  },
  {
    image: info_3,
    text: "Podem ser encontradas diversas instituições de educação em sua região, incluindo instituições públicas, privadas e até professores particulares de sua região.",
    alt: "Educação",
  },
];

export function Informations() {
  return (
    <Container>
      <SectionTitle title="Como funciona" />

      <GridContainer>
        {informations.map(({ image, text, alt }, index) => (
          <GridItem
            key={`${alt}-${index}`}
            image={image}
            text={text}
            alt={alt}
          />
        ))}
      </GridContainer>
    </Container>
  );
}
