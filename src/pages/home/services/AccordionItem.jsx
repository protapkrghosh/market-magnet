import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const AccordionItem = ({ id, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-black">
      <h2 className="mb-0">
        <button
          className="group relative flex w-full items-center rounded-t-[15px] border-0 px-5 py-4 text-left text-base transition hover:z-[2] focus:z-[3] focus:outline-none"
          type="button"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={id}
        >
          {title}
          <span className="ml-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out">
            {isOpen ? <FaMinus /> : <FaPlus />}
          </span>
        </button>
      </h2>
      <div
        id={id}
        className={`transition-max-h duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
        aria-labelledby={id}
      >
        <div className="px-5 py-4">
          <strong>{content}</strong>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;