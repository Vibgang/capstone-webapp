import React from 'react';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">Liberis</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {['Home', 'About', 'Practice Areas', 'Attorneys', 'Blog', 'FAQ', 'Contact', 'Buy Now'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-700 hover:text-gray-900">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <div className="relative h-[calc(100vh-80px)]">
          <img 
            src="/api/placeholder/1200/800" 
            alt="Law building columns" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4">We solve<br />your legal problems</h1>
              <button className="bg-white text-gray-800 px-6 py-2 rounded-full hover:bg-gray-200 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Liberis. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;