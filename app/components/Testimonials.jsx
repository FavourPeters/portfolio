"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Onward Woruka",
    role: "Frontend Developer",
    image: "/Onward.jpeg",
    quote:
      "I’m happy to recommend my friend, Favour Ledum Peters. He’s a talented Fullstack Developer who’s really good with the MERN stack (MongoDB, Express, React, Node.js). Favour knows how to build websites and apps from start to finish. He’s smart, hardworking, and always ready to learn something new. Any team would be lucky to have him!",
  },
  {
    name: "Akomas Ifeanyi",
    role: "Full-Stack Software Engineer",
    image: "/akomas.jpg",
    quote:
      "Mr Favour is a result driven software developer passionate about building real time technology solutions I highly recommend him",
  },
];

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center font-bold text-3xl mb-12">
          What People Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-basic",
          }}
          loop={true}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-8 transition-all duration-300 transform hover:scale-105">
                <div className="w-24 h-24 mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-main to-basic rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-1 bg-gray-900 rounded-full"></div>
                  <div className="absolute inset-2 overflow-hidden rounded-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <p className=" font-bold text-xl">{testimonial.name}</p>
                <p className=" mb-6">{testimonial.role}</p>

                <p className="max-w-2xl text-center italic text-lg">
                  "{testimonial.quote}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Testimonials;
