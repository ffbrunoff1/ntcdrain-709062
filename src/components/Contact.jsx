import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          recipientEmail: 'contato@ntcbrasil.com.br'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      details: ['(11) 5242-4280', '(19) 98361-0020'],
      action: 'tel:+551152424280'
    },
    {
      icon: Mail,
      title: 'E-mail',
      details: ['contato@ntcbrasil.com.br'],
      action: 'mailto:contato@ntcbrasil.com.br'
    },
    {
      icon: MapPin,
      title: 'Atendimento',
      details: ['Todo o Brasil'],
      action: null
    },
    {
      icon: Clock,
      title: 'Horário',
      details: ['Seg-Sex: 8h às 18h'],
      action: null
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Entre em Contato
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Solicite seu <span className="gradient-text">Orçamento</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Nossa equipe está pronta para desenvolver a melhor solução de drenagem para o seu projeto
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            className="bg-gray-50 rounded-3xl p-8 md:p-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Fale Conosco
              </h3>
              <p className="text-gray-600">
                Preencha o formulário abaixo ou entre em contato diretamente pelos nossos canais
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Seu nome completo"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="seu@email.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Descreva seu projeto e necessidades..."
                ></textarea>
              </motion.div>

              {/* Submit Status */}
              {submitStatus && (
                <motion.div
                  className={`flex items-center space-x-2 p-4 rounded-xl ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      <span>Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.</span>
                    </>
                  )}
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full btn-primary inline-flex items-center justify-center ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Informações de Contato
              </h3>
              <p className="text-gray-600">
                Entre em contato através dos canais abaixo ou preencha o formulário ao lado
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center"
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex}>
                            {info.action ? (
                              <a
                                href={info.action}
                                className="text-primary-600 hover:text-primary-700 transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              <span className="text-gray-600">{detail}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              className="bg-gradient-primary rounded-2xl p-6 text-white text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-lg font-bold mb-3">
                Atendimento Rápido via WhatsApp
              </h4>
              <p className="mb-4 opacity-90">
                Fale diretamente conosco para esclarecimento de dúvidas e orçamentos
              </p>
              <motion.a
                href="https://wa.me/5519983610020?text=Olá! Gostaria de saber mais sobre o Geocomposto Drenante NTCDrain"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-2 w-5 h-5" />
                (19) 98361-0020
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}