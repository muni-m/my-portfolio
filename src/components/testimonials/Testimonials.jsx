import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/bala/",
      name: "BALA",
      role: "Full Stack Developer",
      test: "Working with Muni was an amazing experience. His problem-solving skills and dedication to clean, efficient code truly stand out.",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/srimanarayana/",
      name: "SRIMANARAYANA",
      role: "Frontend Engineer",
      test: "Muni always pushes the team forward with his enthusiasm and deep understanding of React. A true professional with a positive attitude.",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/hari/",
      name: "HARI",
      role: "React Developer",
      test: "Muni brings clarity and structure to every project. He's a skilled developer who always goes the extra mile to deliver on time.",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/prathap/",
      name: "PRATHAP",
      role: "Software Engineer",
      test: "It’s a privilege working with Muni. He has great technical depth, strong teamwork, and an eye for design and usability.",
    },
  ];

  return (
    <section id="testimonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link} target="_blank" rel="noreferrer">
                <BsLinkedin />
              </a>
            </div>
            <h5 className="client__name">{test.name}</h5>
            <h6 className="client__role">{test.role}</h6>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
