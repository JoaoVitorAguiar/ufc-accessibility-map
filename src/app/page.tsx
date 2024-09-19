"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Galeria, Videos, Mapas } from "@/sections";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="bg-teal-600 text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center">
            <div className="text-2xl font-bold">
              Mapa de Acessibilidade da UFC Sobral
            </div>
            <div className="hidden md:flex space-x-4">
              <Link href="#mapas" className="hover:underline">
                Mapas
              </Link>
              <Link href="#videos" className="hover:underline">
                Vídeos
              </Link>
              <Link href="#galeria" className="hover:underline">
                Galeria
              </Link>
            </div>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
              <span className="sr-only">Alternar menu</span>
            </button>
          </nav>
          {isMenuOpen && (
            <div className="mt-4 md:hidden">
              <Link href="#mapas" className="block py-2 hover:underline">
                Mapas
              </Link>
              <Link href="#videos" className="block py-2 hover:underline">
                Vídeos
              </Link>
              <Link href="#galeria" className="block py-2 hover:underline">
                Galeria
              </Link>
            </div>
          )}
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
          <Image
            src="/images/mucambinho-vista-aerea.jpg"
            alt="Aerial view of the accessible university campus"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-teal-900 bg-opacity-70 flex items-center justify-center">
            <div className="text-center text-white p-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Explore nosso campus acessível
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Descubra rotas, instalações e recursos acessíveis para tornar
                sua experiência universitária inclusiva e sem barreiras.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Link href="#mapas">Ver Mais</Link>
              </Button>
            </div>
          </div>
        </section>

        <Mapas />

        <Videos />

        <Galeria />
      </main>

      <footer className="bg-teal-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Mapa de Acessibilidade da UFC Sobral. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
