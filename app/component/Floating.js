import { FaPhoneAlt, FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918420507317?text=Hi,%20I%20would%20like%20to%20inquire%20about%20your%20beauty%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:8420507317"
        className="flex items-center justify-center w-14 h-14 bg-[#27A4A1] hover:bg-[#218e8b] text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Call Now"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* Facebook Button */}
      <a
        href="https://www.facebook.com/share/19GEidojQ2/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#3b5998] hover:bg-[#2d4373] text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Visit our Facebook page"
      >
        <FaFacebook size={24} />
      </a>

      {/* Instagram Button */}
      <a
        href="https://www.instagram.com/beautyforyou515?igsh=eXR3aWlxaDJndTFl"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] hover:opacity-90 text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Visit our Instagram page"
      >
        <FaInstagram size={24} />
      </a>

      {/* Email Button */}
      <a
        href="mailto:Beautyforyou961@gmail.com"
        className="flex items-center justify-center w-14 h-14 bg-[#D44638] hover:bg-[#c13a2d] text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        aria-label="Send us an email"
      >
        <FaEnvelope size={20} />
      </a>
    </div>
  );
}