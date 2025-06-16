
import { Mail, Phone, MapPin, ExternalLink, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ContactPage = () => {
  const faqs = [
    {
      question: "What age groups are your programs suitable for?",
      answer: "Our programs are designed for students from grades 6-12, typically ages 11-18. However, we can customize content for younger or older audiences based on specific requirements."
    },
    {
      question: "How long are the theater shows and workshop sessions?",
      answer: "Our theater shows typically run for 45-60 minutes, while workshop sessions can range from 2-4 hours depending on the program. We can adjust timings based on your school's schedule."
    },
    {
      question: "Do you travel to schools outside Delhi NCR?",
      answer: "Yes, we do! While we're based in Delhi NCR, we travel across India to bring our programs to schools. Travel costs may apply for locations outside the NCR region."
    },
    {
      question: "What subjects do your programs cover?",
      answer: "Our programs primarily focus on History and Social Sciences, covering topics like ancient civilizations, freedom struggle, civics, and cultural heritage through engaging theatrical performances."
    },
    {
      question: "How many students can participate in a single session?",
      answer: "We can accommodate anywhere from 50 to 500 students per session, depending on the venue and program type. For workshops, we prefer smaller groups of 30-50 students for better interaction."
    },
    {
      question: "What are your fees for different programs?",
      answer: "Our fees vary based on the program type, duration, location, and number of participants. Please contact us through the Google Form below for a detailed quote."
    },
    {
      question: "Do you provide teacher training programs?",
      answer: "Yes! We offer comprehensive teacher training programs to help educators incorporate theater-based learning techniques in their teaching methodology."
    },
    {
      question: "How far in advance should we book your programs?",
      answer: "We recommend booking at least 2-3 weeks in advance to ensure availability. However, we try our best to accommodate last-minute requests based on our schedule."
    }
  ];

  return (
    <div className="pt-20 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-hd-teal to-hd-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-trajan text-4xl md:text-5xl text-white mb-4">CONTACT US</h1>
          <div className="h-1 w-20 bg-hd-orange mx-auto"></div>
          <p className="text-white/90 text-lg mt-6 max-w-2xl mx-auto">
            Ready to bring history to life in your classroom? Let's connect and explore how we can make learning an unforgettable experience!
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group hover-lift">
              <div className="bg-hd-orange/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-hd-orange group-hover:text-white transition-all duration-300">
                <Mail size={32} className="text-hd-orange group-hover:text-white" />
              </div>
              <h3 className="font-garamond text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">For inquiries and bookings</p>
              <a href="mailto:historydiaries2016@gmail.com" className="text-hd-orange hover:text-hd-orange/80 font-medium">
                historydiaries2016@gmail.com
              </a>
            </div>
            
            <div className="text-center group hover-lift">
              <div className="bg-hd-blue/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-hd-blue group-hover:text-white transition-all duration-300">
                <Phone size={32} className="text-hd-blue group-hover:text-white" />
              </div>
              <h3 className="font-garamond text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Speak directly with our team</p>
              <p className="text-hd-blue font-medium">+91 99684 83564</p>
            </div>
            
            <div className="text-center group hover-lift">
              <div className="bg-hd-teal/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-hd-teal group-hover:text-white transition-all duration-300">
                <MapPin size={32} className="text-hd-teal group-hover:text-white" />
              </div>
              <h3 className="font-garamond text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">We're based in</p>
              <p className="text-hd-teal font-medium">Delhi NCR, India</p>
            </div>
          </div>

          {/* Google Forms Button */}
          <div className="text-center mb-20">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
              <h2 className="font-trajan text-3xl mb-4 text-gray-800">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Fill out our inquiry form and we'll get back to you within 24 hours with program details and pricing.
              </p>
              <a
                href="https://forms.google.com/your-form-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-hd-orange to-hd-orange/80 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Fill Inquiry Form
                <ExternalLink size={20} className="ml-2" />
              </a>
              <p className="text-sm text-gray-500 mt-4">
                * Please replace the Google Forms link above with your actual form URL
              </p>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-trajan text-3xl md:text-4xl mb-4 text-gray-800">
                Frequently Asked Questions
              </h2>
              <div className="h-1 w-20 bg-hd-orange mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg">
                Have questions? We've got answers! Check out our most commonly asked questions below.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200">
                      <span className="font-garamond text-lg font-medium text-gray-800 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-hd-teal/10 to-hd-blue/10 rounded-2xl p-8 max-w-3xl mx-auto border border-hd-teal/20">
              <h3 className="font-trajan text-2xl mb-4 text-gray-800">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                We're here to help! Don't hesitate to reach out directly via email or phone. 
                Our team is passionate about making history come alive for your students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:historydiaries2016@gmail.com"
                  className="bg-hd-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-hd-orange/90 transition-colors duration-200 flex items-center justify-center"
                >
                  <Mail size={18} className="mr-2" />
                  Send Email
                </a>
                <a
                  href="tel:+919968483564"
                  className="bg-white text-hd-blue border-2 border-hd-blue px-6 py-3 rounded-full font-semibold hover:bg-hd-blue hover:text-white transition-all duration-200 flex items-center justify-center"
                >
                  <Phone size={18} className="mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
