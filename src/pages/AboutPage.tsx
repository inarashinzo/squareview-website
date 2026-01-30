import { Helmet } from 'react-helmet-async'
import { About } from '@/components/About'
import { ContactInfo, ContactForm } from '@/components/ContactForm'

export function AboutPage() {
  const team = [
    { name: 'Ahmed Al-Rashid', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
    { name: ' Fatima Hassan', role: 'Head of Interior Design', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
    { name: 'Mohammed Al-Sayed', role: 'Technical Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
    { name: 'Aisha Al-Khalifa', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' }
  ]

  const timeline = [
    { year: '2014', title: 'Company Founded', description: 'Started with a vision to transform spaces across the UAE' },
    { year: '2016', title: '100 Projects', description: 'Reached milestone of 100 completed projects' },
    { year: '2019', title: 'Expansion', description: 'Expanded services to include HVAC and electromechanical' },
    { year: '2024', title: '500+ Projects', description: 'Celebrated completing over 500 successful projects' }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - SquareView Technical Services</title>
        <meta name="description" content="Learn about SquareView Technical Services - a leading UAE company specializing in interior design, renovation, HVAC, and electromechanical services." />
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A decade of excellence in transforming spaces across the UAE
          </p>
        </div>
      </section>

      <About />

      {/* Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="section-title mt-2">A Decade of Excellence</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item) => (
                <div key={item.year} className="flex items-center space-x-8">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-2xl font-bold text-accent">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-accent rounded-full" />
                  <div className="flex-grow bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-xl font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="section-title mt-2">Meet Our Experts</h2>
            <p className="section-subtitle mx-auto">
              A team of dedicated professionals committed to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative mx-auto w-48 h-48 mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-6">Let's Work Together</h2>
              <p className="text-gray-400 mb-8">
                Have a project in mind? We'd love to hear from you. Get in touch and let's make something great.
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
