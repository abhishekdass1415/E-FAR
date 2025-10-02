import { Link } from "react-router-dom";
import { TransitionLink } from "./TransitionProvider";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hideOnScroll, setHideOnScroll] = useState(false);

  // Hide navbar after user scrolls down; show again when back at top
  useEffect(() => {
    const handleScroll = () => {
      const shouldHide = window.scrollY > 100;
      setHideOnScroll(shouldHide);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav className={`bg-black text-white fixed w-full top-0 z-50 shadow-md transition-transform duration-300 ${hideOnScroll ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.jpg" alt="E-FAR logo" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="sr-only">E-FAR</span>
        </Link>

        {/* Menu (always present in navbar; scrollable on small screens) */}
        <div className="flex space-x-6 sm:space-x-8 font-medium overflow-x-auto whitespace-nowrap px-2">
          <TransitionLink to="/" className="hover:text-yellow-400">Home</TransitionLink>
          <TransitionLink to="/about" className="hover:text-yellow-400">About</TransitionLink>
          <TransitionLink to="/team" className="hover:text-yellow-400">Team</TransitionLink>
          <TransitionLink to="/cars" className="hover:text-yellow-400">Cars</TransitionLink>
          <TransitionLink to="/achievements" className="hover:text-yellow-400">Achievements</TransitionLink>
          <TransitionLink to="/sponsors" className="hover:text-yellow-400">Sponsors</TransitionLink>
          <TransitionLink to="/contact" className="hover:text-yellow-400">Contact</TransitionLink>
        </div>
      </div>
    </nav>
    </>
  );
}
