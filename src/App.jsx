import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, AlertCircle, Shield, Gavel, BarChart3, Users, Lock, FileText, X } from 'lucide-react'

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
      { label: 'Datos Robados', info: 'Nombres, correos electrónicos, teléfonos y contraseñas cifradas.' },
      { label: 'Fechas Clave', info: 'Agosto 2013: vulneración. Diciembre 2016: confirmación. Octubre 2017: revelación total.' },
      { label: 'Impacto Financiero', info: 'Verizon redujo el precio de compra en $350M; demandas e impacto reputacional.' },
      { label: 'Alcance Mundial', info: 'Usuarios globales afectados.' },
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
      { label: 'Fase 1: Acceso', info: 'Ingreso mediante phishing o vulnerabilidades.' },
      { label: 'Fase 2: Exfiltración', info: 'Copia y extracción masiva de registros.' },
      { label: 'Fase 3: Venta', info: 'Base comercializada en la dark web.' },
      { label: 'Consecuencias', info: 'Mayor riesgo de fraude y robo de identidad.' },
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
      { label: 'SEC (USA)', info: 'Obligaciones de divulgación incumplidas.' },
      { label: 'ICO (UK)', info: 'Multa por reporte tardío.' },
      { label: 'PCI DSS', info: 'Controles sobre datos sensibles.' },
      { label: 'Chile (Teórico)', info: 'Responsabilidad administrativa y penal.' },
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
      { label: 'Acceso Ilícito', info: 'Acceder a sistemas sin autorización.' },
      { label: 'Receptación', info: 'Comercializar datos de origen ilícito.' },
      { label: 'Fraude', info: 'Usar datos personales para estafas.' },
      { label: 'Falsificación', info: 'Creación de sesiones o credenciales falsas.' },
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
      { label: 'Yahoo (2013)', info: '3,000 millones de cuentas. Mayor brecha por volumen.' },
      { label: 'Equifax (2017)', info: '147 millones; sanciones y acuerdos millonarios.' },
      { label: 'Target (2013)', info: '40 millones de tarjetas; acuerdos y remediación.' },
      { label: 'Lección Comparativa', info: 'Volumen vs rapidez de notificación y sanciones.' },
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
      { label: 'Transparencia', info: 'Comunicar alcance real del incidente.' },
      { label: 'Seguridad', info: 'Controles técnicos insuficientes.' },
      { label: 'Notificación', info: 'Retardo en alertar a usuarios y autoridades.' },
      { label: 'Responsabilidad', info: 'Fallas operacionales y de gobernanza.' },
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
      { label: 'Volumen', info: '3,000,000,000 cuentas afectadas.' },
      { label: 'Cronología', info: 'Años entre ataque y revelación completa.' },
      { label: 'Consecuencias', info: 'Riesgo de fraude y acciones legales.' },
      { label: 'Valor Comercial', info: 'Impacto en la negociación empresarial.' },
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
      { label: 'Seguridad Prioridad', info: 'Seguridad como inversión estratégica.' },
      { label: 'Transparencia Moral', info: 'Divulgar rápidamente reduce daño.' },
      { label: 'Regulación Global', info: 'Cumplir con GDPR/PCI y normas locales.' },
      { label: 'Recomendación', info: 'Monitoreo, notificación y respuesta.' },
    ],
  },
]

