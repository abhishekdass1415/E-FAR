import { useParams } from "react-router-dom";

export default function CarDetail() {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen">
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold">Car Details</h1>
          <p className="text-gray-300 mt-2">Detailed specifications and information about car #{id}.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2">
          <div className="bg-gray-100 rounded-lg h-64 sm:h-80 md:h-full flex items-center justify-center">
            <span className="text-7xl">🚗</span>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded border">
                <div className="text-gray-500 text-sm">Powertrain</div>
                <div className="font-medium">High-efficiency Electric Motor</div>
              </div>
              <div className="p-4 bg-gray-50 rounded border">
                <div className="text-gray-500 text-sm">Battery</div>
                <div className="font-medium">Lithium-ion Pack, Fast Charging</div>
              </div>
              <div className="p-4 bg-gray-50 rounded border">
                <div className="text-gray-500 text-sm">Chassis</div>
                <div className="font-medium">Lightweight Composite</div>
              </div>
              <div className="p-4 bg-gray-50 rounded border">
                <div className="text-gray-500 text-sm">Aero</div>
                <div className="font-medium">Optimized Downforce Package</div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-2">Highlights</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Advanced telemetry and data logging</li>
                <li>Track-proven reliability and performance</li>
                <li>Designed and built by students</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

  