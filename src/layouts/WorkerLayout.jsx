import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Home, GraduationCap, FileText, ShieldCheck, UserCircle2, LogOut, HardHat } from 'lucide-react'
import Logo from '../components/Logo.jsx'
import { currentWorker } from '../data/mockData.js'

const workerNav = [
  { to: '/worker', label: 'My Site', icon: Home },
  { to: '/worker/induction', label: 'Induction', icon: GraduationCap },
  { to: '/worker/swms', label: 'SWMS', icon: FileText },
  { to: '/worker/register', label: 'Profile', icon: UserCircle2 },
]

export default function WorkerLayout() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div className="min-h-screen bg-navy-50 flex flex-col">
      <header className="sticky top-0 z-20 bg-navy-900 text-white">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <Logo light size="sm" />
          <div className="flex items-center gap-3">
            <div className="text-right leading-tight hidden xs:block">
              <div className="text-sm font-semibold">{currentWorker.name}</div>
              <div className="text-[11px] text-navy-300">{currentWorker.trade}</div>
            </div>
            <div className="h-9 w-9 rounded-full bg-safety-500 grid place-items-center text-sm font-bold text-white">
              {currentWorker.initials}
            </div>
          </div>
        </div>
        <div className="bg-safety-500/90 text-white text-[11px] font-semibold text-center py-1 flex items-center justify-center gap-1.5">
          <HardHat size={13} /> Worker Access — {currentWorker.project}
        </div>
      </header>

      <main className="flex-1 w-full max-w-3xl mx-auto px-4 py-5 pb-24 animate-fade-in" key={location.pathname}>
        <Outlet />
      </main>

      <nav className="fixed bottom-0 inset-x-0 z-30 bg-white border-t border-navy-100">
        <div className="max-w-3xl mx-auto grid grid-cols-5 px-1 pb-[env(safe-area-inset-bottom)]">
          {workerNav.map((item) => {
            const active = location.pathname === item.to
            return (
              <button
                key={item.to}
                onClick={() => navigate(item.to)}
                className={`flex flex-col items-center justify-center gap-0.5 py-2.5 text-[10px] font-semibold transition ${
                  active ? 'text-brand-600' : 'text-navy-400'
                }`}
              >
                <item.icon size={21} />
                {item.label}
              </button>
            )
          })}
          <button onClick={() => navigate('/')} className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[10px] font-semibold text-navy-400">
            <LogOut size={21} />
            Exit
          </button>
        </div>
      </nav>
    </div>
  )
}
