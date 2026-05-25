import { useState } from 'react'
import { Users2, UserPlus, Shield, Mail, MoreVertical, X, Lock, HardHat } from 'lucide-react'
import { PageHeader, StatusBadge, StatCard } from '../components/ui.jsx'
import { adminUsers, roles } from '../data/mockData.js'

export default function Admin() {
  const [invite, setInvite] = useState(false)

  return (
    <>
      <PageHeader
        title="Admin Portal"
        subtitle="Manage users, roles & platform access"
        icon={Users2}
        actions={<button onClick={() => setInvite(true)} className="btn-primary"><UserPlus size={18} /> Invite User</button>}
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-5">
        <StatCard label="Platform Users" value="7" icon={Users2} tone="brand" />
        <StatCard label="Active Workers" value="184" icon={HardHat} tone="navy" />
        <StatCard label="Roles" value="4" icon={Shield} tone="safety" />
        <StatCard label="Pending Invites" value="1" icon={Mail} tone="green" />
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        {/* Users table */}
        <div className="card overflow-hidden lg:col-span-2">
          <div className="px-5 py-4 border-b border-navy-100 font-bold text-navy-900">Platform Users</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead className="bg-navy-50 text-navy-500 text-xs uppercase">
                <tr><th className="text-left px-4 py-3 font-semibold">User</th><th className="text-left px-4 py-3 font-semibold">Role</th><th className="text-left px-4 py-3 font-semibold">Projects</th><th className="px-4 py-3 font-semibold">Status</th><th className="px-2 py-3" /></tr>
              </thead>
              <tbody className="divide-y divide-navy-50">
                {adminUsers.map((u) => (
                  <tr key={u.id} className="hover:bg-navy-50/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2.5">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-brand-500 to-navy-700 text-white grid place-items-center text-xs font-bold">{u.name.split(' ').map((n) => n[0]).join('')}</div>
                        <div><div className="font-semibold text-navy-800">{u.name}</div><div className="text-xs text-navy-400">{u.email}</div></div>
                      </div>
                    </td>
                    <td className="px-4 py-3"><span className="chip bg-brand-50 text-brand-700">{u.role}</span></td>
                    <td className="px-4 py-3 text-navy-600 text-xs">{u.projects}</td>
                    <td className="px-4 py-3 text-center"><StatusBadge status={u.status} /></td>
                    <td className="px-2 py-3"><button className="text-navy-300 hover:text-navy-600"><MoreVertical size={18} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Roles */}
        <div className="card p-5">
          <div className="flex items-center gap-2 font-bold text-navy-900 mb-3"><Shield size={18} className="text-brand-600" /> Roles & Permissions</div>
          <div className="space-y-3">
            {roles.map((r) => (
              <div key={r.role} className="rounded-xl border border-navy-100 p-3">
                <div className="flex items-center justify-between"><span className="font-semibold text-navy-800 text-sm">{r.role}</span><span className="chip bg-navy-100 text-navy-600">{r.count}</span></div>
                <p className="text-xs text-navy-500 mt-1">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-safety-50 border border-safety-200 p-3 flex gap-2.5 text-xs text-safety-800">
            <Lock size={28} className="text-safety-600 shrink-0" />
            <span><b>Worker access is restricted.</b> Tradies only see their assigned project, induction, SWMS & compliance — never other builders, projects or admin screens.</span>
          </div>
        </div>
      </div>

      {invite && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-navy-950/50 backdrop-blur-sm">
          <div className="card w-full max-w-md p-5 animate-fade-in">
            <div className="flex items-center justify-between mb-4"><h3 className="font-bold text-navy-900">Invite User</h3><button onClick={() => setInvite(false)} className="text-navy-400 hover:text-navy-700"><X size={20} /></button></div>
            <div className="space-y-4">
              <div><label className="label">Full Name</label><input className="input" placeholder="Jane Smith" /></div>
              <div><label className="label">Email</label><input className="input" type="email" placeholder="jane@company.com.au" /></div>
              <div><label className="label">Role</label><select className="input"><option>Site Supervisor</option><option>HSE Manager</option><option>Worker (Tradie)</option><option>Builder Admin</option></select></div>
              <div><label className="label">Assign Projects</label><select className="input"><option>Docklands Tower Stage 2</option><option>All Projects</option></select></div>
            </div>
            <div className="flex justify-end gap-2 mt-5"><button onClick={() => setInvite(false)} className="btn-ghost">Cancel</button><button onClick={() => setInvite(false)} className="btn-primary"><Mail size={16} /> Send Invite</button></div>
          </div>
        </div>
      )}
    </>
  )
}
