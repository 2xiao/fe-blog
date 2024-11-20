import{_ as i,r as t,o as c,c as l,a as n,b as s,d as e,w as r,e as p}from"./app-BBnmDgJV.js";const d={},u=n("h1",{id:"_2821-延迟每个-promise-对象的解析-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2821-延迟每个-promise-对象的解析-🔒","aria-hidden":"true"},"#"),s(" 2821. 延迟每个 Promise 对象的解析 🔒")],-1),m={href:"https://leetcode.cn/problems/delay-the-resolution-of-each-promise",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/delay-the-resolution-of-each-promise",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),h=p(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>functions</code> and a number <code>ms</code>, return a new array of functions.</p><ul><li><code>functions</code> is an array of functions that return promises.</li><li><code>ms</code> represents the delay duration in milliseconds. It determines the amount of time to wait before resolving or rejecting each promise in the new array.</li></ul><p>Each function in the new array should return a promise that resolves or rejects after an additional delay of <code>ms</code> milliseconds, preserving the order of the original <code>functions</code> array.</p><p>The <code>delayAll</code> function should ensure that each promise from <code>functions</code> is executed with a delay, forming the new array of functions returning delayed promises.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>functions = [
   () =&gt; new Promise((resolve) =&gt; setTimeout(resolve, 30))
],

ms = 50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output: [80]</p><p>Explanation: The promise from the array would have resolved after 30 ms, but it was delayed by 50 ms, thus 30 ms + 50 ms = 80 ms.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>functions = [
() =&gt; new Promise((resolve) =&gt; setTimeout(resolve, 50)),
() =&gt; new Promise((resolve) =&gt; setTimeout(resolve, 80))
],

ms = 70
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output: [120,150]</p><p>Explanation: The promises from the array would have resolved after 50 ms and 80 ms, but they were delayed by 70 ms, thus 50 ms + 70 ms = 120 ms and 80 ms + 70 ms = 150 ms.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>functions = [
() =&gt; new Promise((resolve, reject) =&gt; setTimeout(reject, 20)),
() =&gt; new Promise((resolve, reject) =&gt; setTimeout(reject, 100))
],

ms = 30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:[50,130]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>functions</code> is an array of functions that return promises</li><li><code>10 &lt;= ms &lt;= 500</code></li><li><code>1 &lt;= functions.length &lt;= 10</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个函数数组 <code>functions</code> 和一个数字 <code>ms</code>，返回一个新的函数数组。</p><ul><li><code>functions</code> 是一个返回 Promise 对象的函数数组。</li><li><code>ms</code> 表示延迟的时间，以毫秒为单位。它决定了在新数组中的每个函数返回的 Promise 在解析之前等待的时间。</li></ul><p>新数组中的每个函数应该返回一个 Promise 对象，在延迟了 <code>ms</code> 毫秒后解析，保持原始 <code>functions</code> 数组中的顺序。<code>delayAll</code> 函数应确保从 <code>functions</code> 中的每个 Promise 都被延迟执行，形成返回延迟的 Promise 的函数的新数组。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>functions = [
   () =&gt; new Promise((resolve) =&gt; setTimeout(resolve, 30))
],

ms = 50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong>[80]</p><p><strong>解释：</strong> 数组中的 Promise 在 30 毫秒后解析，但被延迟了 50 毫秒，所以总共延迟了 30 毫秒 + 50 毫秒 = 80 毫秒。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>functions = [
() =&gt; new Promise((resolve) =&gt; setTimeout(resolve, 50)),
() =&gt; new Promise((resolve) =&gt; setTimeout(resolve, 80))
],

ms = 70
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong>[120,150]</p><p><strong>解释：</strong> 数组中的 Promise 在 50 毫秒和 80 毫秒后解析，但它们被延迟了 70 毫秒，所以总共延迟了 50 毫秒 + 70 毫秒 = 120 毫秒 和 80 毫秒 + 70 毫秒 = 150 毫秒。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>functions</code> 是一个返回 Promise 对象的函数数组</li><li><code>10 &lt;= ms &lt;= 500</code></li><li><code>1 &lt;= functions.length &lt;= 10</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义延迟函数</strong>：首先定义一个 <code>delay</code> 函数。该函数接受一个 Promise <code>promise</code> 和延迟时间 <code>ms</code>。<code>delay</code> 函数返回一个新的 Promise，在延迟 <code>ms</code> 毫秒后才解析传入的 <code>promise</code> 的结果。</p></li><li><p><strong>转换函数数组</strong>：使用 <code>map</code> 方法遍历 <code>functions</code> 数组，为数组中的每个函数 <code>fn</code> 创建一个新的函数。这个新函数调用 <code>delay(fn(), ms)</code>，即执行原始 <code>fn</code>，并将其 Promise 结果延迟 <code>ms</code> 毫秒后再解析。</p></li><li><p><strong>返回新数组</strong>：经过 <code>map</code> 操作，返回一个新的函数数组，数组中的每个函数都经过延迟处理。每次调用时，返回的 Promise 会在指定的延迟后解析。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>functions</code> 数组的长度。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，因为返回了一个新的函数数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">&lt;</span>Function<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span> <span class="token parameter">functions</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">ms</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">&lt;</span>Function<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">delayAll</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">functions<span class="token punctuation">,</span> ms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">delay</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> ms</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
		<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span><span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> functions<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ms<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function b(f,x){const o=t("font"),a=t("ExternalLinkIcon");return c(),l("div",null,[u,n("p",null,[s("🟠 "),e(o,{color:"#ffb800"},{default:r(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",m,[v,e(a)]),s(),n("a",k,[g,e(a)])]),h])}const _=i(d,[["render",b],["__file","2821.html.vue"]]);export{_ as default};
