import { useState } from "react";

function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `accordion-panel-${index}`;
        const buttonId = `accordion-button-${index}`;

        return (
          <div
            key={item.title}
            className={index !== items.length - 1 ? "border-b border-white/10" : ""}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-white">{item.title}</span>

                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
            </h3>

            {isOpen ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 text-sm leading-6 text-slate-300"
              >
                {item.description}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;