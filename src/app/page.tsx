import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center">

      <h1 className="text-4xl font-bold text-center">
        Karang Taruna RW 05 "PANCASONA"
      </h1>

      <div className="flex justify-center mb-4">
        <Image
          src="/logo.jpg"
          alt="Logo PANCASONA"
          width={250}
          height={250}
          className="rounded-lg"
          />
      </div>

      <br />

      <p className="text-gray-700 mb-6 leading-relaxed">
        Karang Taruna RW 05 <strong>PANCASONA</strong> adalah organisasi kepemudaan
        yang dibentuk masyarakat sebagai wadah generasi muda untuk
        mengembangkan diri, tumbuh, dan berkembang atas dasar kesadaran serta
        tanggung jawab sosial, yang berorientasi pada kesejahteraan sosial bagi
        masyarakat.
        <br />
        <br />
        "PANCASONA" di tengah hiruk, para pemuda RW 05 Lowokwaru bangkit dengan
        kompak dan semangat membara serta tak akan pernah padam. Bukan hanya
        pewaris, kami adalah pejuang harapan, dengan hati yang tulus, menjalin
        persatuan dan impian.
      </p>
      <br />

      <div className="flex justify-center mt-6">
        <Image
          src="/fotbar.jpg"
          alt="fotbar"
          width={300}
          height={200}
          className="rounded-lg"
        />
      </div>


    </section>
  );
}
