import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, AlertCircle, Shield, Gavel, BarChart3, Users, Lock, FileText, ChevronDown, X } from 'lucide-react'

const slides = [
  {
    id: 0,
    title: 'El Mayor Hackeo de la Historia',
    subtitle: 'Yahoo: 3 Mil Millones de Cuentas',
    icon: AlertCircle,
    color: 'from-red-600 to-orange-600',
    content: '3B+',
    description: 'Cuentas comprometidas en 2013',
    buttons: [
      { label: 'Datos Robados', info: 'Nombres, direcciones de correo, números de teléfono, fechas de nacimiento, contraseñas cifradas con hash' },
      { label: 'Fechas Clave', info: 'Agosto 2013: Ataque. Diciembre 2016: Revelación de 1B cuentas. Octubre 2017: Revelación de 3B cuentas' },
      { label: 'Impacto', info: 'Mayor filtración de datos documentada. Reducción de $350M en precio de compra por Verizon' },
    ],
  },
  {
    id: 1,
    title: 'Lo Que Pasó',
    subtitle: 'Brechas de Seguridad Masiva',
    icon: Shield,
    color: 'from-yellow-600 to-orange-500',
    content: 'Infiltración',
    description: 'Acceso no autorizado a servidores',
    buttons: [
      { label: 'Fase 1: Acceso', info: 'Ciberdelincuentes engañaron empleados con phishing o explotaron vulnerabilidades en servidores privados de Yahoo' },
      { label: 'Fase 2: Robo', info: 'Extrajeron 3,000 millones de registros: nombres, emails, contraseñas cifradas. NO incluía: contraseñas en texto claro, datos bancarios' },
      { label: 'Fase 3: Venta', info: 'Los datos fueron vendidos en foros clandestinos de la Dark Web al mejor postor' },
    ],
  },
  {
    id: 2,
    title: 'Marco Legal',
    subtitle: 'Regulaciones Internacionales',
    icon: Gavel,
    color: 'from-blue-600 to-cyan-500',
    content: 'Múltiples',
    description: 'Jurisdicciones afectadas',
    buttons: [
      { label: 'SEC (USA)', info: 'Yahoo violó Secciones 17(a)(2) y 17(a)(3) de Securities Act 1933 + Sección 13(a) de Securities Exchange Act 1934. Exigía divulgación oportuna' },
      { label: 'ICO (UK)', info: 'Yahoo! UK Services Limited multada con £250,000. Violó Data Protection Act 1998. Incidente reveló 2 años después de ocurrir' },
      { label: 'PCI DSS', info: 'Estándar internacional para protección de datos de tarjetas de crédito. Yahoo debía cumplir aunque declaró sin compromiso de datos bancarios' },
    ],
  },
  {
    id: 3,
    title: 'Tipificación de Delitos',
    subtitle: 'Ley 21.459 (Chile)',
    icon: FileText,
    color: 'from-purple-600 to-pink-500',
    content: '5 Cargos',
    description: 'Bajo código penal chileno',
    buttons: [
      { label: 'Art.2: Acceso Ilícito', info: 'Acceso no autorizado a sistemas informáticos. Agravado si hay intención de apoderarse, usar o conocer la información' },
      { label: 'Art.6: Receptación', info: 'Comercializar, transferir o almacenar datos de origen ilícito. Aplica a atacantes que venden y compradores que almacenan' },
      { label: 'Art.7: Fraude', info: 'Superar barreras de seguridad, manipular datos para obtener beneficio económico ilícito. Uso de contraseñas para fraudes' },
    ],
  },
  {
    id: 4,
    title: 'Comparación de Casos',
    subtitle: 'Otros Hackeos Históricos',
    icon: BarChart3,
    color: 'from-green-600 to-emerald-500',
    content: 'Análisis',
    description: 'Impacto comparativo',
    buttons: [
      { label: 'Yahoo (2013)', info: '3,000 millones de registros. Mayor filtración de datos. Impacto: Reducción de $350M en compra' },
      { label: 'Equifax (2017)', info: '147 millones de registros. Datos financieros y personales. Multa de $700M a la empresa' },
      { label: 'Target (2013)', info: '40 millones de tarjetas de crédito comprometidas. Costo de remediación: $18.5M en acuerdo' },
    ],
  },
  {
    id: 5,
    title: 'Responsabilidades',
    subtitle: 'Obligaciones Incumplidas',
    icon: Users,
    color: 'from-indigo-600 to-blue-500',
    content: 'Corporativas',
    description: 'Deberes legales violados',
    buttons: [
      { label: 'Transparencia', info: 'Deber de divulgar información crítica a inversionistas. Yahoo ocultó el alcance real del ataque hasta 4 años después' },
      { label: 'Seguridad', info: 'Aplicar medidas técnicas adecuadas para proteger datos personales. Yahoo falló en encriptación y validación de acceso' },
      { label: 'Notificación', info: 'Informar a usuarios de forma oportuna. Yahoo tardó años en comunicar. Demandas colectivas de usuarios y accionistas' },
    ],
  },
  {
    id: 6,
    title: 'Datos y Evidencia',
    subtitle: 'Cifras Clave del Incidente',
    icon: BarChart3,
    color: 'from-teal-600 to-cyan-500',
    content: 'Cifras',
    description: 'Magnitud del ataque',
    buttons: [
      { label: 'Volumen', info: '3,000,000,000 cuentas afectadas. Datos incluían: nombres, emails, teléfonos, fechas de nacimiento, contraseñas hash' },
      { label: 'Cronología', info: 'Agosto 2013: Ataque. Diciembre 2016: Verizon anuncia 1B. Octubre 2017: Se descubre 3B. 4 años entre ataque y revelación' },
      { label: 'Consecuencias', info: 'Riesgo masivo de robo de identidad. Fraudes en otras plataformas si reutilizaban contraseñas. Demandas por $300M+' },
    ],
  },
  {
    id: 7,
    title: 'Conclusiones',
    subtitle: 'Lecciones Aprendidas',
    icon: Lock,
    color: 'from-rose-600 to-red-500',
    content: 'Cambio',
    description: 'Necesario en el sector',
    buttons: [
      { label: 'Seguridad Prioridad', info: 'No es un gasto sino una inversión. Fallos de seguridad resultan en pérdidas mayores: multas, demandas, daño reputacional' },
      { label: 'Transparencia Moral', info: 'Deber corporativo fundamental. Genera confianza, mejora desempeño empresarial, cumplimiento regulatorio obligatorio' },
      { label: 'Regulación Global', info: 'Marcos claros necesarios. GDPR en Europa, leyes en Chile y otros países. Protegen a usuarios y empresa misma' },
    ],
  },
]

