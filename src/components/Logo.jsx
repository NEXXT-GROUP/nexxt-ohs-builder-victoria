import { ShieldCheck } from 'lucide-react'

export default function Logo({ size = 'md', light = false, showText = true }) {
  const dims = size === 'sm' ? 'h-8 w-8' : size === 'lg' ? 'h-12 w-12' : 'h-10 w-10'
  const icon = size === 'sm' ? 18 : size === 'lg' ? 26 : 22
  return (
    <div className="flex items-center gap-2.5">
      <div className={`${dims} rounded-xl bg-gradient-to-br from-brand-600 to-navy-800 grid place-items-center shadow-md ring-1 ring-white/10 shrink-0`}>
        <ShieldCheck size={icon} className="text-safety-400" strokeWidth={2.4} />
      </div>
      {showText && (
        <div className="leading-tight">
          <div className={`font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy-900'} ${size === 'lg' ? 'text-lg' : 'text-[15px]'}`}>
            OH&S Builder <span className="text-safety-500">Victoria</span>
          </div>
          <div className={`text-[10px] font-semibold uppercase tracking-widest ${light ? 'text-navy-200' : 'text-navy-400'}`}>
            Smart Safety. Stronger Sites.
          </div>
        </div>
      )}
    </div>
  )
}
