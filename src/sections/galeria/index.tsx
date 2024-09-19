import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const galleryImages = [
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+1",
    alt: "Imagem 1",
    description: "Descrição importante e criativa para a imagem 1.",
  },
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+2",
    alt: "Imagem 2",
    description: "Descrição importante e criativa para a imagem 2.",
  },
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+3",
    alt: "Imagem 3",
    description: "Descrição importante e criativa para a imagem 3.",
  },
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+4",
    alt: "Imagem 4",
    description: "Descrição importante e criativa para a imagem 4.",
  },
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+5",
    alt: "Imagem 5",
    description: "Descrição importante e criativa para a imagem 5.",
  },
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+6",
    alt: "Imagem 6",
    description: "Descrição importante e criativa para a imagem 6.",
  },
];

export function Galeria() {
  return (
    <section id="galeria" className="bg-teal-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
          Galeria de Acessibilidade do Campus
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card className="bg-white shadow-lg" key={index}>
              <CardContent className="pt-12">
                <AspectRatio ratio={4 / 3}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </AspectRatio>
                <p className="text-slate-700 pt-12">
                  {image.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
