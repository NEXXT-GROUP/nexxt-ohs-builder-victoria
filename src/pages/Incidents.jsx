import { useState } from 'react'
import { AlertTriangle, Plus, MapPin, Calendar, User, CheckCircle2, Circle, X, Camera, ShieldAlert } from 'lucide-react'
import { PageHeader, StatusBadge, StatCard } from '../components/ui.jsx'
import { incidents, incidentTimeline } from '../data/mockData.js'

const correctiveActions = [
  { text: 'Isolate affected area & install signage', owner: 'Site Supervisor', done: true },
  { text: 'Apply non-slip treatment to slab surface', owner: 'Maintenance', done: true },
  { text: 'Toolbox talk on wet-surface hazards', owner: 'HSE Manager', done: false },
  { text: 'Review & update wet-weather SWMS', owner: 'HSE Manager', done: false },
]

export default function Incidents() {
  const list = incidents.filter((i) => i.type === 'Incident')
  const [selected, setSelected] = useState(list[0])
  const [showForm, setShowForm] = useState(false)
  const high = list.filter((i) => i.severity === 'High').length
  const open = list.filter((i) => i.status !== 'Closed').length

  return (
    <>
      <PageHeader
        title="Incident Reporting"
        subtitle="Log, investigate & close out site incidents"
        icon={AlertTriangle}
        actions={<button onClick={() => setShowForm(true)} className="btn-safety"><Plus size={18} /> Report Incident</button>}
      />

      <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-5">
        <StatCard label="Total Incidents" value={list.length} icon={AlertTriangle} tone="navy" />
        <StatCard label="High Severity" value={high} icon={ShieldAlert} tone="red" />
        <StatCard label="Open / Active" value={open} icon={Circle} tone="safety" />
      </div>

      <div className="grid lg:grid-cols-5 gap-4">
        {/* List */}
        <div className="lg:col-span-2 space-y-3">
          {list.map((i) => (
            <button key={i.id} onClick={() => setSelected(i)}
              className={`w-full text-left card p-4 transition ${selected?.id === i.id ? 'ring-2 ring-brand-500' : 'hover:shadow-card-lg'}`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-navy-400">{i.id}</span>
                <StatusBadge status={i.severity} />
              </div>
              <div className="font-semibold text-navy-800 text-sm">{i.title}</div>
              <div className="text-xs text-navy-400 flex items-center gap-1 mt-1"><MapPin size={12} />{i.project}</div>
              <div className="mt-2 flex items-center justify-between">
                <StatusBadge status={i.status} />
                <span className="text-xs text-navy-400">{i.date}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Detail */}
        {selected && (
          <div className="lg:col-span-3 card p-5 h-fit animate-fade-in">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2"><span className="text-xs font-bold text-navy-400">{selected.id}</span><StatusBadge status={selected.severity} /></div>
                <h3 className="text-lg font-bold text-navy-900 mt-1">{selected.title}</h3>
              </div>
              <StatusBadge status={selected.status} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 text-sm">
              <div className="flex items-center gap-2 text-navy-600"><MapPin size={15} className="text-navy-400" />{selected.project}</div>
              <div className="flex items-center gap-2 text-navy-600"><Calendar size={15} className="text-navy-400" />{selected.date}</div>
              <div className="flex items-center gap-2 text-navy-600"><User size={15} className="text-navy-400" />{selected.reportedBy}</div>
            </div>

            <div className="mt-4">
              <div className="text-xs font-semibold text-navy-500 uppercase mb-1.5">Description</div>
              <p className="text-sm text-navy-600 leading-relaxed">A worker slipped on a wet section of freshly poured slab on level 4. No lost time. Area isolated immediately and first aid assessment completed. Root cause linked to inadequate drainage during overnight rain.</p>
            </div>

            <div className="mt-4 flex gap-2">
              {[1, 2].map((n) => <div key={n} className="h-20 w-20 rounded-lg bg-gradient-to-br from-navy-100 to-navy-200 grid place-items-center text-navy-400"><Camera size={20} /></div>)}
            </div>

            <div className="mt-5">
              <div className="text-xs font-semibold text-navy-500 uppercase mb-2">Corrective Actions</div>
              <ul className="space-y-2">
                {correctiveActions.map((a, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    {a.done ? <CheckCircle2 size={18} className="text-emerald-500 mt-0.5 shrink-0" /> : <Circle size={18} className="text-navy-300 mt-0.5 shrink-0" />}
                    <div><span className={`text-sm ${a.done ? 'text-navy-400 line-through' : 'text-navy-700 font-medium'}`}>{a.text}</span><div className="text-[11px] text-navy-400">{a.owner}</div></div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5">
              <div className="text-xs font-semibold text-navy-500 uppercase mb-2">Timeline</div>
              <ol className="relative border-l-2 border-navy-100 ml-2 space-y-4">
                {incidentTimeline.map((t, i) => (
                  <li key={i} className="ml-4">
                    <span className={`absolute -left-[7px] h-3 w-3 rounded-full ${t.done ? 'bg-emerald-500' : 'bg-navy-200'}`} />
                    <div className="text-xs text-navy-400">{t.time}</div>
                    <div className={`text-sm ${t.done ? 'text-navy-700' : 'text-navy-400'}`}>{t.text}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>

      {showForm && <ReportModal onClose={() => setShowForm(false)} />}
    </>
  )
}

function ReportModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-navy-950/50 backdrop-blur-sm">
      <div className="card w-full max-w-lg p-5 animate-fade-in max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-navy-900">Report Incident</h3>
          <button onClick={onClose} className="text-navy-400 hover:text-navy-700"><X size={20} /></button>
        </div>
        <div className="space-y-4">
          <div><label className="label">Title</label><input className="input" placeholder="What happened?" /></div>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="label">Project</label><select className="input"><option>Docklands Tower Stage 2</option><option>Ballarat Health Precinct</option></select></div>
            <div><label className="label">Severity</label><select className="input"><option>Low</option><option>Medium</option><option>High</option></select></div>
          </div>
          <div><label className="label">Description</label><textarea rows={3} className="input" placeholder="Describe the incident..." /></div>
          <div className="border-2 border-dashed border-navy-200 rounded-xl p-5 text-center text-navy-400"><Camera size={24} className="mx-auto mb-1" /><span className="text-sm">Add photos</span></div>
        </div>
        <div className="flex justify-end gap-2 mt-5">
          <button onClick={onClose} className="btn-ghost">Cancel</button>
          <button onClick={onClose} className="btn-safety">Submit Report</button>
        </div>
      </div>
    </div>
  )
}
