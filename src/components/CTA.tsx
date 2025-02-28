import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Take Control of Your Digital Assets?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of users who trust Exódus Web3 Wallet for secure, seamless management of their cryptocurrency portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 flex items-center justify-center">
              Download Now <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-blue-700 text-white hover:bg-blue-800 font-semibold py-3 px-8 rounded-lg transition-all duration-200">
              Learn More
            </button>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            Available for Chrome, Firefox, Edge, and other major browsers
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;