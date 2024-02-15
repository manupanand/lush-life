// components/WhatsAppButton.tsx
import { useState } from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const [whatsAppLink, setWhatsAppLink] = useState<string>('');

  const generateWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    setWhatsAppLink(whatsappLink);
  };

  return (
    <div>
      <button onClick={generateWhatsAppLink}>
        Open WhatsApp
      </button>
      {whatsAppLink && (
        <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
          Go to WhatsApp
        </a>
      )}
    </div>
  );
};

export default WhatsAppButton;