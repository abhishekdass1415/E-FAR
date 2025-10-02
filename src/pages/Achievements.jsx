export default function Achievements() {
  const items = [
    { year: 2024, title: '1st Place - Design Event', where: 'Formula Student India', icon: '🥇' },
    { year: 2024, title: '2nd Place - Business Plan', where: 'Formula Student India', icon: '🥈' },
    { year: 2023, title: 'Best Newcomer Award', where: 'Formula Student India', icon: '🏆' },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Our Achievements</h1>
          <p className="text-gray-300 mt-4">Celebrating our successes and milestones in Formula Student competitions.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-1 bg-gray-200 h-full" />
            <div className="space-y-8">
              {items.map((it, idx) => (
                <div key={idx} className="grid sm:grid-cols-2 gap-8 items-center">
                  <div className={`sm:text-right ${idx % 2 === 0 ? 'order-none' : 'order-last'}`}>
                    <div className="inline-block bg-gray-100 rounded-full px-4 py-2 text-gray-700 font-medium">
                      {it.year}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{it.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{it.title}</h3>
                        <p className="text-gray-600">{it.where}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}