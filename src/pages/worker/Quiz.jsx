import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BadgeCheck, CheckCircle2, XCircle, RotateCcw, ChevronRight, Trophy, AlertTriangle, ArrowRight } from 'lucide-react'
import { quizQuestions } from '../../data/mockData.js'

export default function Quiz() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selected, setSelected] = useState(null)
  const [finished, setFinished] = useState(false)

  const q = quizQuestions[current]
  const pct = Math.round(((current + (finished ? 1 : 0)) / quizQuestions.length) * 100)

  const submit = () => {
    const next = [...answers, selected]
    setAnswers(next)
    setSelected(null)
    if (current < quizQuestions.length - 1) {
      setCurrent(current + 1)
    } else {
      setFinished(true)
    }
  }

  const retry = () => {
    setCurrent(0); setAnswers([]); setSelected(null); setFinished(false)
  }

  if (finished) {
    const correct = answers.filter((a, i) => a === quizQuestions[i].answer).length
    const passed = correct === quizQuestions.length
    return (
      <div className="max-w-md mx-auto pt-6">
        <div className="card p-6 text-center animate-fade-in">
          <div className={`h-20 w-20 rounded-full grid place-items-center mx-auto ${passed ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
            {passed ? <Trophy size={40} /> : <AlertTriangle size={40} />}
          </div>
          <h2 className="text-2xl font-extrabold text-navy-900 mt-4">{passed ? 'Quiz Passed!' : 'Not Quite'}</h2>
          <p className="text-navy-500 mt-1">{passed ? 'You scored 100% — site safety knowledge confirmed.' : 'A 100% pass is required. Review and try again.'}</p>
          <div className="text-4xl font-extrabold mt-4" style={{ color: passed ? '#10b981' : '#e11d48' }}>{correct}/{quizQuestions.length}</div>

          <div className="mt-5 space-y-2 text-left">
            {quizQuestions.map((qq, i) => {
              const ok = answers[i] === qq.answer
              return (
                <div key={i} className="flex items-start gap-2 text-sm">
                  {ok ? <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" /> : <XCircle size={18} className="text-rose-500 mt-0.5 shrink-0" />}
                  <span className="text-navy-600">{qq.q}</span>
                </div>
              )
            })}
          </div>

          {passed ? (
            <button onClick={() => navigate('/worker/swms')} className="btn-safety w-full mt-6 py-3">Continue to SWMS <ArrowRight size={18} /></button>
          ) : (
            <button onClick={retry} className="btn-primary w-full mt-6 py-3"><RotateCcw size={18} /> Retry Quiz</button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-xl mx-auto">
      <div className="mb-4">
        <h1 className="text-2xl font-extrabold text-navy-900">OH&S Knowledge Quiz</h1>
        <p className="text-navy-500 text-sm">Answer all questions correctly to pass.</p>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-3 mb-5">
        <div className="h-2.5 flex-1 rounded-full bg-navy-100 overflow-hidden">
          <div className="h-full rounded-full bg-brand-500 transition-all duration-300" style={{ width: `${pct}%` }} />
        </div>
        <span className="text-sm font-bold text-navy-600 whitespace-nowrap">Q{current + 1}/{quizQuestions.length}</span>
      </div>

      <div className="card p-5 animate-fade-in" key={current}>
        <div className="flex items-center gap-2 text-xs font-bold text-brand-600 uppercase tracking-wide mb-2"><BadgeCheck size={16} /> Question {current + 1}</div>
        <h3 className="text-lg font-bold text-navy-900 mb-4">{q.q}</h3>
        <div className="space-y-2.5">
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => setSelected(i)}
              className={`w-full flex items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition ${selected === i ? 'border-brand-500 bg-brand-50' : 'border-navy-100 hover:border-navy-300'}`}>
              <span className={`h-6 w-6 rounded-full grid place-items-center text-xs font-bold shrink-0 ${selected === i ? 'bg-brand-600 text-white' : 'bg-navy-100 text-navy-500'}`}>{String.fromCharCode(65 + i)}</span>
              <span className="text-sm font-medium text-navy-700">{opt}</span>
            </button>
          ))}
        </div>
        <button onClick={submit} disabled={selected === null} className="btn-primary w-full mt-5 py-3 disabled:opacity-40">
          {current < quizQuestions.length - 1 ? <>Next Question <ChevronRight size={18} /></> : <>Submit Quiz <CheckCircle2 size={18} /></>}
        </button>
      </div>
    </div>
  )
}
