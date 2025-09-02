"use client"
import { useState } from 'react';
import Image from 'next/image';

export default function GalleryPage() {
  const images = Array.from({ length: 43 }, (_, i) => `/image/1 (${i + 1}).jpeg`);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="bg-white">
      <div className="bg-white max-w-5xl mx-auto">
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <img src="/flower.png" alt="Flower" width={60} height={60} />
            </div>
            <h1
              style={{ fontFamily: "var(--font-sacramento)" }}
              className="text-6xl md:text-8xl text-[#5E3B1F] mb-4"
            >
              Our Gallery
            </h1>
            <div className="w-24 h-1 bg-[#A06718] mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A glimpse of our work and satisfied clients
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => openModal(image, index)}
                >
                  <Image
                    src={image}
                    alt={`Beauty For You service ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0  bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white opacity-0 hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3-3H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white text-3xl z-10"
              >
                &times;
              </button>
              
              <div className="relative w-full h-96 md:h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Enlarged view"
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="flex justify-between mt-4">
                <button
                  onClick={goToPrev}
                  className="text-white bg-[#A06718] hover:bg-[#8a5a15] px-4 py-2 rounded-full"
                >
                  Previous
                </button>
                <span className="text-white self-center">
                  {currentIndex + 1} / {images.length}
                </span>
                <button
                  onClick={goToNext}
                  className="text-white bg-[#A06718] hover:bg-[#8a5a15] px-4 py-2 rounded-full"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}