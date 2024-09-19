import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const videos = [
  {
    src: "/videos/video_01.mp4",
    title: "Video 1",
    description: "Descrição importante e criativa para o vídeo 1.",
  },
  {
    src: "/videos/video_02.mp4",
    title: "Video 2",
    description: "Descrição importante e criativa para o vídeo 2.",
  },
  {
    src: "/videos/video_03.mp4",
    title: "Video 3",
    description: "Descrição importante e criativa para o vídeo 3.",
  },
];

export function Videos() {
  return (
    <section id="videos" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
          Vídeos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {videos.map((video, index) => (
          <Card className="bg-white shadow-lg" key={index}>
            <CardHeader>
              <CardTitle className="text-teal-600">
                {video.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16 / 9} className="mb-4">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg shadow-md"
                ></iframe>
              </AspectRatio>
              <p className="text-slate-700">
                {video.description}
              </p>
            </CardContent>
          </Card>
        ))}
        </div>
      </div>
    </section>
  );
}
