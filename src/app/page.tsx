export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="min-h-screen flex flex-col justify-center items-center">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20 px-6">
            <div className="container mx-auto text-center">
              <h2 className="text-4xl font-extrabold mb-4">
                Welcome to Modern Solutions
              </h2>
              <p className="text-lg mb-8">
                Discover the tools you need to take your business to the next
                level.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:bg-gray-100">
                Get Started
              </button>
            </div>
          </div>

          <div id="features" className="py-16 px-6">
            <div className="container mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white shadow rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-2">Feature One</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-2">Feature Two</h4>
                  <p className="text-gray-600">
                    Praesent tincidunt sed tellus ut rutrum.
                  </p>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-2">Feature Three</h4>
                  <p className="text-gray-600">
                    Suspendisse potenti. Phasellus euismod massa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div id="pricing" className="bg-gray-100 py-16 px-6">
            <div className="container mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6">Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white shadow rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4">Basic</h4>
                  <p className="text-2xl font-bold mb-4">$19/mo</p>
                  <ul className="text-gray-600 mb-4">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Choose Plan
                  </button>
                </div>
                <div className="bg-white shadow rounded-lg p-6 border-2 border-blue-600">
                  <h4 className="text-xl font-bold mb-4">Pro</h4>
                  <p className="text-2xl font-bold mb-4">$49/mo</p>
                  <ul className="text-gray-600 mb-4">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Choose Plan
                  </button>
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-4">Premium</h4>
                  <p className="text-2xl font-bold mb-4">$99/mo</p>
                  <ul className="text-gray-600 mb-4">
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                  </ul>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
