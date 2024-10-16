// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import { BiRightArrow } from "react-icons/bi";
import Events from "./eventData";

const Event = () => {
  return (
    <section className="py-16 mx-auto sm:py-20">
      <div className="mx-auto flex justify-center object-center px-4 py-16 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-4xl font-semibold tracking-tight text-cyan-400 sm:text-3xl lg:text-4xl">
            Latest Events
          </h2>
          <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-3">
            {Events.map((eve) => (
              <div
                key={eve.title}
                className="group h-96 w-72 [perspective:1000px]"
              >
                <div className="relative h-full w-full rounded-sm shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Face */}
                  <div className="absolute inset-0 h-[100%] w-[100%] rounded-sm [backface-visibility:hidden]">
                    {eve.image && (
                      <img
                        className="object-cover cursor-pointer object-left h-full w-full rounded-sm"
                        src={eve.image}
                        alt={eve.title}
                        width={320}
                        height={320}
                      />
                    )}
                    {/* <p className="md:my-6 text-2xl">{eve.title}</p> */}
                  </div>
                  {/* Back Face */}
                  <div className="absolute inset-0 h-full w-full rounded-sm bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <h2 className="text-2xl font-bold mb-4">
                        {eve.title.toUpperCase()}
                      </h2>
                      <p className="text-lg text-pretty text-center mb-4">
                        {eve.description}
                      </p>
                      <a href="tel:555-555-5555" className="inline-flex">
                        <button className="my-2 bg-cyan-400 hover:bg-cyan-300 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center">
                          <span>Schedule Events</span>
                          <BiRightArrow className="h-6 w-6 ml-2" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
