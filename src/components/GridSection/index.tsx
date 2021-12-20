import { SectionTitle } from "components/SectionTitle";
import { GridItem } from "components/GridItem";

import { Data } from "types";

import { Container, GridContainer } from "./styles";

interface GridSectionProps {
  sectionTitle: string;
  data?: Data[];
}

export function GridSection({ data, sectionTitle }: GridSectionProps) {
  function renderData(data: Data[]) {
    return data.map(({ image, text, alt, title }, index) => (
      <GridItem
        key={`${alt}-${index}`}
        image={image}
        text={text}
        alt={alt}
        title={title}
      />
    ));
  }

  return (
    <Container>
      <SectionTitle title={sectionTitle} />

      <GridContainer>{data ? renderData(data) : null}</GridContainer>
    </Container>
  );
}
