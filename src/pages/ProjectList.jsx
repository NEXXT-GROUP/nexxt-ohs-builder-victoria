import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FolderKanban, Plus, MapPin, Users2, ShieldCheck, AlertTriangle, Search, Building2 } from 'lucide-react'
import { PageHeader, StatusBadge, ProgressBar } from '../components/ui.jsx'
import { projects } from '../data/mockData.js'

const filters = ['All', 'Active', 'Planning', 'On Hold']

export default function ProjectList() {
  const [filter, setFilter] = useState('All')
  const [q, setQ] = useState('')

  const list = projects.filter(
    (p) => (filter === 'All' || p.status === filter) && p.name.toLowerCase().includes(q.toLowerCase())
  )

  return (
    <>
      <PageHeader
        title="Projects"
        subtitle={`${projects.length} projects across Victoria`}
        icon={FolderKanban}
        actions={<Link to="/projects/new" className="btn-primary"><Plus size={18} /> Create Project</Link>}
      />

      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" />
          <input value={q} onChange={(e) => setQ(e.target.value)} className="input pl-9" placeholder="Search projects..." />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition ${
                filter === f ? 'bg-navy-800 text-white' : 'bg-white text-navy-600 border border-navy-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {list.map((p) => (
          <Link to={`/projects/${p.id}`} key={p.id} className="card p-5 hover:shadow-card-lg hover:-translate-y-0.5 transition-all">
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="h-11 w-11 rounded-xl bg-navy-800 text-safety-400 grid place-items-center shrink-0">
                <Building2 size={22} />
              </div>
              <StatusBadge status={p.status} />
            </div>
            <h3 className="font-bold text-navy-900 leading-snug">{p.name}</h3>
            <p className="text-xs text-navy-400 flex items-center gap-1 mt-1">
              <MapPin size={13} /> {p.address}
            </p>
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-navy-400">Build progress</span>
                <span className="font-bold text-navy-700">{p.progress}%</span>
              </div>
              <ProgressBar value={p.progress} tone="safety" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-lg bg-navy-50 py-2">
                <div className="text-sm font-bold text-navy-800 flex items-center justify-center gap-1"><Users2 size={14} />{p.workers}</div>
                <div className="text-[10px] text-navy-400">Workers</div>
              </div>
              <div className="rounded-lg bg-navy-50 py-2">
                <div className={`text-sm font-bold flex items-center justify-center gap-1 ${p.compliance >= 90 ? 'text-emerald-600' : 'text-safety-600'}`}><ShieldCheck size={14} />{p.compliance}%</div>
                <div className="text-[10px] text-navy-400">Compliant</div>
              </div>
              <div className="rounded-lg bg-navy-50 py-2">
                <div className={`text-sm font-bold flex items-center justify-center gap-1 ${p.openIncidents ? 'text-rose-600' : 'text-navy-800'}`}><AlertTriangle size={14} />{p.openIncidents}</div>
                <div className="text-[10px] text-navy-400">Incidents</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-navy-400">
              <span>{p.type}</span>
              <span className="font-semibold text-navy-600">{p.value}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
