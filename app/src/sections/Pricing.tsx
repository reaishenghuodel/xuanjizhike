const plans = [
  {
    name: '基础版',
    price: '2,980',
    period: '/月',
    description: '适合初创品牌，快速了解AI可见度现状',
    features: [
      '5个品牌关键词监测',
      '10个AI平台覆盖',
      '每周可见度报告',
      '基础GEO优化建议',
      '邮件支持',
    ],
    cta: '开始试用',
    popular: false,
  },
  {
    name: '专业版',
    price: '7,980',
    period: '/月',
    description: '适合成长品牌，系统化提升AI可见度',
    features: [
      '20个品牌关键词监测',
      '30+AI平台覆盖',
      '实时可见度监测',
      'AI内容自动生成',
      '网站自动更新',
      '竞品分析',
      '专属客户经理',
    ],
    cta: '立即咨询',
    popular: true,
  },
  {
    name: '企业版',
    price: '定制',
    period: '',
    description: '适合大型品牌，全方位GEO解决方案',
    features: [
      '无限品牌关键词',
      '50+AI平台全覆盖',
      '实时监测+预警',
      'AI内容批量生成',
      '多站点管理',
      '深度竞品分析',
      'API接口对接',
      '7×24小时专属支持',
    ],
    cta: '联系我们',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">价格方案</h2>
          <p className="section-subtitle">
            灵活的定价方案，满足不同规模企业的需求
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-2 border-primary shadow-xl scale-105' 
                  : 'border border-gray-200 shadow-sm'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    最受欢迎
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-dark mb-2">{plan.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  {plan.price !== '定制' && (
                    <span className="text-gray-400 text-lg">¥</span>
                  )}
                  <span className="text-4xl font-bold text-dark mx-1">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a 
                href="#contact"
                className={`block text-center py-3 rounded-lg font-medium transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-blue-700'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="text-center text-gray-500 mt-8">
          所有方案均含7天免费试用 · 无隐藏费用 · 随时可取消
        </p>
      </div>
    </section>
  )
}
