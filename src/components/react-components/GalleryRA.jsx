import React from "react";
import Carousel from "./Carousel.jsx";

const images = [
  "https://picsum.photos/800/600?random=2",
  "https://picsum.photos/800/600?random=3",
  "https://picsum.photos/800/600?random=4",
  "https://picsum.photos/800/600?random=5",
];

export default function GalleryRA() {
  return (
    <section className="py-20 bg-ra">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-txtra">Galeri</h2>
          <p className="text-lg text-txtra leading-relaxed">
            Momen-momen berharga di Raudhotul Athfal Luk Luk Abdul Ghoniy.
          </p>
        </div>
        <Carousel images={images} />
      </div>
    </section>
  );
}