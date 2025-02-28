import React from 'react';
import { Chrome, Siren as Firefox, Badge as Edge, Globe } from 'lucide-react';

const Compatibility: React.FC = () => {
  return (
    <section id="compatibility" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Compatible with Your Favorite Browsers</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exódus Web3 Wallet seamlessly integrates with all major browsers, providing you with a consistent experience no matter which platform you prefer.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Chrome className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Google Chrome</h3>
            <p className="text-gray-600 mb-6">
              Enjoy full functionality and optimal performance on the world's most popular browser.
            </p>
            <button className="btn-primary w-full">Download for Chrome</button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Firefox className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Mozilla Firefox</h3>
            <p className="text-gray-600 mb-6">
              Experience enhanced privacy features when using Exódus with Firefox.
            </p>
            <button className="btn-primary w-full">Download for Firefox</button>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-300">
            <div className="flex justify-center mb-6">
              <Edge className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Microsoft Edge</h3>
            <p className="text-gray-600 mb-6">
              Seamless integration with Microsoft's modern browser for Windows users.
            </p>
            <button className="btn-primary w-full">Download for Edge</button>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <Globe className="h-16 w-16 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Also Available on Other Platforms</h3>
              <p className="text-gray-600 mb-4">
                Exódus Web3 Wallet is also compatible with Brave, Opera, and other Chromium-based browsers. Our cross-platform approach ensures you can access your digital assets from any device or browser.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Brave</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Opera</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Vivaldi</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Safari</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Android</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">iOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compatibility;