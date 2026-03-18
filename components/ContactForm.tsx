"use client";

import { useEffect, useRef, useState } from "react";
import toast from 'react-hot-toast';

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    email: "",
    mobile: "",
    country: "+91",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  // Check rate limit on component mount
  useEffect(() => {
    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      const lastSubmission = localStorage.getItem('lastFormSubmission');
      if (lastSubmission) {
        const timeDiff = Date.now() - parseInt(lastSubmission);
        const timeLeft = 7200000 - timeDiff; // 2 hours in milliseconds
        
        if (timeLeft > 0) {
          setTimeLeft(Math.ceil(timeLeft / 60000)); // Convert to minutes
        }
      }
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check rate limit
    if (typeof window !== 'undefined') {
      const lastSubmission = localStorage.getItem('lastFormSubmission');
      if (lastSubmission) {
        const timeDiff = Date.now() - parseInt(lastSubmission);
        if (timeDiff < 7200000) { // 2 hours
          const timeLeft = Math.ceil((7200000 - timeDiff) / 60000);
          setSubmitMessage(`Please wait ${timeLeft} minutes before submitting again.`);
          return;
        }
      }
    }

    setIsSubmitting(true);
    setSubmitMessage("");
    // Show loading toast
    const loadingToast = toast.loading('Submitting your message...');

    try {
      // Create FormData object to match your Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append('Name', formData.name);
      formDataToSend.append('City', formData.city);
      formDataToSend.append('Email', formData.email);
      formDataToSend.append('Mobile', `${formData.country} ${formData.mobile}`);
      formDataToSend.append('Country', formData.country);
      formDataToSend.append('Message', formData.message);

      // Submit to Google Apps Script
      const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL || 'https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        // Save submission time
        if (typeof window !== 'undefined') {
          localStorage.setItem('lastFormSubmission', Date.now().toString());
        }

        setSubmitMessage("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          city: "",
          email: "",
          mobile: "",
          country: "+91",
          message: "",
        });
        
        // Show success message
        toast.success('Your form has been successfully submitted. We truly appreciate your interest and will be in touch with you shortly.', { id: loadingToast });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      toast.error('Error! Failed to submit form. Please try again.', { id: loadingToast });
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 space-y-4 scroll-reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-[#60A5FA]">Still Confused? </span>
            <span className="text-[#3B82F6]">We're Here to Help</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Have questions about our programs? Want to know how StudyVerse can
            help you achieve your JEE/NEET goals? Reach out to us and we'll get
            back to you soon.
          </p>
        </div>

        <div className="max-w-3xl sm:max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="scroll-reveal">
            <div className="p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              
              {/* GRID FORM */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-3 sm:px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm sm:text-base"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="Your city"
                    className="w-full px-3 sm:px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm sm:text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-3 sm:px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm sm:text-base"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile No.
                  </label>
                  <div className="flex gap-1.5 sm:gap-2">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-16 sm:w-20 px-1.5 sm:px-2 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-xs sm:text-sm flex-shrink-0"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+971">+971</option>
                      <option value="+61">+61</option>
                      <option value="+86">+86</option>
                    </select>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      required
                      className="min-w-0 flex-1 px-2 sm:px-3 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-sm sm:text-base"
                      placeholder="XXXXX-XXXXX"
                    />
                  </div>
                </div>

                {/* Message (Full Width) */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your questions..."
                    className="w-full px-3 sm:px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 resize-none text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="mt-4 sm:mt-6 lg:mt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full max-w-xs sm:max-w-md lg:w-4/5 py-3 sm:py-4 px-4 sm:px-6 bg-gradient-to-r from-green-600 to-emerald-800 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}