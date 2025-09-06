import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaLeaf, FaHands, FaHeart, FaAward, FaFacebook, FaInstagram } from "react-icons/fa";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Beauty Experts",
      role: "Certified Professionals",
      bio: "Our team consists of highly trained and experienced beauty specialists with expertise in various treatments.",
      expertise: "Skin Care, Hair Treatments, Makeup"
    },
    {
      name: "Bridal Specialists",
      role: "Makeup Artists",
      bio: "Experienced in creating stunning bridal looks for your special day with attention to detail.",
      expertise: "Bridal Makeup, Party Makeup"
    },
    {
      name: "Treatment Experts",
      role: "Advanced Aestheticians",
      bio: "Specialists in advanced treatments like Hydra Facial, BB Glow, and hair botox.",
      expertise: "Aesthetic Treatments, Hair Therapies"
    }
  ];

  const features = [
    {
      icon: <FaLeaf className="text-3xl text-[#A06718]" />,
      title: "Premium Products",
      description: "We use only high-quality, professional-grade products for all treatments"
    },
    {
      icon: <FaHands className="text-3xl text-[#A06718]" />,
      title: "Certified Experts",
      description: "All our beauty professionals are certified with extensive experience"
    },
    {
      icon: <FaHeart className="text-3xl text-[#A06718]" />,
      title: "Personalized Service",
      description: "Every treatment is customized to your specific needs and preferences"
    },
    {
      icon: <FaAward className="text-3xl text-[#A06718]" />,
      title: "Trusted Service",
      description: "6 years of dedicated service building lasting relationships with clients"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <img src="/flower.png" alt="Flower" width={60} height={60} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-6xl font-semibold md:text-8xl text-[#79287a] mb-4">
            Our Story
          </h1>
          <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Bringing professional beauty services to your doorstep since 2019
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#79287a] mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                Beauty For You was established in 2019 with a mission to provide professional, 
                high-quality beauty treatments in the comfort of your own home.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team of certified beauty experts brings years of experience and a passion for 
                enhancing natural beauty to every service. We believe that everyone deserves to look 
                and feel their best without the hassle of salon visits.
              </p>
              <p className="text-lg text-gray-700">
                Serving Kolkata for over 6 years, we've built lasting trust with our clients who 
                choose to return to us time and again for all their beauty needs.
              </p>
            </div>
            <div className="bg-[#f8f3ed] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#79287a] mb-6">Our Details</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaCalendarAlt className="text-[#A06718] mt-1 mr-4 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Established</h4>
                    <p className="text-gray-600">October 2, 2019</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="text-[#A06718] mt-1 mr-4 text-xl" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">8420507317</p>
                    {/* <p className="text-gray-600">7003619561</p> */}
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
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-4 bg-[#f8f3ed]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#79287a] mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-[#A06718] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#79287a] mb-4">Skin Care</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Facial Treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Pedicure & Manicure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Body Polishing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Waxing Services</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#79287a] mb-4">Hair Care</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Hair Cutting & Styling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Hair Coloring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Hair Straightening</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Hair Spa & Treatments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Nanoplastia, Keratin & Botox</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#79287a] mb-4">Advanced Treatments</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Hydra Facial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>BB Glow Treatment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Bridal Makeup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Party & Occasional Makeup</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#79287a] mb-4">Why Choose Us</h3>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>6+ Years of Experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Professional Quality Products</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Home Service Convenience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#A06718] mr-2">•</span>
                  <span>Trusted by Hundreds of Clients</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#79287a] mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-[#A06718] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#f8f3ed] p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#79287a] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 px-4 bg-[#f8f3ed]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl text-[#79287a] mb-2">
              Our Expertise
            </h2>
            <div className="w-24 h-1 bg-[#A06718] mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our certified beauty professionals bring expertise and care to every treatment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 bg-[#A06718] flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#79287a]">{member.name}</h3>
                  <p className="text-[#A06718] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Specializes in:</span> {member.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 px-4 bg-[#79287a] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 style={{ fontFamily: 'var(--font-sacramento)' }} className="text-5xl mb-4">
            Our Promise to You
          </h2>
          <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
          <p className="text-xl mb-8">
            We guarantee professional, hygienic, and transformative beauty experiences that 
            prioritize your comfort and satisfaction above all else.
          </p>
          <p className="text-lg mb-8 italic">
            With 6 years of dedicated service in this area, we have built lasting trust with our clients, 
            who choose to return to us time and again.
          </p>
          <a
            href="https://wa.me/918420507317"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#79287a] inline-block px-8 py-3 rounded-full font-semibold hover:bg-[#f8f3ed] transition-colors"
          >
            Book Your Beauty Experience Today
          </a>
        </div>
      </section>
    </div>
  );
} 