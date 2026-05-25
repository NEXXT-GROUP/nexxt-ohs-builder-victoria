// ===== OH&S Builder Victoria — Mock Data (demo only) =====

export const company = {
  name: 'OH&S Builder Victoria',
  tagline: 'Smart Safety. Stronger Sites.',
  builder: 'Hartley & Co Constructions',
  abn: '54 218 776 901',
  state: 'VIC',
}

export const currentBuilder = {
  name: 'Daniel Hartley',
  role: 'Site Manager / Builder',
  company: 'Hartley & Co Constructions',
  email: 'daniel@hartleyco.com.au',
  initials: 'DH',
}

export const currentWorker = {
  name: 'Liam Nguyen',
  trade: 'Carpenter',
  company: 'Nguyen Carpentry Pty Ltd',
  initials: 'LN',
  project: 'Docklands Tower Stage 2',
}

export const stats = {
  projects: 12,
  workers: 184,
  pendingInductions: 9,
  pendingSwms: 6,
  compliance: 92,
  incidents: 3,
}

export const projects = [
  {
    id: 'p1',
    name: 'Docklands Tower Stage 2',
    address: '12 Pearl River Rd, Docklands VIC 3008',
    suburb: 'Docklands',
    type: 'Commercial High-Rise',
    status: 'Active',
    progress: 64,
    value: '$48.2M',
    startDate: '2025-02-10',
    endDate: '2026-09-30',
    supervisor: 'Daniel Hartley',
    workers: 58,
    compliance: 94,
    openIncidents: 1,
    swms: 14,
  },
  {
    id: 'p2',
    name: 'Geelong Marina Apartments',
    address: '88 Western Beach Rd, Geelong VIC 3220',
    suburb: 'Geelong',
    type: 'Residential Apartments',
    status: 'Active',
    progress: 41,
    value: '$22.7M',
    startDate: '2025-05-01',
    endDate: '2026-12-15',
    supervisor: 'Marcus Reid',
    workers: 37,
    compliance: 88,
    openIncidents: 0,
    swms: 11,
  },
  {
    id: 'p3',
    name: 'Ballarat Health Precinct',
    address: '101 Drummond St, Ballarat VIC 3350',
    suburb: 'Ballarat',
    type: 'Healthcare',
    status: 'Active',
    progress: 78,
    value: '$61.5M',
    startDate: '2024-08-20',
    endDate: '2026-06-30',
    supervisor: 'Priya Sharma',
    workers: 44,
    compliance: 96,
    openIncidents: 1,
    swms: 18,
  },
  {
    id: 'p4',
    name: 'Bendigo Civic Centre Upgrade',
    address: '15 Hargreaves St, Bendigo VIC 3550',
    suburb: 'Bendigo',
    type: 'Civic / Government',
    status: 'Planning',
    progress: 8,
    value: '$14.9M',
    startDate: '2025-07-15',
    endDate: '2026-11-01',
    supervisor: 'Daniel Hartley',
    workers: 6,
    compliance: 71,
    openIncidents: 0,
    swms: 4,
  },
  {
    id: 'p5',
    name: 'Cranbourne Logistics Warehouse',
    address: '420 South Gippsland Hwy, Cranbourne VIC 3977',
    suburb: 'Cranbourne',
    type: 'Industrial',
    status: 'Active',
    progress: 53,
    value: '$9.3M',
    startDate: '2025-03-25',
    endDate: '2026-02-28',
    supervisor: 'Marcus Reid',
    workers: 29,
    compliance: 90,
    openIncidents: 0,
    swms: 9,
  },
  {
    id: 'p6',
    name: 'Frankston Foreshore Hotel',
    address: '2 Pier Promenade, Frankston VIC 3199',
    suburb: 'Frankston',
    type: 'Hospitality',
    status: 'On Hold',
    progress: 30,
    value: '$18.0M',
    startDate: '2024-11-05',
    endDate: '2026-08-12',
    supervisor: 'Priya Sharma',
    workers: 10,
    compliance: 82,
    openIncidents: 1,
    swms: 7,
  },
]

export const trades = ['Carpenter', 'Plumber', 'Electrician', 'Tiler', 'Framer', 'Concretor']

