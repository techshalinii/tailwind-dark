import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { faqs } from "../constants"; 

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='Faqs' className="flex flex-col justify-center items-center mb-20 lg:mb-20 pt-4 pb-4 mt-0 sm:mt-4">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center  sm:mt-10  font-bold my-10 lg:my-20">
        
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> 
        FAQs
            </span>
      </h2>
      <div className="grid grid-cols-1  w-full sm:w-3/4 lg:w-1/2 mx-auto gap-2 px-4 sm:gap-4">
        {faqs.map((item, index) => (
          <div key={index} className="group rounded border border-neutral-700 bg-neutral-900 p-2 shadow-md">
            <dt onClick={() => toggleFaq(index)} className="flex justify-between items-center">
              <p className="text-sm text-neutral-200">{item.question}</p>
              <button onClick={() => toggleFaq(index)}>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-orange-700" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-orange-700" />
                )}
              </button>
            </dt>
            {openIndex === index && (
              <dd className="mt-2 text-neutral-400 text-sm">
                <p>{item.answer}</p>
              </dd>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
