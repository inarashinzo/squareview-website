import { Award, Users, Clock, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export function About() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '500+', label: 'Projects Completed' },
    { icon: <Clock className="w-8 h-8" />, value: '10+', label: 'Years Experience' },
    { icon: <Award className="w-8 h-8" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Shield className="w-8 h-8" />, value: '100%', label: 'Qualified Team' },
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every project is delivered to the highest standards.'
    },
    {
      title: 'Client Focus',
      description: 'Your vision is our priority. We listen, understand, and deliver beyond expectations.'
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of industry trends to provide cutting-edge solutions.'
    },
    {
      title: 'Reliability',
      description: 'On time, on budget, every time. We deliver what we promise.'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"
                  alt="Interior Design"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80"
                  alt="Office Renovation"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80"
                  alt="HVAC"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=400&q=80"
                  alt="Electro Mechanical"
                  className="rounded-xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-white rounded-xl p-6 shadow-xl">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-6">
              Your Trusted Partner for Technical Services in UAE
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              SquareView Technical Services has been at the forefront of interior design, renovation, 
              and technical services across the UAE. Our commitment to excellence and attention to detail 
              has made us a trusted partner for hundreds of satisfied clients.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From concept to execution, our team of skilled professionals works tirelessly to transform 
              your vision into reality. Whether it's a complete home renovation, office fit-out, or 
              maintaining complex HVAC and electromechanical systems, we deliver results that exceed expectations.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {values.map((value) => (
                <div key={value.title} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">{value.title}</h4>
                    <p className="text-sm text-gray-500">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/contact">
              <Button size="lg">
                Work With Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
