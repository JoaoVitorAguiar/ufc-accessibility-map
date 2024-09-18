"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Menu } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+1",
    alt: "Placeholder Image 1",
  },
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+2",
    alt: "Placeholder Image 2",
  },
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+3",
    alt: "Placeholder Image 3",
  },
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+4",
    alt: "Placeholder Image 4",
  },
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+5",
    alt: "Placeholder Image 5",
  },
  {
    src: "https://via.placeholder.com/800x600.png?text=Image+6",
    alt: "Placeholder Image 6",
  },
];

const campusVideos = [
  {
    src: "https://www.youtube.com/embed/tgbNymZ7vqY",
    title: "Sample Video 1",
  },
  {
    src: "https://www.youtube.com/embed/tgbNymZ7vqY",
    title: "Sample Video 2",
  },
  {
    src: "https://www.youtube.com/embed/tgbNymZ7vqY",
    title: "Sample Video 3",
  },
  {
    src: "https://www.youtube.com/embed/tgbNymZ7vqY",
    title: "Sample Video 4",
  },
];

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="bg-teal-600 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              University Accessibility Map
            </div>
            <div className="hidden md:flex space-x-4">
              <Link href="#features" className="hover:underline">
                Features
              </Link>
              <Link href="#gallery" className="hover:underline">
                Gallery
              </Link>
              <Link href="#campus-videos" className="hover:underline">
                Campus Videos
              </Link>
              <Link href="#contact" className="hover:underline">
                Contact
              </Link>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
              <span className="sr-only">Toggle menu</span>
            </button>
          </nav>
          {isMenuOpen && (
            <div className="mt-4 md:hidden">
              <Link href="#features" className="block py-2 hover:underline">
                Features
              </Link>
              <Link href="#gallery" className="block py-2 hover:underline">
                Gallery
              </Link>
              <Link
                href="#campus-videos"
                className="block py-2 hover:underline"
              >
                Campus Videos
              </Link>
              <Link href="#contact" className="block py-2 hover:underline">
                Contact
              </Link>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
          <Image
            src="https://source.unsplash.com/random/1600x900?campus"
            alt="Aerial view of the accessible university campus"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-teal-900 bg-opacity-70 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Explore Our Accessible Campus
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Discover accessible routes, facilities, and resources to make
                your university experience inclusive and barrier-free.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-teal-600">
                    Interactive Map
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9} className="mb-4">
                    <Image
                      src="https://source.unsplash.com/random/800x600?map"
                      alt="Interactive map preview"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </AspectRatio>
                  <p className="text-slate-700">
                    Explore our campus with an interactive map highlighting
                    accessible routes, ramps, and facilities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-teal-600">
                    Orientation Videos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9} className="mb-4">
                    <Image
                      src="https://source.unsplash.com/random/800x600?video"
                      alt="Orientation video thumbnail"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </AspectRatio>
                  <p className="text-slate-700">
                    Watch helpful videos on navigating the campus and using
                    accessible transportation options.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-teal-600">
                    Resource Directory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AspectRatio ratio={16 / 9} className="mb-4">
                    <Image
                      src="https://source.unsplash.com/random/800x600?directory"
                      alt="Resource directory preview"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </AspectRatio>
                  <p className="text-slate-700">
                    Access a comprehensive list of campus accessibility features
                    and support services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-teal-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
              Campus Accessibility Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((image, index) => (
                <AspectRatio key={index} ratio={4 / 3}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md"
                  />
                </AspectRatio>
              ))}
            </div>
          </div>
        </section>

        <section id="campus-videos" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
              How to Get to Campus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {campusVideos.map((video, index) => (
                <div key={index} className="space-y-4">
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      src={video.src}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg shadow-md"
                    ></iframe>
                  </AspectRatio>
                  <h3 className="text-xl font-semibold text-teal-700">
                    {video.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-teal-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-teal-800">
              Contact Us
            </h2>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
              <form action="https://formspree.io/f/your-form-id" method="POST">
                <div className="mb-6">
                  <Label htmlFor="name" className="text-teal-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1"
                  />
                </div>
                <div className="mb-6">
                  <Label htmlFor="email" className="text-teal-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1"
                  />
                </div>
                <div className="mb-6">
                  <Label htmlFor="message" className="text-teal-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-teal-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 University Accessibility Map. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
