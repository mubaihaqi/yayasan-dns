import React from "react";

export default function Map() {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
      <iframe
        src="https://www.google.com/maps?q=-8.588889,114.118892&z=15&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Yayasan DNS"
      ></iframe>
    </div>
  );
}
