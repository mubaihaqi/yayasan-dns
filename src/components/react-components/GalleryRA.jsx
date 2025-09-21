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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Galeri</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Momen-momen berharga di Raudhotul Athfal Darun Nasihah.
          </p>
        </div>
        <Carousel images={images} />
      </div>
    </section>
  );
}