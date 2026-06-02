from pathlib import Path

path = Path('src/App.jsx')
content = '''import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, AlertCircle, Shield, Gavel, BarChart3, Users, Lock, FileText, ChevronDown, X } from 'lucide-react'

const slides = [
  {
    id: 0,
    layout: 'hero',
    title: 'El Mayor Hackeo de la Historia',
    subtitle: 'Yahoo: 3 Mil Millones de Cuentas',
    icon: AlertCircle,
    color: 'from-red-600 to-orange-600',
    content: '3B+',
    description: 'Cuentas comprometidas en 2013',
    buttons: [
      { label: 'Datos Robados', info: 'Nombres, correos electrónicos, teléfonos, fechas de nacimiento y contraseñas cifradas. No se reportaron tarjetas de crédito en el robo inicial.' },
      { label: 'Fechas Clave', info: 'Agosto 2013: vulneración. Diciembre 2016: confirmación de 1,000 millones. Octubre 2017: revelación total de 3,000 millones.' },
      { label: 'Impacto Financiero', info: 'Verizon redujo el precio de compra en $350M. Yahoo enfrentó demandas, investigación del Congreso y pérdida de confianza masiva.' },
      { label: 'Alcance Mundial', info: 'La brecha afectó a usuarios globales y puso en evidencia debilidades en la seguridad de datos corporativos.' },
    ],
  },
  {
    id: 1,
    layout: 'timeline',
    title: 'Lo Que Pasó',
    subtitle: 'Brechas de Seguridad Masiva',
    icon: Shield,
    color: 'from-yellow-600 to-orange-500',
    content: 'Infiltración',
    description: 'Acceso no autorizado a servidores',
    buttons: [
      { label: 'Fase 1: Acceso', info: 'Los atacantes ingresaron a la red mediante phishing o explotación de vulnerabilidades en servidores internos de Yahoo.' },
      { label: 'Fase 2: Exfiltración', info: 'Copiaron millones de registros y los sacaron de los sistemas, afectando 3,000 millones de cuentas.' },
      { label: 'Fase 3: Venta', info: 'La base de datos se comercializó en la Dark Web y se convirtió en material para fraudes y robo de identidad.' },
      { label: 'Consecuencias', info: 'Usuarios expuestos a amenazas posteriores por contraseñas repetidas y datos personales comprometidos.' },
    ],
  },
  {
    id: 2,
    layout: 'law-grid',
    title: 'Marco Legal',
    subtitle: 'Regulaciones Internacionales',
    icon: Gavel,
    color: 'from-blue-600 to-cyan-500',
    content: 'Múltiples',
    description: 'Jurisdicciones afectadas',
    buttons: [
      { label: 'SEC (USA)', info: 'Violación de normas de divulgación para empresas públicas. Yahoo no informó con la debida claridad a los inversionistas.' },
      { label: 'ICO (UK)', info: 'Multa de £250,000 a Yahoo! UK Services por reportar el incidente con retraso y no proteger adecuadamente datos de ciudadanos británicos.' },
      { label: 'PCI DSS', info: 'Estándar para datos de tarjetas. Aunque no se comprometieron tarjetas, Yahoo debía mantener controles sólidos en entornos con datos sensibles.' },
      { label: 'Chile (Teórico)', info: 'Un caso similar en Chile hubiera implicado Ley 19.628 y la antigua Ley de Delitos Informáticos, además de responsabilidad administrativa.' },
    ],
  },
  {
    id: 3,
    layout: 'stacked',
    title: 'Tipificación de Delitos',
    subtitle: 'Ley 21.459 (Chile)',
    icon: FileText,
    color: 'from-purple-600 to-pink-500',
    content: '5 Cargos',
    description: 'Bajo código penal chileno',
    buttons: [
      { label: 'Art.2: Acceso Ilícito', info: 'Acceder a sistemas sin autorización. El robo masivo de datos configura el acceso ilícito agravado.' },
      { label: 'Art.6: Receptación', info: 'Comercializar o almacenar datos de origen ilícito. Aplica a quienes trafican la información robada.' },
      { label: 'Art.7: Fraude', info: 'Usar datos personales para obtener beneficios económicos, como estafas con cuentas de usuarios.' },
      { label: 'Art.5: Falsificación', info: 'Creación de sesiones o cookies falsas para acceder a cuentas sin autorización. Se considera falsificación informática.' },
    ],
  },
  {
    id: 4,
    layout: 'comparison',
    title: 'Comparación de Casos',
    subtitle: 'Otros Hackeos Históricos',
    icon: BarChart3,
    color: 'from-green-600 to-emerald-500',
    content: 'Análisis',
    description: 'Impacto comparativo',
    buttons: [
      { label: 'Yahoo (2013)', info: '3,000 millones de cuentas. La mayor brecha registrada, con impacto reputacional y financiero global.' },
      { label: 'Equifax (2017)', info: '147 millones de registros expuestos. Multas y acuerdos por más de $700 millones.' },
      { label: 'Target (2013)', info: '40 millones de tarjetas de crédito comprometidas. Costos de remediación y acuerdos por $18.5 millones.' },
      { label: 'Lección Comparativa', info: 'Yahoo destaca por volumen y demora en la notificación, mientras que otros casos muestran respuestas regulatorias más rápidas.' },
    ],
  },
  {
    id: 5,
    layout: 'mosaic',
    title: 'Responsabilidades',
    subtitle: 'Obligaciones Incumplidas',
    icon: Users,
    color: 'from-indigo-600 to-blue-500',
    content: 'Corporativas',
    description: 'Deberes legales violados',
    buttons: [
      { label: 'Transparencia', info: 'Yahoo no transparentó el alcance real del ataque hasta años después, dañando inversionistas y usuarios.' },
      { label: 'Seguridad', info: 'Medidas técnicas insuficientes permitieron el acceso y la exfiltración masiva de datos.' },
      { label: 'Notificación', info: 'La comunicación tardía generó multas mayores y pérdida de confianza en la marca.' },
      { label: 'Responsabilidad', info: 'Los ejecutivos y la empresa fueron responsables de no manejar el incidente con diligencia adecuada.' },
    ],
  },
  {
    id: 6,
    layout: 'stats',
    title: 'Datos y Evidencia',
    subtitle: 'Cifras Clave del Incidente',
    icon: BarChart3,
    color: 'from-teal-600 to-cyan-500',
    content: 'Cifras',
    description: 'Magnitud del ataque',
    buttons: [
      { label: 'Volumen', info: '3,000,000,000 cuentas afectadas. Incluye datos personales, contraseñas hash y millones de correos.' },
      { label: 'Cronología', info: '4 años entre el ataque inicial y la revelación completa. Diciembre 2016 y octubre 2017 fueron hitos clave.' },
      { label: 'Consecuencias', info: 'Riesgo de robo de identidad, fraude y acciones legales por parte de usuarios y accionistas.' },
      { label: 'Valor Comercial', info: 'Verizon negoció una rebaja de $350M en su adquisición de Yahoo tras la revelación de la escala del ataque.' },
    ],
  },
  {
    id: 7,
    layout: 'recommendations',
    title: 'Conclusiones',
    subtitle: 'Lecciones Aprendidas',
    icon: Lock,
    color: 'from-rose-600 to-red-500',
    content: 'Cambio',
    description: 'Necesario en el sector',
    buttons: [
      { label: 'Seguridad Prioridad', info: 'La seguridad debe ser una inversión estratégica, no un costo opcional.' },
      { label: 'Transparencia Moral', info: 'Divulgar rápidamente salvaguarda confianza y reduce el daño reputacional.' },
      { label: 'Regulación Global', info: 'Cumplir con GDPR, PCI DSS y estándares locales protege a usuarios y a la empresa.' },
      { label: 'Recomendación', info: 'Implementar monitoreo continuo, notificación rápida e incident response sólido.' },
    ],
  },
]

function Modal({ isOpen, title, content, onClose, isClosing }) {
  if (!isOpen) return null
  return (
    <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 ${isClosing ? 'animate-fadeOut' : 'animate-fadeInUp'}`}>
      <div className={`bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 shadow-2xl ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'}`}>
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
  const [isModalClosing, setIsModalClosing] = useState(false)
  const [slideDirection, setSlideDirection] = useState('right')
  const slide = slides[index]
  const IconComponent = slide.icon

  const openModal = (modalData) => {
    setIsModalClosing(false)
    setSelectedModal(modalData)
  }

  const closeModal = () => {
    setIsModalClosing(true)
    window.setTimeout(() => {
      setSelectedModal(null)
      setIsModalClosing(false)
    }, 220)
  }

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

  const renderSlideLayout = (slide) => {
    switch (slide.layout) {
      case 'hero':
        return (
          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-red-500/10 animate-fadeInUp">
              <p className="text-sm uppercase tracking-[0.35em] text-red-300/80">Momento crítico</p>
              <p className="mt-6 text-6xl font-black text-white">{slide.content}</p>
              <p className="mt-4 text-slate-300 leading-relaxed text-lg">{slide.description} que puso en evidencia la mayor brecha de datos jamás reportada.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {slide.buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    onClick={() => openModal({ title: btn.label, content: btn.info })}
                    className="group rounded-3xl border border-slate-700 bg-slate-900/80 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-slate-800/90"
                  >
                    <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-orange-300">{btn.label}</h3>
                    <p className="text-sm text-slate-400 line-clamp-3">{btn.info}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-8 shadow-xl shadow-cyan-500/10 animate-fadeInUp">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Por qué importa</p>
              <p className="mt-6 text-white text-2xl font-semibold leading-tight">Una filtración histórica que cambió la forma en que las empresas deben proteger datos y comunicar incidentes.</p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Impacto</p>
                  <p className="mt-3 text-3xl font-bold text-white">Reputación +350M</p>
                  <p className="mt-2 text-slate-400 text-sm">Estimación de la rebaja en la compra de Verizon tras la brecha.</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Alcance</p>
                  <p className="mt-3 text-3xl font-bold text-white">3,000M cuentas</p>
                  <p className="mt-2 text-slate-400 text-sm">Usuarios afectados en todo el mundo.</p>
                </div>
              </div>
            </div>
          </div>
        )
      case 'timeline':
        return (
          <div className="grid gap-6 xl:grid-cols-[0.9fr_0.95fr]">
            <div className="space-y-4">
              {slide.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => openModal({ title: btn.label, content: btn.info })}
                  className="group flex items-start gap-4 rounded-3xl border border-slate-700 bg-slate-900/80 p-6 text-left transition-all duration-300 hover:-translate-x-1 hover:border-yellow-400/40 hover:bg-slate-800/90"
                >
                  <div className="mt-1 h-3 w-3 rounded-full bg-yellow-400" />
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-yellow-300">{btn.label}</h3>
                    <p className="text-sm text-slate-400">{btn.info}</p>
                  </div>
                </button>
              ))}
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-8 flex flex-col justify-between shadow-xl shadow-yellow-500/10">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Trayectoria del ataque</p>
                <h3 className="mt-6 text-4xl font-bold text-white">Brechas en cada fase</h3>
                <p className="mt-4 text-slate-400 leading-relaxed">El ataque no fue instantáneo: hubo acceso, extracción masiva y comercialización que dejó rastros legales y financieros.</p>
              </div>
              <div className="mt-8 rounded-3xl bg-slate-900/80 border border-slate-700 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Consecuencia</p>
                <p className="mt-3 text-xl font-semibold text-white">3,000 millones de cuentas en riesgo tras la exfiltración.</p>
              </div>
            </div>
          </div>
        )
      case 'law-grid':
        return (
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-blue-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Ámbitos afectados</p>
              <div className="mt-6 space-y-3">
                {slide.buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    onClick={() => openModal({ title: btn.label, content: btn.info })}
                    className="group flex gap-4 rounded-3xl border border-slate-700 bg-slate-900/80 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">{idx + 1}</div>
                    <div>
                      <h3 className="text-sm font-semibold text-white group-hover:text-cyan-300">{btn.label}</h3>
                      <p className="text-sm text-slate-400 line-clamp-3">{btn.info}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-8 shadow-xl shadow-cyan-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Marco legal global</p>
              <p className="mt-6 text-white text-2xl font-semibold leading-tight">Regulaciones cruzadas y responsabilidad internacional sobre datos.</p>
              <p className="mt-4 text-slate-400 leading-relaxed">Algunas normas exigen reporte inmediato, otras definen multas por demora. El caso de Yahoo mostró múltiples frentes regulatorios.</p>
            </div>
          </div>
        )
      case 'stacked':
        return (
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              {slide.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => openModal({ title: btn.label, content: btn.info })}
                  className="group rounded-3xl border border-slate-700 bg-slate-900/85 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/40"
                >
                  <h3 className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-3">{btn.label}</h3>
                  <p className="text-sm text-slate-400 line-clamp-4">{btn.info}</p>
                </button>
              ))}
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-purple-500/10 flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-purple-300/80">Código penal</p>
                <p className="mt-6 text-white text-2xl font-semibold leading-tight">Delitos informáticos y agravantes en el contexto chileno.</p>
                <p className="mt-4 text-slate-400 leading-relaxed">El análisis jurídico muestra cómo cada artículo puede aplicarse a accesos no autorizados, fraude, receptación y falsificación de identidad digital.</p>
              </div>
            </div>
          </div>
        )
      case 'comparison':
        return (
          <div className="grid gap-6 xl:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-emerald-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Casos comparados</p>
              <div className="mt-6 space-y-4">
                {slide.buttons.slice(0, 3).map((btn, idx) => (
                  <button
                    key={idx}
                    onClick={() => openModal({ title: btn.label, content: btn.info })}
                    className="group rounded-3xl border border-slate-700 bg-slate-900/85 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-green-400/40"
                  >
                    <h3 className="text-sm font-semibold text-white group-hover:text-green-300">{btn.label}</h3>
                    <p className="text-sm text-slate-400 line-clamp-3">{btn.info}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-8 shadow-xl shadow-green-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-green-300/80">Lección clave</p>
              <h3 className="mt-6 text-3xl font-bold text-white">Yahoo: volumen vs respuesta</h3>
              <p className="mt-4 text-slate-400 leading-relaxed">Aunque otros ataques afectaron menos cuentas, la demora en notificar y la magnitud del incidente convierten a Yahoo en un caso de estudio único.</p>
              <button
                onClick={() => openModal({ title: slide.buttons[3].label, content: slide.buttons[3].info })}
                className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105"
              >
                Ver lección comparativa
              </button>
            </div>
          </div>
        )
      case 'mosaic':
        return (
          <div className="grid gap-6 xl:grid-cols-[0.9fr_0.95fr]">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-indigo-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-300/80">Responsabilidad corporativa</p>
              <h3 className="mt-6 text-3xl font-bold text-white">Deberes incumplidos</h3>
              <p className="mt-4 text-slate-400 leading-relaxed">Transparencia, seguridad y notificación son pilares que fallaron en la respuesta al incidente.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {slide.buttons.map((btn, idx) => (
                  <button
                    key={idx}
                    onClick={() => openModal({ title: btn.label, content: btn.info })}
                    className="group rounded-3xl border border-slate-700 bg-slate-900/85 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40"
                  >
                    <h3 className="text-sm font-semibold text-white group-hover:text-indigo-300">{btn.label}</h3>
                    <p className="text-sm text-slate-400 line-clamp-3">{btn.info}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-8 shadow-xl shadow-blue-500/10 flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400/80">Balance de responsabilidades</p>
                <p className="mt-6 text-white text-2xl font-semibold leading-tight">El deber legal no absolve la falta de diligencia operacional.</p>
              </div>
              <div className="mt-8 rounded-3xl bg-slate-900/80 border border-slate-700 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Prioridad</p>
                <p className="mt-3 text-white text-xl font-semibold">Reportar rápido, proteger datos y revisar controles.</p>
              </div>
            </div>
          </div>
        )
      case 'stats':
        return (
          <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-teal-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-teal-300/80">Evidencia cuantitativa</p>
              <div className="mt-6 space-y-5">
                {slide.buttons.map((btn, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>{btn.label}</span>
                      <span className="text-slate-400">{idx === 0 ? '3B+' : idx === 1 ? '4 años' : idx === 2 ? 'Riesgo alto' : '$350M'}</span>
                    </div>
                    <div className="h-3 rounded-full bg-slate-800">
                      <div className="h-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" style={{ width: `${(idx + 1) * 20 + 40}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-8 shadow-xl shadow-cyan-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Lectura de cifras</p>
              <p className="mt-6 text-white text-2xl font-semibold leading-tight">La magnitud del ataque se revela mejor con números y tiempos.</p>
              <p className="mt-4 text-slate-400 leading-relaxed">Estas cifras muestran por qué la brecha no solo fue histórica, sino también una falla persistente de detección y respuesta.</p>
            </div>
          </div>
        )
      case 'recommendations':
        return (
          <div className="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-rose-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-rose-300/80">Aprendizajes</p>
              <h3 className="mt-6 text-4xl font-bold text-white">Actuar con prioridad en seguridad</h3>
              <p className="mt-4 text-slate-400 leading-relaxed">Las empresas deben convertir la transparencia y la protección en un estándar operativo, no una reacción.</p>
            </div>
            <div className="grid gap-4">
              {slide.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => openModal({ title: btn.label, content: btn.info })}
                  className="group rounded-3xl border border-slate-700 bg-slate-900/85 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-rose-400/40"
                >
                  <h3 className="text-sm font-semibold text-white group-hover:text-rose-300">{btn.label}</h3>
                  <p className="mt-2 text-sm text-slate-400 line-clamp-4">{btn.info}</p>
                </button>
              ))}
            </div>
          </div>
        )
      default:
        return (
          <div className="grid gap-4 md:grid-cols-2">
            {slide.buttons.map((btn, idx) => (
              <button
                key={idx}
                onClick={() => openModal({ title: btn.label, content: btn.info })}
                className="group rounded-3xl border border-slate-700 bg-slate-900/80 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-300">{btn.label}</h3>
                <p className="text-sm text-slate-400 line-clamp-3">{btn.info}</p>
              </button>
            ))}
          </div>
        )
    }
  }

  const swipeClass = slideDirection === 'right' ? 'animate-swipeInRight' : 'animate-swipeInLeft'

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="flex h-screen w-full flex-col">
        <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-8 py-4 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-cyan-400" />
            <h1 className="text-lg font-semibold text-slate-100">LOZLUI - Hackeo Yahoo</h1>
          </div>
          <div className="text-sm font-medium text-slate-400">
            {index + 1} <span className="text-slate-600">/</span> {slides.length}
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center overflow-hidden px-6 py-8">
          <div key={index} className={`relative w-full h-full max-w-6xl rounded-3xl border border-slate-700 bg-gradient-to-br ${slide.color} p-0.5 shadow-[0_30px_80px_rgba(15,23,42,0.65)] transition-all duration-500 ${swipeClass}`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 flex flex-col">
              <div className="flex flex-col gap-8 mb-8 animate-fadeInUp">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h2 className="text-4xl font-bold text-white mb-2 leading-tight">{slide.title}</h2>
                    <p className="text-lg text-slate-300">{slide.subtitle}</p>
                  </div>
                  <div className={`inline-flex items-center justify-center rounded-3xl bg-gradient-to-br ${slide.color} p-6 shadow-xl shadow-white/5 transition-transform duration-500 hover:scale-105`}>
                    <IconComponent className="w-12 h-12 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-700 bg-slate-950/85 p-6">
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">{slide.description}</p>
                  <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{slide.content}</p>
                </div>
              </div>

              <div className="flex-1 overflow-hidden">{renderSlideLayout(slide)}</div>
            </div>
          </div>
        </main>

        <footer className="flex items-center justify-between border-t border-slate-800 bg-slate-950/80 px-8 py-5 backdrop-blur-lg animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
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
              className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-600/50 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" />
              Anterior
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 active:scale-95"
            >
              Siguiente
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </footer>
      </div>

      {selectedModal && (
        <Modal
          isOpen={true}
          title={selectedModal.title}
          content={selectedModal.content}
          onClose={closeModal}
          isClosing={isModalClosing}
        />
      )}
    </div>
  )
}

export default App
'''
path.write_text(content, encoding='utf-8')
print('written', path)
