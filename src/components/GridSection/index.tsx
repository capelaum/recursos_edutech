import { SectionTitle } from "components/SectionTitle";
import { GridItem } from "components/GridItem";

import { Data } from "types";

import { Container, GridContainer } from "./styles";

interface GridSectionProps {
  sectionTitle: string;
  data: Data[];
}

export function GridSection({ data, sectionTitle }: GridSectionProps) {
  return (
    <Container>
      <SectionTitle title={sectionTitle} />

      <GridContainer>
        {data.map(({ image, text, alt }, index) => (
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
