import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      name: "1. Lomba Agustusan",
      description:
        "Berbagai lomba seru untuk memeriahkan Hari Kemerdekaan 17 Agustus di RW 05, ada lomba anak-anak,bapak-bapak,ibu-ibu,dan lomba per-RT",
      image: "/lomba.jpg",
    },
    {
      name: "2. Barikan",
      description:
        "Tradisi tasyakuran dan doa bersama warga RW 05 untuk menjaga kerukunan. dan ada lomba Tumpeng per-RT",
      image: "/barikan.jpg",
    },
    {
      name: "3. Upacara Kemerdekaan",
      description:
        "Pengibaran bendera merah putih dalam rangka memperingati HUT RI untuk warga RW 05.",
      image: "/upacara.jpg",
    },
    {
      name: "4. Gerak Jalan",
      description:
        "Kegiatan jalan sehat bersama warga untuk mempererat kebersamaan.",
      image: "/gerak-jalan.jpg",
    },
    {
      name: "5. Pentas Seni (Pensi)",
      description:
        "Ajang kreativitas pemuda menampilkan bakat seni musik, tari, dan ada penampilan dari adik-adik,bapak-bapak,ibu-ibu,anggota karang taruna.",
      image: "/pensi.jpg",
    },
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-center">
        Acara & Kegiatan Karang Taruna
      </h2>
      <div className="flex justify-center mb-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="p-4 border rounded-lg shadow bg-white text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-700">
              {project.name}
            </h3>
            <Image
              alt={project.name}
              src={project.image}
              width={400}
              height={240}
              className="rounded-lg mb-4 mx-auto"
            />
            <p className="text-gray-700 text-justify">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
