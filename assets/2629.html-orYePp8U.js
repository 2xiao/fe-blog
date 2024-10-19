import{_ as i,r as c,o as l,c as p,a as n,d as t,b as e,w as a,f as r,e as d}from"./app-ynO5B_DP.js";const u={},f={id:"_2629-复合函数",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_2629-复合函数","aria-hidden":"true"},"#",-1),g={href:"https://leetcode.com/problems/function-composition",target:"_blank",rel:"noopener noreferrer"},x={href:"https://leetcode.com/problems/function-composition",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of functions <code>[f1, f2, f3, ..., fn]</code>, return a new function <code>fn</code> that is the <strong>function composition</strong> of the array of functions.</p><p>The <strong>function composition</strong> of <code>[f(x), g(x), h(x)]</code> is <code>fn(x) = f(g(h(x)))</code>.</p><p>The <strong>function composition</strong> of an empty list of functions is the <strong>identity function</strong> <code>f(x) = x</code>.</p><p>You may assume each function in the array accepts one integer as input and returns one integer as output.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: functions = [x =&gt; x + 1, x =&gt; x * x, x =&gt; 2 * x], x = 4</p><p>Output: 65</p><p>Explanation:</p><p>Evaluating from right to left ...</p><p>Starting with x = 4.</p><p>2 * (4) = 8</p><p>(8) * (8) = 64</p><p>(64) + 1 = 65</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: functions = [x =&gt; 10 * x, x =&gt; 10 * x, x =&gt; 10 * x], x = 1</p><p>Output: 1000</p><p>Explanation:</p><p>Evaluating from right to left ...</p><p>10 * (1) = 10</p><p>10 * (10) = 100</p><p>10 * (100) = 1000</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: functions = [], x = 42</p><p>Output: 42</p><p>Explanation:</p><p>The composition of zero functions is the identity function</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-1000 &lt;= x &lt;= 1000</code></li><li><code>0 &lt;= functions.length &lt;= 1000</code></li><li>all functions accept and return a single integer</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个函数，它接收一个函数数组 <code>[f1, f2, f3，…， fn]</code> ，并返回一个新的函数 <code>fn</code> ，它是函数数组的 <strong>复合函数</strong> 。</p><p><code>[f(x)， g(x)， h(x)]</code> 的 <strong>复合函数</strong> 为 <code>fn(x) = f(g(h(x)))</code> 。</p><p>一个空函数列表的 <strong>复合函数</strong> 是 <strong>恒等函数</strong> <code>f(x) = x</code> 。</p><p>你可以假设数组中的每个函数接受一个整型参数作为输入，并返回一个整型作为输出。</p><p><strong>提示：</strong></p><ul><li><code>-1000 &lt;= x &lt;= 1000</code></li><li><code>0 &lt;= functions.length &lt;= 1000</code></li><li>所有函数都接受并返回一个整型</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题要将多个函数按照从右到左的顺序嵌套执行，核心在于理解函数组合的执行顺序以及如何在 JavaScript 中使用 <code>reduceRight</code> 来简化实现。</p><ol><li><strong>从右向左执行函数</strong>：需要对输入值依次应用函数数组中的函数，从最后一个函数开始，依次向前应用，这可以使用 <code>reduceRight</code> 来实现。</li><li><strong>空数组情况</strong>：如果函数数组为空，返回的应该是一个恒等函数，也就是 <code>return x =&gt; x</code>，因为没有任何操作需要执行。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>functions</code> 数组的长度，需要对数组中的每一个函数执行一次调用。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除了输入和输出的额外空间，不需要额外的空间存储其他数据。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">functions</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">compose</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">functions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> functions<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span>acc<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const fn = compose([x =&gt; x + 1, x =&gt; 2 * x])
 * fn(4) // 9
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),k=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),b=n("td",{style:{"text-align":"center"}},"2620",-1),v={style:{"text-align":"left"}},y={href:"https://leetcode.com/problems/counter",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"center"}},w={href:"/problem/2620",target:"_blank",rel:"noopener noreferrer"},q=n("td",{style:{"text-align":"left"}},null,-1),C={style:{"text-align":"left"}},I=n("td",{style:{"text-align":"center"}},"2623",-1),N={style:{"text-align":"left"}},O={href:"https://leetcode.com/problems/memoize",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},T={href:"/problem/2623",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"left"}},null,-1),B={style:{"text-align":"left"}};function L(R,S){const s=c("ExternalLinkIcon"),o=c("font");return l(),p("div",null,[n("h1",f,[h,t(),n("a",g,[t("2629. 复合函数"),e(s)])]),n("p",null,[t("🟢 "),e(o,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔗 "),n("a",x,[m,e(s)])]),_,r(" prettier-ignore "),n("table",null,[k,n("tbody",null,[n("tr",null,[b,n("td",v,[n("a",y,[t("计数器"),e(s)])]),n("td",E,[n("a",w,[t("[✓]"),e(s)])]),q,n("td",C,[e(o,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1})])]),n("tr",null,[I,n("td",N,[n("a",O,[t("记忆函数"),e(s)])]),n("td",V,[n("a",T,[t("[✓]"),e(s)])]),j,n("td",B,[e(o,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])])])])])}const F=i(u,[["render",L],["__file","2629.html.vue"]]);export{F as default};
