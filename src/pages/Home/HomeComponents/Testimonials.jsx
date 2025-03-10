import React from "react";
import testimonial from "../../../assets/svg/testimonial.svg";
import commaLeft from "../../../assets/svg/commaLeft.svg";
import commaRight from "../../../assets/svg/commaRight.svg";
import Swiper from "../../../components/Swiper";

const Testimonials = () => {
  return (
    <main className="w-full py-[30px]">
      <div className="mx-auto max-w-[1600px] relative py-[50px] min-h-[650px]">
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <p className="text-2xl font-medium text-primary">Cleints Feedback</p>
          <div>
            <p className="text-center font-bold text-3xl">
              These People trusted us, be next....
            </p>
          </div>
        </div>
        <div className="w-full h-[450px] flex flex-row justify-start items-center relative">
          <img
            src={commaLeft}
            alt=""
            className="absolute top-0 left-[calc(0%+50px)]"
          />
          <div className="w-5/12">
            <Swiper />
          </div>
        </div>
        <div className="absolute top-0 right-0">
          <img src={testimonial} alt="" />
        </div>
        <img
          src={commaRight}
          alt=""
          className="absolute bottom-0 right-[calc(0%+80px)]"
        />
      </div>
    </main>
  );
};

export default Testimonials;
