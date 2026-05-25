import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Phone, Stethoscope, Users2, Car, Award, ShieldCheck, Upload, FileCheck2, Check, ChevronRight, ChevronLeft, HeartPulse } from 'lucide-react'

const sections = [
  { id: 'personal', label: 'Personal', icon: User },
  { id: 'contact', label: 'Contacts', icon: Users2 },
  { id: 'vehicle', label: 'Vehicle & Quals', icon: Car },
  { id: 'docs', label: 'Documents', icon: FileCheck2 },
]

function Field({ label, placeholder, type = 'text', value }) {
  return (
    <div>
      <label className="label">{label}</label>
      <input className="input" type={type} placeholder={placeholder} defaultValue={value} />
    </div>
  )
}

function UploadBox({ label, done }) {
  return (
    <div className={`rounded-xl border-2 border-dashed p-4 flex items-center gap-3 ${done ? 'border-emerald-300 bg-emerald-50/50' : 'border-navy-200'}`}>
      <div className={`h-10 w-10 rounded-lg grid place-items-center shrink-0 ${done ? 'bg-emerald-100 text-emerald-600' : 'bg-navy-100 text-navy-400'}`}>
        {done ? <Check size={20} /> : <Upload size={20} />}
      </div>
      <div className="flex-1"><div className="text-sm font-semibold text-navy-800">{label}</div><div className="text-xs text-navy-400">{done ? 'Uploaded · tap to replace' : 'PDF, JPG or PNG — tap to upload'}</div></div>
    </div>
  )
}

export default function WorkerRegistration() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)

  return (
    <div>
      <div className="mb-4">
        <h1 className="text-2xl font-extrabold text-navy-900">Worker Registration</h1>
        <p className="text-navy-500 text-sm">Complete your profile to get site-ready.</p>
      </div>

      {/* Step tabs */}
      <div className="flex gap-1.5 mb-4 overflow-x-auto">
        {sections.map((s, i) => (
          <button key={s.id} onClick={() => setStep(i)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${i === step ? 'bg-brand-600 text-white' : i < step ? 'bg-emerald-50 text-emerald-700' : 'bg-white text-navy-500 border border-navy-200'}`}>
            {i < step ? <Check size={14} /> : <s.icon size={14} />}{s.label}
          </button>
        ))}
      </div>

      <div className="card p-5">
        {step === 0 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-2 font-bold text-navy-800"><User size={18} className="text-brand-600" /> Personal Details</div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="First Name" value="Liam" />
              <Field label="Surname" value="Nguyen" />
            </div>
            <Field label="Residential Address" placeholder="Street, Suburb VIC Postcode" value="42 Acacia St, Brunswick VIC 3056" />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Phone" type="tel" value="0412 884 221" />
              <Field label="Email" type="email" value="liam@nguyencarpentry.com.au" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Date of Birth" type="date" />
              <Field label="Trade" value="Carpenter" />
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5 animate-fade-in">
            <div>
              <div className="flex items-center gap-2 font-bold text-navy-800 mb-3"><Stethoscope size={18} className="text-brand-600" /> Doctor Details</div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Doctor / Clinic Name" placeholder="Dr Sarah Lim — Brunswick Medical" />
                <Field label="Doctor Phone" type="tel" placeholder="03 9388 0000" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 font-bold text-navy-800 mb-3"><Users2 size={18} className="text-brand-600" /> Next of Kin</div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" placeholder="Mai Nguyen" />
                <Field label="Relationship" placeholder="Spouse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 font-bold text-navy-800 mb-3"><Phone size={18} className="text-brand-600" /> Emergency Contact</div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Contact Name" placeholder="Mai Nguyen" />
                <Field label="Contact Phone" type="tel" placeholder="0413 555 200" />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5 animate-fade-in">
            <div>
              <div className="flex items-center gap-2 font-bold text-navy-800 mb-3"><Car size={18} className="text-brand-600" /> Vehicle Details</div>
              <div className="grid sm:grid-cols-3 gap-4">
                <Field label="Make / Model" placeholder="Toyota HiLux" />
                <Field label="Registration" placeholder="1ABC234" />
                <Field label="Colour" placeholder="White" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 font-bold text-navy-800 mb-3"><Award size={18} className="text-brand-600" /> Qualifications</div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Trade Qualification" placeholder="Cert III Carpentry" />
                <Field label="Licence / Ticket No." placeholder="VIC-CARP-99213" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 font-bold text-navy-800 mb-3"><ShieldCheck size={18} className="text-brand-600" /> Insurance Details</div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Insurer" placeholder="CGU Workers Comp" />
                <Field label="Policy Number" placeholder="POL-7782001" />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-2 font-bold text-navy-800"><FileCheck2 size={18} className="text-brand-600" /> Upload Documents</div>
            <UploadBox label="White Card (Construction Induction)" done />
            <UploadBox label="Trade Qualification / Licence" done />
            <UploadBox label="Insurance Certificate" />
            <div className="rounded-xl border border-navy-100 p-4">
              <div className="flex items-center gap-2 font-bold text-navy-800 mb-2"><HeartPulse size={18} className="text-brand-600" /> Medical Declaration</div>
              <p className="text-xs text-navy-500 mb-3">Do you have any medical conditions, injuries or medications that may affect your ability to work safely?</p>
              <div className="flex gap-2">
                <label className="flex-1 rounded-xl border border-navy-200 px-4 py-2.5 text-center text-sm font-semibold cursor-pointer has-[:checked]:bg-emerald-50 has-[:checked]:border-emerald-400 has-[:checked]:text-emerald-700">
                  <input type="radio" name="med" defaultChecked className="hidden" /> No
                </label>
                <label className="flex-1 rounded-xl border border-navy-200 px-4 py-2.5 text-center text-sm font-semibold cursor-pointer has-[:checked]:bg-safety-50 has-[:checked]:border-safety-400 has-[:checked]:text-safety-700">
                  <input type="radio" name="med" className="hidden" /> Yes
                </label>
              </div>
              <label className="flex items-start gap-2 mt-3 text-xs text-navy-600">
                <input type="checkbox" defaultChecked className="mt-0.5 rounded border-navy-300 text-brand-600" />
                I declare the information provided is true and correct.
              </label>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-6 pt-5 border-t border-navy-100">
          <button onClick={() => (step === 0 ? navigate('/worker') : setStep(step - 1))} className="btn-ghost"><ChevronLeft size={18} /> Back</button>
          {step < sections.length - 1 ? (
            <button onClick={() => setStep(step + 1)} className="btn-primary">Next <ChevronRight size={18} /></button>
          ) : (
            <button onClick={() => navigate('/worker')} className="btn-safety"><Check size={18} /> Submit Registration</button>
          )}
        </div>
      </div>
    </div>
  )
}
