import Image from "next/image";

export default function ServicesPage() {
  // Skin Services
  const skinServices = [
    {
      name: "Facial Treatment",
      title: "facial",
      price: "₹999-₹2999",
      duration: "45-90 mins",
      description: "Customized facials for glowing skin with deep cleansing",
    },
    {
      name: "Pedicure",
      title: "pedicure",
      price: "₹799-₹1299",
      duration: "60 mins",
      description: "Professional foot care and grooming with massage",
    },
    {
      name: "Manicure",
      title: "manicure",
      price: "₹699-₹1199",
      duration: "45 mins",
      description: "Nail care and grooming with hand massage",
    },
    {
      name: "Body Scrub",
      title: "bodyscrub",
      price: "₹1999",
      duration: "60 mins",
      description: "Exfoliation treatment to remove dead skin cells",
    },
  ];

  // Hair Services
  const hairServices = [
    {
      name: "Hair Cutting & Styling",
      title: "haircut",
      price: "₹499-₹1499",
      duration: "45-90 mins",
      description: "Professional haircut and styling for all hair types",
    },
    {
      name: "Hair Coloring",
      title: "haircolor",
      price: "₹1499-₹3999",
      duration: "90-180 mins",
      description: "Expert coloring with premium products",
    },
    {
      name: "Hair Straightening",
      title: "straightening",
      price: "₹2999-₹5999",
      duration: "120-180 mins",
      description: "Professional straightening treatments",
    },
    {
      name: "Hair Spa",
      title: "hairspa",
      price: "₹1299",
      duration: "60 mins",
      description: "Deep conditioning treatment for damaged hair",
    },
    {
      name: "Nanoplastia",
      title: "nanoplastia",
      price: "₹3999-₹6999",
      duration: "120-150 mins",
      description: "Advanced hair smoothing treatment",
    },
    {
      name: "Keratin Treatment",
      title: "keratin",
      price: "₹3499-₹5999",
      duration: "120-150 mins",
      description: "Smoothing treatment for frizzy hair",
    },
    {
      name: "Hair Botox",
      title: "hairbotox",
      price: "₹2999-₹4999",
      duration: "90-120 mins",
      description: "Deep conditioning and repair treatment",
    },
  ];

  // Aesthetic & Bridal Services
  const aestheticServices = [
    {
      name: "Hydra Facial",
      title: "hydrafacial",
      price: "₹2999-₹4999",
      duration: "60-90 mins",
      description: "Advanced hydrating and cleansing facial treatment",
    },
    {
      name: "BB Glow Treatment",
      title: "bbglow",
      price: "₹3999-₹5999",
      duration: "90 mins",
      description: "Semi-permanent foundation treatment for flawless skin",
    },
    {
      name: "Bridal Makeup",
      title: "bridalmakeup",
      price: "₹4999+",
      duration: "120+ mins",
      description: "Complete bridal look with trials available",
    },
    {
      name: "Party Makeup",
      title: "partymakeup",
      price: "₹1999-₹3499",
      duration: "60-90 mins",
      description: "Glamorous makeup for special occasions",
    },
  ];

  return (
    <div className="bg-white text-black">
      <div className="bg-white max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <img src="/flower.png" alt="Flower" width={60} height={60} />
            </div>
            <h1
              style={{ fontFamily: "var(--font-sacramento)" }}
              className="text-6xl md:text-8xl text-[#79287a] mb-4"
            >
              Our Services
            </h1>
            <div className="w-24 h-1 bg-[#79287a] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Professional beauty treatments in the comfort of your home
            </p>
          </div>
        </section>

        {/* Skin Services */}
        <Section title="Skin Care Services" services={skinServices} />

        {/* Hair Services */}
        <Section title="Hair Care Services" services={hairServices} />

        {/* Aesthetic & Bridal Services */}
        <Section title="Aesthetic & Bridal Services" services={aestheticServices} />

        {/* Call to Action */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-[#79287a] mb-6">
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us today to book an appointment or consultation
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/918420507317"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-full transition-colors"
              >
                WhatsApp Us
              </a>
              <a
                href="tel:8420507317"
                className="px-8 py-3 bg-[#79287a] hover:bg-[#8a5a15] text-white font-semibold rounded-full transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Reusable Section Component
function Section({ title, services }) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-[#79287a] mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable Service Card Component
function ServiceCard({ service }) {
  const imageName = service.title
    ? `/img/${service.title.toLowerCase().replace(/\s+/g, '-')}.jpg`
    : "/img/default.jpg";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="h-48 bg-[#79287a] flex items-center justify-center relative overflow-hidden">
        {/* <Image
          src={imageName}
          alt={service.name}
          fill
          className="object-cover opacity-70"
        /> */}
        <h3 className="text-2xl font-bold text-white relative z-10 text-center px-4">
          {service.name}
        </h3>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-semibold text-[#79287a]">
            {service.price}
          </span>
          <span className="text-gray-600 text-sm">{service.duration}</span>
        </div>
        <p className="text-gray-700 mb-6">{service.description}</p>
        <a
          href={`https://wa.me/918420507317?text=Hi,%20I%20would%20like%20to%20book%20${encodeURIComponent(
            service.name
          )}%20service`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full text-center px-6 py-2 bg-[#79287a] hover:bg-[#4a2e16] text-white rounded-full transition-colors"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
