export default function Sponsors() {
  const groups = [
    { name: 'Platinum', emoji: '💎', items: ['Company A', 'Company B'] },
    { name: 'Gold', emoji: '⭐', items: ['Company C', 'Company D', 'Company E'] },
    { name: 'Silver', emoji: '🥈', items: ['Company F', 'Company G', 'Company H', 'Company I'] },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Our Sponsors</h1>
          <p className="text-gray-300 mt-4">Thank you to our valued sponsors who support our Formula Student journey.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {groups.map((g, idx) => (
            <div key={idx}>
              <div className="flex items-center justify-center gap-3 mb-6">
                <span className="text-3xl">{g.emoji}</span>
                <h2 className="text-3xl font-bold text-gray-900">{g.name} Sponsors</h2>
              </div>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {g.items.map((s, i) => (
                  <a key={i} href="#" className="bg-gray-50 border rounded-lg p-6 flex items-center justify-center text-center hover:shadow">
                    <span className="text-gray-700 font-medium">{s}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}