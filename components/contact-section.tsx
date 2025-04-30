"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))

    // Clear error for this field when user types
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [id]: ""
      }))
    }
  }

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: "", email: "", message: "" }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Call API route to send Slack notification
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
        // Reset form after successful submission
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-[#f2f2f2]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl text-center mb-16">Get your free website</h2>
        {/* <Sparkles /> */}
        {/* add before and after text */}

        <div className="w-3/5 mx-auto">
          {/* <div>
            <motion.p
              className="text-xl md:text-2xl leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to build a website that lasts? Let's talk about how we can help your brand create meaningful
              connections in Berlin and beyond.
            </motion.p>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-light mb-2">Email</p>
              <a href="mailto:hello@studiohaus.de" className="text-2xl hover:opacity-60 transition-opacity">
                hello@studiohaus.de
              </a>

              <p className="text-xl font-light mt-8 mb-2">Phone</p>
              <a href="tel:+493012345678" className="text-2xl hover:opacity-60 transition-opacity">
                +49 (30) 123-45678
              </a>

              <p className="text-xl font-light mt-8 mb-2">Address</p>
              <address className="text-2xl not-italic">
                Torstraße 123
                <br />
                10119 Berlin
                <br />
                Germany
              </address>
            </motion.div>
          </div> */}

          <motion.form
            className="grid gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-xl mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-4 bg-white border text-xl focus:outline-none focus:ring-2 focus:ring-[#333] ${errors.name ? 'border-red-500' : 'border-transparent'}`}
              />
              {errors.name && <p className="mt-1 text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xl mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-4 bg-white border text-xl focus:outline-none focus:ring-2 focus:ring-[#333] ${errors.email ? 'border-red-500' : 'border-transparent'}`}
              />
              {errors.email && <p className="mt-1 text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-xl mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full p-4 bg-white border text-xl focus:outline-none focus:ring-2 focus:ring-[#333] ${errors.message ? 'border-red-500' : 'border-transparent'}`}
              ></textarea>
              {errors.message && <p className="mt-1 text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 py-4 px-8 bg-[#333] text-white text-xl hover:bg-[#555] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
