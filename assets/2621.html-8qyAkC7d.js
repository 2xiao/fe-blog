import{_ as i,r as a,o as r,c as p,a as e,b as t,d as n,w as o,f as d,e as u}from"./app-totCBmv-.js";const m={},h=e("h1",{id:"_2621-睡眠函数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2621-睡眠函数","aria-hidden":"true"},"#"),t(" 2621. 睡眠函数")],-1),_={href:"https://leetcode.cn/problems/sleep",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/sleep",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),b=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a positive integer <code>millis</code>, write an asynchronous function that sleeps for <code>millis</code> milliseconds. It can resolve any value.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: millis = 100</p><p>Output: 100</p><p>Explanation: It should return a promise that resolves after 100ms.</p><p>let t = Date.now();</p><p>sleep(100).then(() =&gt; {</p><p>console.log(Date.now() - t); // 100</p><p>});</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: millis = 200</p><p>Output: 200</p><p>Explanation: It should return a promise that resolves after 200ms.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= millis &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个异步函数，它接收一个正整数参数 <code>millis</code> ，并休眠 <code>millis</code> 毫秒。要求此函数可以解析任何值。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= millis &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过使用 <code>Promise</code> 来实现一个等待一定时间后继续执行的操作。</p><p>JavaScript 提供的 <code>setTimeout</code> 方法正好可以用于设定延迟，它允许在指定的毫秒数之后执行回调函数。</p><p>可以结合 <code>Promise</code>，在 <code>Promise</code> 内部使用 <code>setTimeout</code>，并在延迟结束时解决该 <code>Promise</code>，从而实现睡眠功能。</p><p>将这段逻辑封装到 <code>sleep</code> 函数中，传入的 <code>millis</code> 参数会决定延迟的时间。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，函数本身只需要常数时间来设置一个定时器，延迟的时间不算在时间复杂度中。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储定时器和 <code>Promise</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">millis</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token parameter">millis</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> millis<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在 millis 毫秒后调用 resolve</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * let t = Date.now()
 * sleep(100).then(() =&gt; console.log(Date.now() - t)) // 100
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),f=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),x=e("td",{style:{"text-align":"center"}},"2636",-1),y=e("td",{style:{"text-align":"left"}},"Promise 对象池 🔒",-1),w={style:{"text-align":"center"}},P=e("td",{style:{"text-align":"left"}},null,-1),E=e("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/promise-pool",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/promise-pool",target:"_blank",rel:"noopener noreferrer"},N=e("td",{style:{"text-align":"center"}},"2637",-1),V=e("td",{style:{"text-align":"left"}},"有时间限制的 Promise 对象",-1),q={style:{"text-align":"center"}},D=e("td",{style:{"text-align":"left"}},null,-1),O=e("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"};function R(S,G){const c=a("font"),s=a("ExternalLinkIcon"),l=a("RouterLink");return r(),p("div",null,[h,e("p",null,[t("🟢 "),n(c,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1}),t("  🔗 "),e("a",_,[k,n(s)]),t(),e("a",g,[v,n(s)])]),b,d(" prettier-ignore "),e("table",null,[f,e("tbody",null,[e("tr",null,[x,y,e("td",w,[n(l,{to:"/problem/2636.html"},{default:o(()=>[t("[✓]")]),_:1})]),P,E,e("td",I,[e("a",C,[t("🀄️"),n(s)]),t(),e("a",L,[t("🔗"),n(s)])])]),e("tr",null,[N,V,e("td",q,[n(l,{to:"/problem/2637.html"},{default:o(()=>[t("[✓]")]),_:1})]),D,O,e("td",T,[e("a",j,[t("🀄️"),n(s)]),t(),e("a",B,[t("🔗"),n(s)])])])])])])}const z=i(m,[["render",R],["__file","2621.html.vue"]]);export{z as default};
