import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  })

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Store in localStorage (simulating backend)
      const existingInquiries = JSON.parse(localStorage.getItem('contact-inquiries') || '[]')
      const newInquiry = {
        ...data,
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
        status: 'new'
      }
      localStorage.setItem('contact-inquiries', JSON.stringify([newInquiry, ...existingInquiries]))
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      return newInquiry
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] })
      setIsSubmitted(true)
      reset()
    }
  })

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data)
  }

  const services = [
    'Interior Design',
    'Home & Office Renovation',
    'Annual Maintenance Contract (AMC)',
    'HVAC Services',
    'Electro Mechanical',
    'General Inquiry'
  ]

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="py-16 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4">Message Sent Successfully!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for contacting SquareView Technical Services. Our team will get back to you within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Send Us a Message</CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="John Doe"
                className={errors.name ? 'border-red-500' : ''}
                {...register('name')}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                placeholder="+971 50 000 0000"
                className={errors.phone ? 'border-red-500' : ''}
                {...register('phone')}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className={errors.email ? 'border-red-500' : ''}
              {...register('email')}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Interest *</Label>
            <select
              id="service"
              className={`flex h-12 w-full rounded-lg border bg-white px-4 py-2 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                errors.service ? 'border-red-500' : 'border-gray-300'
              }`}
              {...register('service')}
            >
              <option value="">Select a service...</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
            {errors.service && (
              <p className="text-sm text-red-500">{errors.service.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Your Message *</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your project requirements..."
              className={errors.message ? 'border-red-500' : ''}
              {...register('message')}
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Phone */}
      <Card>
        <CardContent className="p-6 flex items-start space-x-4">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">Phone</h4>
            <p className="text-gray-600">+971 50 000 0000</p>
            <p className="text-gray-500 text-sm">Available 24/7 for emergencies</p>
          </div>
        </CardContent>
      </Card>

      {/* Email */}
      <Card>
        <CardContent className="p-6 flex items-start space-x-4">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">Email</h4>
            <p className="text-gray-600">info@squareview.ae</p>
            <p className="text-gray-500 text-sm">We reply within 24 hours</p>
          </div>
        </CardContent>
      </Card>

      {/* Location */}
      <Card>
        <CardContent className="p-6 flex items-start space-x-4">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">Location</h4>
            <p className="text-gray-600">Dubai, United Arab Emirates</p>
            <p className="text-gray-500 text-sm">Serving all across UAE</p>
          </div>
        </CardContent>
      </Card>

      {/* Working Hours */}
      <Card>
        <CardContent className="p-6 flex items-start space-x-4">
          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h4 className="font-semibold text-primary mb-1">Working Hours</h4>
            <p className="text-gray-600">Sat - Thu: 9:00 AM - 7:00 PM</p>
            <p className="text-gray-500 text-sm">Friday: Closed</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
