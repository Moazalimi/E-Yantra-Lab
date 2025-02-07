import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Contact Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-blue-600" />
            <span className="text-gray-600">contact@eyantra.srm.edu.in</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-blue-600" />
            <span className="text-gray-600">+91 (044) 2745-5555</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-gray-600">
              SRM Institute of Science and Technology,<br />
              Kattankulathur, Chennai - 603203<br />
              Tamil Nadu, India
            </span>
          </div>
        </div>
      </div>

      <div className="h-64 rounded-lg overflow-hidden">
        <iframe
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.31310003734!2d80.04183571069882!3d12.823032987426656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f712b82a78d9%3A0xfdb944a3aee53831!2sSRM%20Institute%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sin!4v1736587701785!5m2!1sen!2sin"
        ></iframe>
      </div>
    </div>
  );
}