export const workers = [
  { id: 'w1', name: 'Liam Nguyen', trade: 'Carpenter', company: 'Nguyen Carpentry', project: 'Docklands Tower Stage 2', phone: '0412 884 221', induction: true, quiz: true, whiteCard: true, insurance: true, medical: true, swms: true, status: 'Compliant' },
  { id: 'w2', name: 'Sophie Callahan', trade: 'Electrician', company: 'Bright Spark Electrical', project: 'Docklands Tower Stage 2', phone: '0421 553 109', induction: true, quiz: true, whiteCard: true, insurance: true, medical: true, swms: false, status: 'Action Required' },
  { id: 'w3', name: 'Mason Pereira', trade: 'Concretor', company: 'Solid Pour Concreting', project: 'Ballarat Health Precinct', phone: '0438 220 776', induction: true, quiz: true, whiteCard: true, insurance: true, medical: true, swms: true, status: 'Compliant' },
  { id: 'w4', name: 'Ava Thompson', trade: 'Plumber', company: 'FlowRight Plumbing', project: 'Geelong Marina Apartments', phone: '0407 119 832', induction: true, quiz: false, whiteCard: true, insurance: false, medical: true, swms: false, status: 'Action Required' },
  { id: 'w5', name: 'Noah Di Santo', trade: 'Tiler', company: 'Precision Tiling Co', project: 'Ballarat Health Precinct', phone: '0419 664 200', induction: false, quiz: false, whiteCard: true, insurance: true, medical: false, swms: false, status: 'Pending Induction' },
  { id: 'w6', name: 'Isla Robertson', trade: 'Framer', company: 'TrueLine Framing', project: 'Cranbourne Logistics Warehouse', phone: '0455 781 003', induction: true, quiz: true, whiteCard: true, insurance: true, medical: true, swms: true, status: 'Compliant' },
  { id: 'w7', name: 'Ethan Marsh', trade: 'Carpenter', company: 'Marsh Building Group', project: 'Docklands Tower Stage 2', phone: '0433 909 118', induction: true, quiz: true, whiteCard: false, insurance: true, medical: true, swms: true, status: 'Action Required' },
  { id: 'w8', name: 'Charlotte Webb', trade: 'Electrician', company: 'Bright Spark Electrical', project: 'Geelong Marina Apartments', phone: '0400 332 887', induction: true, quiz: true, whiteCard: true, insurance: true, medical: true, swms: true, status: 'Compliant' },
  { id: 'w9', name: 'Jack Donnelly', trade: 'Plumber', company: 'FlowRight Plumbing', project: 'Cranbourne Logistics Warehouse', phone: '0414 556 002', induction: false, quiz: false, whiteCard: true, insurance: true, medical: true, swms: false, status: 'Pending Induction' },
  { id: 'w10', name: 'Mia Fitzgerald', trade: 'Concretor', company: 'Solid Pour Concreting', project: 'Docklands Tower Stage 2', phone: '0422 781 559', induction: true, quiz: true, whiteCard: true, insurance: true, medical: true, swms: true, status: 'Compliant' },
  { id: 'w11', name: 'Oliver Brennan', trade: 'Framer', company: 'TrueLine Framing', project: 'Ballarat Health Precinct', phone: '0431 220 904', induction: true, quiz: true, whiteCard: true, insurance: false, medical: true, swms: true, status: 'Action Required' },
  { id: 'w12', name: 'Grace Lombardi', trade: 'Tiler', company: 'Precision Tiling Co', project: 'Geelong Marina Apartments', phone: '0408 117 663', induction: true, quiz: true, whiteCard: true, insurance: true, medical: true, swms: true, status: 'Compliant' },
]

