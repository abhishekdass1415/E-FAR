export default function Contact() {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
          <p className="text-gray-300 mt-4">Get in touch with E-Formula Ashwa Riders team.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form className="bg-gray-50 p-6 rounded-lg shadow-sm border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 w-full rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea className="mt-1 w-full rounded border-gray-300 focus:ring-blue-500 focus:border-blue-500" rows="5" placeholder="How can we help?" />
            </div>
            <button type="submit" className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">Send Message</button>
          </form>

          {/* Info */}
          <div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-4">Team Info</h2>
              <p className="text-gray-700">Email: contact@efar.team</p>
              <p className="text-gray-700">Location: Campus, City, Country</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-700">Instagram</a>
                <a href="#" className="text-blue-600 hover:text-blue-700">LinkedIn</a>
                <a href="#" className="text-blue-600 hover:text-blue-700">YouTube</a>
              </div>
            </div>
            <div className="mt-8">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Map Embed Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}