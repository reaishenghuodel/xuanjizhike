import { useState } from 'react'
import { newsItems, NewsItem } from '../data/newsData'

export default function News() {
  const [activeTab, setActiveTab] = useState<'industry' | 'enterprise'>('industry')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filteredNews = newsItems.filter(item => item.category === activeTab)
  const topNews = filteredNews.find(item => item.isTop)
  const regularNews = filteredNews.filter(item => !item.isTop)

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">资讯中心</h2>
          <p className="section-subtitle">
            掌握GEO行业最新动态，了解璇玑智科最新进展
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'industry'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => { setActiveTab('industry'); setExpandedId(null); }}
            >
              行业资讯
            </button>
            <button
              className={`px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === 'enterprise'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-gray-600 hover:text-primary'
              }`}
              onClick={() => { setActiveTab('enterprise'); setExpandedId(null); }}
            >
              企业资讯
            </button>
          </div>
        </div>

        {/* Top News */}
        {topNews && (
          <div className="mb-8">
            <TopNewsCard item={topNews} isExpanded={expandedId === topNews.id} onToggle={() => toggleExpand(topNews.id)} />
          </div>
        )}

        {/* News List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map(item => (
            <NewsCard key={item.id} item={item} isExpanded={expandedId === item.id} onToggle={() => toggleExpand(item.id)} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TopNewsCard({ item, isExpanded, onToggle }: { item: NewsItem; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full">置顶</span>
          <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            {item.category === 'industry' ? '行业资讯' : '企业资讯'}
          </span>
          <span className="text-sm text-gray-400">{item.date}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-dark mb-3 cursor-pointer hover:text-primary transition-colors" onClick={onToggle}>
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{item.summary}</p>
        
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="prose prose-gray max-w-none">
              {item.content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 mb-3 leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">{tag}</span>
            ))}
          </div>
          <button onClick={onToggle} className="text-primary text-sm font-medium hover:underline">
            {isExpanded ? '收起' : '阅读全文 →'}
          </button>
        </div>
        {item.source && (
          <div className="mt-3 text-sm text-gray-400">来源：{item.source}</div>
        )}
      </div>
    </div>
  )
}

function NewsCard({ item, isExpanded, onToggle }: { item: NewsItem; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
            {item.category === 'industry' ? '行业' : '企业'}
          </span>
          <span className="text-xs text-gray-400">{item.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-dark mb-2 cursor-pointer hover:text-primary transition-colors flex-1" onClick={onToggle}>
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3">{item.summary}</p>
        
        {isExpanded && (
          <div className="mt-2 pt-3 border-t border-gray-100 mb-4">
            <div className="text-sm text-gray-600 leading-relaxed">
              {item.content.split('\n').map((paragraph, idx) => (
                <p key={idx} className="mb-2">{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.tags.map(tag => (
              <span key={tag} className="px-1.5 py-0.5 bg-gray-50 text-gray-400 text-xs rounded">{tag}</span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            {item.source && <span className="text-xs text-gray-400">{item.source}</span>}
            <button onClick={onToggle} className="text-primary text-xs font-medium hover:underline ml-auto">
              {isExpanded ? '收起' : '详情 →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
