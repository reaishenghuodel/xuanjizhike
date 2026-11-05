const steps = [
  {
    step: '01',
    title: '品牌诊断',
    description: '输入品牌关键词，AI自动扫描50+平台，生成品牌AI可见度诊断报告。',
    detail: '覆盖ChatGPT、Perplexity、DeepSeek、文心一言等主流AI搜索引擎',
  },
  {
    step: '02',
    title: '策略生成',
    description: '基于诊断结果，AI自动生成个性化的GEO优化策略和内容方案。',
    detail: '智能分析竞品表现，找出差异化优化机会',
  },
  {
    step: '03',
    title: '内容优化',
    description: '一键生成符合GEO规范的优化内容，自动更新到客户网站。',
    detail: '包括页面内容、Meta标签、Schema标记等全方位优化',
  },
  {
    step: '04',
    title: '效果追踪',
    description: '实时监测优化效果，可视化展示AI可见度变化趋势。',
    detail: '自动生成周报/月报，支持一键导出PDF',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">工作原理</h2>
          <p className="section-subtitle">
            四步完成GEO优化，让品牌快速提升AI可见度
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary/20 z-0" />
              )}
              
              <div className="relative z-10 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Step Number */}
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-dark mb-2">{item.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-3">{item.description}</p>
                
                {/* Detail */}
                <p className="text-sm text-primary font-medium">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
