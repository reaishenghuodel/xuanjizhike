import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Dashboard from './sections/Dashboard'
import AIPlatform from './sections/AIPlatform'
import News from './sections/News'
import About from './sections/About'
import Footer from './sections/Footer'
import WeChatService from './sections/WeChatService'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Dashboard />
      <AIPlatform />
      <News />
      <About />
      <Footer />
      <WeChatService />
    </div>
  )
}

export default App
