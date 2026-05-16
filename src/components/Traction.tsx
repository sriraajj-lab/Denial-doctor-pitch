export default function Traction() {
  const dsos = [
    { name: 'DECA Dental', location: 'Dallas / TX', count: '~200' },
    { name: 'SALT Dental', location: 'Seattle / WA', count: '160+' },
    { name: 'Sage Dental', location: 'Boca Raton / FL', count: '140+' },
    { name: 'Park Dental', location: 'Minneapolis / MN', count: '88' },
    { name: 'GPS Dental', location: 'Houston / TX', count: '100' },
    { name: 'Bluetree Dental', location: 'Sandy / UT', count: '45+' },
    { name: 'Lightwave Dental', location: 'Clearwater / FL', count: '90+' },
    { name: 'Operation Dental', location: 'Nashville / TN', count: '19' },
  ]

  return (
    <section id="traction" className="relative py-32 bg-navy-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-medium mb-6">
            Trusted by Leading DSOs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="gradient-text">Traction</span> &amp; Momentum
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Deployed across multiple Dental Service Organizations nationwide
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dsos.map((dso, i) => (
            <div key={i} className="metric-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-cyan-400">{dso.count}</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{dso.name}</h3>
                  <p className="text-xs text-gray-500">{dso.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>{dso.count} locations</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-3xl font-bold gradient-text">700+</span>
            <span className="text-gray-400">total locations served across our partner DSOs</span>
          </div>
        </div>
      </div>
    </section>
  )
}
