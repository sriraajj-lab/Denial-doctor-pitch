export default function FounderStory() {
  return (
    <section id="story" className="relative py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-400 font-medium mb-6">
            The Story Behind Denial Doctor
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Built From the <span className="gradient-text">Trenches</span>
          </h2>
        </div>

        {/* Audio Narration Placeholder */}
        <div className="mb-12 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
            <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-300 font-medium">Audio narration coming soon</p>
            <p className="text-xs text-gray-500 mt-1">Hear the full story from the founder</p>
          </div>
        </div>

        {/* Narrative text */}
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Denial Doctor was born in the trenches of real-world revenue cycle management. After spending two decades on the front lines of healthcare RCM &mdash; managing client relationships at the VP level, building teams, and fighting the daily battle against claim denials &mdash; I realized something fundamental was broken.
          </p>
          <p>
            The denial management process hasn&apos;t changed in 30 years. Providers are still using spreadsheets, manual worklists, and gut feelings to manage billions in at-risk revenue. Meanwhile, payers have automated their denial processes, creating an asymmetry that costs providers $262 billion annually.
          </p>
          <p>
            I founded Dharma Solutions to bridge this gap. But even with the best teams, we couldn&apos;t scale fast enough. The complexity of payer rules, the volume of claims, and the speed of denials outpaced human capacity.
          </p>
          <p>
            That&apos;s when I turned to AI. I built Denial Doctor from the ground up &mdash; not as a theoretical exercise, but as a practical tool to solve the problems I experienced firsthand. Every feature, every workflow, every integration was designed by someone who has lived through the pain of a denied claim with no clear path to resolution.
          </p>
          <p>
            Today, Denial Doctor is deployed across multiple DSOs, processing thousands of claims and recovering revenue that was previously written off. We&apos;re not just building software &mdash; we&apos;re building the AI operating layer for revenue integrity.
          </p>
          <div className="pt-4">
            <p className="text-lg font-semibold gradient-text">&mdash; Rajesh Kantubhukta</p>
            <p className="text-sm text-gray-500">Founder &amp; CEO, Dharma Solutions Inc.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
