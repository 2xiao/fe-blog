import{_ as c,r as t,o as l,c as i,a as n,b as e,d as a,w as p,e as d}from"./app-9CeBk-uV.js";const r={},u=n("h1",{id:"_2666-只允许一次函数调用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2666-只允许一次函数调用","aria-hidden":"true"},"#"),e(" 2666. 只允许一次函数调用")],-1),k={href:"https://leetcode.cn/problems/allow-one-function-call",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/allow-one-function-call",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a function <code>fn</code>, return a new function that is identical to the original function except that it ensures <code>fn</code> is called at most once.</p><ul><li>The first time the returned function is called, it should return the same result as <code>fn</code>.</li><li>Every subsequent time it is called, it should return <code>undefined</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: fn = (a,b,c) =&gt; (a + b + c), calls = [[1,2,3],[2,3,6]]</p><p>Output: [{&quot;calls&quot;:1,&quot;value&quot;:6}]</p><p>Explanation:</p><p>const onceFn = once(fn);</p><p>onceFn(1, 2, 3); // 6</p><p>onceFn(2, 3, 6); // undefined, fn was not called</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: fn = (a,b,c) =&gt; (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]</p><p>Output: [{&quot;calls&quot;:1,&quot;value&quot;:140}]</p><p>Explanation:</p><p>const onceFn = once(fn);</p><p>onceFn(5, 7, 4); // 140</p><p>onceFn(2, 3, 6); // undefined, fn was not called</p><p>onceFn(4, 6, 8); // undefined, fn was not called</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>calls</code> is a valid JSON array</li><li><code>1 &lt;= calls.length &lt;= 10</code></li><li><code>1 &lt;= calls[i].length &lt;= 100</code></li><li><code>2 &lt;= JSON.stringify(calls).length &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个函数 <code>fn</code> ，它返回一个新的函数，返回的函数与原始函数完全相同，只不过它确保 <code>fn</code> 最多被调用一次。</p><ul><li>第一次调用返回的函数时，它应该返回与 <code>fn</code> 相同的结果。</li><li>第一次后的每次调用，它应该返回 <code>undefined</code> 。</li></ul><p><strong>提示：</strong></p><ul><li><code>calls</code> 是一个有效的 JSON 数组</li><li><code>1 &lt;= calls.length &lt;= 10</code></li><li><code>1 &lt;= calls[i].length &lt;= 100</code></li><li><code>2 &lt;= JSON.stringify(calls).length &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题的核心在于“函数只能被调用一次”的机制，这个设计模式非常适合一些需要控制函数调用次数的场景，比如防止多次执行某个动作。</p><p>可以利用闭包来实现，闭包使得我们能够在返回的函数中保持对原始函数调用状态的追踪，从而控制它只能被调用一次。</p><ol><li>使用一个标志<code>called</code> 来跟踪该函数是否已经被调用过，初始为 <code>false</code>。</li><li>返回的匿名函数，每次调用时会检查 <code>called</code> 是否为 <code>true</code>。如果为 <code>false</code>，则调用 <code>fn</code>，否则返回 <code>undefined</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，每次调用时只检查标志变量并做出相应操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只存储一个布尔变量来跟踪调用状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">once</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> called <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 用于跟踪函数是否已被调用</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>called<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			called <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 第一次调用时，标记为已调用</span>
			<span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用传入的函数，并传递参数</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// 如果已被调用，返回 undefined</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * let fn = (a,b,c) =&gt; (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function b(_,g){const o=t("font"),s=t("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[e("🟢 "),a(o,{color:"#15bd66"},{default:p(()=>[e("Easy")]),_:1}),e("  🔗 "),n("a",k,[f,a(s)]),e(),n("a",h,[m,a(s)])]),v])}const x=c(r,[["render",b],["__file","2666.html.vue"]]);export{x as default};
