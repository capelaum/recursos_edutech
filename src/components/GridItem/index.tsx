import Image from "next/image";

import { Container } from "./styles";

interface GridItemProps {
  image: string;
  text: string;
  alt: string;
  title?: string;
}

export function GridItem({ image, text, alt, title }: GridItemProps) {
  return (
    <Container>
      <div className="grid_item_image">
        <Image src={image} alt={alt} layout="fixed" height={80} />
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </Container>
  );
}
