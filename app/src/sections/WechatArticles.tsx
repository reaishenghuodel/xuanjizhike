import { useState } from 'react'
import { wechatArticles, WechatArticle } from '../data/wechatArticles'

function ArticleCard({ article }: { article: WechatArticle }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="p-6 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
            公众号精选
          </span>
          <span className="text-xs text-gray-400">{article.date}</span>
          {article.tags && article.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-full">{tag}</span>
          ))}
        </div>

        <h3 className="text-lg font-semibold text-dark mb-2 hover:text-primary transition-colors duration-200">
          {article.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{article.summary}</p>

        <div className="mt-3 text-primary text-sm font-medium">
          {expanded ? '收起 ▲' : '阅读全文 ▼'}
        </div>
      </div>

      {expanded && (
        <div className="px-6 pb-6">
          {article.cover && (
            <img src={article.cover} alt={article.title} className="w-full max-h-96 object-cover rounded-lg mb-5" loading="lazy" />
          )}
          <div
            className="prose prose-slate max-w-none text-gray-700 leading-relaxed
              [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-dark [&_h2]:mt-8 [&_h2]:mb-4
              [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-dark [&_h3]:mt-6 [&_h3]:mb-3
              [&_p]:mb-4 [&_p]:leading-7
              [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:py-2 [&_blockquote]:my-4 [&_blockquote]:bg-gray-50 [&_blockquote]:text-gray-600
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4
              [&_li]:mb-2
              [&_strong]:text-dark
              [&_img]:w-full [&_img]:rounded-lg [&_img]:my-4"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-6 pt-5 border-t border-gray-100">
            {article.wechatUrl ? (
              <a
                href={article.wechatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                阅读公众号原文 →
              </a>
            ) : (
              <div className="inline-flex items-center px-6 py-3 bg-gray-50 text-gray-500 text-sm rounded-lg">
                本文首发于微信公众号【盛世天宜AI研究院】，搜索关注阅读更多内容
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function WechatArticles() {
  return (
    <section id="wechat-articles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">深度文章</h2>
          <p className="section-subtitle">
            来自「盛世天宜AI研究院」公众号的原创深度文章，聚焦 GEO、AI搜索与品牌数字化
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-5">
          {wechatArticles.length === 0 ? (
            <div className="text-center text-gray-400 py-12">文章同步中，敬请期待</div>
          ) : (
            wechatArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
