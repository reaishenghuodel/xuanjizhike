import { useState } from 'react'

export default function WeChatService() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 浮动按钮 - 右下角 */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="联系客服"
      >
        <div className="relative">
          {/* 脉冲动画 */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
          {/* 按钮主体 */}
          <div className="relative w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200 group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.5 13.5a1 1 0 100-2 1 1 0 000 2zM12 13.5a1 1 0 100-2 1 1 0 000 2zM15.5 13.5a1 1 0 100-2 1 1 0 000 2z" />
              <path d="M12 2C6.477 2 2 5.813 2 10.5c0 2.61 1.36 4.95 3.5 6.53V22l4.5-2.5c.79.15 1.62.23 2.5.23 5.523 0 10-3.813 10-8.5S17.523 2 12 2zm0 14.5c-.72 0-1.41-.08-2.08-.22L7.5 17.5v-2.28C5.58 13.95 4.5 12.33 4.5 10.5 4.5 7.19 7.86 4.5 12 4.5s7.5 2.69 7.5 6c0 3.31-3.36 6-7.5 6z" />
            </svg>
          </div>
          {/* 提示文字 */}
          <div className="absolute bottom-full right-0 mb-3 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            AI客服在线
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
        </div>
      </button>

      {/* 弹窗 */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
          {/* 背景遮罩 */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* 弹窗内容 */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden" onClick={e => e.stopPropagation()}>
            {/* 关闭按钮 */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-white transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* 顶部绿色区域 */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 px-8 pt-8 pb-12 text-white text-center relative">
              {/* 装饰 */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
              
              <div className="relative">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 5.813 2 10.5c0 2.61 1.36 4.95 3.5 6.53V22l4.5-2.5c.79.15 1.62.23 2.5.23 5.523 0 10-3.813 10-8.5S17.523 2 12 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">璇玑智科 AI客服</h3>
                <p className="text-green-100 text-sm">7×24小时在线，扫码即可咨询</p>
              </div>
            </div>

            {/* QR码区域 */}
            <div className="px-8 py-8 -mt-6 relative">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                {/* QR码占位 - 用户需要替换成实际的企业微信二维码 */}
                <div className="w-48 h-48 mx-auto bg-gray-100 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    <p className="text-sm text-gray-500">企业微信二维码</p>
                    <p className="text-xs text-gray-400 mt-1">请替换为实际二维码</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">微信扫一扫</span>，立即对话
                </p>
                <p className="text-xs text-gray-400">长按识别二维码也可以哦</p>
              </div>
            </div>

            {/* AI客服能力介绍 */}
            <div className="px-8 pb-8">
              <div className="bg-gray-50 rounded-xl p-5">
                <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
                  <svg className="w-4 h-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  AI客服能帮您
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600">品牌AI可见度诊断</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600">GEO优化方案咨询</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600">产品功能介绍</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-gray-600">预约专家演示</span>
                  </div>
                </div>
              </div>

              {/* 底部状态 */}
              <div className="flex items-center justify-center mt-4 text-xs text-gray-400">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                AI客服在线中 · 平均响应 &lt;3秒
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
