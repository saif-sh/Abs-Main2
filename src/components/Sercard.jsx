import React, { useState } from "react";
import { serviceapi } from "../constants";

const Sercard = () => {
  const [serviceData, setServiceData] = useState(serviceapi);

  return (
    <>
      <section className="py-10 bg-slate-200">
        <div className="container mx-auto">
          <h1 className="text-[42px] font-black font-poppins text-center mb-8 text-[#081142]/95 leading-10 tracking-wide">
            SERVICES
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceData.map((curElem) => {
              const { id, logo, title, info } = curElem;
              return (
                <div
                  className="bg-white shadow-md rounded-md p-20 px-10 font-poppins group hover:bg-[#0b1759] hover:scale-[1.1] duration-[400ms]"
                  key={id}
                >
                  <i className={`${logo} w-10 h-10 text-4xl mb-4 group-hover:text-white`}></i>
                  <h2 className="text-xl font-bold mb-8  group-hover:text-white" >{title}</h2>
                  <p className="text-gray-600 font-normal group-hover:text-dimWhite ease-in-out ">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sercard;