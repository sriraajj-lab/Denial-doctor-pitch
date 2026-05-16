export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-700/50 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-400 font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          HIPAA Compliant · AI-Powered · Enterprise Ready
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-white">Denial Doctor</span>
          <br />
          <span className="gradient-text">AI-Powered Healthcare RCM Platform</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-xl md:text-2xl text-gray-400 font-light">
          Analyze in <span className="text-cyan-400 font-semibold">1 hour</span>. Fix in <span className="text-cyan-400 font-semibold">1 week</span>.
        </p>

        {/* Body text */}
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          Healthcare claim denials cost providers <span className="text-white font-semibold">$262 billion</span> annually. Denial Doctor AI recovers what&apos;s yours.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <a href="#problem" className="btn-gradient inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-2xl">
            Get Your Free Overview Scan
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        {/* Key Metrics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="metric-card p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">$262B</div>
            <div className="mt-2 text-sm text-gray-400">Annual denial losses</div>
          </div>
          <div className="metric-card p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">60-120</div>
            <div className="mt-2 text-sm text-gray-400">Day wait times</div>
          </div>
          <div className="metric-card p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">Zero</div>
            <div className="mt-2 text-sm text-gray-400">Upstream visibility</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  )
}
