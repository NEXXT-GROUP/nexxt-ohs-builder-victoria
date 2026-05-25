import { useState } from 'react'
import { ShieldCheck, Search, Upload, Download, CheckCircle2, XCircle, GraduationCap, FileCheck2, CreditCard, HeartPulse, FileSignature, BadgeCheck } from 'lucide-react'
import { PageHeader, StatCard } from '../components/ui.jsx'
import { workers } from '../data/mockData.js'

const cols = [
  { key: 'induction', label: 'Induction', icon: GraduationCap },
  { key: 'quiz', label: 'Quiz', icon: BadgeCheck },
  { key: 'whiteCard', label: 'White Card', icon: CreditCard },
  { key: 'insurance', label: 'Insurance', icon: FileCheck2 },
  { key: 'medical', label: 'Medical', icon: HeartPulse },
  { key: 'swms', label: 'SWMS', icon: FileSignature },
]

function Cell({ ok }) {
  return (
    <div className="flex justify-center">
      {ok ? (
        <span className="h-7 w-7 rounded-lg bg-emerald-50 text-emerald-600 grid place-items-center"><CheckCircle2 size={17} /></span>
      ) : (
        <span className="h-7 w-7 rounded-lg bg-rose-50 text-rose-600 grid place-items-center"><XCircle size={17} /></span>
      )}
    </div>
  )
}

export default function Compliance() {
  const [q, setQ] = useState('')
  const list = workers.filter((w) => w.name.toLowerCase().includes(q.toLowerCase()))
  const compliant = workers.filter((w) => w.status === 'Compliant').length
  const action = workers.filter((w) => w.status === 'Action Required').length
  const pending = workers.filter((w) => w.status === 'Pending Induction').length
  const rate = Math.round((compliant / workers.length) * 100)

  return (
    <>
      <PageHeader
        title="Compliance Dashboard"
        subtitle="Worker certification status across all sites"
        icon={ShieldCheck}
        actions={<>
          <button className="btn-ghost"><Upload size={18} /> Upload Docs</button>
          <button className="btn-primary"><Download size={18} /> Export</button>
        </>}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
        <StatCard label="Overall Compliance" value={rate} suffix="%" icon={ShieldCheck} tone="green" />
        <StatCard label="Fully Compliant" value={compliant} icon={CheckCircle2} tone="green" />
        <StatCard label="Action Required" value={action} icon={XCircle} tone="red" />
        <StatCard label="Pending Induction" value={pending} icon={GraduationCap} tone="safety" />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="relative sm:max-w-xs w-full">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" />
          <input value={q} onChange={(e) => setQ(e.target.value)} className="input pl-9" placeholder="Search workers..." />
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-emerald-600 font-semibold"><span className="h-3 w-3 rounded bg-emerald-500" /> Compliant</span>
          <span className="flex items-center gap-1.5 text-rose-600 font-semibold"><span className="h-3 w-3 rounded bg-rose-500" /> Action Required</span>
        </div>
      </div>

      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[760px]">
            <thead className="bg-navy-50 text-navy-500 text-xs uppercase">
              <tr>
                <th className="text-left px-4 py-3 font-semibold sticky left-0 bg-navy-50">Worker</th>
                {cols.map((c) => (
                  <th key={c.key} className="px-3 py-3 font-semibold">
                    <div className="flex flex-col items-center gap-1"><c.icon size={15} />{c.label}</div>
                  </th>
                ))}
                <th className="px-4 py-3 font-semibold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-50">
              {list.map((w) => (
                <tr key={w.id} className="hover:bg-navy-50/50">
                  <td className="px-4 py-3 sticky left-0 bg-white">
                    <div className="font-semibold text-navy-800 whitespace-nowrap">{w.name}</div>
                    <div className="text-xs text-navy-400">{w.trade} · {w.project.split(' ').slice(0, 2).join(' ')}</div>
                  </td>
                  {cols.map((c) => <td key={c.key} className="px-3 py-3"><Cell ok={w[c.key]} /></td>)}
                  <td className="px-4 py-3 text-right">
                    <span className={`chip ${w.status === 'Compliant' ? 'bg-emerald-50 text-emerald-700' : w.status === 'Action Required' ? 'bg-rose-50 text-rose-700' : 'bg-amber-50 text-amber-700'}`}>
                      {w.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
