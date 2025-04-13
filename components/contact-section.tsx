"use client"

import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-[#f2f2f2]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl text-center mb-16">Get your FREE WEBSITE</h2>

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
          >
            <div>
              <label htmlFor="name" className="block text-xl mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 bg-white border-none text-xl focus:outline-none focus:ring-2 focus:ring-[#333]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xl mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 bg-white border-none text-xl focus:outline-none focus:ring-2 focus:ring-[#333]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xl mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-4 bg-white border-none text-xl focus:outline-none focus:ring-2 focus:ring-[#333]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 py-4 px-8 bg-[#333] text-white text-xl hover:bg-[#555] transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
