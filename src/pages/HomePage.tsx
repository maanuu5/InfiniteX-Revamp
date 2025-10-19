import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import VideoBackground from '../components/VideoBackground'
import Services from '../components/Services'
import Projects from '../components/Projects'
import FoundersSection from '../components/FoundersSection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-dark text-light overflow-hidden">
      <VideoBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <FoundersSection />
        <Projects />
        <ContactSection />
      </div>
    </div>
  )
}