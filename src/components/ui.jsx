import { CheckCircle2, AlertTriangle, Clock, XCircle } from 'lucide-react'

export function PageHeader({ title, subtitle, actions, icon: Icon }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div className="flex items-start gap-3">
        {Icon && (
          <div className="h-11 w-11 rounded-xl bg-brand-50 text-brand-600 grid place-items-center shrink-0">
            <Icon size={22} />
          </div>
        )}
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-navy-900 tracking-tight">{title}</h1>
          {subtitle && <p className="text-sm text-navy-500 mt-0.5">{subtitle}</p>}
        </div>
      </div>
      {actions && <div className="flex items-center gap-2 flex-wrap">{actions}</div>}
    </div>
  )
}

export function StatCard({ label, value, icon: Icon, tone = 'brand', sub, suffix }) {
  const tones = {
    brand: 'bg-brand-50 text-brand-600',
    safety: 'bg-safety-50 text-safety-600',
    navy: 'bg-navy-100 text-navy-700',
    green: 'bg-emerald-50 text-emerald-600',
    red: 'bg-rose-50 text-rose-600',
  }
  return (
    <div className="card p-4 sm:p-5 flex items-center gap-4">
      <div className={`h-12 w-12 rounded-xl grid place-items-center shrink-0 ${tones[tone]}`}>
        {Icon && <Icon size={24} />}
      </div>
      <div className="min-w-0">
        <div className="text-2xl font-extrabold text-navy-900 leading-none">
          {value}{suffix && <span className="text-base font-bold text-navy-400">{suffix}</span>}
        </div>
        <div className="text-xs font-medium text-navy-500 mt-1 truncate">{label}</div>
        {sub && <div className="text-[11px] text-navy-400 mt-0.5">{sub}</div>}
      </div>
    </div>
  )
}

const statusMap = {
  Compliant: { cls: 'bg-emerald-50 text-emerald-700', icon: CheckCircle2 },
  Active: { cls: 'bg-emerald-50 text-emerald-700', icon: CheckCircle2 },
  Closed: { cls: 'bg-emerald-50 text-emerald-700', icon: CheckCircle2 },
  Online: { cls: 'bg-emerald-50 text-emerald-700', icon: CheckCircle2 },
  'Action Required': { cls: 'bg-rose-50 text-rose-700', icon: AlertTriangle },
  Open: { cls: 'bg-rose-50 text-rose-700', icon: AlertTriangle },
  High: { cls: 'bg-rose-50 text-rose-700', icon: AlertTriangle },
  'Pending Induction': { cls: 'bg-amber-50 text-amber-700', icon: Clock },
  Planning: { cls: 'bg-amber-50 text-amber-700', icon: Clock },
  Investigating: { cls: 'bg-amber-50 text-amber-700', icon: Clock },
  'Action Assigned': { cls: 'bg-amber-50 text-amber-700', icon: Clock },
  Invited: { cls: 'bg-amber-50 text-amber-700', icon: Clock },
  Medium: { cls: 'bg-amber-50 text-amber-700', icon: AlertTriangle },
  'On Hold': { cls: 'bg-navy-100 text-navy-600', icon: Clock },
  Low: { cls: 'bg-brand-50 text-brand-700', icon: AlertTriangle },
}

export function StatusBadge({ status }) {
  const m = statusMap[status] || { cls: 'bg-navy-100 text-navy-600', icon: Clock }
  const Icon = m.icon
  return (
    <span className={`chip ${m.cls}`}>
      <Icon size={13} /> {status}
    </span>
  )
}

export function ProgressBar({ value, tone = 'brand' }) {
  const tones = { brand: 'bg-brand-500', safety: 'bg-safety-500', green: 'bg-emerald-500' }
  return (
    <div className="h-2 w-full rounded-full bg-navy-100 overflow-hidden">
      <div className={`h-full rounded-full ${tones[tone]}`} style={{ width: `${value}%` }} />
    </div>
  )
}

export function ComplianceDot({ ok }) {
  return ok ? (
    <span className="inline-flex items-center gap-1.5 text-emerald-600 text-xs font-semibold">
      <CheckCircle2 size={16} /> Compliant
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 text-rose-600 text-xs font-semibold">
      <XCircle size={16} /> Action Required
    </span>
  )
}

export function SectionCard({ title, action, children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-navy-100">
          <h3 className="font-bold text-navy-900">{title}</h3>
          {action}
        </div>
      )}
      <div className="p-5">{children}</div>
    </div>
  )
}
