import { useState } from 'react'
import { BookOpen, Plus, Cloud, Users2, Truck, Image, StickyNote, Wind, CalendarDays, X } from 'lucide-react'
import { PageHeader } from '../components/ui.jsx'
import { siteDiary } from '../data/mockData.js'

export default function SiteDiary() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <PageHeader
        title="Site Diary"
        subtitle="Daily site records — Docklands Tower Stage 2"
        icon={BookOpen}
        actions={<button onClick={() => setShowForm(true)} className="btn-primary"><Plus size={18} /> New Entry</button>}
      />

      {showForm && (
        <div className="card p-5 mb-5 animate-fade-in border-brand-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-navy-900">New Diary Entry</h3>
            <button onClick={() => setShowForm(false)} className="text-navy-400 hover:text-navy-700"><X size={20} /></button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="label">Date</label><input type="date" className="input" /></div>
            <div><label className="label">Weather</label><input className="input" placeholder="Sunny, 18°C" /></div>
            <div><label className="label">Labour on site</label><input className="input" type="number" placeholder="58" /></div>
            <div><label className="label">Deliveries</label><input className="input" placeholder="Concrete, steel..." /></div>
          </div>
          <div className="mt-4"><label className="label">Supervisor Notes</label><textarea rows={3} className="input" placeholder="Progress, issues, instructions..." /></div>
          <div className="mt-4 border-2 border-dashed border-navy-200 rounded-xl p-6 text-center text-navy-400">
            <Image size={28} className="mx-auto mb-2" /><span className="text-sm">Tap to add site photos</span>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={() => setShowForm(false)} className="btn-ghost">Cancel</button>
            <button onClick={() => setShowForm(false)} className="btn-safety">Save Entry</button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {siteDiary.map((d) => (
          <div key={d.id} className="card overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 bg-navy-50 border-b border-navy-100">
              <div className="flex items-center gap-2 font-bold text-navy-800">
                <CalendarDays size={18} className="text-brand-600" />
                {new Date(d.date).toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' })}
              </div>
              <span className="text-xs text-navy-400">{d.supervisor}</span>
            </div>
            <div className="p-5">
              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                <div className="flex items-center gap-2.5 rounded-xl bg-brand-50 p-3">
                  <Cloud size={20} className="text-brand-600 shrink-0" />
                  <div><div className="text-sm font-semibold text-navy-800">{d.weather}</div><div className="text-[11px] text-navy-400 flex items-center gap-1"><Wind size={11} />{d.wind}</div></div>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-emerald-50 p-3">
                  <Users2 size={20} className="text-emerald-600 shrink-0" />
                  <div><div className="text-sm font-semibold text-navy-800">{d.labour} workers</div><div className="text-[11px] text-navy-400">On site</div></div>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl bg-safety-50 p-3">
                  <Image size={20} className="text-safety-600 shrink-0" />
                  <div><div className="text-sm font-semibold text-navy-800">{d.photos} photos</div><div className="text-[11px] text-navy-400">Attached</div></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="text-xs font-semibold text-navy-500 uppercase tracking-wide mb-1.5 flex items-center gap-1.5"><Truck size={14} /> Deliveries</div>
                <ul className="space-y-1">
                  {d.deliveries.map((del, i) => <li key={i} className="text-sm text-navy-600 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-safety-500" />{del}</li>)}
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold text-navy-500 uppercase tracking-wide mb-1.5 flex items-center gap-1.5"><StickyNote size={14} /> Supervisor Notes</div>
                <p className="text-sm text-navy-600 leading-relaxed">{d.notes}</p>
              </div>
              <div className="mt-4 flex gap-2">
                {Array.from({ length: d.photos }).map((_, i) => (
                  <div key={i} className="h-16 w-16 rounded-lg bg-gradient-to-br from-navy-100 to-navy-200 grid place-items-center text-navy-400"><Image size={20} /></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
