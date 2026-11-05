export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title mb-6">关于璇玑智科</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              璇玑智科是一家专注于GEO（生成式引擎优化）技术的创新企业，
              致力于帮助品牌在AI时代获得更大的可见度和影响力。
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              我们的团队由AI技术专家、数字营销资深人士和数据分析师组成，
              深耕AI搜索引擎优化领域，已为众多企业提供了专业的GEO解决方案。
              我们相信，在AI搜索时代，每个品牌都值得被看见。
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">技术驱动</h4>
                  <p className="text-sm text-gray-500">自主研发AI算法</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">效果导向</h4>
                  <p className="text-sm text-gray-500">数据说话，结果证明</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">客户成功</h4>
                  <p className="text-sm text-gray-500">与客户共同成长</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">持续创新</h4>
                  <p className="text-sm text-gray-500">紧跟AI前沿技术</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div id="contact" className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-dark mb-2">联系我们</h3>
            <p className="text-gray-600 mb-6">获取免费的AI可见度诊断报告</p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">公司名称</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="请输入公司名称"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">联系人</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="请输入联系人姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">手机号</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="请输入手机号"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="请输入邮箱"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">需求描述</label>
                <textarea 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent h-32 resize-none"
                  placeholder="请描述您的需求"
                />
              </div>
              <button 
                type="submit"
                className="w-full btn-primary !py-4 text-lg"
              >
                提交并获取诊断报告
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
