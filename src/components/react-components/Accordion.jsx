import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex;

    return (
      <div key={index} className="mb-3 rounded-xl overflow-hidden shadow-sm border border-primary/10 transition-all duration-300 hover:shadow-md">
        <div
          className={`flex justify-between items-center p-5 cursor-pointer bg-background transition-colors duration-300 ${
            active ? 'bg-card border-b border-primary/20' : 'bg-background'
          }`}
          onClick={() => onTitleClick(index)}
        >
          <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
          <span className={`text-xl font-bold text-btn transition-transform duration-300 ${active ? 'rotate-45' : ''}`}>+</span>
        </div>
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            active ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div 
            className="p-5 bg-white/50 text-primary leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.content }}
          ></div>
        </div>
      </div>
    );
  });

  return <div className="accordion">{renderedItems}</div>;
};

export default Accordion;
