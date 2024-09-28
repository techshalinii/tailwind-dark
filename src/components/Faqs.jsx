import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { faqs } from "../constants"; 

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='Faqs' className="flex flex-col justify-center mb-10 items-center min-h-[400px] mt-10">
      <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center mt-0 my-10 lg:my-10 font-bold">
        
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> 
        FAQs
            </span>
      </h2>
      <div className="grid grid-cols-1 gap-2 w-full sm:w-3/4 lg:w-1/2 sm:gap-4 mx-auto">
        {faqs.map((item, index) => (
          <div key={index} className="group rounded border border-neutral-700 bg-neutral-900 p-2 shadow-md">
            <dt className="flex justify-between items-center">
              <p className="font-semibold text-sm ">{item.question}</p>
              <button onClick={() => toggleFaq(index)}>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-orange-700" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-orange-700" />
                )}
              </button>
            </dt>
            {openIndex === index && (
              <dd className="mt-2 text-neutral-500">
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
