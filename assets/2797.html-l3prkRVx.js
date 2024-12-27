import{_ as p,r as e,o as c,c as r,a as n,b as s,d as a,w as l,e as i}from"./app-fqckLmln.js";const u={},d=n("h1",{id:"_2797-带有占位符的部分函数-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2797-带有占位符的部分函数-🔒","aria-hidden":"true"},"#"),s(" 2797. 带有占位符的部分函数 🔒")],-1),k={href:"https://leetcode.cn/problems/partial-function-with-placeholders",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/partial-function-with-placeholders",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),h=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a function <code>fn</code> and an array <code>args</code>, return a function <code>partialFn</code>.</p><p>Placeholders <code>&quot;_&quot;</code> in the <code>args</code> should be replaced with values from <code>restArgs</code> starting from index <code>0</code>. Any remaining values in the <code>restArgs</code> should be added at the end of the <code>args</code>.</p><p><code>partialFn</code> should return a result of <code>fn</code>. <code>fn</code> should be called with the elements of the modified <code>args</code> passed as separate arguments.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: fn = (...args) =&gt; args, args = [2,4,6], restArgs = [8,10]</p><p>Output: [2,4,6,8,10]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> partialFn <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">partialFn</span><span class="token punctuation">(</span><span class="token operator">...</span>restArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [2,4,6,8,10]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are no placeholders &quot;_&quot; in args therefore restArgs is just added at the end of args. Then the elements of the args are passed as separate arguments to fn, which returns passed arguments as an array.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: fn = (...args) =&gt; args, args = [1,2,&quot;<em>&quot;,4,&quot;</em>&quot;,6], restArgs = [3,5]</p><p>Output: [1,2,3,4,5,6]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> partialFn <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">partialFn</span><span class="token punctuation">(</span><span class="token operator">...</span>restArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1,2,3,4,5,6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Placeholders &quot;_&quot; are replaced with values from the restArgs. Then the elements of the args are passed as separate arguments to fn, which returns passed arguments as an array.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: fn = (a, b, c) =&gt; b + a - c, args = [&quot;_&quot;, 5], restArgs = [5, 20]</p><p>Output: -10</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> partialFn <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">partialFn</span><span class="token punctuation">(</span><span class="token operator">...</span>restArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Placeholder &quot;_&quot; is replaced with 5 and 20 is added at the end of args. Then the elements of the args are passed as separate arguments to fn, which returns -10 (5 + 5 - 20).</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>fn</code> is a function</li><li><code>args</code> and <code>restArgs</code> are valid JSON arrays</li><li><code>1 &lt;= args.length &lt;= 5 * 10^4</code></li><li><code>1 &lt;= restArgs.length &lt;= 5 * 10^4</code></li><li><code>0 &lt;= number of placeholders &lt;= restArgs.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定函数 <code>fn</code> 和数组 <code>args</code>，返回一个函数 <code>partialFn</code>。</p><p><code>args</code> 中的占位符 <code>&quot;_&quot;</code> 需要用 <code>restArgs</code> 中索引从 <code>0</code> 开始的值替换。 <code>restArgs</code> 中剩余的值则添加到 <code>args</code> 的末尾。</p><p><code>partialFn</code> 应该返回 <code>fn</code> 的结果。<code>fn</code> 应该使用修改后的 <code>args</code> 的元素作为单独的参数调用。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> fn = (...args) =&gt; args, args = [2,4,6], restArgs = [8,10]</p><p><strong>输出：</strong>[2,4,6,8,10]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> partialFn <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">partialFn</span><span class="token punctuation">(</span><span class="token operator">...</span>restArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [2,4,6,8,10]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>args 中没有占位符 &quot;_&quot;，因此 restArgs 只是添加到 args 的末尾。然后将 args 的元素作为单独的参数传递给 fn，fn 返回传递的参数作为数组。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> fn = (...args) =&gt; args, args = [1,2,&quot;<em>&quot;,4,&quot;</em>&quot;,6], restArgs = [3,5]</p><p><strong>输出：</strong>[1,2,3,4,5,6]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> partialFn <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">partialFn</span><span class="token punctuation">(</span><span class="token operator">...</span>restArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1,2,3,4,5,6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>占位符 &quot;_&quot; 被 restArgs 中的值替换。然后将 args 的元素作为单独的参数传递给 fn，fn 返回传递的参数作为数组。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> fn = (a, b, c) =&gt; b + a - c, args = [&quot;_&quot;, 5], restArgs = [5, 20]</p><p><strong>输出：</strong> -10</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> partialFn <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">partialFn</span><span class="token punctuation">(</span><span class="token operator">...</span>restArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>占位符 &quot;_&quot; 被替换为 5，并将 20 添加到 args 的末尾。然后将 args 的元素作为单独的参数传递给 fn，fn 返回 -10（5 + 5 - 20）。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>fn</code> 是一个函数</li><li><code>args</code> 和 <code>restArgs</code> 都是有效的 JSON 数组</li><li><code>1 &lt;= args.length &lt;= 5 * 10^4</code></li><li><code>1 &lt;= restArgs.length &lt;= 5 * 10^4</code></li><li><code>0 &lt;= number of placeholders &lt;= restArgs.length</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了实现这个 <code>partialFn</code>，可以按照以下步骤处理 <code>args</code> 数组中的占位符 <code>&quot;_&quot;</code>，然后将 <code>restArgs</code> 中的元素替换这些占位符并拼接在一起：</p><ol><li>定义 <code>partialFn</code> 函数，该函数接受 <code>restArgs</code> 参数。</li><li>遍历 <code>args</code> 数组，如果遇到 <code>&quot;_&quot;</code>，将其替换为 <code>restArgs</code> 中相应的值，并在 <code>restArgs</code> 中移除该值。</li><li>将剩余的 <code>restArgs</code> 添加到 <code>args</code> 的末尾，以完成参数列表。</li><li>使用展开运算符将修改后的 <code>args</code> 作为参数调用 <code>fn</code>。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">args</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">partial</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>restArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> filledArgs <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>arg <span class="token operator">===</span> <span class="token string">&#39;_&#39;</span> <span class="token operator">?</span> restArgs<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> arg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>filledArgs<span class="token punctuation">,</span> <span class="token operator">...</span>restArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function f(b,_){const o=e("font"),t=e("ExternalLinkIcon");return c(),r("div",null,[d,n("p",null,[s("🟢 "),a(o,{color:"#15bd66"},{default:l(()=>[s("Easy")]),_:1}),s("  🔗 "),n("a",k,[g,a(t)]),s(),n("a",m,[v,a(t)])]),h])}const A=p(u,[["render",f],["__file","2797.html.vue"]]);export{A as default};
