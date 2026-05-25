import { useState } from 'react'
import { FileText, Plus, Download, ShieldAlert, HardHat, Eye, PenLine, X, CheckCircle2 } from 'lucide-react'
import { PageHeader, StatCard, ProgressBar } from '../components/ui.jsx'
import { swmsTemplates, swmsDetail, trades } from '../data/mockData.js'

const riskTone = { High: 'bg-rose-50 text-rose-700', Medium: 'bg-amber-50 text-amber-700', Low: 'bg-brand-50 text-brand-700' }

export default function SwmsManagement() {
  const [view, setView] = useState(null)
  const detail = swmsDetail.Carpenter

  return (
    <>
      <PageHeader
        title="SWMS Management"
        subtitle="Safe Work Method Statements — templates & sign-off"
        icon={FileText}
        actions={<button className="btn-primary"><Plus size={18} /> New SWMS</button>}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
        <StatCard label="SWMS Templates" value={swmsTemplates.length} icon={FileText} tone="brand" />
        <StatCard label="Trades Covered" value={trades.length} icon={HardHat} tone="navy" />
        <StatCard label="Total Sign-offs" value="51" icon={PenLine} tone="green" />
        <StatCard label="Awaiting Signature" value="16" icon={ShieldAlert} tone="safety" />
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {swmsTemplates.map((s) => {
          const pct = Math.round((s.signed / s.total) * 100)
          return (
            <div key={s.id} className="card p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center"><FileText size={22} /></div>
                <span className="chip bg-navy-100 text-navy-600">{s.version}</span>
              </div>
              <div className="text-xs font-semibold text-safety-600 uppercase tracking-wide">{s.trade}</div>
              <h3 className="font-bold text-navy-900 leading-snug">{s.title}</h3>
              <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                <div className="rounded-lg bg-rose-50 py-1.5"><div className="text-sm font-bold text-rose-600">{s.hazards}</div><div className="text-[10px] text-navy-400">Hazards</div></div>
                <div className="rounded-lg bg-emerald-50 py-1.5"><div className="text-sm font-bold text-emerald-600">{s.controls}</div><div className="text-[10px] text-navy-400">Controls</div></div>
                <div className="rounded-lg bg-brand-50 py-1.5"><div className="text-sm font-bold text-brand-600">{s.ppe}</div><div className="text-[10px] text-navy-400">PPE</div></div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1"><span className="text-navy-400">Signed off</span><span className="font-bold text-navy-700">{s.signed}/{s.total}</span></div>
                <ProgressBar value={pct} tone={pct === 100 ? 'green' : 'safety'} />
              </div>
              <div className="flex gap-2 mt-4">
                <button onClick={() => setView(s)} className="btn-ghost flex-1 py-2"><Eye size={16} /> View</button>
                <button className="btn-ghost px-3 py-2"><Download size={16} /></button>
              </div>
            </div>
          )
        })}
      </div>

      {view && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-navy-950/50 backdrop-blur-sm">
          <div className="card w-full max-w-2xl p-0 animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-navy-900 text-white px-5 py-4 flex items-center justify-between rounded-t-2xl">
              <div><div className="text-xs text-safety-400 font-semibold uppercase">{view.trade} · {view.version}</div><h3 className="font-bold">{view.title}</h3></div>
              <button onClick={() => setView(null)} className="text-white/70 hover:text-white"><X size={20} /></button>
            </div>
            <div className="p-5">
              <div className="text-xs font-semibold text-navy-500 uppercase mb-2">Hazards & Risk Controls</div>
              <div className="space-y-2">
                {detail.hazards.map((h, i) => (
                  <div key={i} className="rounded-xl border border-navy-100 p-3">
                    <div className="flex items-center justify-between"><span className="font-semibold text-navy-800 text-sm">{h.hazard}</span><span className={`chip ${riskTone[h.risk]}`}>{h.risk}</span></div>
                    <p className="text-xs text-navy-500 mt-1"><b>Control:</b> {h.control}</p>
                  </div>
                ))}
              </div>
              <div className="text-xs font-semibold text-navy-500 uppercase mt-5 mb-2">Required PPE</div>
              <div className="flex flex-wrap gap-2">
                {detail.ppe.map((p) => <span key={p} className="chip bg-brand-50 text-brand-700"><CheckCircle2 size={13} />{p}</span>)}
              </div>
              <div className="mt-5 rounded-xl border-2 border-dashed border-navy-200 p-4">
                <div className="text-xs font-semibold text-navy-500 uppercase mb-2">Digital Signature</div>
                <div className="h-20 rounded-lg bg-navy-50 grid place-items-center text-navy-300 italic">Sign here</div>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="btn-ghost flex-1"><Download size={16} /> Download PDF</button>
                <button onClick={() => setView(null)} className="btn-primary flex-1"><PenLine size={16} /> Sign SWMS</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
