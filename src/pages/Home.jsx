import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { TransitionLink } from "../components/TransitionProvider";

export default function Home() {
    const heroRef = useRef(null);
    const headlineRef = useRef(null);

    useEffect(() => {
      const el = heroRef.current;
      if (!el) return;
      const onScroll = () => {
        const y = window.scrollY;
        const parallax = Math.min(40, y * 0.2);
        el.style.backgroundPosition = `center calc(50% + ${parallax}px)`;
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
      // quick light sweep on headline when page mounts
      const hl = headlineRef.current;
      if (!hl) return;
      hl.classList.add('animate-[shine_1s_ease-in-out]');
      const t = setTimeout(() => hl.classList.remove('animate-[shine_1s_ease-in-out]'), 1100);
      return () => clearTimeout(t);
    }, []);

    return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative text-white py-24 sm:py-28 will-change-[background-position]"
        style={{
          backgroundImage: "url('/E-FAR Background image.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 ref={headlineRef} className="relative text-5xl md:text-7xl font-bold mb-6 overflow-hidden">
            <span className="relative z-10">E-Formula Ashwa Riders</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full [mask-image:linear-gradient(90deg,transparent,black,transparent)]"></span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Engineering the future of Formula Student EVs
          </p>
          <p className="text-lg mb-12 max-w-3xl mx-auto text-gray-400">
            We are a passionate team of engineering students dedicated to designing, 
            building, and racing electric formula cars in international competitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TransitionLink 
              to="/about" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More About Us
            </TransitionLink>
            <TransitionLink 
              to="/achievements" 
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Achievements
            </TransitionLink>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Our Team</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-8">
              Founded with a vision to revolutionize electric vehicle technology, 
              E-Formula Ashwa Riders represents the next generation of automotive innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏎️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge electric vehicle technology and sustainable racing solutions.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Competing at the highest level in international Formula Student competitions.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">Promoting clean energy and environmental responsibility through racing.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/about" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Learn more about our story
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Cars Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Formula Cars</h2>
            <p className="text-lg md:text-xl text-gray-600">
              Discover our latest electric racing machines
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-6xl">🚗</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-FAR 2024</h3>
                <p className="text-gray-600 mb-4">Our latest electric formula car with advanced aerodynamics and powertrain.</p>
                <TransitionLink to="/cars" className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Details →
                </TransitionLink>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <span className="text-6xl">🏁</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-FAR 2023</h3>
                <p className="text-gray-600 mb-4">Previous generation car that achieved remarkable performance in competitions.</p>
                <TransitionLink to="/cars" className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Details →
                </TransitionLink>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center">
                <span className="text-6xl">⚡</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-FAR 2022</h3>
                <p className="text-gray-600 mb-4">Our first electric formula car that started our journey in sustainable racing.</p>
                <TransitionLink to="/cars" className="text-blue-600 hover:text-blue-700 font-semibold">
                  View Details →
                </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Sponsors Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recent Achievements</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥇</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">1st Place - Design Event</h3>
                    <p className="text-gray-600">Formula Student India 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🥈</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">2nd Place - Business Plan</h3>
                    <p className="text-gray-600">Formula Student India 2024</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Best Newcomer Award</h3>
                    <p className="text-gray-600">Formula Student India 2023</p>
                  </div>
                </div>
              </div>
            <TransitionLink 
              to="/achievements" 
              className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-semibold"
            >
                View all achievements
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </TransitionLink>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Sponsors</h2>
              <p className="text-gray-600 mb-6">
                We're grateful for the support of our sponsors who make our racing dreams possible.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🏢</div>
                  <p className="font-semibold">Platinum Sponsor</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">⭐</div>
                  <p className="font-semibold">Gold Sponsor</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">💎</div>
                  <p className="font-semibold">Silver Sponsor</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">🤝</div>
                  <p className="font-semibold">Bronze Sponsor</p>
                </div>
              </div>
              <TransitionLink 
                to="/sponsors" 
                className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Meet all our sponsors
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-xl mb-8 text-blue-100">
            Interested in joining our team or supporting our mission?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <TransitionLink 
              to="/contact" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </TransitionLink>
            <TransitionLink 
              to="/team" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Meet the Team
            </TransitionLink>
          </div>
        </div>
      </section>
      </div>
    );
  }
  