import React from 'react';
import { Wallet, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Wallet className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Exódus</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
            <a href="#security" className="text-gray-700 hover:text-blue-600 font-medium">Security</a>
            <a href="#compatibility" className="text-gray-700 hover:text-blue-600 font-medium">Compatibility</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium">FAQ</a>
            <button className="btn-primary">Download Now</button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
            <a href="#security" className="text-gray-700 hover:text-blue-600 font-medium">Security</a>
            <a href="#compatibility" className="text-gray-700 hover:text-blue-600 font-medium">Compatibility</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 font-medium">FAQ</a>
            <button className="btn-primary w-full">Download Now</button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;