function Modal({ isOpen, title, content, onClose }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeInUp">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 shadow-2xl animate-scaleIn">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <p className="text-slate-300 leading-relaxed text-base">{content}</p>
      </div>
    </div>
  )
}

function App() {
  const [index, setIndex] = useState(0)
  const [selectedModal, setSelectedModal] = useState(null)
  const [slideDirection, setSlideDirection] = useState('right')
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
    setSlideDirection('left')
    setIndex((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const nextSlide = () => {
    setSlideDirection('right')
    setIndex((current) => (current === slides.length - 1 ? 0 : current + 1))
  }

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="flex h-screen w-full flex-col">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-8 py-4 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <h1 className="text-lg font-semibold text-slate-100">LOZLUI - Hackeo Yahoo</h1>
          </div>
          <div className="text-sm font-medium text-slate-400">
            {index + 1} <span className="text-slate-600">/</span> {slides.length}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center overflow-hidden px-6 py-8">
          <div className={`relative w-full h-full max-w-6xl rounded-3xl border border-slate-700 bg-gradient-to-br ${slide.color} p-0.5 shadow-2xl transition-all duration-500 ${slideDirection === 'right' ? 'animate-slideInRight' : 'animate-slideInLeft'}`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 flex flex-col">
              
              {/* Top Section - Title & Icon */}
              <div className="flex items-start justify-between gap-8 mb-8 animate-fadeInUp">
                <div className="flex-1 min-w-0">
                  <h2 className="text-4xl font-bold text-white mb-2 leading-tight">{slide.title}</h2>
                  <p className="text-lg text-slate-300">{slide.subtitle}</p>
                </div>
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${slide.color} flex-shrink-0 transform transition-transform duration-500 hover:scale-110 hover:-rotate-3`}>
                  <IconComponent className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content Box */}
              <div className="bg-slate-950/80 border border-slate-700 rounded-2xl p-6 mb-6 flex-shrink-0 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
                <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">{slide.description}</p>
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{slide.content}</p>
              </div>

              {/* Buttons Grid */}
              <div className="grid grid-cols-3 gap-3 flex-1 overflow-hidden">
                {slide.buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedModal({ title: btn.label, content: btn.info })}
                    className="group relative rounded-lg border border-slate-700 bg-slate-900/60 p-4 hover:bg-slate-800/80 transition-all duration-300 overflow-hidden h-full flex flex-col text-left transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20 animate-fadeInUp"
                    style={{animationDelay: `${0.15 + idx * 0.05}s`}}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    <div className="relative flex flex-col h-full">
                      <h3 className="text-xs font-bold text-white mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors">{btn.label}</h3>
                      <p className="text-xs text-slate-400 flex-1 line-clamp-3 mb-2 group-hover:text-slate-300 transition-colors">{btn.info.substring(0, 80)}...</p>
                      <div className="flex items-center gap-1 text-cyan-400 text-xs font-medium group-hover:gap-2 transition-all duration-300">
                        Más <ChevronDown className="w-3 h-3 group-hover:translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-slate-800 bg-slate-950/80 px-8 py-5 backdrop-blur-lg animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSlideDirection(idx > index ? 'right' : 'left')
                  setIndex(idx)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${idx === index ? 'bg-cyan-400 w-8 shadow-lg shadow-cyan-500/50' : 'bg-slate-700 w-2 hover:bg-slate-600 hover:w-3'}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-600/50 active:scale-95 transform"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Anterior
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95 transform"
            >
              Siguiente
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </footer>
      </div>

      {/* Modal */}
      {selectedModal && (
        <Modal
          isOpen={true}
          title={selectedModal.title}
          content={selectedModal.content}
          onClose={() => setSelectedModal(null)}
        />
      )}
    </div>
  )
}

export default App
