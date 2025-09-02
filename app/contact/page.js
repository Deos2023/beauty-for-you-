"use client"
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    
    const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${message}`;
    
    window.open(`https://wa.me/918420507317?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div className="bg-white">
      <div className="bg-white max-w-5xl mx-auto">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#f8f3ed]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img src="/flower.png" alt="Flower" width={60} height={60} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-6xl md:text-8xl text-[#79287a] mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get in touch for bookings or inquiries about our beauty services
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#79287a] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 text-black">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Your Name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Your Email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]"
                  />
                </div>
                <div>
                  <textarea 
                    name="message"
                    placeholder="Your Message (Please mention the service you're interested in)" 
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="flex items-center justify-center px-8 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-full transition-colors"
                >
                  <FaWhatsapp className="mr-2 text-xl" />
                  Send via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div>
              <div className="bg-[#f8f3ed] p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold text-[#79287a] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaPhone className="text-[#A06718] mt-1 mr-4 text-xl" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">8420507317</p>
                      <p className="text-gray-600">7003619561</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-[#A06718] mt-1 mr-4 text-xl" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">Beautyforyou961@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-[#A06718] mt-1 mr-4 text-xl" />
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        38/f Rajkrishna Chatterjee Road<br />
                        New Ballygunge, Kasba<br />
                        (Landmark: Shri Shri Hari Misthanna Bhandar)<br />
                        Kolkata, West Bengal 700042
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#A06718] mt-1 mr-4 text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Established</h4>
                      <p className="text-gray-600">October 2, 2019</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 pt-4">
                    <a href="https://www.facebook.com/share/19GEidojQ2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] hover:text-[#2d4373]">
                      <FaFacebook className="text-2xl" />
                    </a>
                    <a href="https://www.instagram.com/beautyforyou515?igsh=eXR3aWlxaDJndTFl" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-[#C13584]">
                      <FaInstagram className="text-2xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.317764483648!2d88.38837231533804!3d22.52523533875315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f21f087e4d%3A0x82de9c2d6aab84c2!2sShri%20Shri%20Hari%20Misthanna%20Bhandar!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-16 px-4 bg-[#fefaf5]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#79287a] mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#79287a] mb-4">Skin Services</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Facial</li>
                <li>Pedicure</li>
                <li>Manicure</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#79287a] mb-4">Hair Services</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Hair Spa</li>
                <li>Hair Cutting</li>
                <li>Coloring</li>
                <li>Straightening</li>
                <li>Nanoplastia</li>
                <li>Keratin</li>
                <li>Botox</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-[#79287a] mb-4">Specialty Services</h3>
              <ul className="text-gray-700 space-y-2">
                <li>Aesthetic Treatments</li>
                <li>Hydra Facial</li>
                <li>BB Glow Treatment</li>
                <li>Bridal Makeup</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 italic">
              With 6 years of dedicated service in this area, we have built lasting trust with our clients, who choose to return to us time and again.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}