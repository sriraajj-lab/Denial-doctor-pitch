export default function BookSection() {
  return (
    <section className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Book cover placeholder */}
          <div className="flex justify-center">
            <div className="w-64 h-80 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-600/10 border border-white/10 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm">Book cover</p>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-400 font-medium mb-6">
              Featured Book
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              &ldquo;The $50K Leak&rdquo;
            </h2>
            <p className="text-lg text-gray-400 mb-2">by Rajesh Kantubhukta</p>
            <p className="text-sm text-gray-500 mb-6">Available on Amazon Kindle</p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              A practical guide to identifying and plugging the revenue leaks that cost healthcare providers thousands every year. From scheduling inefficiencies to coding errors, authorization gaps to denial management &mdash; discover where AI adds real value in the revenue cycle.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Scheduling inefficiencies', 'Coding errors', 'Authorization gaps', 'Denial management', 'Where AI adds real value'].map((topic, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-gray-400">
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a href="#" className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-2xl" target="_blank" rel="noopener noreferrer">
                View on Amazon Kindle
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
