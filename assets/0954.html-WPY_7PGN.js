import{_ as l,r as c,o as r,c as u,a as n,b as a,d as s,w as t,f as i,e as d}from"./app-OX-nYmHS.js";const k={},h=n("h1",{id:"_954-二倍数对数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_954-二倍数对数组","aria-hidden":"true"},"#"),a(" 954. 二倍数对数组")],-1),m=n("code",null,"贪心",-1),_=n("code",null,"数组",-1),f=n("code",null,"哈希表",-1),b=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/array-of-doubled-pairs",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/array-of-doubled-pairs",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array of even length <code>arr</code>, return <code>true</code> <em>if it is possible to reorder</em><code>arr</code> <em>such that</em><code>arr[2 * i + 1] = 2 * arr[2 * i]</code> <em>for every</em><code>0 &lt;= i &lt; len(arr) / 2</code> <em>, or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [3,1,3,6]</p><p>Output: false</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [2,1,2,6]</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [4,-2,2,-4]</p><p>Output: true</p><p>Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= arr.length &lt;= 3 * 10^4</code></li><li><code>arr.length</code> is even.</li><li><code>-10^5 &lt;= arr[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个长度为偶数的整数数组 <code>arr</code>，只有对 <code>arr</code> 进行重组后可以满足 “对于每个 <code>0 &lt;= i &lt; len(arr) / 2</code>，都有 <code>arr[2 * i + 1] = 2 * arr[2 * i]</code>” 时，返回 <code>true</code>；否则，返回 <code>false</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>用一个哈希表 <code>count</code> 来统计 <code>arr</code> 中每个数字的个数，即 <code>count[x]</code> 表示 <code>arr</code> 中 <code>x</code> 的个数；</li><li>用一个数组 <code>vals</code> 表示去重后的所有数字，并将其按绝对值从小到大排序；</li><li>遍历 <code>vals</code>，假设 <code>x</code> 为 <code>arr</code> 中绝对值最小的元素，由于没有绝对值比 <code>x</code> 更小的数，因此 <code>x</code> 只能与 <code>2x</code> 匹配。</li><li>如果此时 <code>count[2x]&lt;count[x]</code>，那么会有部分 <code>x</code> 无法找到它的另一半，即无法满足题目要求；</li><li>否则将所有 <code>x</code> 和 <code>count[x]</code> 个 <code>2x</code> 从 <code>arr</code> 中去掉，继续判断剩余元素是否满足题目要求。</li><li>不断重复此操作，如果某个时刻 <code>arr</code> 为空，则说明 <code>arr</code> 可以满足题目要求。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canReorderDoubled</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">//  取出去重后的数字。并按照绝对值排序</span>
	<span class="token keyword">const</span> vals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>count<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">-</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> vals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 无法找到足够的 2x 与 x 配对</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),q=n("td",{style:{"text-align":"center"}},"2007",-1),C={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/find-original-array-from-doubled-array",target:"_blank",rel:"noopener noreferrer"},L=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},N=n("code",null,"贪心",-1),V=n("code",null,"数组",-1),j=n("code",null,"哈希表",-1),B=n("code",null,"1+",-1),O={style:{"text-align":"left"}};function R(D,G){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return r(),u("div",null,[h,n("p",null,[a("🟠 "),s(p,{color:"#ffb800"},{default:t(()=>[a("Medium")]),_:1}),a("  🔖  "),s(e,{to:"/tag/greedy.html"},{default:t(()=>[m]),_:1}),a(),s(e,{to:"/tag/array.html"},{default:t(()=>[_]),_:1}),a(),s(e,{to:"/tag/hash-table.html"},{default:t(()=>[f]),_:1}),a(),s(e,{to:"/tag/sorting.html"},{default:t(()=>[b]),_:1}),a("  🔗 "),n("a",v,[g,s(o)]),a(),n("a",x,[y,s(o)])]),w,i(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[q,n("td",C,[n("a",I,[a("从双倍数组中还原原数组"),s(o)])]),L,n("td",M,[s(e,{to:"/tag/greedy.html"},{default:t(()=>[N]),_:1}),a(),s(e,{to:"/tag/array.html"},{default:t(()=>[V]),_:1}),a(),s(e,{to:"/tag/hash-table.html"},{default:t(()=>[j]),_:1}),a(),B]),n("td",O,[s(p,{color:"#ffb800"},{default:t(()=>[a("Medium")]),_:1})])])])])])}const T=l(k,[["render",R],["__file","0954.html.vue"]]);export{T as default};
