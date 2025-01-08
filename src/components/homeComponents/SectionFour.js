import React from "react";

const SectionFour = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO, Company",
      image:
        "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Doe",
      title: "CEO, Company",
      image:
        "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="w-full relative px-10 pb-10">
      <div className="w-full flex flex-col gap-3">
        <h3 className="text-xl lg:text-2xl text-primary text-center">
          Testimonials
        </h3>
        <div className="w-full gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div className="w-full rounded-xl rounded-br-none bg-slate-50 shadow flex gap-2 p-5">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col gap-2 justify-between">
                <p className="text-sm font-light text-justify">
                  {testimonial.text}
                </p>
                <p
                  className="text-xs text-primary text-right"
                  data-aos="fade-right"
                >
                  -{testimonial.name}, {testimonial.title}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
