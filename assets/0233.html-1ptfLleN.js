import{_ as l,r as p,o as r,c as i,a as n,b as a,d as s,w as t,f as d,e as u}from"./app-OX-nYmHS.js";const k={},m=n("h1",{id:"_233-数字-1-的个数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_233-数字-1-的个数","aria-hidden":"true"},"#"),a(" 233. 数字 1 的个数")],-1),h=n("code",null,"递归",-1),g=n("code",null,"数学",-1),_=n("code",null,"动态规划",-1),f={href:"https://leetcode.cn/problems/number-of-digit-one",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/number-of-digit-one",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, count <em>the total number of digit</em><code>1</code> <em>appearing in all non-negative integers less than or equal to</em> <code>n</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 13</p><p>Output: 6</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 0</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数 <code>n</code>，计算所有小于等于 <code>n</code> 的非负整数中数字 <code>1</code> 出现的个数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 13</p><p><strong>输出：</strong> 6</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 0</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= n &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>每个位置上 <code>1</code> 的个数可以通过以下几个规律来计算：</p><ol><li><p><strong>分位计算</strong>：对于一个数字的每一位（个位、十位、百位等），我们可以把这个数字分为三部分：</p><ul><li>当前位的数字。</li><li>当前位左边的所有数字（高位）。</li><li>当前位右边的所有数字（低位）。</li></ul></li><li><p><strong>当前位的贡献</strong>：</p><ul><li>如果当前位是 <code>0</code>，那么 <code>1</code> 的个数只来自于高位的部分。</li><li>如果当前位是 <code>1</code>，那么除了高位的部分外，还要加上<code>低位的数字 + 1</code>（因为当前位的 <code>1</code> 本身也算）。</li><li>如果当前位大于 <code>1</code>，那么可以认为高位的所有组合都会有 <code>1</code> 出现在当前位。</li></ul></li><li><p><strong>高位和低位的影响</strong>：</p><ul><li>高位的组合数量直接影响到当前位的 <code>1</code> 的总数。</li><li>低位的数字数量决定了当前位为 <code>1</code> 时的具体计数。</li></ul></li></ol><p>举个例子：考虑数字 <code>2345</code> 的千位、百位、十位和个位上 <code>1</code> 的个数：</p><ul><li><strong>千位</strong>（2）：<code>1</code> 出现的次数是 <code>1000</code>，<code>1000~1999</code>，共计 <code>1000</code> 个数。</li><li><strong>百位</strong>（3）：<code>1</code> 出现的次数是 <code>300</code>，<code>2100~2199</code>、<code>1100~1199</code>、<code>100~199</code>，共计 <code>300</code> 个数。</li><li><strong>十位</strong>（4）：<code>1</code> 出现的次数是 <code>240</code>，<code>2x10~2x19(x=0~3)</code>、<code>1x10~1x19(x=0~9)</code>、<code>x10~x19(x=1~9)</code>、<code>10~19</code>，共计 <code>240</code> 个数。</li><li><strong>个位</strong>（5）：<code>1</code> 出现的次数是 <code>235</code>，<code>1</code>、<code>11</code>、<code>21</code>……<code>2341</code>，共计 <code>235</code> 个数。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，因为每次循环处理一位数字。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countDigitOne</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		factor <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// 用于处理每一位</span>
		curDigit <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 当前位置的数字</span>
		remainder <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前位置右边的所有数字</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;=</span> factor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		curDigit <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>n <span class="token operator">/</span> factor<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		remainder <span class="token operator">=</span> n <span class="token operator">-</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> factor<span class="token punctuation">)</span> <span class="token operator">*</span> factor<span class="token punctuation">;</span>

		<span class="token comment">// 计算当前位对1的贡献</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>curDigit <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token punctuation">(</span>factor <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> factor<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>curDigit <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token punctuation">(</span>factor <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> factor <span class="token operator">+</span> remainder <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token punctuation">(</span>factor <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> factor<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 处理下一位</span>
		factor <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),q=n("td",{style:{"text-align":"center"}},"172",-1),M={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/factorial-trailing-zeroes",target:"_blank",rel:"noopener noreferrer"},D={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=n("code",null,"数学",-1),N={style:{"text-align":"left"}},O=n("td",{style:{"text-align":"center"}},"1067",-1),V={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/digit-count-in-range",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},H=n("code",null,"数学",-1),R=n("code",null,"动态规划",-1),z={style:{"text-align":"left"}};function G(S,T){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[a("🔴 "),s(c,{color:"#ff334b"},{default:t(()=>[a("Hard")]),_:1}),a("  🔖  "),s(e,{to:"/tag/recursion.html"},{default:t(()=>[h]),_:1}),a(),s(e,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),a(),s(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[_]),_:1}),a("  🔗 "),n("a",f,[b,s(o)]),a(),n("a",v,[x,s(o)])]),y,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,n("td",M,[n("a",C,[a("阶乘后的零"),s(o)])]),n("td",D,[s(e,{to:"/problem/0172.html"},{default:t(()=>[a("[✓]")]),_:1})]),n("td",E,[s(e,{to:"/tag/math.html"},{default:t(()=>[L]),_:1})]),n("td",N,[s(c,{color:"#ffb800"},{default:t(()=>[a("Medium")]),_:1})])]),n("tr",null,[O,n("td",V,[n("a",I,[a("范围内的数字计数 🔒"),s(o)])]),j,n("td",B,[s(e,{to:"/tag/math.html"},{default:t(()=>[H]),_:1}),a(),s(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[R]),_:1})]),n("td",z,[s(c,{color:"#ff334b"},{default:t(()=>[a("Hard")]),_:1})])])])])])}const F=l(k,[["render",G],["__file","0233.html.vue"]]);export{F as default};
