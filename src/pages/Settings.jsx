import { useState } from 'react'
import { Settings as SettingsIcon, Building2, Bell, ShieldCheck, CreditCard, User, Check } from 'lucide-react'
import { PageHeader } from '../components/ui.jsx'
import { company, currentBuilder } from '../data/mockData.js'

const tabs = [
  { id: 'company', label: 'Company', icon: Building2 },
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'safety', label: 'Safety Defaults', icon: ShieldCheck },
  { id: 'billing', label: 'Billing', icon: CreditCard },
]

function Toggle({ defaultChecked }) {
  return <input type="checkbox" defaultChecked={defaultChecked} className="h-5 w-9 appearance-none rounded-full bg-navy-200 checked:bg-emerald-500 relative transition cursor-pointer before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition checked:before:translate-x-4" />
}

export default function Settings() {
  const [tab, setTab] = useState('company')

  return (
    <>
      <PageHeader title="Settings" subtitle="Configure your workspace & preferences" icon={SettingsIcon} />

      <div className="grid lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <div className="card p-2 flex lg:flex-col gap-1 overflow-x-auto">
            {tabs.map((t) => (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition ${tab === t.id ? 'bg-brand-600 text-white' : 'text-navy-600 hover:bg-navy-50'}`}>
                <t.icon size={18} />{t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 card p-5 sm:p-6">
          {tab === 'company' && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="font-bold text-navy-900">Company Details</h3>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-navy-800 text-safety-400 grid place-items-center"><Building2 size={28} /></div>
                <button className="btn-ghost">Change Logo</button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="label">Company Name</label><input className="input" defaultValue={company.builder} /></div>
                <div><label className="label">ABN</label><input className="input" defaultValue={company.abn} /></div>
                <div><label className="label">State</label><input className="input" defaultValue="Victoria" /></div>
                <div><label className="label">Phone</label><input className="input" defaultValue="03 9123 4567" /></div>
              </div>
              <button className="btn-primary"><Check size={16} /> Save Changes</button>
            </div>
          )}

          {tab === 'profile' && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="font-bold text-navy-900">My Profile</h3>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-brand-500 to-navy-700 text-white grid place-items-center text-xl font-bold">{currentBuilder.initials}</div>
                <div><div className="font-bold text-navy-800">{currentBuilder.name}</div><div className="text-sm text-navy-400">{currentBuilder.role}</div></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="label">Full Name</label><input className="input" defaultValue={currentBuilder.name} /></div>
                <div><label className="label">Email</label><input className="input" defaultValue={currentBuilder.email} /></div>
              </div>
              <button className="btn-primary"><Check size={16} /> Save Profile</button>
            </div>
          )}

          {tab === 'notifications' && (
            <div className="space-y-3 animate-fade-in">
              <h3 className="font-bold text-navy-900 mb-1">Notification Preferences</h3>
              {['New incident reported', 'Near miss logged', 'Worker fails OH&S quiz', 'SWMS awaiting signature', 'Induction completed', 'Weekly compliance digest'].map((n, i) => (
                <label key={n} className="flex items-center justify-between rounded-xl border border-navy-100 px-4 py-3">
                  <span className="text-sm font-medium text-navy-700">{n}</span><Toggle defaultChecked={i !== 4} />
                </label>
              ))}
            </div>
          )}

          {tab === 'safety' && (
            <div className="space-y-3 animate-fade-in">
              <h3 className="font-bold text-navy-900 mb-1">Default Safety Requirements</h3>
              <p className="text-sm text-navy-500">Applied to every new project unless overridden.</p>
              {['Mandatory digital induction', 'OH&S quiz pass mark 100%', 'White Card verification required', 'Public liability insurance check', 'Daily site diary required', 'SWMS sign-off before site entry'].map((n) => (
                <label key={n} className="flex items-center justify-between rounded-xl border border-navy-100 px-4 py-3">
                  <span className="text-sm font-medium text-navy-700">{n}</span><Toggle defaultChecked />
                </label>
              ))}
            </div>
          )}

          {tab === 'billing' && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="font-bold text-navy-900">Subscription</h3>
              <div className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 text-white p-5">
                <div className="flex items-center justify-between">
                  <div><div className="text-safety-400 text-xs font-bold uppercase tracking-wide">Current Plan</div><div className="text-2xl font-extrabold mt-1">Builder Pro</div></div>
                  <div className="text-right"><div className="text-2xl font-extrabold">$299<span className="text-sm text-navy-300">/mo</span></div><div className="text-xs text-navy-300">Billed annually</div></div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center border-t border-white/10 pt-4">
                  <div><div className="font-bold">Unlimited</div><div className="text-[11px] text-navy-300">Projects</div></div>
                  <div><div className="font-bold">200</div><div className="text-[11px] text-navy-300">Workers</div></div>
                  <div><div className="font-bold">∞</div><div className="text-[11px] text-navy-300">SWMS</div></div>
                </div>
              </div>
              <button className="btn-ghost w-full">Manage Subscription</button>
              <p className="text-xs text-navy-400 text-center">Demo only — no payment is processed.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
