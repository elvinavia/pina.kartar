export default function ContactPage() {
  return (
    <section className="space-y-6 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-blue-700 border-b-2 border-blue-300 pb-2">
        Kontak Kami
      </h2>

      <p className="text-gray-700 leading-relaxed">
        Hubungi Karang Taruna RW 05 <strong>"PANCASONA"</strong> melalui media sosial
        atau datang langsung ke alamat kami.
      </p>

      <div className="space-y-4">
        <p className="flex items-center gap-2">
          📍 <span>Jl. Letjen Sutoyo IV, RW 05, Kel. Lowokwaru, Kec. Lowokwaru, Kota Malang</span>
        </p>
        <p className="flex items-center gap-2">
          📷 Instagram:{" "}
          <a
            href="https://www.instagram.com/karang.taruna.rw05?igsh=MXAwdjdkNjk4aTEwYg=="
            target="_blank"
            className="text-blue-600 hover:underline font-medium"
          >
            @karang.taruna.rw05
          </a>
        </p>
        <p className="flex items-center gap-2">
          🎵 TikTok:{" "}
          <a
            href="https://www.tiktok.com/@lowokwaru05?_t=ZS-8zByo88Vep5&_r=1"
            target="_blank"
            className="text-pink-600 hover:underline font-medium"
          >
            @lowokwaru05
          </a>
        </p>
      </div>
    </section>
  );
}
