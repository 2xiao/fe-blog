import{_ as p,r as o,o as r,c as i,a as n,b as s,d as a,w as t,e as d}from"./app-5LzGvT4H.js";const u={},k=n("h1",{id:"_58-ii-左旋转字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_58-ii-左旋转字符串","aria-hidden":"true"},"#"),s(" 58-II. 左旋转字符串")],-1),g=n("code",null,"数学",-1),h=n("code",null,"双指针",-1),m=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>某公司门禁密码使用动态口令技术。初始密码为字符串 <code>password</code>，密码更新均遵循以下步骤：</p><ul><li>设定一个正整数目标值 <code>target</code></li><li>将 <code>password</code> 前 <code>target</code> 个字符按原顺序移动至字符串末尾</li></ul><p>请返回更新后的密码字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> password = &quot;s3cur1tyC0d3&quot;, target = 4</p><p><strong>输出:</strong> &quot;r1tyC0d3s3cu&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入:</strong> password = &quot;lrloseumgh&quot;, target = 6</p><p><strong>输出:</strong> &quot;umghlrlose&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= target &lt; password.length &lt;= 10000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>获取目标值</strong>：</p><ul><li>从输入中获取正整数 <code>target</code>，对 <code>password.length</code> 取模，防止目标值超过字符串长度。</li></ul></li><li><p><strong>处理字符串</strong>：</p><ul><li>将 <code>password</code> 字符串分为两部分： <ul><li>前 <code>target</code> 个字符。</li><li>从 <code>target</code> 开始到字符串末尾的部分。</li></ul></li><li>将这两部分拼接在一起，前 <code>target</code> 个字符移至字符串末尾，并返回拼接好的字符串。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，需要遍历字符串进行切片，时间复杂度为线性级别。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，由于创建了新的字符串，空间复杂度也是线性级别。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">password</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">dynamicPassword</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">password<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取目标值的合法范围，防止目标值超过字符串长度</span>
	target <span class="token operator">=</span> target <span class="token operator">%</span> password<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 将前 target 个字符移动到字符串末尾</span>
	<span class="token keyword">return</span> password<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">+</span> password<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function b(w,x){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",_,[v,a(l)])]),f])}const y=p(u,[["render",b],["__file","jz_offer_58_2.html.vue"]]);export{y as default};
