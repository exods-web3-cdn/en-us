import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-blue-600" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is Exódus Web3 Wallet?",
      answer: "Exódus Web3 Wallet is a secure, user-friendly cryptocurrency wallet that allows you to store, manage, and interact with your digital assets across multiple blockchains. It functions as a browser extension, providing seamless integration with decentralized applications (dApps) and Web3 services."
    },
    {
      question: "How secure is Exódus Web3 Wallet?",
      answer: "Exódus employs bank-grade security measures including end-to-end encryption, self-custody of private keys, and regular security audits. Your private keys never leave your device, and we implement multiple layers of protection to safeguard your assets from unauthorized access."
    },
    {
      question: "Which cryptocurrencies does Exódus support?",
      answer: "Exódus supports a wide range of cryptocurrencies across multiple blockchains, including but not limited to Bitcoin, Ethereum, Binance Smart Chain, Polygon, Solana, Avalanche, and many more. We regularly add support for new tokens and networks based on community demand."
    },
    {
      question: "How do I back up my Exódus wallet?",
      answer: "When you create an Exódus wallet, you'll be provided with a 12 or 24-word recovery phrase. It's crucial to write this phrase down and store it in a secure location. This recovery phrase can be used to restore your wallet on any device if your original device is lost or damaged."
    },
    {
      question: "Is Exódus free to use?",
      answer: "Yes, Exódus Web3 Wallet is free to download and use. We may charge minimal network fees for certain transactions, which are standard across the blockchain ecosystem and go to network validators, not to Exódus."
    },
    {
      question: "Can I use Exódus on multiple devices?",
      answer: "Yes, you can use your recovery phrase to access your wallet across multiple devices. Changes made on one device will be reflected across all devices where your wallet is installed."
    },
    {
      question: "How do I connect Exódus to decentralized applications (dApps)?",
      answer: "Connecting to dApps is simple with Exódus. When visiting a compatible dApp, click on the 'Connect Wallet' button, select Exódus from the list of available wallets, and approve the connection request. You'll then be able to interact with the dApp directly through your Exódus wallet."
    },
    {
      question: "What should I do if I forget my password?",
      answer: "If you forget your password, you can reset it using your recovery phrase. As long as you have your recovery phrase, you'll never lose access to your funds. This is why it's crucial to store your recovery phrase in a secure location."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about Exódus Web3 Wallet and how it can enhance your cryptocurrency experience.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="btn-primary">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;