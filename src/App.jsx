import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, AlertCircle, Shield, Gavel, BarChart3, Users, Lock, FileText } from 'lucide-react'
import resumen from '../docs_lozlui/01_resumen_lozlui.md?raw'
import marco from '../docs_lozlui/02_marco_lozlui.md?raw'
import delitos from '../docs_lozlui/03_delitos_lozlui.md?raw'
import comparacion from '../docs_lozlui/04_comparacion_lozlui.md?raw'
import responsabilidades from '../docs_lozlui/05_responsabilidades_lozlui.md?raw'
import datos from '../docs_lozlui/06_datos_lozlui.md?raw'
import conclusiones from '../docs_lozlui/07_conclusiones_lozlui.md?raw'

const slides = [
  {
    id: 0,
    title: 'El Mayor Hackeo de la Historia',
    subtitle: 'Yahoo: 3 Mil Millones de Cuentas Comprometidas',
    icon: AlertCircle,
    color: 'from-red-600 to-orange-600',
    content: '3,000,000,000',
    description: 'Usuarios afectados en agosto de 2013',
    highlights: ['1 Mil Millones (diciembre 2016)', '3 Mil Millones (octubre 2017)', 'Mayor filtración de datos'],
  },
  {
    id: 1,
    title: 'Lo Que Pasó',
    subtitle: 'Brechas de Seguridad Masiva',
    icon: Shield,
    color: 'from-yellow-600 to-orange-500',
    content: 'Datos Robados',
    description: 'Nombres, emails, teléfonos, fechas de nacimiento, contraseñas cifradas',
    highlights: ['Sin contraseñas en texto claro', 'Sin datos bancarios', 'Información personal masiva'],
  },
  {
    id: 2,
    title: 'Marco Legal Internacional',
    subtitle: 'Regulaciones Aplicadas',
    icon: Gavel,
    color: 'from-blue-600 to-cyan-500',
    content: 'Estados Unidos & Reino Unido',
    description: 'SEC (Securities Exchange Commission) y ICO (Information Commissioner\'s Office)',
    highlights: ['SEC: Violación Securities Act', 'ICO: £250,000 de multa', 'Data Protection Act'],
  },
  {
    id: 3,
    title: 'Tipificación de Delitos',
    subtitle: 'Ley 21.459 - Delitos Informáticos (Chile)',
    icon: FileText,
    color: 'from-purple-600 to-pink-500',
    content: 'Múltiples Cargos',
    description: 'Acceso ilícito, robo de datos, fraude informático, falsificación digital',
    highlights: ['Artículo 2: Acceso Ilícito', 'Artículo 6: Receptación de Datos', 'Artículo 7: Fraude Informático'],
  },
  {
    id: 4,
    title: 'Comparación de Casos',
    subtitle: 'Otros Hackeos Históricos',
    icon: BarChart3,
    color: 'from-green-600 to-emerald-500',
    content: 'Equifax vs Target vs Yahoo',
    description: 'Análisis comparativo de impacto y respuesta regulatoria',
    highlights: ['Equifax: 147M registros (2017)', 'Target: 40M tarjetas (2013)', 'Yahoo: 3B cuentas (2013)'],
  },
  {
    id: 5,
    title: 'Responsabilidades Corporativas',
    subtitle: 'Obligaciones Incumplidas',
    icon: Users,
    color: 'from-indigo-600 to-blue-500',
    content: 'Deberes Legales',
    description: 'Transparencia, seguridad, notificación oportuna',
    highlights: ['Falta de divulgación', 'Demoras en comunicación', 'Reducción de precio de compra'],
  },
  {
    id: 6,
    title: 'Datos y Evidencia',
    subtitle: 'Cifras Clave del Incidente',
    icon: BarChart3,
    color: 'from-teal-600 to-cyan-500',
    content: 'Impacto Cuantificable',
    description: 'Cronología y magnitud del ataque',
    highlights: ['Agosto 2013: Ataque inicial', 'Octubre 2017: Revelación final', '-$350M en valor de compra'],
  },
  {
    id: 7,
    title: 'Conclusiones',
    subtitle: 'Lecciones Aprendidas',
    icon: Lock,
    color: 'from-rose-600 to-red-500',
    content: 'Cambio Necesario',
    description: 'Transparencia corporativa como deber moral y estrategia empresarial',
    highlights: ['Seguridad como prioridad', 'Transparencia regulatoria', 'Confianza del usuario'],
  },
]

function App() {
  const [index, setIndex] = useState(0)
  const slide = slides[index]
  const IconComponent = slide.icon

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide()
      }
      if (event.key === 'ArrowLeft') {
        prevSlide()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [index])

  const prevSlide = () => {
    setIndex((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const nextSlide = () => {
    setIndex((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="flex h-screen w-full flex-col">
        {/* Header Minimal */}
        <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-8 py-4 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <h1 className="text-lg font-semibold text-slate-100">LOZLUI</h1>
          </div>
          <div className="text-sm font-medium text-slate-400">
            {index + 1} <span className="text-slate-600">/</span> {slides.length}
          </div>
        </header>

        {/* Main Content - Horizontal Layout */}
        <main className="flex-1 flex items-center justify-center overflow-hidden px-6 py-8">
          <div className={`relative w-full h-full max-w-7xl rounded-3xl border border-slate-700 bg-gradient-to-br ${slide.color} p-0.5 shadow-2xl`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 flex items-center gap-12">
              {/* Left Side - Icon & Title */}
              <div className="flex flex-col items-start justify-center gap-6 w-2/5 flex-shrink-0">
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${slide.color}`}>
                  <IconComponent className="w-16 h-16 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white mb-2">{slide.title}</h2>
                  <p className="text-lg text-slate-300">{slide.subtitle}</p>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex flex-col justify-center gap-8 w-3/5 flex-shrink-0">
                {/* Big Number / Content */}
                <div className="bg-slate-950/80 border border-slate-700 rounded-2xl p-8">
                  <p className="text-sm uppercase tracking-widest text-slate-400 mb-3">{slide.description}</p>
                  <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">{slide.content}</p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-3 gap-3">
                  {slide.highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-slate-900/60 border border-slate-700 rounded-lg p-3 hover:bg-slate-800/80 transition">
                      <p className="text-sm text-slate-300 leading-tight">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Navigation */}
        <footer className="flex items-center justify-between border-t border-slate-800 bg-slate-950/80 px-8 py-5 backdrop-blur-lg">
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                className={`h-2 rounded-full transition-all ${idx === index ? 'bg-cyan-400 w-8' : 'bg-slate-700 w-2 hover:bg-slate-600'}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-cyan-500/50"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
