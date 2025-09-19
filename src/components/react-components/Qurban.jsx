import React from 'react';

export default function Qurban() {
  return (
    <div className="hero bg-bghd min-h-screen">
      <div className="hero-content px-5 flex-col lg:gap-32 lg:pt-30 lg:flex-row-reverse">
        <img
          src="https://picsum.photos/720"
          className="lg:max-w-md aspect-[3/4] lg:aspect-[2/3] rounded-t-full shadow-2xl shadow-border object-fill mt-8 mb-6 lg:my-0"
        />
        <div className="w-full px-6 lg:px-0 lg:w-3/5 flex flex-col items-center lg:items-start">
          <h1 className="text-2xl text-txtonnavy font-semibold lg:text-5xl lg:font-bold lg:leading-14 text-center lg:text-start">
            TEBAR KURBAN BERSAMA YAYASAN DARUN NASIHAH
          </h1>
          <p className="pt-2 pb-4 block lg:hidden text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            autem fuga voluptatibus alias officiis natus minus labore ipsam quisquam
            consectetur!...
          </p>
          <p className="py-2 lg:py-6 lg:block hidden text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            voluptatem quos rem, nulla officia eius quidem nesciunt quis iusto quae
            optio consectetur beatae. Debitis tempora ab dicta ipsam magnam cum
            facilis. Voluptates sed officiis doloribus ullam amet dicta illo
            reiciendis, sequi beatae quae ducimus sint, dolorum repellat rerum dolor
            consectetur, itaque ad numquam eum. Numquam dolore vel ad nesciunt
            necessitatibus voluptate fugit harum commodi suscipit consectetur
            corporis sint debitis quia perferendis nam corrupti adipisci, repellat
            excepturi provident! Cum, suscipit praesentium.
          </p>
          <button className="btn bg-btn hover:bg-hvrbtn border-border rounded-full px-6 flex justify-between items-center gap-6 !py-6">
            Info Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
}