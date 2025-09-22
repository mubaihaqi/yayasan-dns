import React from "react";

export default function SimpleFooter() {
  return (
    <footer className="bg-background text-txt pt-12 pb-6 px-4 md:px-6 lg:px-24 bg-grid-texture">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-extrabold bg-gradient-to-r from-txt to-btn bg-clip-text text-transparent">
              Yayasan Darunnasihah Siliragung
            </h3>
            <p className="text-txt/70 text-base mt-2">
              Melahirkan lembaga pendidikan dan sosial yang bermutu dan berarti.
            </p>
          </div>

          {/* <div className="flex flex-col items-center md:items-end">
            <div className="text-txt/80 text-sm text-center">
              <p>
                RT 03 / RW 01, Dusun Krajan, Desa Buluagung, Kecamatan
                Siliragung, Kabupaten Banyuwangi, Jawa Timur 68488
              </p>
            </div>
          </div>*/}
        </div>
      </div>
    </footer>
  );
}
