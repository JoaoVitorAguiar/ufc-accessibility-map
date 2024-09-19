import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  {
    src: "/images/elevador-para-acessar-o-egundo-andar-do-R.U.jpeg",
    alt: "Elevador para acessar o segundo andar do R.U",
    description: "Elevador para acessar o segundo andar do R.U",
  },
  {
    src: "/images/elevador-para-acesso-ao-segundo-andar-do-bloco-da-engenharia.jpeg",
    alt: "Elevador para acesso ao segundo andar do bloco da engenharia",
    description: "Elevador para acesso ao segundo andar do bloco da engenharia",
  },
  {
    src: "/images/rampa-para-acesso-ao-bloco-da-odontologia.jpeg",
    alt: "Rampa para acesso ao bloco da odontologia",
    description: "Rampa para acesso ao bloco da odontologia",
  },
  {
    src: "/images/vaga-para-pessoas-com-deficiencia-e-rampa-de-acesso-ao-campus.jpeg",
    alt: "Vaga para pessoas com deficiência e rampa de acesso ao ampus",
    description:
      "Vaga para pessoas com deficiência e rampa de acesso ao Campus",
  },
  {
    src: "/images/vaga-para-pessoas-com-deficiencia-e-rampa-para-acessoao-campus.jpeg",
    alt: "Vaga para pessoas com deficiência e rampa para acesso ao campus",
    description:
      "Vaga para pessoas com deficiência e rampa para acesso ao Campus",
  },
];

export function Galeria() {
  return (
    <section id="galeria" className="bg-teal-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
          Galeria
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card className="bg-white shadow-lg" key={index}>
              <CardContent className="pt-6">
                <AspectRatio ratio={3 / 4}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </AspectRatio>

                <p className="text-slate-700 pt-6">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
