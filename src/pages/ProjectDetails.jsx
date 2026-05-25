import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft, MapPin, Users2, ShieldCheck, AlertTriangle, FileText, CalendarDays,
  HardHat, Building2, Briefcase, TrendingUp,
} from 'lucide-react'
import { PageHeader, StatusBadge, ProgressBar, StatCard, ComplianceDot } from '../components/ui.jsx'
import { DonutChart } from '../components/Charts.jsx'
import { projects, workers, swmsTemplates } from '../data/mockData.js'

const tabs = ['Overview', 'Workers', 'SWMS', 'Compliance']

export default function ProjectDetails() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id) || projects[0]
  const [tab, setTab] = useState('Overview')
  const projectWorkers = workers.filter((w) => w.project === project.name)

  return (
    <>
      <PageHeader
        title={project.name}
        subtitle={project.type}
        icon={Building2}
        actions={<Link to="/projects" className="btn-ghost"><ArrowLeft size={18} /> Projects</Link>}
      />

      {/* Hero card */}
      <div className="card overflow-hidden mb-5">
        <div className="bg-navy-900 p-5 sm:p-6 text-white relative">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <StatusBadge status={project.status} />
              <h2 className="text-2xl font-extrabold mt-2">{project.name}</h2>
              <p className="text-navy-200 text-sm flex items-center gap-1.5 mt-1"><MapPin size={15} /> {project.address}</p>
            </div>
            <div className="flex gap-6">
              <div><div className="text-2xl font-extrabold text-safety-400">{project.value}</div><div className="text-xs text-navy-300">Contract value</div></div>
              <div><div className="text-2xl font-extrabold">{project.progress}%</div><div className="text-xs text-navy-300">Complete</div></div>
            </div>
          </div>
          <div className="relative mt-4">
            <ProgressBar value={project.progress} tone="safety" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-navy-100 text-center">
          {[
            { icon: HardHat, label: 'Supervisor', value: project.supervisor },
            { icon: CalendarDays, label: 'Start', value: project.startDate },
            { icon: CalendarDays, label: 'Completion', value: project.endDate },
            { icon: Briefcase, label: 'Site Type', value: project.type },
          ].map((m, i) => (
            <div key={i} className={`p-4 ${i >= 2 ? 'border-t sm:border-t-0 border-navy-100' : ''}`}>
              <m.icon size={18} className="mx-auto text-brand-500" />
              <div className="text-sm font-bold text-navy-800 mt-1 truncate">{m.value}</div>
              <div className="text-[11px] text-navy-400">{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
        <StatCard label="Workers On Site" value={project.workers} icon={Users2} tone="brand" />
        <StatCard label="Compliance" value={project.compliance} suffix="%" icon={ShieldCheck} tone="green" />
        <StatCard label="Active SWMS" value={project.swms} icon={FileText} tone="navy" />
        <StatCard label="Open Incidents" value={project.openIncidents} icon={AlertTriangle} tone={project.openIncidents ? 'red' : 'navy'} />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {tabs.map((t) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition ${
              tab === t ? 'bg-brand-600 text-white' : 'bg-white text-navy-600 border border-navy-200'
            }`}>
            {t}
          </button>
        ))}
      </div>

      {tab === 'Overview' && (
        <div className="grid lg:grid-cols-3 gap-4 animate-fade-in">
          <div className="card p-5 lg:col-span-2">
            <h3 className="font-bold text-navy-900 mb-3">Site Summary</h3>
            <p className="text-sm text-navy-600 leading-relaxed">
              {project.name} is a {project.type.toLowerCase()} project located in {project.suburb}, Victoria.
              The site currently has {project.workers} inducted workers and maintains a {project.compliance}% compliance
              rating. {project.openIncidents ? 'There is an open incident under investigation.' : 'No open incidents on record.'}
            </p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-emerald-50 p-3"><TrendingUp className="text-emerald-600" size={18} /><div className="text-lg font-bold text-navy-800 mt-1">{project.compliance}%</div><div className="text-xs text-navy-500">Compliance</div></div>
              <div className="rounded-xl bg-brand-50 p-3"><Users2 className="text-brand-600" size={18} /><div className="text-lg font-bold text-navy-800 mt-1">{project.workers}</div><div className="text-xs text-navy-500">Workforce</div></div>
              <div className="rounded-xl bg-safety-50 p-3"><FileText className="text-safety-600" size={18} /><div className="text-lg font-bold text-navy-800 mt-1">{project.swms}</div><div className="text-xs text-navy-500">SWMS docs</div></div>
            </div>
          </div>
          <div className="card p-5">
            <h3 className="font-bold text-navy-900 mb-2">Compliance Rate</h3>
            <DonutChart value={project.compliance} label="On site" />
          </div>
        </div>
      )}

      {tab === 'Workers' && (
        <div className="card overflow-hidden animate-fade-in">
          <table className="w-full text-sm">
            <thead className="bg-navy-50 text-navy-500 text-xs uppercase">
              <tr><th className="text-left px-4 py-3 font-semibold">Worker</th><th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Trade</th><th className="text-left px-4 py-3 font-semibold">Status</th></tr>
            </thead>
            <tbody className="divide-y divide-navy-50">
              {projectWorkers.length === 0 && <tr><td colSpan={3} className="px-4 py-8 text-center text-navy-400">No workers assigned yet.</td></tr>}
              {projectWorkers.map((w) => (
                <tr key={w.id} className="hover:bg-navy-50/50">
                  <td className="px-4 py-3"><div className="font-semibold text-navy-800">{w.name}</div><div className="text-xs text-navy-400">{w.company}</div></td>
                  <td className="px-4 py-3 hidden sm:table-cell text-navy-600">{w.trade}</td>
                  <td className="px-4 py-3"><StatusBadge status={w.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === 'SWMS' && (
        <div className="grid sm:grid-cols-2 gap-3 animate-fade-in">
          {swmsTemplates.slice(0, 4).map((s) => (
            <Link to="/swms" key={s.id} className="card p-4 flex items-center gap-3 hover:shadow-card-lg transition">
              <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center"><FileText size={22} /></div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-navy-800 truncate">{s.title}</div>
                <div className="text-xs text-navy-400">{s.version} · {s.signed}/{s.total} signed</div>
              </div>
              <span className="text-xs font-bold text-navy-500">{Math.round((s.signed / s.total) * 100)}%</span>
            </Link>
          ))}
        </div>
      )}

      {tab === 'Compliance' && (
        <div className="card overflow-hidden animate-fade-in">
          <table className="w-full text-sm">
            <thead className="bg-navy-50 text-navy-500 text-xs uppercase">
              <tr><th className="text-left px-4 py-3 font-semibold">Worker</th><th className="px-4 py-3 font-semibold">Induction</th><th className="px-4 py-3 font-semibold">White Card</th><th className="px-4 py-3 font-semibold">SWMS</th></tr>
            </thead>
            <tbody className="divide-y divide-navy-50">
              {projectWorkers.map((w) => (
                <tr key={w.id} className="hover:bg-navy-50/50">
                  <td className="px-4 py-3 font-semibold text-navy-800">{w.name}</td>
                  <td className="px-4 py-3 text-center"><ComplianceDot ok={w.induction} /></td>
                  <td className="px-4 py-3 text-center"><ComplianceDot ok={w.whiteCard} /></td>
                  <td className="px-4 py-3 text-center"><ComplianceDot ok={w.swms} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
