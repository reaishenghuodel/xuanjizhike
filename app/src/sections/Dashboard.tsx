export default function Dashboard() {
  return (
    <section id="dashboard" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">数据看板</h2>
          <p className="section-subtitle">
            专业可视化分析，一目了然掌握品牌AI可见度
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
          {/* Mock Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-white text-lg font-semibold">品牌AI可见度报告</h3>
              <p className="text-gray-400 text-sm">更新时间：2024年1月15日</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-primary text-white text-sm rounded-lg">本周</button>
              <button className="px-4 py-2 bg-gray-700 text-gray-300 text-sm rounded-lg hover:bg-gray-600">本月</button>
              <button className="px-4 py-2 bg-gray-700 text-gray-300 text-sm rounded-lg hover:bg-gray-600">本季</button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-700/50 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">AI可见度评分</div>
              <div className="text-3xl font-bold text-green-400">87</div>
              <div className="text-green-400 text-sm mt-1">↑ 12%</div>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">AI引用次数</div>
              <div className="text-3xl font-bold text-blue-400">1,234</div>
              <div className="text-blue-400 text-sm mt-1">↑ 28%</div>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">覆盖平台数</div>
              <div className="text-3xl font-bold text-purple-400">38</div>
              <div className="text-purple-400 text-sm mt-1">↑ 5</div>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-4">
              <div className="text-gray-400 text-sm mb-1">竞品排名</div>
              <div className="text-3xl font-bold text-yellow-400">#2</div>
              <div className="text-yellow-400 text-sm mt-1">↑ 3位</div>
            </div>
          </div>

          {/* Mock Chart */}
          <div className="bg-gray-700/30 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-white font-medium">AI可见度趋势</h4>
              <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center"><span className="w-3 h-3 bg-primary rounded-full mr-2"></span>你的品牌</span>
                <span className="flex items-center"><span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>行业平均</span>
              </div>
            </div>
            {/* Simple SVG Chart */}
            <svg className="w-full h-48" viewBox="0 0 800 200">
              {/* Grid Lines */}
              <line x1="0" y1="50" x2="800" y2="50" stroke="#374151" strokeWidth="1" />
              <line x1="0" y1="100" x2="800" y2="100" stroke="#374151" strokeWidth="1" />
              <line x1="0" y1="150" x2="800" y2="150" stroke="#374151" strokeWidth="1" />
              
              {/* Industry Average Line */}
              <polyline
                fill="none"
                stroke="#6B7280"
                strokeWidth="2"
                strokeDasharray="5,5"
                points="0,120 100,115 200,118 300,112 400,110 500,108 600,105 700,102 800,100"
              />
              
              {/* Brand Line */}
              <polyline
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                points="0,160 100,150 200,140 300,125 400,110 500,90 600,75 700,60 800,45"
              />
              
              {/* Area under brand line */}
              <polygon
                fill="url(#gradient)"
                points="0,160 100,150 200,140 300,125 400,110 500,90 600,75 700,60 800,45 800,200 0,200"
              />
              
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
