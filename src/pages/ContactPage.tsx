import { Helmet } from 'react-helmet-async'
import { ContactInfo, ContactForm } from '@/components/ContactForm'
import { MapPin } from 'lucide-react'

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - SquareView Technical Services</title>
        <meta name="description" content="Contact SquareView Technical Services for interior design, renovation, HVAC, and electromechanical services in UAE. Call us at +971 50 000 0000." />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-primary">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80)'
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with us for all your interior design and technical service needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-4xl font-bold text-primary mt-2 mb-6">Let's Discuss Your Project</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Whether you're looking to renovate your office, design your dream home, or need 
                maintenance services, our team is here to help. Reach out to us today!
              </p>
              <ContactInfo />

              {/* Map placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg h-64 bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-accent mx-auto mb-2" />
                    <p className="text-gray-500">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="section-title mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What areas do you serve in the UAE?',
                answer: 'We serve all areas across the UAE including Dubai, Abu Dhabi, Sharjah, and surrounding emirates.'
              },
              {
                question: 'Do you offer free consultations?',
                answer: 'Yes, we offer free initial consultations for all our services. Contact us to schedule yours.'
              },
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. We provide detailed timelines during the consultation phase.'
              },
              {
                question: 'Do you provide AMC services?',
                answer: 'Yes, we offer comprehensive Annual Maintenance Contracts for residential and commercial properties.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept various payment methods including bank transfers and checks. Payment terms are discussed during project planning.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-primary mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
