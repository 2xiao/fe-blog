import{_ as l,r as e,o as r,c as i,a as n,b as s,d as a,w as t,e as u}from"./app-9CeBk-uV.js";const d={},k=n("h1",{id:"_386-字典序排数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_386-字典序排数","aria-hidden":"true"},"#"),s(" 386. 字典序排数")],-1),m=n("code",null,"深度优先搜索",-1),h=n("code",null,"字典树",-1),b={href:"https://leetcode.cn/problems/lexicographical-numbers",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/lexicographical-numbers",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return all the numbers in the range <code>[1, n]</code> sorted in lexicographical order.</p><p>You must write an algorithm that runs in <code>O(n)</code> time and uses <code>O(1)</code> extra space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 13</p><p>Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 2</p><p>Output: [1,2]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 5 * 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> ，按字典序返回范围 <code>[1, n]</code> 内所有整数。</p><p>你必须设计一个时间复杂度为 <code>O(n)</code> 且使用 <code>O(1)</code> 额外空间的算法。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 13</p><p><strong>输出：</strong>[1,10,11,12,13,2,3,4,5,6,7,8,9]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong>[1,2]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 5 * 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>模拟字典序生成过程</strong></p><ul><li>从 <code>1</code> 开始逐步扩展字典序，每次尝试将当前数扩大 10 倍。</li><li>如果扩大 10 倍超出范围，则考虑“进位”操作（即调整末位的递增）。</li></ul></li><li><p><strong>处理特殊情况</strong></p><ul><li>当当前数 <code>num * 10 &lt;= n</code> 时，将数变为其十倍（如从 <code>1</code> 变到 <code>10</code>）。</li><li>当数末尾为 <code>9</code> 或者已经超出范围，则需要缩小数值并增加到下一个字典序位置。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度:</strong> <code>O(n)</code>，每个整数被访问一次，总共有 <code>n</code> 个数。</li><li><strong>空间复杂度:</strong> <code>O(1)</code>，除结果数组外，仅使用常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lexicalOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">&lt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			num <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">9</span> <span class="token operator">||</span> num <span class="token operator">&gt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			num<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function x(w,y){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/depth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/trie.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",b,[v,a(p)]),s(),n("a",g,[_,a(p)])]),f])}const q=l(d,[["render",x],["__file","0386.html.vue"]]);export{q as default};
