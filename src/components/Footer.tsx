export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Denial Doctor</div>
                <div className="text-[10px] text-cyan-400 font-medium">by Dharma Solutions Inc.</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 max-w-md">
              The AI operating layer for revenue integrity. Recover what&apos;s yours.
            </p>
          </div>

          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Problem', 'Solution', 'Product', 'Founder'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              {['Story', 'Traction', 'The Ask', 'Contact'].map((item) => {
                const href = item === 'The Ask' ? 'ask' : item.toLowerCase()
                return (
                  <li key={item}>
                    <a href={`#${href}`} className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                      {item}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Dharma Solutions Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="mailto:rajesh@dharmasolutions.com" className="text-gray-500 hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/rajesh-kantubhukta-63537a40" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </a>
            <a href="https://dharmasolutions.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
