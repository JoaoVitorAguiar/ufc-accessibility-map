import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CardTitle } from "@/components/ui/card";

const mapImages = [
  {
    src: "/images/mapa-vlt-topique.jpeg",
    title: "VLT - Topiques - UFC",
  },
  {
    src: "/images/mapa-rodoviaria-ufc.jpeg",
    title: "Rodoviária - UFC",
  },
  {
    src: "/images/mapa-ufc.png",
    title: "UFC",
  },
];

export function Mapas() {
  return (
    <section id="mapas" className="bg-teal-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
          Mapas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto bg-white p-8 rounded-lg shadow-lg">
          {mapImages.map((image, index) => (
            <div key={index} className="flex flex-col flex-nowrap gap-2">
              <CardTitle className="text-teal-600">{image.title}</CardTitle>
              <AspectRatio ratio={1}>
                <Image
                  src={image.src}
                  alt={image.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
