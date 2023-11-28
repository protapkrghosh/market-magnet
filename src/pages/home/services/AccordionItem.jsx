import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AccordionItem = ({ id, title, content, activeItem, setActiveItem }) => {
  const isOpen = activeItem === id;

  const toggleAccordion = () => {
    setActiveItem(isOpen ? null : id);
  };

  return (
    <div className="text-black">
      <h2 className="mb-0">
        <button
          className="group relative flex w-full items-center rounded-t-[15px] border-0 py-4 text-left text-base transition hover:z-[2] focus:z-[3] focus:outline-none"
          type="button"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={id}
        >
          <span className="mr-7 h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out cursor-pointer text-[#F70942]">
            {isOpen ? <FaMinus /> : <FaPlus />}
          </span>
          <p className='lg:font-bold'>{title}</p>
        </button>
      </h2>
      <div
        id={id}
        className={`transition-max-h duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
        aria-labelledby={id}
      >
        <div className="px-5 py-4">
          <strong className='text-gray-500 font-thin'>{content}</strong>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
