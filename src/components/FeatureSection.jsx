import React from 'react'
import{features} from "../constants"

const FeatureSection = () => {
  return (
    <div id='Features' className="relative pt-4 pb-4">
    <div className="text-center">
    <h2 className="text-2xl sm:text-3xl lg:text-5xl text-center text-black-500 tracking-wide font-bold my-10 lg:my-20 mt-10">
        
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> 
                 Features
            </span>
      </h2>
    </div>
    <div className="flex flex-wrap mt-10 lg:mt-20 ">{/*  */} 
      {features.map((feature, index) => (
        <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
          <div className="flex">
            <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
              {feature.icon}
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl  font-semibold">{feature.text}</h5>
              <p className="text-md p-2  text-neutral-500"> {/*mb-10 lg:mb-20 */} 
                {feature.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};
  
export default FeatureSection