export const recentActivity = [
  { id: 1, type: 'induction', who: 'Mia Fitzgerald', text: 'completed site induction', project: 'Docklands Tower Stage 2', time: '12 min ago' },
  { id: 2, type: 'swms', who: 'Sophie Callahan', text: 'signed Electrical SWMS', project: 'Docklands Tower Stage 2', time: '48 min ago' },
  { id: 3, type: 'incident', who: 'Priya Sharma', text: 'logged a near miss — scaffold tag', project: 'Ballarat Health Precinct', time: '2 hrs ago' },
  { id: 4, type: 'toolbox', who: 'Daniel Hartley', text: 'ran a toolbox meeting (18 attendees)', project: 'Docklands Tower Stage 2', time: '4 hrs ago' },
  { id: 5, type: 'diary', who: 'Marcus Reid', text: 'submitted site diary entry', project: 'Geelong Marina Apartments', time: '6 hrs ago' },
  { id: 6, type: 'worker', who: 'Jack Donnelly', text: 'was invited to onboard', project: 'Cranbourne Logistics Warehouse', time: 'Yesterday' },
]

export const complianceTrend = [
  { month: 'Dec', value: 81 },
  { month: 'Jan', value: 84 },
  { month: 'Feb', value: 83 },
  { month: 'Mar', value: 88 },
  { month: 'Apr', value: 90 },
  { month: 'May', value: 92 },
]

export const workersByTrade = [
  { trade: 'Carpenter', count: 42 },
  { trade: 'Electrician', count: 31 },
  { trade: 'Plumber', count: 28 },
  { trade: 'Concretor', count: 24 },
  { trade: 'Framer', count: 33 },
  { trade: 'Tiler', count: 26 },
]

export const incidentsByMonth = [
  { month: 'Dec', incidents: 2, nearMiss: 5 },
  { month: 'Jan', incidents: 1, nearMiss: 4 },
  { month: 'Feb', incidents: 3, nearMiss: 6 },
  { month: 'Mar', incidents: 1, nearMiss: 3 },
  { month: 'Apr', incidents: 2, nearMiss: 7 },
  { month: 'May', incidents: 1, nearMiss: 4 },
]

export const incidents = [
  { id: 'INC-1042', title: 'Slip on wet slab — level 4', project: 'Docklands Tower Stage 2', severity: 'Medium', status: 'Investigating', reportedBy: 'Daniel Hartley', date: '2026-05-24', type: 'Incident' },
  { id: 'INC-1041', title: 'Falling debris near hoist zone', project: 'Ballarat Health Precinct', severity: 'High', status: 'Open', reportedBy: 'Priya Sharma', date: '2026-05-22', type: 'Incident' },
  { id: 'INC-1038', title: 'Minor laceration — angle grinder', project: 'Frankston Foreshore Hotel', severity: 'Low', status: 'Closed', reportedBy: 'Marcus Reid', date: '2026-05-18', type: 'Incident' },
  { id: 'NM-2207', title: 'Untagged scaffold bay identified', project: 'Ballarat Health Precinct', severity: 'Medium', status: 'Action Assigned', reportedBy: 'Priya Sharma', date: '2026-05-25', type: 'Near Miss' },
  { id: 'NM-2206', title: 'Trailing lead across walkway', project: 'Docklands Tower Stage 2', severity: 'Low', status: 'Closed', reportedBy: 'Liam Nguyen', date: '2026-05-21', type: 'Near Miss' },
  { id: 'NM-2204', title: 'Stacked materials blocking egress', project: 'Cranbourne Logistics Warehouse', severity: 'Medium', status: 'Open', reportedBy: 'Isla Robertson', date: '2026-05-19', type: 'Near Miss' },
]

export const incidentTimeline = [
  { time: '2026-05-24 08:42', text: 'Incident reported by Daniel Hartley', done: true },
  { time: '2026-05-24 09:15', text: 'Area isolated, signage placed', done: true },
  { time: '2026-05-24 11:30', text: 'Investigation opened — root cause analysis', done: true },
  { time: '2026-05-25 14:00', text: 'Corrective actions assigned to site team', done: false },
  { time: 'Pending', text: 'Review & close-out by HSE manager', done: false },
]

