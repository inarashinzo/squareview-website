import { Helmet } from 'react-helmet-async'
import { Services } from '@/components/Services'
import { ContactInfo, ContactForm } from '@/components/ContactForm'

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services - SquareView Technical Services</title>
        <meta name="description" content="Explore our comprehensive range of interior design, renovation, HVAC, and electromechanical services across the UAE." />
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technical solutions for residential, commercial, and industrial spaces across the UAE
          </p>
        </div>
      </section>

      <Services />

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="section-title mt-2">The SquareView Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Expert Team', description: 'Highly skilled professionals with years of industry experience' },
              { title: 'Quality Assurance', description: 'Rigorous quality control at every stage of the project' },
              { title: 'On-Time Delivery', description: 'Projects completed on schedule, every time' },
              { title: 'Competitive Pricing', description: 'Transparent pricing with value for money' }
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="section-title mt-2">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'We discuss your needs, vision, and budget' },
              { step: '02', title: 'Planning', description: 'Detailed project planning and design development' },
              { step: '03', title: 'Execution', description: 'Professional implementation with regular updates' },
              { step: '04', title: 'Delivery', description: 'Final inspection and client satisfaction confirmation' }
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200" />
                )}
                <div className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get Started</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">Ready to Transform Your Space?</h2>
              <p className="text-gray-400 mb-8">
                Contact us today for a free consultation and discover how we can bring your vision to life.
              </p>
              <ContactInfo />
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
