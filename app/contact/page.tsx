'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2388C9] to-[#2C4B78] text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20business%20communication%20concept%20with%20modern%20office%20setting%2C%20contact%20and%20communication%20icons%2C%20customer%20service%20representatives%2C%20teal%20color%20theme%20background&width=1200&height=400&seq=contact-hero&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-[#1D2030]/70"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with LEO District 306 D2 for any inquiries or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-blue-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-[#2388C9] text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">LEO District 306 D2<br />Leo Youth Centre<br />Vidya Mawatha, Colombo 00700<br />Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-line text-[#2388C9] text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+94 70 120 5186</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-[#2388C9] text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">thameerad@leodistrict306a2.org</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-time-line text-[#2388C9] text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Office Hours</h4>
                      <p className="text-gray-600">Always Open</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-blue-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/leo306a2" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                    <i className="ri-facebook-fill text-white text-xl"></i>
                  </a>
                  <a href="https://x.com/A2Buzz" className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                    <i className="ri-twitter-fill text-white text-xl"></i>
                  </a>
                  <a href="https://www.instagram.com/a2leos/" className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                    <i className="ri-instagram-fill text-white text-xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/leo306a2/" className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill text-white text-xl"></i>
                  </a>
                  <a href="https://www.youtube.com/user/leo306a2" className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                    <i className="ri-youtube-fill text-white text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
            <p className="text-lg text-gray-600">Visit us at our district office</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467798027!2d79.871557!3d6.9069607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2598e75db3d31%3A0x8668c0984cbdeea7!2sLeo%20Youth%20Centre!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Leo Youth Centre, Colombo"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}