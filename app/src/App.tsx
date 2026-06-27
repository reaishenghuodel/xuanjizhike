import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Dashboard from './sections/Dashboard'
import Pricing from './sections/Pricing'
import About from './sections/About'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Dashboard />
      <Pricing />
      <About />
      <Footer />
    </div>
  )
}

export default App
