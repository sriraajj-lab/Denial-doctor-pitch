export default function Problem() {
  return (
    <section id="problem" className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The <span className="gradient-text">$262 Billion</span> Problem
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Healthcare providers lose billions to claim denials every year. The system is broken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="metric-card p-8 text-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-white">$262B</div>
            <div className="mt-2 text-sm text-gray-400">Annual losses from healthcare claim denials</div>
          </div>

          <div className="metric-card p-8 text-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-white">60-120 Days</div>
            <div className="mt-2 text-sm text-gray-400">Average wait for claim reimbursement</div>
          </div>

          <div className="metric-card p-8 text-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </div>
            <div className="text-4xl font-bold text-white">Fragmented</div>
            <div className="mt-2 text-sm text-gray-400">Manual reconciliation across multiple payers</div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
            <p className="text-xl text-gray-300 leading-relaxed">
              <span className="text-cyan-400 font-semibold">Small and mid-sized practices</span> are hit hardest by these cash flow gaps, often waiting months for reimbursements while administrative costs pile up.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}