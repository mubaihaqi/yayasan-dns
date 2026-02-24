import React from "react";

const BidangKegiatan = () => {
  // Data divisi - bisa diubah sesuai kebutuhan
  const divisiList = [
    {
      id: 1,
      name: "Pendidikan dan Pengajaran",
      description: "Mengelola program pendidikan formal dan non-formal",
    },
    {
      id: 2,
      name: "Kegiatan Sosial dan Kemanusiaan",
      description: "Menjalankan program bantuan sosial dan kemanusiaan",
    },
    {
      id: 3,
      name: "Pengembangan Infrastruktur",
      description: "Mengembangkan dan merawat fasilitas pendidikan",
    },
  ];

  return (
    <section className="pt-20 pb-10 bg-background relative overflow-hidden group/section">
      {/* Ornamen dekoratif - desktop only */}
      <div className="hidden md:block absolute top-10 left-10 w-32 h-32 border-2 border-btn/20 rounded-full transition-all duration-700 group-hover/section:scale-110 group-hover/section:border-btn/40"></div>
      <div className="hidden md:block absolute top-20 left-20 w-20 h-20 border-2 border-primary/10 rounded-full transition-all duration-700 group-hover/section:scale-125 group-hover/section:border-primary/20"></div>
      <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 border-2 border-btn/20 rounded-full transition-all duration-700 group-hover/section:scale-110 group-hover/section:border-btn/40"></div>
      <div className="hidden md:block absolute bottom-20 right-20 w-24 h-24 border-2 border-primary/10 rounded-full transition-all duration-700 group-hover/section:scale-125 group-hover/section:border-primary/20"></div>
      <div className="hidden md:block absolute top-1/2 left-0 w-16 h-16 bg-btn/5 rounded-full -translate-x-1/2 transition-all duration-700 group-hover/section:bg-btn/10 group-hover/section:scale-110"></div>
      <div className="hidden md:block absolute top-1/3 right-0 w-20 h-20 bg-primary/5 rounded-full translate-x-1/2 transition-all duration-700 group-hover/section:bg-primary/10 group-hover/section:scale-110"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Bidang Kegiatan
          </h2>
          <div className="w-24 h-1 bg-btn mx-auto rounded-full mb-4"></div>
          <p className="text-primary max-w-2xl mx-auto text-lg">
            Kami berkomitmen dalam berbagai bidang untuk mewujudkan visi yayasan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisiList.map((divisi) => (
            <div
              key={divisi.id}
              className="group bg-card rounded-3xl border-2 border-primary overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative"
            >
              {/* Paper texture */}
              <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '200px 200px'
              }}></div>
              
              <div className="p-8 flex flex-col flex-grow relative z-10">
                <div className="w-16 h-16 rounded-full bg-btn flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">
                  <span className="text-white font-bold text-2xl">
                    {divisi.id}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {divisi.name}
                </h3>
                <p className="text-primary leading-relaxed flex-grow">
                  {divisi.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BidangKegiatan;
