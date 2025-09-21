import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div key={index} className="mb-4">
        <div
          className={`flex justify-between items-center p-4 bg-gray-100 cursor-pointer ${active ? 'rounded-t-lg' : 'rounded-lg'}`}
          onClick={() => onTitleClick(index)}
        >
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <span>{active ? '-' : '+'}</span>
        </div>
        <div
          className={`p-4 bg-white border border-gray-200 text-gray-800 ${active ? 'block rounded-b-lg' : 'hidden'}`}
          dangerouslySetInnerHTML={{ __html: item.content }}
        ></div>
      </div>
    );
  });

  return <div className="accordion">{renderedItems}</div>;
};

export default Accordion;
