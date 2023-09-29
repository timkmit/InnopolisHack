import React, { useState } from 'react';
import { CellButton } from '@vkontakte/vkui';
import { Icon12ArrowDown } from '@vkontakte/icons';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <CellButton className="accordion-button" onClick={toggleAccordion} before={<Icon12ArrowDown />} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {title}
      </CellButton>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Accordion;
