import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ShieldCheck, HardHat, ArrowRight, CheckCircle2, Building2, Lock } from 'lucide-react'
import Logo from '../components/Logo.jsx'

const highlights = [
  'Digital inductions & OH&S knowledge checks',
  'SWMS templates, signing & version control',
  'Live compliance tracking across every site',
  'Incident, near-miss & toolbox reporting',
]

export default function Login() {
  const navigate = useNavigate()
  const [role, setRole] = useState('builder')

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Brand panel */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 25% 20%, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
        <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-safety-500/10 blur-3xl" />
        <div className="relative">
          <Logo light size="lg" />
        </div>
        <div className="relative max-w-md">
          <h1 className="text-4xl font-extrabold text-white leading-tight">
            Smart Safety.<br /><span className="text-safety-400">Stronger Sites.</span>
          </h1>
          <p className="mt-4 text-navy-200 text-lg">
            The all-in-one OH&S compliance platform built for Victorian construction.
          </p>
          <ul className="mt-8 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-navy-100">
                <CheckCircle2 size={20} className="text-safety-400 shrink-0" /> {h}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative text-navy-300 text-xs">
          © 2026 OH&S Builder Victoria · Demonstration prototype
        </div>
      </div>

      {/* Login form */}
      <div className="flex items-center justify-center p-6 sm:p-10 bg-white">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-8 flex justify-center">
            <Logo size="lg" />
          </div>
          <h2 className="text-2xl font-extrabold text-navy-900">Welcome back</h2>
          <p className="text-navy-500 mt-1 text-sm">Sign in to your safety workspace.</p>

          <div className="mt-6 grid grid-cols-2 gap-2 p-1 bg-navy-50 rounded-xl">
            <button
              onClick={() => setRole('builder')}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition ${role === 'builder' ? 'bg-white shadow-sm text-navy-900' : 'text-navy-500'}`}
            >
              <Building2 size={16} /> Builder
            </button>
            <button
              onClick={() => setRole('worker')}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold transition ${role === 'worker' ? 'bg-white shadow-sm text-navy-900' : 'text-navy-500'}`}
            >
              <HardHat size={16} /> Worker
            </button>
          </div>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault()
              navigate(role === 'builder' ? '/dashboard' : '/worker')
            }}
          >
            <div>
              <label className="label">Email</label>
              <input className="input" type="email" defaultValue={role === 'builder' ? 'daniel@hartleyco.com.au' : 'liam@nguyencarpentry.com.au'} />
            </div>
            <div>
              <label className="label">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" />
                <input className="input pl-9" type="password" defaultValue="demo1234" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-navy-500">
                <input type="checkbox" defaultChecked className="rounded border-navy-300 text-brand-600" /> Remember me
              </label>
              <a className="text-brand-600 font-semibold">Forgot?</a>
            </div>
            <button type="submit" className="btn-primary w-full py-3">
              {role === 'builder' ? 'Enter Builder Workspace' : 'Enter My Site'} <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3 rounded-xl bg-brand-50 border border-brand-100 p-3 text-xs text-brand-800">
            <ShieldCheck size={28} className="text-brand-600 shrink-0" />
            <span><b>Demo mode</b> — credentials are pre-filled. Choose a role above and sign in to explore the prototype.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
