import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-MXSjQbID.js";const k={},m=n("h1",{id:"_1360-日期之间隔几天",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1360-日期之间隔几天","aria-hidden":"true"},"#"),s(" 1360. 日期之间隔几天")],-1),b=n("code",null,"数学",-1),h=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/number-of-days-between-two-dates",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/number-of-days-between-two-dates",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a program to count the number of days between two dates.</p><p>The two dates are given as strings, their format is <code>YYYY-MM-DD</code> as shown in the examples.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: date1 = &quot;2019-06-29&quot;, date2 = &quot;2019-06-30&quot;</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: date1 = &quot;2020-01-15&quot;, date2 = &quot;2019-12-31&quot;</p><p>Output: 15</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The given dates are valid dates between the years <code>1971</code> and <code>2100</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个程序来计算两个日期之间隔了多少天。</p><p>日期以字符串形式给出，格式为 <code>YYYY-MM-DD</code>，如示例所示。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> date1 = &quot;2019-06-29&quot;, date2 = &quot;2019-06-30&quot;</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> date1 = &quot;2020-01-15&quot;, date2 = &quot;2019-12-31&quot;</p><p><strong>输出：</strong> 15</p></blockquote><p><strong>提示：</strong></p><ul><li>给定的日期是 <code>1971</code> 年到 <code>2100</code> 年之间的有效日期。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p><strong>日期差计算：</strong></p><p>将每个日期转换为自公元 1970 年 1 月 1 日起的累计天数，然后计算两个日期的绝对天数差。</p></li><li><p><strong>注意闰年判断</strong>：</p><ul><li>闰年规则：如果年份能被 4 整除但不能被 100 整除，或者能被 400 整除，则为闰年。</li><li>闰年有 366 天，普通年份有 365 天。</li><li>闰年 2 月有 29 天，普通年份 2 月有 28 天。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是输入年份与 1970 年的差值，每个日期需要遍历从 1970 年到输入年份的所有年份。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常量空间存储数组和中间变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">date1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">date2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">daysBetweenDates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">date1<span class="token punctuation">,</span> date2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 返回两个日期的绝对天数差</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token function">getDays</span><span class="token punctuation">(</span>date1<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token function">getDays</span><span class="token punctuation">(</span>date2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 判断是否是闰年</span>
<span class="token keyword">var</span> <span class="token function-variable function">isLeapYear</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">year</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>year <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> year <span class="token operator">%</span> <span class="token number">100</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> year <span class="token operator">%</span> <span class="token number">400</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 计算某个日期自1970年1月1日起的累计天数</span>
<span class="token keyword">var</span> <span class="token function-variable function">getDays</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 普通年份的每月天数</span>
	<span class="token keyword">const</span> daysInMonth <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token punctuation">[</span>year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day<span class="token punctuation">]</span> <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> days <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 累加从1970年到前一年所有年份的天数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1970</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> year<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		days <span class="token operator">+=</span> <span class="token function">isLeapYear</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">366</span> <span class="token operator">:</span> <span class="token number">365</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 累加当前年份前几个月的天数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> month<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		days <span class="token operator">+=</span> daysInMonth<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">2</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isLeapYear</span><span class="token punctuation">(</span>year<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			days <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 闰年额外加1天</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 加上当月天数</span>
	<span class="token keyword">return</span> days <span class="token operator">+</span> day<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"2409",-1),q=n("td",{style:{"text-align":"left"}},"统计共同度过的日子数",-1),Y=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},L=n("code",null,"数学",-1),M=n("code",null,"字符串",-1),E=n("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/count-days-spent-together",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/count-days-spent-together",target:"_blank",rel:"noopener noreferrer"};function V(B,O){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/math.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",v,[_,a(o)]),s(),n("a",g,[y,a(o)])]),f,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[x,q,Y,n("td",D,[a(e,{to:"/tag/math.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[M]),_:1})]),E,n("td",I,[n("a",N,[s("🀄️"),a(o)]),s(),n("a",C,[s("🔗"),a(o)])])])])])])}const T=l(k,[["render",V],["__file","1360.html.vue"]]);export{T as default};
