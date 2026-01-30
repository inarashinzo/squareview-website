import { useQuery } from '@tanstack/react-query'
import { 
  Paintbrush, 
  Building2, 
  CalendarCheck, 
  Wind, 
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

interface Service {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: React.ReactNode
  features: string[]
  image: string
}

const servicesData: Service[] = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    shortDescription: 'Transform your space with creativity and functionality',
    fullDescription: 'Our expert interior design team brings creativity and functionality together to create spaces that reflect your unique style. From concept development to final execution, we ensure every detail matches your vision.',
    icon: <Paintbrush className="w-8 h-8" />,
    features: ['Custom design concepts', 'Space planning', 'Material selection', '3D visualizations', 'Furniture procurement'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80'
  },
  {
    id: 'renovation',
    title: 'Home & Office Renovation',
    shortDescription: 'Complete transformation for offices, retail, and homes',
    fullDescription: 'We excel in providing top-notch renovation services for offices, retail shops, and homes. Our skilled team transforms spaces into functional and aesthetically pleasing environments.',
    icon: <Building2 className="w-8 h-8" />,
    features: ['Office renovation', 'Retail fit-outs', 'Home remodeling', 'Structural changes', 'Complete overhauls'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80'
  },
  {
    id: 'amc',
    title: 'Annual Maintenance Contract (AMC)',
    shortDescription: 'Comprehensive maintenance for your properties',
    fullDescription: 'Our AMC services ensure your property remains in optimal condition year-round. We provide scheduled maintenance, emergency support, and proactive care for all your technical needs.',
    icon: <CalendarCheck className="w-8 h-8" />,
    features: ['Scheduled inspections', 'Priority support', 'Cost optimization', 'Comprehensive coverage', '24/7 helpline'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80'
  },
  {
    id: 'hvac',
    title: 'HVAC Services',
    shortDescription: 'Heating, ventilation, and air conditioning solutions',
    fullDescription: 'We take pride in providing the best HVAC services in town. Our skilled team ensures optimal comfort and air quality in your spaces through expert installation, maintenance, and repair.',
    icon: <Wind className="w-8 h-8" />,
    features: ['Installation', 'Regular maintenance', 'Repair services', 'System optimization', 'Energy efficiency'],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80'
  },
  {
    id: 'electro-mechanical',
    title: 'Electro Mechanical',
    shortDescription: 'System operation, quality, and reliability',
    fullDescription: 'Excellence is our standard. We offer the best electromechanical services, combining expertise and innovation to ensure seamless operation of your systems with unparalleled quality and reliability.',
    icon: <Zap className="w-8 h-8" />,
    features: ['System installation', 'Quality assurance', 'Reliability testing', 'Preventive maintenance', 'Technical support'],
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=600&q=80'
  }
]

export function Services() {
  const { data: services } = useQuery({
    queryKey: ['services'],
    queryFn: async () => servicesData,
    initialData: servicesData
  })

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="section-title mt-2">Complete Technical Solutions</h2>
          <p className="section-subtitle mx-auto">
            From design to maintenance, we offer comprehensive services to transform and maintain your spaces across the UAE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className={`card card-hover group ${index === 4 ? 'lg:col-span-3 lg:max-w-2xl lg:mx-auto' : ''}`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-6">{service.fullDescription}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white transition-colors">
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg">
              View All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
