import Sidebar from '@/components/Sidebar'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import Product from '@/components/Product'
import Founder from '@/components/Founder'
import FounderStory from '@/components/FounderStory'
import Traction from '@/components/Traction'
import BookSection from '@/components/BookSection'
import TheAsk from '@/components/TheAsk'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-navy">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-64">
        <Hero />
        <Problem />
        <Solution />
        <Product />
        <Founder />
        <FounderStory />
        <Traction />
        <BookSection />
        <TheAsk />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}