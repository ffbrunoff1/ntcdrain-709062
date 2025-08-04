import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Produtos', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(11) 5242-4280',
      href: 'tel:+551152424280'
    },
    {
      icon: Phone,
      text: '(19) 98361-0020',
      href: 'tel:+5519983610020'
    },
    {
      icon: Mail,
      text: 'contato@ntcbrasil.com.br',
      href: 'mailto:contato@ntcbrasil.com.br'
    },
    {
      icon: MapPin,
      text: 'Atendimento: Todo o Brasil',
      href: null
    }
  ]

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="flex items-center cursor-pointer"
                onClick={scrollToTop}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754345459730_0.png"
                  alt="NTCDrain"
                  className="h-12 w-auto filter invert"
                />
              </motion.div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                A NTCDrain é especializada em geocompostos drenantes para soluções eficientes de drenagem técnica em obras de infraestrutura. Garantia de qualidade e desempenho superior.
              </p>
              
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <info.icon className="w-5 h-5 text-primary-400" />
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-300">{info.text}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-lg font-bold text-white">
                Links Rápidos
              </h3>
              
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gray-300 hover:text-primary-400 transition-colors text-left"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-lg font-bold text-white">
                Fale Conosco
              </h3>
              
              <p className="text-gray-300">
                Entre em contato para solicitar um orçamento personalizado para seu projeto.
              </p>
              
              <div className="space-y-3">
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Solicitar Orçamento
                </motion.button>
                
                <motion.a
                  href="https://wa.me/5519983610020?text=Olá! Gostaria de saber mais sobre o Geocomposto Drenante NTCDrain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 inline-flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2023 NTCDrain. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Criado com{' '}
                <a
                  href="https://papum.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Papum
                </a>
              </p>
            </div>
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-900"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.2 }
              }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute -top-24 -right-24 w-48 h-48 bg-primary-600/10 rounded-full blur-3xl"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-600/10 rounded-full blur-3xl"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </footer>
  )
}