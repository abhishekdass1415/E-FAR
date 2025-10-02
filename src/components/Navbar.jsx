import { Link, useLocation } from "react-router-dom";
import { TransitionLink } from "./TransitionProvider";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const location = useLocation();

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
        <div className="relative flex space-x-6 sm:space-x-8 font-medium overflow-x-auto whitespace-nowrap px-2">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/team", label: "Team" },
            { href: "/cars", label: "Cars" },
            { href: "/achievements", label: "Achievements" },
            { href: "/sponsors", label: "Sponsors" },
            { href: "/contact", label: "Contact" },
          ].map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <span key={item.href} className="relative">
                <TransitionLink to={item.href} className={`hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`}>{item.label}</TransitionLink>
                {isActive && (<span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-yellow-400" />)}
              </span>
            );
          })}
        </div>
      </div>
    </nav>
    </>
  );
}
