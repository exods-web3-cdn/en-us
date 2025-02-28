import React from 'react';
import { Shield, Zap, Globe, Layers, Lock, Coins, Wallet, RefreshCw, Smartphone } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Advanced Security",
      description: "Your private keys never leave your device. Enjoy peace of mind with our industry-leading security measures."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Fast Transactions",
      description: "Experience lightning-fast transactions with optimized gas fees and network selection."
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "Multi-Chain Support",
      description: "Seamlessly manage assets across multiple blockchains including Ethereum, Binance Smart Chain, Polygon, and more."
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "DApp Browser",
      description: "Connect to your favorite decentralized applications directly from your wallet with our built-in DApp browser."
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-600" />,
      title: "Self-Custody",
      description: "Maintain complete control of your assets with true self-custody. No third parties can access your funds."
    },
    {
      icon: <Coins className="h-6 w-6 text-blue-600" />,
      title: "Token Management",
      description: "Easily manage all your tokens, NFTs, and digital assets in one intuitive interface."
    },
    {
      icon: <Wallet className="h-6 w-6 text-blue-600" />,
      title: "Hardware Wallet Support",
      description: "Connect your favorite hardware wallets for an extra layer of security when managing high-value assets."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      title: "Automatic Updates",
      description: "Stay up-to-date with the latest security features and improvements through automatic updates."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      title: "Cross-Platform",
      description: "Use Exódus on your desktop browser or mobile device with perfect synchronization across all platforms."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Powerful Features for Web3 Enthusiasts</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exódus Web3 Wallet combines cutting-edge technology with intuitive design to provide you with the ultimate Web3 experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;