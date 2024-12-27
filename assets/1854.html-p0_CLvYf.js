import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as d,e as u}from"./app-fqckLmln.js";const h={},k=n("h1",{id:"_1854-人口最多的年份",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1854-人口最多的年份","aria-hidden":"true"},"#"),s(" 1854. 人口最多的年份")],-1),m=n("code",null,"数组",-1),g=n("code",null,"计数",-1),b=n("code",null,"前缀和",-1),_={href:"https://leetcode.cn/problems/maximum-population-year",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/maximum-population-year",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a 2D integer array <code>logs</code> where each <code>logs[i] = [birthi, deathi]</code> indicates the birth and death years of the <code>ith</code> person.</p><p>The <strong>population</strong> of some year <code>x</code> is the number of people alive during that year. The <code>ith</code> person is counted in year <code>x</code>&#39;s population if <code>x</code> is in the <strong>inclusive</strong> range <code>[birthi, deathi - 1]</code>. Note that the person is <strong>not</strong> counted in the year that they die.</p><p>Return <em>the <strong>earliest</strong> year with the <strong>maximum population</strong></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: logs = [[1993,1999],[2000,2010]]</p><p>Output: 1993</p><p>Explanation: The maximum population is 1, and 1993 is the earliest year with this population.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: logs = [[1950,1961],[1960,1971],[1970,1981]]</p><p>Output: 1960</p><p>Explanation:</p><p>The maximum population is 2, and it had happened in years 1960 and 1970.</p><p>The earlier year between them is 1960.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= logs.length &lt;= 100</code></li><li><code>1950 &lt;= birthi &lt; deathi &lt;= 2050</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二维整数数组 <code>logs</code> ，其中每个 <code>logs[i] = [birthi, deathi]</code> 表示第 <code>i</code> 个人的出生和死亡年份。</p><p>年份 <code>x</code> 的 <strong>人口</strong> 定义为这一年期间活着的人的数目。第 <code>i</code> 个人被计入年份 <code>x</code> 的人口需要满足：<code>x</code> 在闭区间 <code>[birthi, deathi - 1]</code> 内。注意，人不应当计入他们死亡当年的人口中。</p><p>返回 <strong>人口最多</strong> 且 <strong>最早</strong> 的年份。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> logs = [[1993,1999],[2000,2010]]</p><p><strong>输出：</strong> 1993</p><p><strong>解释：</strong> 人口最多为 1 ，而 1993 是人口为 1 的最早年份。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> logs = [[1950,1961],[1960,1971],[1970,1981]]</p><p><strong>输出：</strong> 1960</p><p><strong>解释：</strong></p><p>人口最多为 2 ，分别出现在 1960 和 1970 。</p><p>其中最早年份是 1960 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= logs.length &lt;= 100</code></li><li><code>1950 &lt;= birthi &lt; deathi &lt;= 2050</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义数组</strong>：</p><ul><li>定义一个大小是 101 的数组 <code>arr</code>，因为从 1950 到 2050 一共 101 年（包括 1950 和 2050）。</li><li><code>arr[i]</code> 存储的是 <code>1950 + i</code> 年的人口变化（增减）。</li></ul></li><li><p><strong>人口变化记录</strong>：</p><ul><li>对于每个人的出生年份 <code>birth</code>，会在 <code>arr[birth - 1950]</code> 位置上加 1，表示从 <code>birth</code> 年开始人口增加。</li><li>对于每个人的死亡年份 <code>death</code>，会在 <code>arr[death - 1950]</code> 位置上减 1，表示从 <code>death</code> 年起，人口减少（死亡是当年结束，所以处理的是 <code>death</code> 年的结束）。</li></ul></li><li><p><strong>计算最大人口</strong>：</p><ul><li>遍历 <code>arr</code> 数组，计算每一年的总人口。</li><li>使用 <code>population</code> 来累积每一年的人口变化。</li><li>如果当前人口数 <code>population</code> 大于历史最大值 <code>max</code>，则更新 <code>max</code> 和当前年份 <code>year</code>。</li></ul></li><li><p><strong>返回结果</strong>：最终，<code>year</code> 就是人口最多的年份。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>logs</code> 数组的长度，需要先遍历每一条记录并更新 <code>arr</code> 数组，然后再遍历一次 <code>arr</code> 数组计算最大人口年份。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，虽然使用了一个大小为 101 的数组，但它的大小是固定的，因此空间复杂度是常数级别的。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">logs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumPopulation</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">logs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">101</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于存储每一年人口的增减情况</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>birth<span class="token punctuation">,</span> death<span class="token punctuation">]</span> <span class="token keyword">of</span> logs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		arr<span class="token punctuation">[</span>birth <span class="token operator">-</span> <span class="token number">1950</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 出生年份人口增加</span>
		arr<span class="token punctuation">[</span>death <span class="token operator">-</span> <span class="token number">1950</span><span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 死亡年份人口减少</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> population <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		year <span class="token operator">=</span> <span class="token number">1950</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		population <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 计算每一年的总人口</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>population <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 更新最大人口和对应年份</span>
			max <span class="token operator">=</span> population<span class="token punctuation">;</span>
			year <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1950</span><span class="token punctuation">;</span> <span class="token comment">// 将数组索引转换为实际年份</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> year<span class="token punctuation">;</span> <span class="token comment">// 返回最大人口的年份</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2381",-1),E=n("td",{style:{"text-align":"left"}},"字母移位 II",-1),I=n("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},T=n("code",null,"数组",-1),C=n("code",null,"字符串",-1),L=n("code",null,"前缀和",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/shifting-letters-ii",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/shifting-letters-ii",target:"_blank",rel:"noopener noreferrer"};function R(A,D){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/counting.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/prefix-sum.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",_,[v,a(o)]),s(),n("a",f,[x,a(o)])]),y,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,I,n("td",N,[a(e,{to:"/tag/array.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/prefix-sum.html"},{default:t(()=>[L]),_:1})]),V,n("td",O,[n("a",j,[s("🀄️"),a(o)]),s(),n("a",B,[s("🔗"),a(o)])])])])])])}const S=l(h,[["render",R],["__file","1854.html.vue"]]);export{S as default};
