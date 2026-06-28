export default function AIPlatform() {
  return (
    <section id="ai-platform" className="py-20 bg-gradient-to-br from-dark via-gray-900 to-primary/20 text-white overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
              <svg className="w-5 h-5 mr-2 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              璇玑智科核心产品
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              GEO Box
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                人工智能一体化平台
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              一站式GEO优化管理SaaS平台，集成品牌AI可见度监测、智能内容生成、
              竞品分析、自动报告等核心功能，让企业轻松驾驭AI搜索时代。
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-200">50+AI平台监测</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-200">AI内容自动生成</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-200">竞品深度分析</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-200">自动报告生成</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-200">实时告警通知</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-secondary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-200">多租户协作</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-medium rounded-lg hover:opacity-90 transition-opacity text-lg">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
                免费体验
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-lg">
                预约演示
              </a>
            </div>
          </div>

          {/* Right - Platform Preview */}
          <div className="relative">
            {/* Mock Dashboard */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/10 p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
                <div className="text-sm text-gray-400">GEO Box Dashboard</div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-green-400">87</div>
                  <div className="text-xs text-gray-400">AI可见度</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400">1,234</div>
                  <div className="text-xs text-gray-400">AI引用</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">38</div>
                  <div className="text-xs text-gray-400">覆盖平台</div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-white/5 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-300">AI可见度趋势</span>
                  <span className="text-xs text-green-400">↑ 12%</span>
                </div>
                <svg className="w-full h-24" viewBox="0 0 400 100">
                  <defs>
                    <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0066FF" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0066FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline fill="none" stroke="#3B82F6" strokeWidth="2" points="0,80 50,70 100,75 150,60 200,55 250,40 300,35 350,25 400,20" />
                  <polygon fill="url(#chartGrad)" points="0,80 50,70 100,75 150,60 200,55 250,40 300,35 350,25 400,20 400,100 0,100" />
                </svg>
              </div>

              {/* Recent Activity */}
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  <span>ChatGPT引用 +3</span>
                  <span className="ml-auto">2分钟前</span>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                  <span>新内容已发布</span>
                  <span className="ml-auto">15分钟前</span>
                </div>
                <div className="flex items-center text-xs text-gray-400">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                  <span>竞品排名变化</span>
                  <span className="ml-auto">1小时前</span>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse">
              🚀 即将上线
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-secondary">50+</div>
            <div className="text-sm text-gray-400 mt-1">AI平台覆盖</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary">200%</div>
            <div className="text-sm text-gray-400 mt-1">可见度提升</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary">7×24</div>
            <div className="text-sm text-gray-400 mt-1">实时监测</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary">98%</div>
            <div className="text-sm text-gray-400 mt-1">客户满意度</div>
          </div>
        </div>
      </div>
    </section>
  )
}
