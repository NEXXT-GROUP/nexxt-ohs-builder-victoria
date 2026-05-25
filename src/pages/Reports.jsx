import { BarChart3, Download, FileBarChart, TrendingUp, TrendingDown, ShieldCheck, AlertTriangle, FileText } from 'lucide-react'
import { PageHeader } from '../components/ui.jsx'
import { ComplianceArea, TradeBars, IncidentLines, DonutChart } from '../components/Charts.jsx'
import { complianceTrend, workersByTrade, incidentsByMonth, reportCards, projects } from '../data/mockData.js'

const reportTypes = [
  { name: 'Monthly OH&S Summary', desc: 'Full compliance & incident report', icon: ShieldCheck },
  { name: 'Incident Register', desc: 'All incidents & near misses', icon: AlertTriangle },
  { name: 'SWMS Sign-off Report', desc: 'Signature status by trade', icon: FileText },
  { name: 'Workforce Compliance', desc: 'Per-worker certification', icon: BarChart3 },
]

export default function Reports() {
  return (
    <>
      <PageHeader
        title="Reporting Dashboard"
        subtitle="Safety analytics & exportable compliance reports"
        icon={BarChart3}
        actions={<button className="btn-primary"><Download size={18} /> Export PDF</button>}
      />

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
        {reportCards.map((c) => (
          <div key={c.label} className="card p-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-extrabold text-navy-900">{c.value}</div>
              <span className={`chip ${c.good ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
                {c.trend === 'up' ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
              </span>
            </div>
            <div className="text-sm font-semibold text-navy-700 mt-1">{c.label}</div>
            <div className="text-[11px] text-navy-400">{c.sub}</div>
          </div>
        ))}
      </div>

      {/* Charts grid */}
      <div className="grid lg:grid-cols-3 gap-4 mb-4">
        <div className="card p-5 lg:col-span-2">
          <h3 className="font-bold text-navy-900 mb-1">Compliance Trend</h3>
          <ComplianceArea data={complianceTrend} />
        </div>
        <div className="card p-5">
          <h3 className="font-bold text-navy-900 mb-1">Org Compliance</h3>
          <DonutChart value={92} label="All sites" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        <div className="card p-5">
          <h3 className="font-bold text-navy-900 mb-1">Incidents vs Near Misses</h3>
          <IncidentLines data={incidentsByMonth} />
        </div>
        <div className="card p-5">
          <h3 className="font-bold text-navy-900 mb-1">Workforce by Trade</h3>
          <TradeBars data={workersByTrade} />
        </div>
      </div>

      {/* Per-project + report generators */}
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="card overflow-hidden lg:col-span-2">
          <div className="px-5 py-4 border-b border-navy-100 font-bold text-navy-900">Compliance by Project</div>
          <table className="w-full text-sm">
            <thead className="bg-navy-50 text-navy-500 text-xs uppercase">
              <tr><th className="text-left px-4 py-3 font-semibold">Project</th><th className="px-4 py-3 font-semibold">Workers</th><th className="text-left px-4 py-3 font-semibold">Compliance</th></tr>
            </thead>
            <tbody className="divide-y divide-navy-50">
              {projects.filter((p) => p.status !== 'Planning').map((p) => (
                <tr key={p.id} className="hover:bg-navy-50/50">
                  <td className="px-4 py-3 font-semibold text-navy-800">{p.name}</td>
                  <td className="px-4 py-3 text-center text-navy-600">{p.workers}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 rounded-full bg-navy-100 overflow-hidden max-w-[140px]">
                        <div className={`h-full rounded-full ${p.compliance >= 90 ? 'bg-emerald-500' : 'bg-safety-500'}`} style={{ width: `${p.compliance}%` }} />
                      </div>
                      <span className="text-xs font-bold text-navy-600 w-9">{p.compliance}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card p-5">
          <div className="flex items-center gap-2 font-bold text-navy-900 mb-3"><FileBarChart size={18} className="text-brand-600" /> Generate Report</div>
          <div className="space-y-2">
            {reportTypes.map((r) => (
              <button key={r.name} className="w-full flex items-center gap-3 rounded-xl border border-navy-100 p-3 text-left hover:border-brand-300 hover:bg-brand-50/40 transition">
                <div className="h-9 w-9 rounded-lg bg-navy-100 text-navy-600 grid place-items-center"><r.icon size={18} /></div>
                <div className="flex-1"><div className="text-sm font-semibold text-navy-800">{r.name}</div><div className="text-[11px] text-navy-400">{r.desc}</div></div>
                <Download size={16} className="text-navy-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
