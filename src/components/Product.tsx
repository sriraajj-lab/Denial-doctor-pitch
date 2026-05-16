export default function Product() {
  return (
    <section id="product" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            See It In <span className="gradient-text">Action</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Live dashboards with denial analytics, appeal tracking, and payer rule engine.
          </p>
        </div>

        {/* Screenshot placeholder */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-navy-700 to-navy-800">
          <div className="aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">Screenshot coming soon</p>
            </div>
          </div>
        </div>

        {/* Product feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'AI Worklist', desc: 'Smart prioritization of denied claims based on recovery potential and aging.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
            { title: 'Claim Analyzer', desc: 'Deep-dive root cause analysis with payer-specific denial pattern recognition.', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
            { title: 'Appeal Generator', desc: 'AI-drafted appeal letters with evidence mapping and regulatory compliance.', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
            { title: 'Outcome Tracker', desc: 'Real-time tracking of appeal status, payer responses, and recovery metrics.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
            { title: 'Dashboard', desc: 'Executive-level analytics with denial trends, aging buckets, and KPI tracking.', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
            { title: '30+ Denial Codes', desc: 'Supporting CO-22, PR-1, N1-N6 and all major denial reason codes.', icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' },
          ].map((feature, i) => (
            <div key={i} className="metric-card p-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Video placeholder */}
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-navy-800">
          <div className="aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-cyan-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-gray-500 text-sm">Walkthrough video link</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
