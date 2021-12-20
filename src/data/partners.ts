import rocketseat_logo from "@public/partners/rocketseat_logo.svg";
import ongs from "@public/partners/ongs.svg";
import institutions from "@public/partners/institutions.svg";

import { Data } from "types";

export const partners: Data[] = [
  {
    image: rocketseat_logo,
    text: "Escola de programação que possui a missão de capacitar pesssoas que buscam se  profissionalizar  na programação independente do seu momento ou nível de conhecimento.",
    alt: "Recursos",
  },
  {
    image: ongs,
    title: "ONGs Educacionais",
    text: "Diversas ONGs de caráter educacional estão dispostas a incentivar e auxiliar pessoas com necessidades a estudarem e se capacitarem para o mercado.",
    alt: "Localização",
  },
  {
    image: institutions,
    title: "Instituições de ensino",
    text: "Muitas instiuições de ensino privadas e públicas oferecem recursos e aulas de forma acessível para pessoas que não possuem fácil acesso à educação de qualidade.",
    alt: "Educação",
  },
];
