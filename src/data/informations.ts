import info_1 from "@public/info/info_1.svg";
import info_2 from "@public/info/info_2.svg";
import info_3 from "@public/info/info_3.svg";

import { Data } from "types";

export const informations: Data[] = [
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
