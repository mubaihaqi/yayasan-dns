import React from "react";

const programs = [
  {
    title: "Tahfidz Al-Qur'an",
    description:
      "Program unggulan untuk membantu anak-anak menghafal Al-Qur'an sejak dini dengan metode yang menyenangkan.",
    icon: "📖",
  },
  {
    title: "Karakter Islami",
    description:
      "Pembentukan karakter dan akhlak mulia berdasarkan Al-Qur'an dan Sunnah melalui kegiatan sehari-hari.",
    icon: "🕌",
  },
  {
    title: "Kreativitas & Seni",
    description:
      "Mengembangkan imajinasi dan kreativitas anak melalui berbagai kegiatan seni dan hasta karya.",
    icon: "🎨",
  },
  {
    title: "Calistung",
    description:
      "Belajar membaca, menulis, dan berhitung dengan metode yang mudah dan menyenangkan untuk persiapan masuk sekolah dasar.",
    icon: "🧮",
  },
];

export default function ProgramsRA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Program Unggulan</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Kami menawarkan berbagai program yang dirancang untuk mengembangkan
            potensi anak secara optimal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-gray-700">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
