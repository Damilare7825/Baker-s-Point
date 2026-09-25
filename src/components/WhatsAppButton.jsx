import React from 'react';
import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '2348105585849';
  const defaultMessage = encodeURIComponent("Hello Bakers Point! I'd like to place an order / make an enquiry.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      aria-label="Chat with us on WhatsApp"
    >
      <Phone size={18} fill="currentColor" />
      <span>Chat with us</span>
    </a>
  );
}
