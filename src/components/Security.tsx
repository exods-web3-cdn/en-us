import React from 'react';
import { ShieldCheck, Eye, Key, Server } from 'lucide-react';

const Security: React.FC = () => {
  return (
    <section id="security" className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 mb-6">Bank-Grade Security for Your Digital Assets</h2>
            <p className="text-lg text-gray-600 mb-8">
              At Exódus, we prioritize the security of your assets above all else. Our wallet employs multiple layers of protection to ensure your cryptocurrencies remain safe from threats.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
                  <p className="text-gray-600">
                    All sensitive data is encrypted using industry-standard AES-256 encryption, ensuring that your information remains private and secure.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Privacy-First Approach</h3>
                  <p className="text-gray-600">
                    We never track your activity or collect unnecessary data. Your financial privacy is respected at all times.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <Key className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Self-Custody Solution</h3>
                  <p className="text-gray-600">
                    Your private keys never leave your device. Only you have access to your funds, with no third-party involvement.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold mb-2">Regular Security Audits</h3>
                  <p className="text-gray-600">
                    Our codebase undergoes regular security audits by independent third-party firms to identify and address potential vulnerabilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Security Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-blue-500 p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Biometric authentication support</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Secure 12/24-word recovery phrase</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Optional PIN code protection</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Automatic session timeouts</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Transaction confirmation screens</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Phishing protection</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Hardware wallet integration</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 p-1 rounded-full mr-3 mt-1">✓</span>
                  <span>Address whitelisting</span>
                </li>
              </ul>
              <button className="mt-8 bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-200 w-full">
                Learn More About Security
              </button>
            </div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-full h-full bg-blue-400 rounded-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;