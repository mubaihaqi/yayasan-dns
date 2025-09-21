import React from "react";

export default function ContactRA() {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-purple-800">Hubungi Kami</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Kami siap menjawab pertanyaan Anda dan memberikan informasi lebih
            lanjut tentang pendaftaran.
          </p>
          <button className="btn bg-green-500 hover:bg-green-600 border-0 rounded-full px-8 py-3 text-base font-semibold transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-lg text-white">
            Kontak via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}