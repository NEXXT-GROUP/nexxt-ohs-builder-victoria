import { useState } from 'react'
import { ClipboardList, Plus, Users2, Clock, Calendar, User, CheckCircle2, Circle, PenLine, X } from 'lucide-react'
import { PageHeader, StatCard } from '../components/ui.jsx'
import { toolboxMeetings, meetingAttendees } from '../data/mockData.js'

export default function Toolbox() {
  const [selected, setSelected] = useState(toolboxMeetings[0])
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <PageHeader
        title="Toolbox Meetings"
        subtitle="Pre-start talks, attendance & digital sign-off"
        icon={ClipboardList}
        actions={<button onClick={() => setShowForm(true)} className="btn-primary"><Plus size={18} /> New Meeting</button>}
      />

      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5">
        <StatCard label="Meetings (30d)" value="24" icon={ClipboardList} tone="brand" />
        <StatCard label="Avg Attendance" value="92" suffix="%" icon={Users2} tone="green" />
        <StatCard label="Signatures" value="438" icon={PenLine} tone="navy" />
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2 space-y-3">
          {toolboxMeetings.map((m) => (
            <button key={m.id} onClick={() => setSelected(m)}
              className={`w-full text-left card p-4 transition ${selected.id === m.id ? 'ring-2 ring-brand-500' : 'hover:shadow-card-lg'}`}>
              <div className="font-semibold text-navy-800 text-sm">{m.topic}</div>
              <div className="text-xs text-navy-400 flex items-center gap-1 mt-1"><Calendar size={12} />{m.date} · {m.project}</div>
              <div className="mt-2 flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1 text-navy-600"><Users2 size={13} />{m.attendees}/{m.total}</span>
                <span className="flex items-center gap-1 text-navy-600"><Clock size={13} />{m.duration}</span>
                <span className="ml-auto chip bg-emerald-50 text-emerald-700">{Math.round((m.attendees / m.total) * 100)}% present</span>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:col-span-3 card p-5 h-fit animate-fade-in">
          <h3 className="text-lg font-bold text-navy-900">{selected.topic}</h3>
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-navy-500">
            <span className="flex items-center gap-1"><Calendar size={14} />{selected.date}</span>
            <span className="flex items-center gap-1"><User size={14} />{selected.presenter}</span>
            <span className="flex items-center gap-1"><Clock size={14} />{selected.duration}</span>
          </div>

          <div className="mt-4">
            <div className="text-xs font-semibold text-navy-500 uppercase mb-2">Topics Covered</div>
            <ul className="space-y-1.5">
              {selected.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-navy-700"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold text-navy-500 uppercase">Attendance & Signatures</div>
              <span className="text-xs font-bold text-navy-600">{selected.attendees}/{selected.total}</span>
            </div>
            <div className="space-y-2">
              {meetingAttendees.map((a, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-navy-100 px-3 py-2">
                  <div className="h-8 w-8 rounded-full bg-navy-100 grid place-items-center text-xs font-bold text-navy-600">{a.name.split(' ').map((n) => n[0]).join('')}</div>
                  <div className="flex-1"><div className="text-sm font-semibold text-navy-800">{a.name}</div><div className="text-[11px] text-navy-400">{a.trade}</div></div>
                  {a.signed ? (
                    <span className="flex items-center gap-1 text-emerald-600 text-xs font-semibold italic" style={{ fontFamily: 'cursive' }}><PenLine size={14} />Signed</span>
                  ) : (
                    <span className="flex items-center gap-1 text-navy-300 text-xs font-semibold"><Circle size={14} />Pending</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-navy-950/50 backdrop-blur-sm">
          <div className="card w-full max-w-lg p-5 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-navy-900">New Toolbox Meeting</h3>
              <button onClick={() => setShowForm(false)} className="text-navy-400 hover:text-navy-700"><X size={20} /></button>
            </div>
            <div className="space-y-4">
              <div><label className="label">Topic</label><input className="input" placeholder="e.g. Hot Works & Fire Safety" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="label">Date</label><input type="date" className="input" /></div>
                <div><label className="label">Project</label><select className="input"><option>Docklands Tower Stage 2</option></select></div>
              </div>
              <div><label className="label">Key Points</label><textarea rows={3} className="input" placeholder="One point per line..." /></div>
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button onClick={() => setShowForm(false)} className="btn-ghost">Cancel</button>
              <button onClick={() => setShowForm(false)} className="btn-primary">Start Meeting</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
