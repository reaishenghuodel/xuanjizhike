export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            GEO自动化平台 · 让企业被AI找到
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
            让你的品牌
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              被AI看见
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            当用户向AI提问时，你的品牌是否在回答中？
            <br />
            璇玑智科帮你监测、优化、提升品牌在ChatGPT、Perplexity、DeepSeek等AI搜索引擎中的可见度。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary text-lg !px-10 !py-4">
              免费诊断品牌可见度
            </a>
            <a href="#how-it-works" className="btn-outline text-lg !px-10 !py-4">
              了解工作原理
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-500 mt-1">AI平台覆盖</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">200%</div>
              <div className="text-sm text-gray-500 mt-1">平均可见度提升</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">3天</div>
              <div className="text-sm text-gray-500 mt-1">见效周期</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-gray-500 mt-1">客户满意度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
