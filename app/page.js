"use client"
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaArrowLeft, FaFacebook, FaInstagram } from 'react-icons/fa';
import HeroSection from './component/Hero';

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Priya Sharma",
      review: "The best beauty experience I've had! The staff is professional and the treatments are exceptional!",
      rating: "★★★★★"
    },
    {
      name: "Rahul Chatterjee",
      review: "Regular customer for their hair services. Always leave feeling refreshed and looking great.",
      rating: "★★★★☆"
    },
    {
      name: "Mousumi Banerjee",
      review: "Loved the bridal makeup service. Made me look stunning on my special day!",
      rating: "★★★★★"
    }
  ];

  const spaServices = [
    { name: "Hair Services", image: "/img/hairServices.jpg" },
    { name: "Hair Treatments", image: "/img/hairtreatment.jpg" },
    { name: "Facials", image: "/img/spa.jpg" },
    { name: "Hair Spa", image: "/img/hairspa.jpg" },
    { name: "Pedicure & Manicure", image: "/img/fullbody.jpg" },
    { name: "Nail Services", image: "/img/naiol.jpg" },
    { name: "Make-up", image: "/img/makeup.jpg" },
    { name: "Bridal Services", image: "/img/wedding.jpg" },
    { name: "Aesthetic Treatments", image: "/img/massage.jpg" },
  ];

  return (
    <div className='bg-white'>
      <div className="bg-white max-w-5xl mx-auto">
      {/* Hero Section (from previous) */}
      <HeroSection />
      {/* About Us Section */}
      <section className="py-16 px-4 bg-[#fefaf5]">
  <section className="py-16 px-4 bg-[#fefaf5]">
  <div className="container mx-auto max-w-6xl">
    {/* Shop Image Section - Centered with proper styling */}
    <div className="mb-12 flex justify-center">
      <div className="rounded-lg overflow-hidden shadow-lg max-w-2xl">
        <img 
          src="/shop.png" 
          alt="Beauty For You Shop" 
          className="w-full h-64 md:h-96 object-cover mx-auto"
        />
      </div>
    </div>
    
    <div className="text-center mb-12">
      <div className="flex justify-center">
        <img src="/flower.png" alt="Flower" width={60} height={60} />
      </div>
      <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl md:text-6xl text-[#79287a] mb-4">
        Our Story
      </h2>
      <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
    </div>
    
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-lg text-gray-700 mb-6">
        Since October 2019, Beauty For You has been providing premium beauty services to our valued clients in Kolkata.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        With 6 years of dedicated service in this area, we have built lasting trust with our clients, who choose to return to us time and again.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaPhone className="text-3xl text-[#A06718] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">8420507317</p>
          {/* <p className="text-gray-600">7003619561</p> */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaEnvelope className="text-3xl text-[#A06718] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600">Beautyforyou961@gmail.com</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaMapMarkerAlt className="text-3xl text-[#A06718] mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600">38/f Rajkrishna Chatterjee Road, New Ballygunge, Kasba, Kolkata, West Bengal, 700042</p>
        </div>
      </div>
    </div>
  </div>
</section>
</section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-[#f4fdff]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex justify-center">
            <img src="/flower.png" alt="Flower" width={60} height={60} />
          </div>
          <h2 className="text-5xl md:text-6xl text-[#79287a] mb-4 "
          style={{ fontFamily: 'var(--font-sacramento)' }}
          >
            Our Services
          </h2>
          <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {spaServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <div className="w-32 h-32 relative">
                <img
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  className="object-cover rounded-full border-4 border-white shadow-lg"
                  style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }}
                />
              </div>
              <p className="text-lg font-semibold text-[#333]">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* What We Serve Section */}
      <section className="py-16 px-4 bg-[#f8f3ed]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <img src="/flower.png" alt="Flower" width={60} height={60} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl md:text-6xl text-[#79287a] mb-4">
              What We Serve
            </h2>
            <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#79287a] mb-6">Our Specialties</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-3">✓</span>
                  <span className="text-gray-700">Skin Services: Facial, Pedicure, Manicure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-3">✓</span>
                  <span className="text-gray-700">Hair Services: Spa, Cutting, Color, Straightening</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-3">✓</span>
                  <span className="text-gray-700">Advanced Treatments: Nanoplastia, Keratin, Botox</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-3">✓</span>
                  <span className="text-gray-700">Aesthetic Treatments: Hydra Facial, BB Glow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-3">✓</span>
                  <span className="text-gray-700">Professional Bridal Makeup Services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#79287a] mb-6">Why Choose Us</h3>
              <p className="text-gray-700 mb-4">
                With 6 years of experience, we bring expertise and trust to every service we provide.
              </p>
              <p className="text-gray-700 mb-4">
                Our professionals are trained in the latest techniques and use premium products to ensure the best results.
              </p>
              <p className="text-gray-700 mb-4">
                We pride ourselves on building lasting relationships with our clients who return to us time and again.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.facebook.com/share/19GEidojQ2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] hover:text-[#2d4373]">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="https://www.instagram.com/beautyforyou515?igsh=eXR3aWlxaDJndTFl" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-[#C13584]">
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center">
              <img src="/flower.png" alt="Flower" width={60} height={60} />
            </div>
            <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl md:text-6xl text-[#79287a] mb-4">
              Client Stories
            </h2>
            <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          </div>
          
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-[#f8f3ed] p-8 rounded-lg shadow-md text-center">
              <p className="text-xl italic text-gray-700 mb-4">"{testimonials[currentTestimonial].review}"</p>
              <p className="font-bold text-[#79287a]">{testimonials[currentTestimonial].name}</p>
              <p className="text-[#A06718]">{testimonials[currentTestimonial].rating}</p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="p-2 rounded-full bg-[#A06718] text-white"
              >
                <FaArrowLeft />
              </button>
              <button 
                onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="p-2 rounded-full bg-[#A06718] text-white"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 px-4 text-neutral-700 bg-[#f8f3ed]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl md:text-6xl text-[#79287a] mb-6">
              Get In Touch
            </h2>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                const name = e.target[0].value;
                const email = e.target[1].value;
                const phone = e.target[2].value;
                const message = e.target[3].value;
                const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
                window.open(`https://wa.me/918420507317?text=${whatsappMessage}`, '_blank');
              }}
            >
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]" required />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]" required />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]" required />
              <textarea placeholder="Your Message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A06718]" required></textarea>
              <button type="submit" className="px-8 py-3 bg-[#A06718] hover:bg-[#8a5a15] text-white font-semibold rounded-full transition-colors">
                Send Message via WhatsApp
              </button>
            </form>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#79287a] mb-6">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden mb-6">
              <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.5935434357857!2d88.37912879999999!3d22.519428199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771cd812505b%3A0x1fce896f24ac86f3!2sBeauty%20For%20You!5e0!3m2!1sen!2sin!4v1756812912288!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#A06718] mt-1 mr-3" />
                <p>38/f Rajkrishna Chatterjee Road, New Ballygunge, Kasba (Landmark: Shri Shri Hari Misthanna Bhandar), Kolkata, West Bengal, 700042</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-[#A06718] mr-3" />
                <p>8420507317</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#A06718] mr-3" />
                <p>Beautyforyou961@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <a href="https://www.facebook.com/share/19GEidojQ2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-[#3b5998] hover:text-[#2d4373]">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="https://www.instagram.com/beautyforyou515?igsh=eXR3aWlxaDJndTFl" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-[#C13584]">
                  <FaInstagram className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
      </div>
  );
}