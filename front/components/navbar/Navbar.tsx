"use client";

import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white px-8 py-4 flex items-center justify-between">

      {/* LOGO */}
      <div className="flex items-center gap-2">
        <Image
          src="/logo.png"   // ruta dentro de /public
          alt="Ecos CMS logo"
          width={140}            // ajustá el tamaño que quieras
          height={40}
          priority
        />
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-6 text-sm">
        <button>Escribe una reseña</button>
        <button>Categorías</button>
        <button>Notificaciones</button>

        <button className="px-4 py-2 bg-teal-500 text-white rounded-full">
          Iniciar sesión
        </button>
      </div>
    </nav>
  );
}