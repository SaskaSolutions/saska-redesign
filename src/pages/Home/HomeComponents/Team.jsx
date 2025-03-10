import React from "react";
import ImgCard from "./ImgCard";
import user1 from "../../../assets/images/user1.png";
import user2 from "../../../assets/images/user2.png";
import user3 from "../../../assets/images/user3.png";
import user4 from "../../../assets/images/user4.png";
import user5 from "../../../assets/images/user5.png";

const Team = () => {
  return (
    <main className="w-full relative bg-[#e2e0e6] pt-[70px]">
      <div className="flex flex-col gap-[55px] max-w-[1600px] mx-auto py-[30px]">
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <p className="text-2xl font-medium text-primary">
            Our team members
          </p>
          <div>
            <p className="text-3xl font-light">Our certified experts will</p>
            <p className="text-center font-bold text-3xl">
              provide best solutions
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-[55px] mx-auto z-50">
          <ImgCard designation={'Front-End Developer'} image={user1} name={'Abdul Hannan'} />
          <ImgCard designation={'Back-End Developer'} image={user2} name={'Abdul Mannan'} />
          <ImgCard designation={'UI / UX Designer'} image={user3} name={'Abdul Rafay'} />
          <ImgCard designation={'Social Media Manager'} image={user4} name={'Munazzah Ali'} />
          <ImgCard designation={'Wordpress Developer'} image={user5} name={'Hermain Ali'} />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-10 h-[120px] w-full bg-white"></div>
    </main>
  );
};

export default Team;
