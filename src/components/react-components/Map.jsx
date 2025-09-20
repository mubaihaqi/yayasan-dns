import React from "react";

export default function Map() {
  return (
    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.365285771743!2d114.3645133147823!3d-8.21669999399034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15bced109fdf5%3A0x5d7d6e6e6e6e6e6e!2sJl.%20KH.%20Hasyim%20Asyari%20No.99a%2C%20Genteng%2C%20Banyuwangi%2C%20Jawa%20Timur%2068432!5e0!3m2!1sen!2sid!4v1650000000000!5m2!1sen!2sid"
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
