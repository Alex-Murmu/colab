import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      As aspiring Computer Science Engineering scholars from Dumka Engineering College
                      </h2>
                      <p className="mt-6 text-gray-600">
                      we are engaged in a pioneering project aimed at developing a cutting-edge system 
                      capable of generating and rendering visual objects through user voice commands.
                       Our innovative endeavor seeks to revolutionize the realm of digital creation by 
                       seamlessly integrating speech recognition technology with artistic expression
                      </p>
                      <p className="mt-4 text-gray-600">
                      We extend a cordial invitation to individuals and organizations to collaborate with
                       us on this transformative initiative, fostering a collaborative environment conducive
                        to the advancement of technology and the arts. Together, let us embark on a journey 
                        of innovation and creativity, shaping the future of interactive digital experiences.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}