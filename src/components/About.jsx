import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, Trophy, Target, ArrowRight, Shield, Zap, Settings } from 'lucide-react'

export default function About() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const features = [
    {
      icon: Shield,
      title: 'Proteção Garantida',
      description: 'Barreira eficaz contra infiltração indesejada, protegendo suas estruturas com tecnologia de ponta.'
    },
    {
      icon: Zap,
      title: 'Instalação Eficiente',
      description: 'Processo de instalação rápido e simples, reduzindo custos e tempo de execução dos projetos.'
    },
    {
      icon: Settings,
      title: 'Tecnologia Avançada',
      description: 'Geossintéticos altamente resistentes com desempenho superior em condições adversas.'
    }
  ]

  const stats = [
    {
      icon: Building2,
      number: '500+',
      label: 'Projetos Concluídos',
      description: 'Obras de infraestrutura realizadas'
    },
    {
      icon: Users,
      number: '15+',
      label: 'Anos de Experiência',
      description: 'Atuando no mercado geotécnico'
    },
    {
      icon: Trophy,
      number: '100%',
      label: 'Satisfação Garantida',
      description: 'Clientes satisfeitos com nossos serviços'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
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
            <Target className="w-4 h-4 mr-2" />
            Sobre a NTCDrain
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Inovação em <span className="gradient-text">Geotecnia</span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            A NTCDrain é referência nacional em soluções de drenagem técnica, oferecendo geocompostos drenantes de alta qualidade para projetos de engenharia civil e infraestrutura.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Expertise em Soluções de Drenagem
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Especializados no desenvolvimento e fornecimento de geocompostos drenantes, oferecemos soluções técnicas avançadas para o gerenciamento eficiente de águas subterrâneas em diversos tipos de projetos.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossos produtos são desenvolvidos com tecnologia de ponta, garantindo durabilidade, resistência e facilidade de instalação para túneis, rodovias, estruturas de contenção e outras obras de infraestrutura.
              </p>
            </div>

            <motion.button
              onClick={() => scrollToSection('services')}
              className="btn-primary inline-flex items-center group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Conheça Nossos Produtos
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754345452627_prxfxzvsrs_ntc-drain-1l-1.jpg"
              alt="NTCDrain Geocomposto"
              className="w-full h-auto rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Decorative Elements */}
            <motion.div
              className="absolute -top-4 -left-4 w-20 h-20 bg-primary-200 rounded-full opacity-60 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-primary rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                
                <div className="text-lg font-semibold mb-2">
                  {stat.label}
                </div>
                
                <div className="text-sm opacity-90">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}