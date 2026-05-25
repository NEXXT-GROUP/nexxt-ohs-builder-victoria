import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GraduationCap, CheckCircle2, Circle, PlayCircle, Clock, ChevronRight, BadgeCheck, ShieldCheck } from 'lucide-react'
import { inductionModules } from '../../data/mockData.js'

export default function Induction() {
  const navigate = useNavigate()
  const [modules, setModules] = useState(inductionModules)
  const done = modules.filter((m) => m.done).length
  const pct = Math.round((done / modules.length) * 100)

  const complete = (id) => setModules((ms) => ms.map((m) => (m.id === id ? { ...m, done: true } : m)))

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold text-navy-900">Site Induction</h1>
        <p className="text-navy-500 text-sm">Docklands Tower Stage 2 · complete all modules</p>
      </div>

      {/* Progress */}
      <div className="card p-5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 font-bold text-navy-800"><GraduationCap size={20} className="text-brand-600" /> Your Progress</div>
          <span className="text-sm font-extrabold text-navy-800">{done}/{modules.length}</span>
        </div>
        <div className="h-2.5 w-full rounded-full bg-navy-100 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-brand-500 to-emerald-500 transition-all duration-500" style={{ width: `${pct}%` }} />
        </div>
        <div className="text-xs text-navy-400 mt-1.5">{pct}% complete · {modules.length - done} modules remaining</div>
      </div>

      {/* Modules */}
      <div className="space-y-2.5">
        {modules.map((m, i) => {
          const locked = i > 0 && !modules[i - 1].done && !m.done
          return (
            <div key={m.id} className={`card p-4 flex items-center gap-3 ${m.done ? 'bg-emerald-50/40' : ''}`}>
              <div className={`h-10 w-10 rounded-xl grid place-items-center shrink-0 ${m.done ? 'bg-emerald-100 text-emerald-600' : locked ? 'bg-navy-100 text-navy-300' : 'bg-brand-50 text-brand-600'}`}>
                {m.done ? <CheckCircle2 size={22} /> : locked ? <Circle size={22} /> : <PlayCircle size={22} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-navy-800">{m.title}</div>
                <div className="text-xs text-navy-400 flex items-center gap-1"><Clock size={12} />{m.mins} min</div>
              </div>
              {m.done ? (
                <span className="chip bg-emerald-50 text-emerald-700">Done</span>
              ) : locked ? (
                <span className="text-xs text-navy-300 font-semibold">Locked</span>
              ) : (
                <button onClick={() => complete(m.id)} className="btn-primary py-1.5 px-3 text-xs">Start <ChevronRight size={14} /></button>
              )}
            </div>
          )
        })}
      </div>

      {/* CTA to quiz */}
      <div className={`card p-5 flex items-center gap-3 ${pct === 100 ? 'border-emerald-300' : ''}`}>
        <div className={`h-11 w-11 rounded-xl grid place-items-center shrink-0 ${pct === 100 ? 'bg-emerald-100 text-emerald-600' : 'bg-navy-100 text-navy-400'}`}><BadgeCheck size={24} /></div>
        <div className="flex-1"><div className="font-bold text-navy-800">OH&S Knowledge Quiz</div><div className="text-xs text-navy-400">{pct === 100 ? 'Unlocked — test your knowledge' : 'Complete all modules to unlock'}</div></div>
        <button disabled={pct !== 100} onClick={() => navigate('/worker/quiz')} className="btn-safety py-2 px-4 text-sm disabled:opacity-40">Take Quiz</button>
      </div>

      <div className="rounded-xl bg-brand-50 border border-brand-100 p-3 flex items-center gap-2.5 text-xs text-brand-800">
        <ShieldCheck size={24} className="text-brand-600 shrink-0" /> You must complete the induction and quiz before entering site.
      </div>
    </div>
  )
}
