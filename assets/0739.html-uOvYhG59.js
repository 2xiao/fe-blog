import{_ as l,r as c,o as r,c as i,a as n,b as t,d as e,w as s,f as u,e as d}from"./app-XFeYdzZv.js";const k={},h=n("h1",{id:"_739-每日温度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_739-每日温度","aria-hidden":"true"},"#"),t(" 739. 每日温度")],-1),m=n("code",null,"栈",-1),_=n("code",null,"数组",-1),g=n("code",null,"单调栈",-1),f={href:"https://leetcode.cn/problems/daily-temperatures",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/daily-temperatures",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>temperatures</code> represents the daily temperatures, return <em>an array</em> <code>answer</code> <em>such that</em> <code>answer[i]</code> <em>is the number of days you have to wait after the</em> <code>ith</code> <em>day to get a warmer temperature</em>. If there is no future day for which this is possible, keep <code>answer[i] == 0</code> instead.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: temperatures = [73,74,75,71,69,72,76,73]</p><p>Output: [1,1,4,2,1,1,0,0]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: temperatures = [30,40,50,60]</p><p>Output: [1,1,1,0]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: temperatures = [30,60,90]</p><p>Output: [1,1,0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= temperatures.length &lt;= 10^5</code></li><li><code>30 &lt;= temperatures[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组 <code>temperatures</code> ，表示每天的温度，返回一个数组 <code>answer</code> ，其中 <code>answer[i]</code> 是指对于第 <code>i</code> 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 <code>0</code> 来代替。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本题的核心在于如何快速找到<strong>每一天之后第一个比它大的值</strong>。一个直观的方法是双重循环暴力解法，但效率较低（时间复杂度为 <code>O(n^2)</code>）。为了优化，可以使用 <strong>单调栈</strong> 来实现。</p><ol><li>维护一个单调栈，用于存储 <code>[温度值, 索引]</code>，并确保栈中的温度值按从高到低的顺序排列。</li><li>初始化一个结果数组 <code>res</code>，长度与 <code>temperatures</code> 相同，初始值为 <code>0</code>。</li><li>使用一个 <code>for</code> 循环遍历 <code>temperatures</code> 数组。对于每个温度 <code>temperatures[i]</code>： <ul><li>检查栈顶元素对应的温度 <code>temperatures[stack[stack.length - 1]]</code> 是否小于当前温度： <ul><li>如果小于，说明当前温度是栈顶元素对应日期的答案，计算间隔天数并更新结果数组。</li><li>重复上述过程直到栈为空或栈顶温度不小于当前温度。</li></ul></li><li>将当前温度和索引 <code>[temperatures[i], i]</code> 压入栈。</li></ul></li><li>遍历结束后，栈中仍未被处理的索引对应的结果值保持为 <code>0</code>（因为没有更暖和的未来日期）。</li><li>最后，返回更新后的 <code>res</code> 数组，表示每一天距离下一个更高温度的天数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>： <code>O(n)</code>，其中 n 是 <code>temperatures</code> 数组的长度，需要遍历一次 <code>temperatures</code> 数组，在每个温度的处理过程中，栈的每个元素最多被入栈和出栈各一次，因此，整个算法的时间复杂度为 <code>O(n)</code>。</p></li><li><p><strong>空间复杂度</strong>： <code>O(n)</code>，使用了一个栈来存储索引。在最坏情况下（例如，温度是递增的），栈可能会存储所有的索引，空间复杂度为 <code>O(n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">temperatures</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">dailyTemperatures</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">temperatures</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>temperatures<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化结果数组</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 单调递减栈，存储 [温度值, 索引]</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> temperatures<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 栈不为空，并且当前温度大于栈顶对应的温度</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> temperatures<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> <span class="token punctuation">[</span>_<span class="token punctuation">,</span> idx<span class="token punctuation">]</span> <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 弹出栈顶元素</span>
			res<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">-</span> idx<span class="token punctuation">;</span> <span class="token comment">// 计算天数差并更新结果数组</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 将当前温度和索引压入栈</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>temperatures<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"496",-1),I=n("td",{style:{"text-align":"left"}},"下一个更大元素 I",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},C=n("code",null,"栈",-1),L=n("code",null,"数组",-1),N=n("code",null,"哈希表",-1),V=n("code",null,"1+",-1),j=n("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/next-greater-element-i",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/next-greater-element-i",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"901",-1),G=n("td",{style:{"text-align":"left"}},"股票价格跨度",-1),M={style:{"text-align":"center"}},S={style:{"text-align":"left"}},z=n("code",null,"栈",-1),D=n("code",null,"设计",-1),F=n("code",null,"数据流",-1),H=n("code",null,"1+",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/online-stock-span",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/online-stock-span",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const p=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[t("🟠 "),e(p,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/stack.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/monotonic-stack.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",f,[b,e(o)]),t(),n("a",v,[y,e(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[O,I,n("td",q,[e(a,{to:"/problem/0496.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",E,[e(a,{to:"/tag/stack.html"},{default:s(()=>[C]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),t(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[N]),_:1}),t(),V]),j,n("td",B,[n("a",R,[t("🀄️"),e(o)]),t(),n("a",T,[t("🔗"),e(o)])])]),n("tr",null,[A,G,n("td",M,[e(a,{to:"/problem/0901.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",S,[e(a,{to:"/tag/stack.html"},{default:s(()=>[z]),_:1}),t(),e(a,{to:"/tag/design.html"},{default:s(()=>[D]),_:1}),t(),e(a,{to:"/tag/data-stream.html"},{default:s(()=>[F]),_:1}),t(),H]),J,n("td",K,[n("a",P,[t("🀄️"),e(o)]),t(),n("a",Q,[t("🔗"),e(o)])])])])])])}const Z=l(k,[["render",U],["__file","0739.html.vue"]]);export{Z as default};
