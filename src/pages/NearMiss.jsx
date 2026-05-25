import { useState } from 'react'
import { Eye, Plus, MapPin, Calendar, User, X, Camera, TrendingDown, ShieldCheck } from 'lucide-react'
import { PageHeader, StatusBadge, StatCard } from '../components/ui.jsx'
import { IncidentLines } from '../components/Charts.jsx'
import { incidents, incidentsByMonth } from '../data/mockData.js'

export default function NearMiss() {
  const list = incidents.filter((i) => i.type === 'Near Miss')
  const [showForm, setShowForm] = useState(false)
  const open = list.filter((i) => i.status !== 'Closed').length

  return (
    <>
      <PageHeader
        title="Near Miss Reporting"
        subtitle="Proactive hazard reporting prevents incidents"
        icon={Eye}
        actions={<button onClick={() => setShowForm(true)} className="btn-safety"><Plus size={18} /> Report Near Miss</button>}
      />

      <div className="grid lg:grid-cols-3 gap-4 mb-5">
        <div className="grid grid-cols-3 lg:grid-cols-1 gap-3 lg:col-span-1">
          <StatCard label="Reported (90d)" value={list.length + 6} icon={Eye} tone="brand" />
          <StatCard label="Open Actions" value={open} icon={ShieldCheck} tone="safety" />
          <StatCard label="Incident Reduction" value="32" suffix="%" icon={TrendingDown} tone="green" />
        </div>
        <div className="card p-5 lg:col-span-2">
          <h3 className="font-bold text-navy-900 mb-1">Incidents vs Near Misses</h3>
          <p className="text-xs text-navy-400 mb-2">Higher near-miss reporting correlates with fewer incidents</p>
          <IncidentLines data={incidentsByMonth} />
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="px-5 py-4 border-b border-navy-100 font-bold text-navy-900">Recent Near Miss Reports</div>
        <div className="divide-y divide-navy-50">
          {list.map((i) => (
            <div key={i.id} className="flex flex-col sm:flex-row sm:items-center gap-2 px-5 py-4 hover:bg-navy-50/50">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-navy-400">{i.id}</span>
                  <StatusBadge status={i.severity} />
                </div>
                <div className="font-semibold text-navy-800 text-sm">{i.title}</div>
                <div className="text-xs text-navy-400 flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                  <span className="flex items-center gap-1"><MapPin size={12} />{i.project}</span>
                  <span className="flex items-center gap-1"><User size={12} />{i.reportedBy}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} />{i.date}</span>
                </div>
              </div>
              <StatusBadge status={i.status} />
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-navy-950/50 backdrop-blur-sm">
          <div className="card w-full max-w-lg p-5 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-navy-900">Report a Near Miss</h3>
              <button onClick={() => setShowForm(false)} className="text-navy-400 hover:text-navy-700"><X size={20} /></button>
            </div>
            <div className="space-y-4">
              <div><label className="label">What did you observe?</label><input className="input" placeholder="e.g. Untagged scaffold bay" /></div>
              <div className="grid grid-cols-2 gap-4">
                <div><label className="label">Project</label><select className="input"><option>Docklands Tower Stage 2</option><option>Ballarat Health Precinct</option></select></div>
                <div><label className="label">Risk Level</label><select className="input"><option>Low</option><option>Medium</option><option>High</option></select></div>
              </div>
              <div><label className="label">Suggested Action</label><textarea rows={3} className="input" placeholder="How can this be prevented?" /></div>
              <div className="border-2 border-dashed border-navy-200 rounded-xl p-5 text-center text-navy-400"><Camera size={24} className="mx-auto mb-1" /><span className="text-sm">Add photo (optional)</span></div>
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button onClick={() => setShowForm(false)} className="btn-ghost">Cancel</button>
              <button onClick={() => setShowForm(false)} className="btn-safety">Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
