import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, BookOpen, LayoutDashboard, Sparkles } from 'lucide-react'
import { marked } from 'marked'

const docsRaw = import.meta.globEager('../docs_lozlui/*.md?raw')
const slides = Object.entries(docsRaw)
  .filter(([path]) => !path.includes('08_prompts_lozlui.md'))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, module]) => {
    const raw = module.default
    const titleMatch = raw.match(/^#\s+(.+)/m)
    const title = titleMatch ? titleMatch[1].trim() : path.replace(/^.*\//, '').replace(/\.md$/, '')
    return { path, title, raw }
  })

function App() {
  const [index, setIndex] = useState(0)

  const slide = slides[index]

  const slideHtml = useMemo(() => {
    if (!slide) return ''
    return marked.parse(slide.raw)
  }, [slide])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        nextSlide()
      }
      if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <div className="mx-auto flex min-h-screen max-w-[1480px] flex-col px-6 py-8 sm:px-10">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-4 shadow-panel backdrop-blur-xl">
          <div>
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.32em] text-slate-400">
              <Sparkles className="h-4 w-4" /> Presentación interactiva
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Lozlui</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-400 sm:text-base">
              Despliega los contenidos de los archivos Markdown de la carpeta <span className="font-semibold text-slate-100">docs_lozlui</span>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-300 shadow-lg shadow-slate-950/20">
              <BookOpen className="h-4 w-4" /> {slides.length} slides
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-slate-300 shadow-lg shadow-slate-950/20">
              <LayoutDashboard className="h-4 w-4" /> Navegación con flechas
            </span>
          </div>
        </header>

        <main className="relative flex-1 rounded-[2rem] border border-slate-800 bg-slate-950/80 p-8 shadow-panel backdrop-blur-xl sm:p-12">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-950/80 via-slate-950/0 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-sky-400/40 via-transparent to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-l from-cyan-400/30 via-transparent to-transparent" />

          <div className="relative mx-auto flex h-full max-w-[1100px] flex-col rounded-[2rem] border border-slate-800 bg-slate-950 px-8 py-10 shadow-2xl shadow-slate-950/40 sm:px-14 sm:py-14">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/80">Slide {index + 1} / {slides.length}</p>
                <h2 className="mt-3 text-4xl font-semibold text-white sm:text-5xl">{slide?.title}</h2>
              </div>
              <div className="grid grid-cols-3 gap-3 rounded-3xl border border-slate-800 bg-slate-900/90 p-3 shadow-inner shadow-slate-950/20">
                {slides.map((item, itemIndex) => (
                  <button
                    key={item.path}
                    onClick={() => setIndex(itemIndex)}
                    className={`rounded-2xl px-3 py-2 text-xs font-medium transition ${itemIndex === index ? 'bg-cyan-500 text-slate-950' : 'bg-slate-950/80 text-slate-400 hover:bg-slate-900/80 hover:text-white'}`}
                  >
                    {itemIndex + 1}
                  </button>
                ))}
              </div>
            </div>

            <article className="prose prose-invert max-w-none grow overflow-auto rounded-[1.5rem] border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20 prose-headings:text-slate-100 prose-headings:font-semibold prose-p:text-slate-300 prose-li:text-slate-300 prose-a:text-cyan-300 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-100 prose-ul:list-disc prose-ol:list-decimal prose-figcaption:text-slate-500 sm:p-10"
              dangerouslySetInnerHTML={{ __html: slideHtml }}
            />

            <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
              <p className="inline-flex items-center gap-2 text-slate-300">
                <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-cyan-300">Presentación</span>
                Usa las flechas del teclado o los botones para avanzar.
              </p>
              <div className="flex items-center gap-3">
                <button onClick={prevSlide} className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800">
                  <ArrowLeft className="h-4 w-4" /> Anterior
                </button>
                <button onClick={nextSlide} className="inline-flex items-center gap-2 rounded-2xl border border-cyan-500 bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Siguiente <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