export const swmsTemplates = [
  { id: 's1', trade: 'Carpenter', title: 'Carpentry & Formwork SWMS', hazards: 8, controls: 14, ppe: 6, version: 'v3.2', updated: '2026-04-12', signed: 11, total: 14 },
  { id: 's2', trade: 'Plumber', title: 'Plumbing & Drainage SWMS', hazards: 7, controls: 12, ppe: 5, version: 'v2.8', updated: '2026-03-28', signed: 6, total: 9 },
  { id: 's3', trade: 'Electrician', title: 'Electrical Installation SWMS', hazards: 9, controls: 16, ppe: 6, version: 'v4.1', updated: '2026-05-02', signed: 8, total: 12 },
  { id: 's4', trade: 'Tiler', title: 'Wall & Floor Tiling SWMS', hazards: 6, controls: 10, ppe: 5, version: 'v2.0', updated: '2026-02-15', signed: 5, total: 7 },
  { id: 's5', trade: 'Framer', title: 'Structural Framing SWMS', hazards: 8, controls: 13, ppe: 6, version: 'v3.0', updated: '2026-04-20', signed: 9, total: 11 },
  { id: 's6', trade: 'Concretor', title: 'Concrete Placement SWMS', hazards: 7, controls: 12, ppe: 6, version: 'v2.6', updated: '2026-03-10', signed: 12, total: 14 },
]

export const swmsDetail = {
  Carpenter: {
    hazards: [
      { hazard: 'Working at heights (formwork)', risk: 'High', control: 'Edge protection, harness & anchor points, exclusion zones' },
      { hazard: 'Manual handling of timber/sheets', risk: 'Medium', control: 'Mechanical aids, team lifts, rotate tasks' },
      { hazard: 'Power tools — circular saw / nail gun', risk: 'High', control: 'Guards in place, RCD protection, trained operators only' },
      { hazard: 'Noise exposure', risk: 'Medium', control: 'Class 5 hearing protection, limit exposure time' },
      { hazard: 'Slips, trips & falls', risk: 'Medium', control: 'Housekeeping, clear walkways, lead management' },
    ],
    ppe: ['Hard hat', 'Hi-vis', 'Steel cap boots', 'Safety glasses', 'Hearing protection', 'Cut-resistant gloves'],
  },
}

export const inductionModules = [
  { id: 1, title: 'Welcome & Site Rules', mins: 4, done: true },
  { id: 2, title: 'Site Hazards & Emergency Procedures', mins: 6, done: true },
  { id: 3, title: 'PPE Requirements', mins: 3, done: true },
  { id: 4, title: 'High-Risk Work & Permits', mins: 5, done: false },
  { id: 5, title: 'Reporting Incidents & Near Misses', mins: 3, done: false },
  { id: 6, title: 'OH&S Knowledge Check', mins: 5, done: false },
]

export const quizQuestions = [
  {
    q: 'What should you do FIRST if you witness a serious incident on site?',
    options: [
      'Take a photo for the report',
      'Ensure the area is safe and call for help / first aid',
      'Continue working and tell the supervisor later',
      'Move the injured person immediately',
    ],
    answer: 1,
  },
  {
    q: 'When is a SWMS required to be signed?',
    options: [
      'Only after an incident occurs',
      'Once a year regardless of task',
      'Before commencing any high-risk construction work',
      'It is optional for experienced workers',
    ],
    answer: 2,
  },
  {
    q: 'Which PPE is mandatory at all times on this site?',
    options: [
      'Hard hat, hi-vis and steel cap boots',
      'Only when operating machinery',
      'Gloves and glasses only',
      'PPE is recommended but not enforced',
    ],
    answer: 0,
  },
  {
    q: 'What does an untagged piece of scaffolding mean?',
    options: [
      'It is brand new and safe to use',
      'It can be used with supervisor approval',
      'Do NOT use it — it has not been inspected/approved',
      'Only the top level is unsafe',
    ],
    answer: 2,
  },
]

