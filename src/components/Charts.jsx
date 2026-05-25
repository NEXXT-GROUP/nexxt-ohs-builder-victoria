import {
  ResponsiveContainer, AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, Legend,
} from 'recharts'

const tooltipStyle = {
  borderRadius: 12,
  border: '1px solid #d4dded',
  boxShadow: '0 10px 30px -10px rgba(12,21,38,0.2)',
  fontSize: 12,
}

export function ComplianceArea({ data }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
        <defs>
          <linearGradient id="compGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#7f95bf' }} />
        <YAxis domain={[70, 100]} tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#7f95bf' }} />
        <Tooltip contentStyle={tooltipStyle} formatter={(v) => [`${v}%`, 'Compliance']} />
        <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} fill="url(#compGrad)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function TradeBars({ data }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" vertical={false} />
        <XAxis dataKey="trade" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#7f95bf' }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#7f95bf' }} />
        <Tooltip contentStyle={tooltipStyle} cursor={{ fill: '#eef2f7' }} />
        <Bar dataKey="count" name="Workers" fill="#16223d" radius={[6, 6, 0, 0]} maxBarSize={42} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function IncidentLines({ data }) {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart data={data} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#eef2f7" vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#7f95bf' }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#7f95bf' }} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend wrapperStyle={{ fontSize: 12 }} iconType="circle" />
        <Line type="monotone" dataKey="nearMiss" name="Near Miss" stroke="#f97316" strokeWidth={3} dot={{ r: 3 }} />
        <Line type="monotone" dataKey="incidents" name="Incidents" stroke="#e11d48" strokeWidth={3} dot={{ r: 3 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function DonutChart({ value, label }) {
  const data = [
    { name: 'Compliant', value },
    { name: 'Remaining', value: 100 - value },
  ]
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie data={data} dataKey="value" innerRadius={62} outerRadius={86} startAngle={90} endAngle={-270} stroke="none">
          <Cell fill="#10b981" />
          <Cell fill="#eef2f7" />
        </Pie>
        <text x="50%" y="48%" textAnchor="middle" dominantBaseline="middle" className="fill-navy-900" style={{ fontSize: 28, fontWeight: 800 }}>
          {value}%
        </text>
        <text x="50%" y="62%" textAnchor="middle" dominantBaseline="middle" className="fill-navy-400" style={{ fontSize: 11 }}>
          {label}
        </text>
      </PieChart>
    </ResponsiveContainer>
  )
}
