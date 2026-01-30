import { Helmet } from 'react-helmet-async'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { ContactInfo, ContactForm } from '@/components/ContactForm'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from '@tanstack/react-router'
import { Star } from 'lucide-react'

export function HomePage() {
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'Office Manager',
      company: 'Tech Solutions LLC',
      content: 'SquareView transformed our office space completely. Professional, timely, and the results exceeded our expectations. Highly recommended!',
      rating: 5
    },
    {
      name: 'Sarah Al-Mansoori',
      role: 'Homeowner',
      content: 'Our home renovation project was handled with utmost care and expertise. The team was professional and the finish quality is outstanding.',
      rating: 5
    },
    {
      name: 'Mohammed Rashid',
      role: 'Retail Store Owner',
      content: 'Excellent HVAC maintenance service. They keep our store comfortable year-round with minimal disruption to our business operations.',
      rating: 5
    }
  ]

  const ctaServices = [
    { name: 'Interior Design', to: '/services', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80' },
    { name: 'Renovation', to: '/services', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80' },
    { name: 'HVAC Services', to: '/services', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80' }
  ]

  return (
    <>
      <Helmet>
        <title>SquareView Technical Services - UAE Interior Design & Technical Services</title>
        <meta name="description" content="Transform your space with SquareView Technical Services. Expert interior design, renovation, HVAC, and electromechanical services across the UAE." />
      </Helmet>

      <Hero />

      {/* Quick Services Preview */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive technical services to transform and maintain your spaces
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ctaServices.map((service) => (
              <Link key={service.name} to={service.to}>
                <Card className="group cursor-pointer overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Services />

      <About />

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="section-title mt-2">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    {testimonial.role && (
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">Get In Touch</h2>
              <p className="text-gray-400 mb-8">
                Ready to start your project? Contact us today for a free consultation and quote.
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
