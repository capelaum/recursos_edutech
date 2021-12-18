import Image from "next/image";

import { Container } from "./styles";

interface GridItemProps {
  image: string;
  text: string;
  alt: string;
}

export function GridItem({ image, text, alt }: GridItemProps) {
  return (
    <Container>
      <div className="info_image">
        <Image src={image} alt={alt} layout="fixed" height={80} />
      </div>
      <p>{text}</p>
    </Container>
  );
}
