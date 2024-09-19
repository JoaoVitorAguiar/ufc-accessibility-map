import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const videos = [
  {
    src: "https://www.youtube.com/embed/ZuvHfHrnSPs?rel=0&modestbranding=1",
    title: "VLT - Topiques - UFC",
    description:
      "Rota saindo do VLT, passando pelo ponto das Topics e chegando à UFC",
  },
  {
    src: "https://www.youtube.com/embed/fNlKJ6pdviY?rel=0&modestbranding=1",
    title: "Rodoviária - UFC",
    description: "Rota saindo do Rodovioária e chegando à UFC",
  },
];

export function Videos() {
  return (
    <section id="videos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
          Vídeos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <Card className="bg-white shadow-lg" key={index}>
              <CardHeader>
                <CardTitle className="text-teal-600">{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={9 / 16} className="mb-4">
                  <iframe
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg shadow-md"
                  ></iframe>
                </AspectRatio>
                <p className="text-slate-700">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