function Modal({ isOpen, title, content, onClose, isClosing }) {
  if (!isOpen) return null
  return (
    <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 ${isClosing ? 'animate-fadeOut' : 'animate-fadeInUp'}`}>
      <div className={`bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full p-6 shadow-2xl ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'}`}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {typeof content === 'string' ? (
          <p className="text-slate-300 leading-relaxed text-base">{content}</p>
        ) : (
          content
        )}
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
      if (event.key === 'ArrowRight' || event.key === ' ') nextSlide()
      if (event.key === 'ArrowLeft') prevSlide()
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
    const openDetailsForSlide = () => {
      openModal({
        title: `${slide.title} — Detalles`,
        content: (
          <div className="space-y-4">
            {slide.buttons.slice(2).map((b, i) => (
              <div key={i} className="rounded-lg bg-slate-900/80 p-4 border border-slate-700">
                <h4 className="text-sm font-semibold text-white">{b.label}</h4>
                <p className="text-sm text-slate-300 mt-2">{b.info}</p>
              </div>
            ))}
          </div>
        ),
      })
    }

    switch (slide.layout) {
      case 'hero':
        return (
          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-red-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-red-300/80">Momento crítico</p>
              <p className="mt-6 text-6xl font-black text-white">{slide.content}</p>
              <p className="mt-4 text-slate-300 leading-relaxed text-lg">{slide.description}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {slide.buttons.slice(0, 2).map((btn, idx) => (
                  <button
                    key={idx}
                    onClick={() => openModal({ title: btn.label, content: btn.info })}
                    className="group rounded-3xl border border-slate-700 bg-slate-900/80 p-5 text-left transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-sm font-semibold text-white mb-2">{btn.label}</h3>
                    <p className="text-sm text-slate-400 line-clamp-3">{btn.info}</p>
                  </button>
                ))}
                {slide.buttons.length > 2 && (
                  <div className="sm:col-span-2">
                    <button onClick={openDetailsForSlide} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white">Más detalles</button>
                  </div>
                )}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-8 shadow-xl shadow-cyan-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Por qué importa</p>
              <p className="mt-6 text-white text-2xl font-semibold leading-tight">Una filtración histórica que cambió la forma en que las empresas deben proteger datos y comunicar incidentes.</p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Impacto</p>
                  <p className="mt-3 text-3xl font-bold text-white">Reputación</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 p-5 border border-slate-700">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Alcance</p>
                  <p className="mt-3 text-3xl font-bold text-white">3,000M cuentas</p>
                </div>
              </div>
            </div>
          </div>
        )

      case 'timeline':
        return (
          <div className="grid gap-6 xl:grid-cols-[0.9fr_0.95fr]">
            <div className="space-y-4">
              {slide.buttons.slice(0, 2).map((btn, idx) => (
                <button
                  key={idx}
                  onClick={() => openModal({ title: btn.label, content: btn.info })}
                  className="group flex items-start gap-4 rounded-3xl border border-slate-700 bg-slate-900/80 p-6 text-left"
                >
                  <div className="mt-1 h-3 w-3 rounded-full bg-yellow-400" />
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{btn.label}</h3>
                    <p className="text-sm text-slate-400">{btn.info}</p>
                  </div>
                </button>
              ))}
              {slide.buttons.length > 2 && (
                <button onClick={openDetailsForSlide} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white mt-2">Más detalles</button>
              )}
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-8 flex flex-col justify-between shadow-xl shadow-yellow-500/10">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Trayectoria del ataque</p>
                <h3 className="mt-6 text-4xl font-bold text-white">Brechas en cada fase</h3>
                <p className="mt-4 text-slate-400 leading-relaxed">Acceso, exfiltración y comercialización dejaron impactos legales y financieros.</p>
              </div>
              <div className="mt-8 rounded-3xl bg-slate-900/80 border border-slate-700 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Consecuencia</p>
                <p className="mt-3 text-xl font-semibold text-white">3,000 millones en riesgo</p>
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
                {slide.buttons.slice(0, 2).map((btn, idx) => (
                  <button key={idx} onClick={() => openModal({ title: btn.label, content: btn.info })} className="group flex gap-4 rounded-3xl border border-slate-700 bg-slate-900/80 p-5 text-left">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">{idx + 1}</div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{btn.label}</h3>
                      <p className="text-sm text-slate-400 line-clamp-3">{btn.info}</p>
                    </div>
                  </button>
                ))}
                {slide.buttons.length > 2 && (
                  <button onClick={openDetailsForSlide} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white mt-2">Más detalles</button>
                )}
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-8 shadow-xl shadow-cyan-500/10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Marco legal global</p>
              <p className="mt-6 text-white text-2xl font-semibold leading-tight">Regulaciones cruzadas y responsabilidad internacional sobre datos.</p>
              <p className="mt-4 text-slate-400 leading-relaxed">Normas exigen reporte y protecciones; el caso muestra múltiples frentes regulatorios.</p>
            </div>
          </div>
        )

            case 'stacked':
              return (
                <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                  <div className="space-y-4">
                    {slide.buttons.slice(0, 2).map((btn, idx) => (
                      <button key={idx} onClick={() => openModal({ title: btn.label, content: btn.info })} className="group rounded-3xl border border-slate-700 bg-slate-900/85 p-6 text-left">
                        <h3 className="text-sm uppercase tracking-[0.3em] text-purple-300 mb-3">{btn.label}</h3>
                        <p className="text-sm text-slate-400 line-clamp-4">{btn.info}</p>
                      </button>
                    ))}
                    {slide.buttons.length > 2 && (
                      <button onClick={openDetailsForSlide} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white mt-2">Más detalles</button>
                    )}
                  </div>
                  <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-purple-500/10 flex flex-col justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-purple-300/80">Código penal</p>
                      <p className="mt-6 text-white text-2xl font-semibold leading-tight">Delitos informáticos y agravantes en el contexto chileno.</p>
                      <p className="mt-4 text-slate-400 leading-relaxed">Cómo aplicar artículos a accesos no autorizados, fraude y receptación.</p>
                    </div>
                  </div>
                </div>
              )

            case 'comparison': {
              // comparison opens the full table in a modal to avoid overflow on canvas
              return (
                <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                  <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-emerald-500/10 min-w-0">
                    <p className="text-sm uppercase tracking-[0.35em] text-emerald-300/80">Casos comparados</p>
                    <div className="mt-6 space-y-4">
                      {slide.buttons.slice(0, 2).map((btn, idx) => (
                        <button key={idx} onClick={() => openModal({ title: btn.label, content: btn.info })} className="group rounded-3xl border border-slate-700 bg-slate-900/85 p-5 text-left">
                          <h3 className="text-sm font-semibold text-white">{btn.label}</h3>
                          <p className="text-sm text-slate-400 line-clamp-3">{btn.info}</p>
                        </button>
                      ))}
                      {slide.buttons.length > 2 && (
                        <button onClick={openDetailsForSlide} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white mt-2">Más casos</button>
                      )}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-slate-700 bg-slate-950/85 p-8 shadow-xl shadow-green-500/10 min-w-0">
                    <p className="text-sm uppercase tracking-[0.35em] text-green-300/80">Lección clave</p>
                    <h3 className="mt-6 text-3xl font-bold text-white">Yahoo: volumen vs respuesta</h3>
                    <p className="mt-4 text-slate-400 leading-relaxed">Volumen y demora en notificar marcan la diferencia en impacto y sanciones.</p>

                    <div className="mt-8">
                      <button
                        onClick={() => openModal({
                          title: 'Cuadro comparativo',
                          content: (
                            <div className="space-y-5">
                              <p className="text-slate-300">Comparación resumida de impacto, tiempos de notificación y sanciones.</p>
                              <div className="overflow-x-auto rounded-3xl border border-slate-700 bg-slate-900/85 p-4">
                                <table className="min-w-[540px] w-full text-sm text-slate-300">
                                  <thead>
                                    <tr className="text-left text-slate-400 text-[11px] uppercase tracking-[0.35em]">
                                      <th className="pb-3 pr-4">Característica</th>
                                      <th className="pb-3 pr-4">Yahoo</th>
                                      <th className="pb-3 pr-4">Equifax</th>
                                      <th className="pb-3">Target</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {[
                                      { label: 'Usuarios afectados', yahoo: '3,000M', equifax: '147M', target: '40M' },
                                      { label: 'Notificación', yahoo: 'Años después', equifax: 'Meses', target: 'Semanas' },
                                      { label: 'Sanciones', yahoo: 'Acordado y demandas', equifax: '$700M+', target: '$18.5M' },
                                      { label: 'Tipo de datos', yahoo: 'Correos y contraseñas', equifax: 'SSN e información personal', target: 'Tarjetas de crédito' },
                                    ].map((row) => (
                                      <tr key={row.label} className="border-t border-slate-800">
                                        <td className="py-3 pr-4 align-top text-slate-200">{row.label}</td>
                                        <td className="py-3 pr-4 align-top">{row.yahoo}</td>
                                        <td className="py-3 pr-4 align-top">{row.equifax}</td>
                                        <td className="py-3 align-top">{row.target}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          ),
                        })}
                        className="mt-4 rounded-3xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg"
                      >
                        Ver cuadro comparativo
                      </button>
                    </div>
                  </div>
                </div>
              )
            }

            case 'mosaic':
              return (
                <div className="grid gap-6 xl:grid-cols-[0.9fr_0.95fr]">
                  <div className="rounded-[2rem] border border-slate-700 bg-slate-950/90 p-8 shadow-xl shadow-indigo-500/10">
                    <p className="text-sm uppercase tracking-[0.35em] text-indigo-300/80">Responsabilidad corporativa</p>
                    <h3 className="mt-6 text-3xl font-bold text-white">Deberes incumplidos</h3>
                    <p className="mt-4 text-slate-400 leading-relaxed">Transparencia, seguridad y notificación fallaron en la respuesta al incidente.</p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {slide.buttons.slice(0, 2).map((btn, idx) => (
                        <button key={idx} onClick={() => openModal({ title: btn.label, content: btn.info })} className="group rounded-3xl border border-slate-700 bg-slate-900/85 p-5 text-left">
                          <h3 className="text-sm font-semibold text-white">{btn.label}</h3>
                          <p className="text-sm text-slate-400 line-clamp-3">{btn.info}</p>
                        </button>
                      ))}
                      {slide.buttons.length > 2 && (
                        <button onClick={openDetailsForSlide} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white mt-2">Más detalles</button>
                      )}
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
                      {slide.buttons.slice(0, 2).map((btn, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex items-center justify-between text-sm text-slate-300">
                            <span>{btn.label}</span>
                            <span className="text-slate-400">{idx === 0 ? '3B+' : '—'}</span>
                          </div>
                          <div className="h-3 rounded-full bg-slate-800">
                            <div className="h-3 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400" style={{ width: `${(idx + 1) * 30 + 30}%` }} />
                          </div>
                        </div>
                      ))}
                      {slide.buttons.length > 2 && (
                        <button onClick={openDetailsForSlide} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white mt-2">Más detalles</button>
                      )}
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
                    <p className="mt-4 text-slate-400 leading-relaxed">Las empresas deben convertir la transparencia y la protección en un estándar operativo.</p>
                  </div>
                  <div className="grid gap-4">
                    {slide.buttons.slice(0, 2).map((btn, idx) => (
                      <button key={idx} onClick={() => openModal({ title: btn.label, content: btn.info })} className="group rounded-3xl border border-slate-700 bg-slate-900/85 p-6 text-left">
                        <h3 className="text-sm font-semibold text-white">{btn.label}</h3>
                        <p className="mt-2 text-sm text-slate-400">{btn.info}</p>
                      </button>
                    ))}
                    {slide.buttons.length > 2 && (
                      <button onClick={openDetailsForSlide} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white mt-2">Más detalles</button>
                    )}
                  </div>
                </div>
              )

            default:
              return (
                <div className="grid gap-4 md:grid-cols-2">
                  {slide.buttons.slice(0, 2).map((btn, idx) => (
                    <button key={idx} onClick={() => openModal({ title: btn.label, content: btn.info })} className="group rounded-3xl border border-slate-700 bg-slate-900/80 p-5 text-left">
                      <h3 className="text-sm font-semibold text-white mb-2">{btn.label}</h3>
                      <p className="text-sm text-slate-400 line-clamp-3">{btn.info}</p>
                    </button>
                  ))}
                  {slide.buttons.length > 2 && (
                    <div>
                      <button onClick={openDetailsForSlide} className="w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white">Más detalles</button>
                    </div>
                  )}
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
                <div className="text-sm font-medium text-slate-400">{index + 1} <span className="text-slate-600">/</span> {slides.length}</div>
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
                      onClick={() => { setSlideDirection(idx > index ? 'right' : 'left'); setIndex(idx) }}
                      className={`h-2 rounded-full transition-all duration-300 ${idx === index ? 'bg-cyan-400 w-8 shadow-lg shadow-cyan-500/50' : 'bg-slate-700 w-2 hover:bg-slate-600 hover:w-3'}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={prevSlide} className="flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-300"> <ArrowLeft className="w-4 h-4" /> Anterior</button>
                  <button onClick={nextSlide} className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white">Siguiente <ArrowRight className="w-4 h-4" /></button>
                </div>
              </footer>
            </div>

            {selectedModal && (
              <Modal isOpen={true} title={selectedModal.title} content={selectedModal.content} onClose={closeModal} isClosing={isModalClosing} />
            )}
          </div>
        )
      }

      export default App
