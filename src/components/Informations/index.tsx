import Image from "next/image";

import { SectionTitle } from "components/SectionTitle";

import info_1 from "@public/info/info_1.svg";
import info_2 from "@public/info/info_2.svg";
import info_3 from "@public/info/info_3.svg";

import { Container, GridContainer, GridItem } from "./styles";

export function Informations() {
  return (
    <Container>
      <SectionTitle title="Como funciona" />

      <GridContainer>
        <GridItem>
          <div className="info_image">
            <Image src={info_1} alt="Recursos" layout="fixed" height={80} />
          </div>
          <p>
            Ao criar uma conta, você pode especificar diversos recursos dos
            quais precisa, incluindo livros, cursos, instrumentos, notebooks,
            acesso à internet, coworkings e afins.
          </p>
        </GridItem>
        <GridItem>
          <div className="info_image">
            <Image src={info_2} alt="Localização" layout="fixed" height={80} />
          </div>
          <p>
            Baseado em sua localização, identificaremos os lugares mais próximos
            que disponibilizam os recursos que você precisa para estudar.
          </p>
        </GridItem>
        <GridItem>
          <div className="info_image">
            <Image src={info_3} alt="Educação" layout="fixed" height={80} />
          </div>
          <p>
            Podem ser encontradas diversas instituições de educação em sua
            região, incluindo instituições públicas, privadas e até professores
            particulares de sua região.
          </p>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
