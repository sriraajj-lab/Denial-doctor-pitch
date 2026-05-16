export default function Solution() {
  return (
    <section id="solution" className="relative py-32 bg-navy-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 font-medium mb-6">
            The Solution
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Meet <span className="gradient-text">Denial Doctor AI</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            AI-Powered Denial Management Engine
          </p>
        </div>

        {/* Three-step flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="relative">
            <div className="metric-card p-8 text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Scan</h3>
              <p className="text-gray-400">Upload denial data. AI analyzes patterns and maps upstream failures in &lt;1 hour.</p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 text-cyan-400/30">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          <div className="relative">
            <div className="metric-card p-8 text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-600/20 border border-violet-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-violet-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Solution</h3>
              <p className="text-gray-400">AI generates recommended fixes, appeal letters, and process changes.</p>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-4 text-cyan-400/30">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>

          <div>
            <div className="metric-card p-8 text-center h-full">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-emerald-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Auto-Fix</h3>
              <p className="text-gray-400">Automated resubmission, appeal generation, and real-time routing.</p>
            </div>
          </div>
        </div>

        {/* Feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Dramatically reduces claim denials', icon: 'M9 12l2 2 4-4' },
            { title: 'Accelerates revenue recovery', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
            { title: 'Automates denial management end-to-end', icon: 'M4 4v5h.582m15.356 0A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
            { title: 'Catches and reverses denials before they impact your bottom line', icon: 'M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { title: 'HIPAA-compliant multi-agent AI platform', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
            { title: 'Supports 30+ denial codes including CO-22, PR-1, N1-N6', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
          ].map((feature, i) => (
            <div key={i} className="metric-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-300">{feature.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
