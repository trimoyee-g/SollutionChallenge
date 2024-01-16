"use client";

import { Carousel } from "flowbite-react";

const DashboardPage = () => {
  return (
    <div>
      <div className="mb-8 space-y-2">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of Kisan Ka Link
        </h2>
        <div className="border p-1 md:p-5 lg:p-4  ">
          <p className=" font-light text-sm md:text-lg text-start">
            <strong>Kisan Ka Link</strong> provides cutting-edge cloud based
            logistical solution for farmers and their products keeping the MSMEs
            of the rural industry in the path of advancement with integration of
            deployed cloud services.
          </p>
        </div>
      </div>

      <div className="h-80 sm:h-96 xl:h-120 2xl:h-144">
        <Carousel>
          <div className="bg-transparent">
            <img
              src="about.jpg"
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>

          <div className="bg-transparent">
            <img
              src="abou4.jpg"
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-transparent">
            <img
              src="about5.jpg"
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default DashboardPage;
