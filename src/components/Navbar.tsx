"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-white text-blue-700 px-2 py-1 rounded flex items-center ml-4"
        >
          ☰
        </button>

      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-2">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" onClick={() => setIsOpen(false)}>Kegiatan</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
