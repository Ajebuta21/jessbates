import React from "react";
import { FaBrain, FaRegLightbulb, FaRocket } from "react-icons/fa";
import Photo from "../../images/her.png";

const SectionThree = () => {
  const cardClass =
    "bg-white lg:p-6 rounded-lg flex flex-col gap-4 items-center mt-5";

  const courses = [
    {
      name: "Confidence Masterclass",
      description: "Learn the fundamentals of mindset transformation.",
    },
    {
      name: "Business Foundations Bootcamp",
      description: "Build the tools you need for sustainable growth.",
    },
  ];

  return (
    <div className="w-full relative p-10 rounded-t-3xl">
      <div className="w-full flex flex-col gap-10">
        {/* Title Section */}
        <div className="w-full flex flex-col gap-3 text-center">
          <h3 className="text-xl lg:text-2xl text-primary">
            Bespoke 1:1 Coaching Program
          </h3>
          <p className="text-sm font-light">
            Transform your life and business with personalized coaching designed
            exclusively for your unique needs and aspirations.
          </p>
        </div>

        {/* What You'll Gain Section */}
        <div>
          <h3 className="text-xl lg:text-2xl text-primary w-full text-center">
            What You’ll Gain
          </h3>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Rewire Limiting Beliefs */}
            <div className={cardClass} data-aos="fade-up">
              <FaBrain className="text-primary text-4xl" />
              <h4 className="text-sm text-primary">Rewire Limiting Beliefs</h4>
              <ul className="list-decimal list-inside text-sm text-gray-700">
                <li>Discover and address core beliefs holding you back.</li>
                <li>Use EFT tapping to interrupt fear-based patterns.</li>
                <li>Replace self-doubt with empowering beliefs.</li>
                <li>
                  Maintain the rewire process independently to stay confident.
                </li>
              </ul>
            </div>

            {/* Build a Clear Plan */}
            <div className={cardClass} data-aos="fade-up">
              <FaRegLightbulb className="text-primary text-4xl" />
              <h4 className="text-sm text-primary">Build a Clear Plan</h4>
              <ul className="list-decimal list-inside text-sm text-gray-700">
                <li>
                  Set clear, actionable goals aligned with your aspirations.
                </li>
                <li>Map strategies to attract ideal clients.</li>
                <li>Focus on high-impact tasks driving real progress.</li>
                <li>Develop efficient systems to streamline workflows.</li>
              </ul>
            </div>

            {/* Gain Unshakable Confidence */}
            <div className={cardClass} data-aos="fade-up">
              <FaRocket className="text-primary text-4xl" />
              <h4 className="text-sm text-primary">
                Gain Unshakable Confidence
              </h4>
              <ul className="list-decimal list-inside text-sm text-gray-700">
                <li>Craft messaging authentic to your brand.</li>
                <li>Build offers that excite and serve your clients.</li>
                <li>Overcome imposter syndrome and embrace expertise.</li>
                <li>Take consistent action, even outside your comfort zone.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex max-lg:flex-col gap-5">
          {/* What’s Included */}
          <div>
            <h3 className="text-xl lg:text-2xl text-primary mb-5">
              What’s Included
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Weekly 1:1 Coaching Sessions tailored to your goals.</li>
              <li>
                EFT Tapping Sessions to remove mental blocks and instill a
                success-oriented mindset.
              </li>
              <li>Personalized Growth Plan that evolves with your progress.</li>
              <li>Ongoing support through unlimited messages or emails.</li>
              <li>
                Access to resources, guides, and templates for effective
                strategy implementation.
              </li>
            </ul>
          </div>

          {/* Who This Is For */}
          <div>
            <h3 className="text-xl lg:text-2xl text-primary mb-5">
              Who This Is For
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>
                Motivated individuals feeling stuck, overwhelmed, or unsure
                about their next steps.
              </li>
              <li>
                Those ready to take ownership of their potential and build a
                career reflecting their goals and values.
              </li>
              <li>
                People wanting to align mindset, actions, and strategies for
                sustainable success.
              </li>
            </ul>
          </div>
        </div>
        <p className="w-full text-center text-xs italic font-light">
          Let’s work together to unlock your potential and achieve the success
          you deserve.
        </p>
        <div className="w-full flex justify-center">
          <button
            data-aos="fade-up"
            className="text-sm py-1.5 px-4 border border-primary rounded w-fit text-primary"
          >
            Schedule a call
          </button>
        </div>
        <div className="w-full flex flex-col gap-3 text-center">
          <h3 className="text-xl lg:text-2xl text-primary">
            Workshops and Courses
          </h3>
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            {courses.map((course, index) => (
              <div
                key={index}
                className="p-10 flex flex-col items-start gap-2 hover:bg-slate-100 transition-all ease-in-out duration-500 cursor-pointer"
              >
                <img
                  src={Photo}
                  alt={course.name}
                  className="w-full h-28 object-cover"
                />
                <h3 className="text-xl lg:text-xl text-primary w-full text-center">
                  {course.name}
                </h3>
                <p className="text-xs font-light italic w-full text-center">
                  {course.description}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            <button className="text-sm py-1.5 px-4 border border-primary rounded  text-primary w-fit">
              View all courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