export const siteDiary = [
  {
    id: 'd1', date: '2026-05-26', project: 'Docklands Tower Stage 2', weather: 'Partly cloudy, 17°C', wind: '15 km/h SW',
    labour: 58, deliveries: ['Reo steel — Liberty (07:30)', 'Concrete pour 32MPa — Hanson (11:00)'],
    notes: 'Level 12 slab pour completed by 14:00. Crane down for routine inspection 09:00–10:30. All toolbox topics covered.',
    supervisor: 'Daniel Hartley', photos: 3,
  },
  {
    id: 'd2', date: '2026-05-25', project: 'Docklands Tower Stage 2', weather: 'Rain, 13°C', wind: '28 km/h S',
    labour: 41, deliveries: ['Formply — Bowens (08:00)'],
    notes: 'Wet weather — external works paused after lunch. Internal fit-out continued on levels 6–8. Drainage checked, no pooling.',
    supervisor: 'Daniel Hartley', photos: 2,
  },
  {
    id: 'd3', date: '2026-05-24', project: 'Docklands Tower Stage 2', weather: 'Sunny, 19°C', wind: '10 km/h N',
    labour: 60, deliveries: ['Glazing units — Viridian (07:45)', 'Plasterboard — CSR (13:15)'],
    notes: 'Glazing install commenced level 9. Minor slip incident logged (INC-1042) — area isolated, no lost time.',
    supervisor: 'Daniel Hartley', photos: 4,
  },
]

export const toolboxMeetings = [
  {
    id: 't1', topic: 'Working at Heights — Edge Protection', date: '2026-05-26', project: 'Docklands Tower Stage 2',
    presenter: 'Daniel Hartley', attendees: 18, total: 20, duration: '15 min',
    points: ['Inspect harness before every use', 'Never remove edge protection without a permit', 'Report damaged anchor points immediately'],
  },
  {
    id: 't2', topic: 'Wet Weather & Slip Hazards', date: '2026-05-25', project: 'Docklands Tower Stage 2',
    presenter: 'Marcus Reid', attendees: 15, total: 15, duration: '10 min',
    points: ['Use designated walkways', 'Report pooling water', 'Wear appropriate footwear'],
  },
  {
    id: 't3', topic: 'Manual Handling Refresher', date: '2026-05-23', project: 'Ballarat Health Precinct',
    presenter: 'Priya Sharma', attendees: 22, total: 24, duration: '12 min',
    points: ['Use mechanical aids where possible', 'Team lift loads over 20kg', 'Maintain neutral spine'],
  },
]

export const meetingAttendees = [
  { name: 'Liam Nguyen', trade: 'Carpenter', signed: true },
  { name: 'Sophie Callahan', trade: 'Electrician', signed: true },
  { name: 'Mia Fitzgerald', trade: 'Concretor', signed: true },
  { name: 'Ethan Marsh', trade: 'Carpenter', signed: true },
  { name: 'Mason Pereira', trade: 'Concretor', signed: false },
  { name: 'Charlotte Webb', trade: 'Electrician', signed: true },
]

export const adminUsers = [
  { id: 'u1', name: 'Daniel Hartley', email: 'daniel@hartleyco.com.au', role: 'Builder Admin', projects: 'All', status: 'Active', lastActive: 'Online now' },
  { id: 'u2', name: 'Marcus Reid', email: 'marcus@hartleyco.com.au', role: 'Site Supervisor', projects: 'Geelong, Cranbourne', status: 'Active', lastActive: '20 min ago' },
  { id: 'u3', name: 'Priya Sharma', email: 'priya@hartleyco.com.au', role: 'HSE Manager', projects: 'Ballarat, Frankston', status: 'Active', lastActive: '1 hr ago' },
  { id: 'u4', name: 'Tom Baker', email: 'tom@hartleyco.com.au', role: 'Site Supervisor', projects: 'Docklands', status: 'Invited', lastActive: 'Pending' },
]

export const roles = [
  { role: 'Builder Admin', desc: 'Full platform access — projects, users, billing & settings', count: 1 },
  { role: 'HSE Manager', desc: 'Compliance, incidents, SWMS & reporting across assigned sites', count: 2 },
  { role: 'Site Supervisor', desc: 'Manage workers, diary & toolbox on assigned projects', count: 4 },
  { role: 'Worker (Tradie)', desc: 'Assigned project only — induction, SWMS & compliance', count: 184 },
]

export const reportCards = [
  { label: 'Lost Time Injury Freq. Rate', value: '0.0', sub: 'per million hrs', trend: 'down', good: true },
  { label: 'Total Recordable Injuries', value: '3', sub: 'last 90 days', trend: 'down', good: true },
  { label: 'Avg. Induction Time', value: '24m', sub: 'per worker', trend: 'down', good: true },
  { label: 'SWMS Sign-off Rate', value: '94%', sub: 'across all sites', trend: 'up', good: true },
]
