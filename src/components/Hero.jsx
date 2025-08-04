import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Zap, Award, CheckCircle } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const benefits = [
    'Instalação rápida e fácil',
    'Redução de custos operacionais',
    'Durabilidade comprovada',
    'Resistência superior'
  ]

  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '500+', label: 'Projetos Executados' },
    { number: '100%', label: 'Satisfação do Cliente' }
  ]

  return (
    <section id="home" className="min-h-screen bg-gradient-hero pt-20 overflow-hidden">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Award className="w-4 h-4 mr-2" />
              Líder em Soluções Geotécnicas 
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Transforme seu <br />
                <span className="gradient-text">Projeto</span> com <br />
                NTCDrain
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Geocomposto drenante de alta performance para soluções eficientes de drenagem técnica em obras de infraestrutura
              </motion.p>
            </div>

            {/* Benefits List */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
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
              
              <motion.button
                onClick={() => scrollToSection('services')}
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="mr-2 w-5 h-5" />
                Conheça os Produtos
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Product Image */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754345451553_fv642mi4t4_ntc-drain-td-2-768x1024.jpg"
                alt="Geocomposto Drenante NTCDrain"
                className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-accent rounded-full opacity-20 blur-xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Feature Cards */}
            <motion.div
              className="absolute -left-4 top-1/4 bg-white rounded-lg shadow-lg p-4 max-w-xs"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-primary-600" />
                <div>
                  <div className="font-semibold text-gray-800">Alta Resistência</div>
                  <div className="text-sm text-gray-600">Durabilidade comprovada</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-1/4 bg-white rounded-lg shadow-lg p-4 max-w-xs"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <Zap className="w-8 h-8 text-accent-600" />
                <div>
                  <div className="font-semibold text-gray-800">Instalação Rápida</div>
                  <div className="text-sm text-gray-600">Economia de tempo</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}