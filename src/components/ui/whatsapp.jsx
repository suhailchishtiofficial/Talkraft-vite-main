import React from 'react';

const whatsappNumber = '+918887915782'; // Replace with your WhatsApp number (country code + number)
const whatsappMessage = 'Hello! I would like to know more about your services.'; // Default message

const WhatsappButton = () => (
  <a
    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed z-50 bottom-10 left-6 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-200"
    style={{ boxShadow: '0 4px 24px 0 rgba(37, 211, 102, 0.3)' }}
    aria-label="Chat on WhatsApp"
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.373L4 29l7.824-2.05C13.416 27.168 14.684 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.16 0-2.297-.168-3.377-.5l-.24-.072-4.647 1.217 1.24-4.527-.156-.24C6.832 19.584 6 17.385 6 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.09-7.41c-.277-.139-1.637-.807-1.89-.899-.253-.093-.437-.139-.62.14-.184.277-.713.899-.874 1.084-.16.185-.32.208-.597.07-.277-.139-1.17-.431-2.23-1.375-.823-.734-1.378-1.64-1.54-1.917-.16-.277-.017-.427.122-.566.126-.125.277-.32.416-.48.139-.16.185-.277.277-.462.093-.185.047-.347-.023-.486-.07-.139-.62-1.497-.85-2.05-.224-.539-.453-.466-.62-.475l-.527-.01c-.17 0-.446.064-.68.3-.233.233-.89.87-.89 2.122s.911 2.462 1.038 2.634c.126.17 1.793 2.74 4.35 3.735.608.21 1.082.335 1.452.429.61.155 1.165.133 1.604.081.489-.058 1.637-.668 1.87-1.312.232-.645.232-1.197.162-1.312-.07-.116-.253-.185-.53-.324z"/>
    </svg>
  </a>
);

export default WhatsappButton;