import{_ as l,r as p,o as r,c as i,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-totCBmv-.js";const k={},m=n("h1",{id:"_670-最大交换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_670-最大交换","aria-hidden":"true"},"#"),s(" 670. 最大交换")],-1),h=n("code",null,"贪心",-1),g=n("code",null,"数学",-1),_={href:"https://leetcode.cn/problems/maximum-swap",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/maximum-swap",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer <code>num</code>. You can swap two digits at most once to get the maximum valued number.</p><p>Return <em>the maximum valued number you can get</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = 2736</p><p>Output: 7236</p><p>Explanation: Swap the number 2 and the number 7.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = 9973</p><p>Output: 9973</p><p>Explanation: No swap.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= num &lt;= 10^8</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个非负整数，你<strong>至多</strong> 可以交换一次数字中的任意两位。返回你能得到的最大值。</p><p><strong>示例 1 :</strong></p><blockquote><p><strong>输入:</strong> 2736</p><p><strong>输出:</strong> 7236</p><p><strong>解释:</strong> 交换数字 2 和数字 7。</p></blockquote><p><strong>示例 2 :</strong></p><blockquote><p><strong>输入:</strong> 9973</p><p><strong>输出:</strong> 9973</p><p><strong>解释:</strong> 不需要交换。</p></blockquote><p><strong>注意:</strong></p><ol><li>给定数字的范围是 <code>[0, 10^8]</code></li></ol><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用 <strong>贪心算法</strong> 来做这道题，希望通过交换两个数字，得到尽可能大的数字。自然想到，应该把数字序列中的某一位数字，和后面较大的数字交换。</p><p>关键点在于要 <strong>从右向左扫描</strong>，在这个过程中，记录每个数字的最大值及其位置。</p><p>同时，在从右往左的遍历的过程中，判断当前数字是否比最大数字小，如果是，则可以交换它们，记录交换对。</p><p>注意，除了当前数字，当前的最大数字也需要记录，因为后续遍历最大数字可能会更新。例如 <code>num = 98368</code> 时，应该是 <code>3</code> 和 <code>8</code> 交换，但是遍历结束时最大数字是 <code>9</code>。</p><p>遍历结束，如果找不到合适的交换对，说明当前数字已经是最大值，直接返回原数字。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，需要从右到左遍历数字字符串；</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，由于将数字转换为了字符串数组进行处理。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumSwap</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> arr <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxIdx <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
		y <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>maxIdx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 更新从当前位置到末尾的最大数字索引</span>
			maxIdx <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>maxIdx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 找到需要交换的两个位置</span>
			x <span class="token operator">=</span> i<span class="token punctuation">;</span>
			y <span class="token operator">=</span> maxIdx<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 如果没有可以交换的情况</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> num<span class="token punctuation">;</span>
	<span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token comment">// 交换位置</span>
		<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"321",-1),I=n("td",{style:{"text-align":"left"}},"拼接最大数",-1),q=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},N=n("code",null,"栈",-1),C=n("code",null,"贪心",-1),L=n("code",null,"数组",-1),V=n("code",null,"2+",-1),j=n("td",{style:{"text-align":"center"}},"🔴",-1),O={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/create-maximum-number",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/create-maximum-number",target:"_blank",rel:"noopener noreferrer"};function R(Y,M){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",_,[b,a(o)]),s(),n("a",v,[x,a(o)])]),f,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,I,q,n("td",E,[a(e,{to:"/tag/stack.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/greedy.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[L]),_:1}),s(),V]),j,n("td",O,[n("a",S,[s("🀄️"),a(o)]),s(),n("a",B,[s("🔗"),a(o)])])])])])])}const z=l(k,[["render",R],["__file","0670.html.vue"]]);export{z as default};
