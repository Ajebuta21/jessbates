import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`w-full h-20 fixed z-30 text-sm backdrop-blur-sm transition-all ease-in-out duration-1000 ${
        scrolled ? "bg-white text-primary shadow" : "text-white"
      }`}
    >
      <div className="w-full h-full px-5 flex items-center justify-between relative">
        <p className="text-2xl dynalight-regular">Jess Bates Coaching</p>
        <ul className="flex gap-5 items-center max-lg:hidden">
          <li>Home</li>
          <li>Courses</li>
          <li>Contact</li>
        </ul>
        <ul className="flex gap-3 items-center">
          <button className="text-sm py-1.5 px-4 border rounded">
            Schedule a call
          </button>
          <button
            className="lg:hidden text-sm py-1.5 px-4 border rounded"
            onClick={toggleMenu}
          >
            {menuOpen ? "X" : "☰"}
          </button>
        </ul>
      </div>
      {menuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white text-primary absolute top-20 left-0 w-full">
          <p className="w-full p-3 border-b">Home</p>
          <p className="w-full p-3 border-b">Courses</p>
          <p className="w-full p-3 border-b">Contact</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
