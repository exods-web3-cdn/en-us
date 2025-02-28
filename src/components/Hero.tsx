import React from 'react';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="heading-1 mb-6">
              Secure Your Digital Assets with Exódus Web3 Wallet
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Experience the next generation of cryptocurrency management with Exódus Web3 Wallet. 
              Seamlessly connect to decentralized applications, manage your assets, and explore 
              the world of Web3 with unparalleled security and ease of use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center">
                Download Extension <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="btn-secondary flex items-center justify-center">
                Learn More
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-gray-700 font-medium">Bank-Grade Security</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-gray-700 font-medium">Lightning Fast</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-gray-700 font-medium">Multi-Chain Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-2 rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Exodus Web3 Wallet Interface" 
                className="rounded-xl w-full"
              />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-blue-600 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;