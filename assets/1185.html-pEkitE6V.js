import{_ as l,r as e,o as r,c as d,a as n,b as s,d as a,w as o,e as u}from"./app-r0ql_Osa.js";const i={},k=n("h1",{id:"_1185-一周中的第几天",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1185-一周中的第几天","aria-hidden":"true"},"#"),s(" 1185. 一周中的第几天")],-1),m=n("code",null,"数学",-1),h={href:"https://leetcode.cn/problems/day-of-the-week",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/day-of-the-week",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),g=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a date, return the corresponding day of the week for that date.</p><p>The input is given as three integers representing the <code>day</code>, <code>month</code> and <code>year</code> respectively.</p><p>Return the answer as one of the following values <code>{&quot;Sunday&quot;, &quot;Monday&quot;, &quot;Tuesday&quot;, &quot;Wednesday&quot;, &quot;Thursday&quot;, &quot;Friday&quot;, &quot;Saturday&quot;}</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: day = 31, month = 8, year = 2019</p><p>Output: &quot;Saturday&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: day = 18, month = 7, year = 1999</p><p>Output: &quot;Sunday&quot;</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: day = 15, month = 8, year = 1993</p><p>Output: &quot;Sunday&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The given dates are valid dates between the years <code>1971</code> and <code>2100</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个日期，请你设计一个算法来判断它是对应一周中的哪一天。</p><p>输入为三个整数：<code>day</code>、<code>month</code> 和 <code>year</code>，分别表示日、月、年。</p><p>您返回的结果必须是这几个值中的一个 <code>{&quot;Sunday&quot;, &quot;Monday&quot;, &quot;Tuesday&quot;, &quot;Wednesday&quot;, &quot;Thursday&quot;, &quot;Friday&quot;, &quot;Saturday&quot;}</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> day = 31, month = 8, year = 2019</p><p><strong>输出：</strong> &quot;Saturday&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> day = 18, month = 7, year = 1999</p><p><strong>输出：</strong> &quot;Sunday&quot;</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> day = 15, month = 8, year = 1993</p><p><strong>输出：</strong> &quot;Sunday&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li>给出的日期一定是在 <code>1971</code> 到 <code>2100</code> 年之间的有效日期。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题的核心是判断给定的日期（由 <code>day</code>、<code>month</code> 和 <code>year</code> 组成）对应的是星期几。</p><p>可以使用 <strong>Zeller&#39;s Congruence</strong> 算法来计算一个日期是星期几。Zeller&#39;s Congruence 是一种计算星期几的数学公式，它可以直接通过给定的日期计算出星期几的索引。</p><p>对于日期 <code>day</code>, <code>month</code>, <code>year</code>（假设为公历日期），Zeller&#39;s Congruence 公式如下：</p><p><code>h = (day + [13 * (month + 1)/5] + year + [year/4] - [year/100] + [year/400]) mod 7</code></p><p>其中：</p><ul><li><code>day</code> 是日期（1 到 31）。</li><li><code>month</code> 是月份（1 到 12），如果是 1 月或 2 月，则视为前一年的 13 月和 14 月。</li><li><code>year</code> 是年份。</li></ul><p>公式计算结果 <code>h</code> 对应的星期几如下：</p><ul><li><code>0</code> -&gt; Saturday</li><li><code>1</code> -&gt; Sunday</li><li><code>2</code> -&gt; Monday</li><li><code>3</code> -&gt; Tuesday</li><li><code>4</code> -&gt; Wednesday</li><li><code>5</code> -&gt; Thursday</li><li><code>6</code> -&gt; Friday</li></ul><ol><li><strong>月份调整：</strong> 如果月份小于 3（即 1 月或 2 月），我们将其视为 13 月或 14 月，并将年份减去 1。</li><li><strong>应用 Zeller&#39;s Congruence：</strong> 使用 Zeller&#39;s Congruence 公式计算出 <code>h</code>，它是一个整数，表示星期几。</li><li><strong>映射星期几：</strong> 根据计算得到的 <code>h</code>，返回对应的星期几名称。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，公式的计算只涉及常数时间操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数的空间来存储数组和中间变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>numberday
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>numbermonth
 * <span class="token keyword">@param</span> <span class="token punctuation">{</span>numberyear
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">dayOfTheWeek</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">day<span class="token punctuation">,</span> month<span class="token punctuation">,</span> year</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Zeller&#39;s Congruence算法调整</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>month <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		month <span class="token operator">+=</span> <span class="token number">12</span><span class="token punctuation">;</span> <span class="token comment">// 把1月和2月调整为13月和14月</span>
		year <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 年份减去1</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// Zeller&#39;s Congruence公式</span>
	<span class="token keyword">let</span> h <span class="token operator">=</span>
		<span class="token punctuation">(</span>day <span class="token operator">+</span>
			Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">13</span> <span class="token operator">*</span> <span class="token punctuation">(</span>month <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">+</span>
			year <span class="token operator">+</span>
			Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>year <span class="token operator">/</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">-</span>
			Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>year <span class="token operator">/</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">+</span>
			Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>year <span class="token operator">/</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span>
		<span class="token number">7</span><span class="token punctuation">;</span>

	<span class="token comment">// 星期几映射</span>
	<span class="token keyword">const</span> daysOfWeek <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token string">&#39;Saturday&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;Sunday&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;Monday&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;Tuesday&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;Wednesday&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;Thursday&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;Friday&#39;</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> daysOfWeek<span class="token punctuation">[</span>h<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function q(f,_){const p=e("font"),c=e("RouterLink"),t=e("ExternalLinkIcon");return r(),d("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(c,{to:"/tag/math.html"},{default:o(()=>[m]),_:1}),s("  🔗 "),n("a",h,[y,a(t)]),s(),n("a",v,[b,a(t)])]),g])}const x=l(i,[["render",q],["__file","1185.html.vue"]]);export{x as default};
