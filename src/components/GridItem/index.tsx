import Image from "next/image";

import { Container } from "./styles";

interface GridItemProps {
  image: string;
  text: string;
  alt: string;
  title?: string;
  isPartner?: boolean;
}

export function GridItem({
  image,
  text,
  alt,
  title,
  isPartner,
}: GridItemProps) {
  return (
    <Container isPartner={isPartner}>
      <div className="info_image">
        <Image src={image} alt={alt} layout="fixed" height={80} />
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </Container>
  );
}
