import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">璇</span>
              </div>
              <span className="text-xl font-bold text-dark">璇玑智科</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">核心功能</a>
            <a href="#ai-platform" className="text-gray-600 hover:text-primary transition-colors">AI平台</a>
            <a href="#news" className="text-gray-600 hover:text-primary transition-colors">资讯中心</a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">价格方案</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">关于我们</a>
            <a href="#contact" className="btn-primary text-sm !px-6 !py-2">联系我们</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>核心功能</a>
              <a href="#ai-platform" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>AI平台</a>
              <a href="#news" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>资讯中心</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>价格方案</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>关于我们</a>
              <a href="#contact" className="btn-primary text-center text-sm">联系我们</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
