// components/Accordion.tsx
import { useState, FC } from 'react';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full p-4 text-left text-white font-medium focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className='uppercase'>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-600">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
