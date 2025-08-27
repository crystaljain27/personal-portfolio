// @flow strict
import { personalData } from '@/utils/data/personal-data';
import { MdAlternateEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from './contact-form';


function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative">
      <div className="relative rounded-2xl bg-gray-900/70 p-8 lg:p-12 border border-gray-800 shadow-lg shadow-black/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Get in Touch */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-400 leading-relaxed">
              I&apos;m always interested in discussing new opportunities, collaborations, or just having a chat about tech and development.
            </p>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                  <MdAlternateEmail size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-400">{personalData.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-teal-500">
                  <IoMdCall size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-gray-400">{personalData.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500 to-red-500">
                  <CiLocationOn size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-gray-400">{personalData.address}</p>
                </div>
              </div>
            </div>
          </div>


          {/* Right Column: Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactSection;
