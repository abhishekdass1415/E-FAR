import { TransitionLink } from "../components/TransitionProvider";

export default function Cars() {
  const cars = [
    {
      id: 'efar-2024',
      name: 'E-FAR 2024',
      year: 2024,
      highlights: ['Advanced Aero', 'Lightweight Chassis', 'High-efficiency Powertrain'],
      emoji: '🚗',
    },
    {
      id: 'efar-2023',
      name: 'E-FAR 2023',
      year: 2023,
      highlights: ['Improved Cooling', 'Optimized Suspension', 'Telemetry Suite'],
      emoji: '🏁',
    },
    {
      id: 'efar-2022',
      name: 'E-FAR 2022',
      year: 2022,
      highlights: ['First EV Platform', 'Reliable Power Delivery', 'Solid Baseline'],
      emoji: '⚡',
    },
  ];

  const Card = ({ car }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <span className="text-6xl">{car.emoji}</span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
          <span className="text-sm text-gray-500">{car.year}</span>
        </div>
        <ul className="text-gray-600 space-y-1 mb-4">
          {car.highlights.map((h, i) => (
            <li key={i}>• {h}</li>
          ))}
        </ul>
        <TransitionLink
          to={`/cars/${car.id}`}
          className="mt-auto inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
        >
          View More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </TransitionLink>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Our Formula Cars</h1>
          <p className="text-gray-300 mt-4 text-lg">Explore our electric formula cars and their specifications.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <Card key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
  