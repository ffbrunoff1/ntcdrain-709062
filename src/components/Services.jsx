import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Shield, Zap, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react'

export default function Services() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const features = [
    'Camadas de geossintéticos altamente resistentes',
    'Proteção contra infiltração indesejada',
    'Ideal para túneis e rodovias',
    'Instalação rápida e econômica',
    'Durabilidade comprovada em campo',
    'Redução significativa de custos operacionais'
  ]

  const applications = [
    {
      title: 'Túnels e Subterrâneos',
      description: 'Proteção eficiente contra infiltrações em obras subterrâneas',
      icon: Layers
    },
    {
      title: 'Rodovias e Viadutos',
      description: 'Drenagem técnica para infraestrutura rodoviária',
      icon: Shield
    },
    {
      title: 'Estruturas de Contenção',
      description: 'Soluções para muros de arrimo e obras de contenção',
      icon: Zap
    }
  ]

  const productImages = [
    {
      src: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754345451553_fv642mi4t4_ntc-drain-td-2-768x1024.jpg",
      alt: "Geocomposto NTCDrain TD-2"
    },
    {
      src: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754345452627_prxfxzvsrs_ntc-drain-1l-1.jpg",
      alt: "NTCDrain 1L Sistema"
    },
    {
      src: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754345453551_6dnjcjl9tbv_geocomposto-ntc-drain.jpg",
      alt: "Geocomposto NTCDrain Completo"
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
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
            <Layers className="w-4 h-4 mr-2" />
            Nossos Produtos
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Geocomposto Drenante</span> NTCDrain
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            A solução ideal para gerenciamento eficiente de águas subterrâneas em projetos de engenharia civil
          </p>
        </motion.div>

        {/* Main Product Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Product Images */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={productImages[0].src}
                alt={productImages[0].alt}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {productImages.slice(1).map((img, index) => (
                <motion.img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Tecnologia Avançada em Drenagem
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                O Geocomposto Drenante NTCDrain é composto por camadas de geossintéticos altamente resistentes, atuando como uma barreira eficaz contra a infiltração indesejada, garantindo a proteção e durabilidade de obras como túneis, rodovias e estruturas de contenção.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Além de otimizar a drenagem, o NTCDrain é fácil de instalar, reduzindo custos e tempo de execução. Escolha NTCDrain para assegurar qualidade e desempenho superior em seus projetos.
              </p>
            </div>

            {/* Features List */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="btn-primary inline-flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              
              <motion.a
                href="tel:+5511524242800"
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-2 w-5 h-5" />
                Ligar Agora
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Applications Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Principais Aplicações
            </h3>
            <p className="text-lg text-gray-600">
              Soluções versáteis para diversos tipos de projetos de infraestrutura
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{ rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <app.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {app.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed">
                  {app.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA Section */}
        <motion.div
          className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Pronto para Transformar seu Projeto?
            </h3>
            
            <p className="text-xl mb-8 opacity-90">
              Entre em contato conosco e descubra como o Geocomposto Drenante NTCDrain pode otimizar suas soluções de drenagem
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="mr-2 w-5 h-5" />
                Solicitar Orçamento
              </motion.button>
              
              <motion.a
                href="tel:+551952424280"
                className="bg-white/20 text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="mr-2 w-5 h-5" />
                (11) 5242-4280
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}