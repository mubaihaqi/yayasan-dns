import React from 'react';

const BidangKegiatan = () => {
  // Data divisi - bisa diubah sesuai kebutuhan
  const divisiList = [
    { id: 1, name: "Pendidikan dan Pengajaran", description: "Mengelola program pendidikan formal dan non-formal" },
    { id: 2, name: "Kegiatan Sosial dan Kemanusiaan", description: "Menjalankan program bantuan sosial dan kemanusiaan" },
    { id: 3, name: "Pengembangan Infrastruktur", description: "Mengembangkan dan merawat fasilitas pendidikan" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-bghd to-bgtrng relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-texture opacity-5"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-txtonnavy mb-6">Bidang Kegiatan</h2>
          <div className="w-32 h-1 bg-border mx-auto rounded-full mb-4"></div>
          <p className="text-cartu/90 max-w-2xl mx-auto text-lg">
            Kami berkomitmen dalam berbagai bidang untuk mewujudkan visi yayasan
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisiList.map((divisi) => (
            <div 
              key={divisi.id} 
              className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-border/30 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="p-8 flex flex-col flex-grow">
                <div className="w-16 h-16 rounded-xl bg-btn/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-btn/20">
                  <span className="text-btn font-bold text-2xl">{divisi.id}</span>
                </div>
                <h3 className="text-2xl font-bold text-txtonnavy mb-4">{divisi.name}</h3>
                <p className="text-cartu/80 mb-6 leading-relaxed flex-grow">{divisi.description}</p>
                <button className="text-btn font-semibold hover:text-hvrbtn transition-all duration-300 flex items-center group-hover:underline mt-auto w-fit">
                  Selengkapnya
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BidangKegiatan;
