// @flow strict
'use client';

import { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import { toast } from 'react-toastify'; // For showing success/error messages

function ContactForm() {
  const [input, setInput] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input),
      });

      if (res.ok) {
        toast.success('Message sent successfully!');
        setInput({ name: '', email: '', subject: '', message: '' }); // Clear the form
      } else {
        const error = await res.json();
        toast.error(error.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = "bg-[#101123] border border-[#25213b] rounded-lg px-4 py-2.5 w-full text-white focus:outline-none focus:ring-2 focus:ring-[#16f2b3]";

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
      <form onSubmit={handleSendMail}>
        {/* Form fields remain the same */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-400">Name <span className="text-pink-500">*</span></label>
              <input type="text" name="name" placeholder="Your name" value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} className={`${inputStyle} mt-2`} required />
            </div>
            <div>
              <label className="text-sm text-gray-400">Email <span className="text-pink-500">*</span></label>
              <input type="email" name="email" placeholder="your.email@example.com" value={input.email} onChange={(e) => setInput({ ...input, email: e.target.value })} className={`${inputStyle} mt-2`} required />
            </div>
        </div>
        <div className="mt-6">
            <label className="text-sm text-gray-400">Subject <span className="text-pink-500">*</span></label>
            <input type="text" name="subject" placeholder="What's this about?" value={input.subject} onChange={(e) => setInput({ ...input, subject: e.target.value })} className={`${inputStyle} mt-2`} required />
        </div>
        <div className="mt-6">
            <label className="text-sm text-gray-400">Message <span className="text-pink-500">*</span></label>
            <textarea name="message" placeholder="Tell me about your project or idea..." rows="5" value={input.message} onChange={(e) => setInput({ ...input, message: e.target.value })} className={`${inputStyle} mt-2`} required ></textarea>
        </div>
        
        <div className="mt-6">
          <button type="submit" disabled={isLoading} className="px-6 py-3 w-full text-base font-medium text-white bg-gradient-to-r from-violet-500 to-pink-500 rounded-lg hover:from-violet-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? 'Sending...' : <><FiSend /> Send Message</>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
