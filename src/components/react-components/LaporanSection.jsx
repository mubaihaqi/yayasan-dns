import React, { useState } from 'react';

const LaporanSection = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  
  // Data contoh untuk laporan per tahun
  const laporanData = {
    '2024': [
      {
        id: 1,
        name: 'Laporan Keuangan Tahun 2024',
        files: [
          { id: 1, name: 'Laporan Keuangan Q1 2024.pdf', size: '2.4 MB' },
          { id: 2, name: 'Laporan Keuangan Q2 2024.pdf', size: '2.1 MB' },
          { id: 3, name: 'Laporan Keuangan Q3 2024.pdf', size: '2.7 MB' },
          { id: 4, name: 'Laporan Keuangan Q4 2024.pdf', size: '2.3 MB' }
        ]
      },
      {
        id: 2,
        name: 'Laporan Aktivitas 2024',
        files: [
          { id: 5, name: 'Laporan Kegiatan Pendidikan 2024.pdf', size: '3.2 MB' },
          { id: 6, name: 'Laporan Program Sosial 2024.pdf', size: '1.8 MB' }
        ]
      }
    ],
    '2025': [
      {
        id: 3,
        name: 'Laporan Keuangan Tahun 2025',
        files: [
          { id: 7, name: 'Laporan Keuangan Q1 2025.pdf', size: '2.5 MB' }
        ]
      }
    ]
  };

  const years = ['2024', '2025'];

  return (
    <section
      className="flex items-center justify-center min-h-screen"
      style={{
        minHeight: "calc(100vh - 118px)", // Mengurangi tinggi navbar dan footer
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-txtonnavy mb-4">Laporan Tahunan</h1>
          <p className="text-cartu/80 max-w-2xl mx-auto">
            Dokumen laporan resmi Yayasan DNS yang dapat diunduh untuk informasi lebih lanjut
          </p>
        </div>

        {/* Pilihan Tahun */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white/80 backdrop-blur-sm rounded-xl border border-border/30 shadow-md">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedYear === year
                    ? 'bg-btn text-white shadow-md'
                    : 'text-cartu hover:bg-cartu/10'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Folder dan File */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {laporanData[selectedYear]?.map((folder) => (
            <div 
              key={folder.id} 
              className="bg-white rounded-2xl shadow-lg border border-border/20 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-5 border-b border-border/20 bg-cartu/5">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-btn mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-txtonnavy">{folder.name}</h3>
                </div>
              </div>
              
              <div className="p-5">
                <ul className="space-y-3">
                  {folder.files.map((file) => (
                    <li key={file.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-cartu/5 transition-colors duration-200">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-cartu text-sm font-medium truncate max-w-xs">{file.name}</span>
                      </div>
                      <span className="text-xs text-cartu/60 bg-cartu/10 px-2 py-1 rounded whitespace-nowrap">
                        {file.size}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-5">
                  <button className="w-full py-2 bg-btn text-white font-medium rounded-lg hover:bg-hvrbtn transition-colors duration-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Unduh Semua
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {(!laporanData[selectedYear] || laporanData[selectedYear].length === 0) && (
          <div className="text-center py-12">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-cartu/30 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="text-xl font-medium text-cartu/70 mb-2">Tidak ada laporan tersedia</h3>
            <p className="text-cartu/60">Laporan untuk tahun {selectedYear} belum tersedia.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LaporanSection;