import { motion } from "framer-motion";

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
            {/* Featured top milestone */}
            <motion.div
              className="mb-10 rounded-xl border bg-gradient-to-r from-yellow-50 to-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{items[0].icon}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{items[0].title}</h3>
                  <p className="text-gray-600">{items[0].where} — {items[0].year}</p>
                </div>
              </div>
            </motion.div>
            <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-1 bg-gray-200 h-full" />
            <div className="space-y-8">
              {items.map((it, idx) => (
                <motion.div
                  key={idx}
                  className="grid sm:grid-cols-2 gap-8 items-center"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                >
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}