import React from 'react'

const AboutUs = () => {
  return (
    <div id='AboutUs' className='p-4'>
      <div className="flex flex-col items-center mt-6  gap-5 ">
        <p className="text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide font-bold">
        About
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> 
                {" "}  Namezar
            </span>
        </p>
        <p className="mt-10 text-lg text-center text-neutral-500 w-full ml-0 mr-0">
        At Namezar, we specialize in connecting businesses with premium domain names that resonate with their brand identity. Our team of experienced brokers is dedicated to providing personalized service to help you acquire the ideal domain effortlessly.
      </p>
    </div>
    </div>
  )
}

export default AboutUs
