import{_ as o,r as c,o as l,c as i,a as n,b as e,d as a,w as p,e as d}from"./app-fqckLmln.js";const r={},u=n("h1",{id:"_2715-执行可取消的延迟函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2715-执行可取消的延迟函数","aria-hidden":"true"},"#"),e(" 2715. 执行可取消的延迟函数")],-1),m={href:"https://leetcode.cn/problems/timeout-cancellation",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/timeout-cancellation",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),h=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a function <code>fn</code>, an array of arguments <code>args</code>, and a timeout <code>t</code> in milliseconds, return a cancel function <code>cancelFn</code>.</p><p>After a delay of <code>cancelTimeMs</code>, the returned cancel function <code>cancelFn</code> will be invoked.</p><blockquote><p>setTimeout(cancelFn, cancelTimeMs)</p></blockquote><p>Initially, the execution of the function <code>fn</code> should be delayed by <code>t</code> milliseconds.</p><p>If, before the delay of <code>t</code> milliseconds, the function <code>cancelFn</code> is invoked, it should cancel the delayed execution of <code>fn</code>. Otherwise, if <code>cancelFn</code> is not invoked within the specified delay <code>t</code>, <code>fn</code> should be executed with the provided <code>args</code> as arguments.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: fn = (x) =&gt; x * 5, args = [2], t = 20</p><p>Output: [{&quot;time&quot;: 20, &quot;returned&quot;: 10}]</p><p>Explanation:</p><p>const cancelTimeMs = 50;</p><p>const cancelFn = cancellable((x) =&gt; x * 5, [2], 20);</p><p>setTimeout(cancelFn, cancelTimeMs);</p><p>The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: fn = (x) =&gt; x**2, args = [2], t = 100</p><p>Output: []</p><p>Explanation:</p><p>const cancelTimeMs = 50;</p><p>const cancelFn = cancellable((x) =&gt; x**2, [2], 100);</p><p>setTimeout(cancelFn, cancelTimeMs);</p><p>The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: fn = (x1, x2) =&gt; x1 * x2, args = [2,4], t = 30</p><p>Output: [{&quot;time&quot;: 30, &quot;returned&quot;: 8}]</p><p>Explanation: const cancelTimeMs = 100;</p><p>const cancelFn = cancellable((x1, x2) =&gt; x1 * x2, [2,4], 30);</p><p>setTimeout(cancelFn, cancelTimeMs);</p><p>The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>fn</code> is a function</li><li><code>args</code> is a valid JSON array</li><li><code>1 &lt;= args.length &lt;= 10</code></li><li><code>20 &lt;= t &lt;= 1000</code></li><li><code>10 &lt;= cancelTimeMs &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个函数 <code>fn</code> ，一个参数数组 <code>args</code> 和一个以毫秒为单位的超时时间 <code>t</code> ，返回一个取消函数 <code>cancelFn</code> 。</p><p>在 <code>cancelTimeMs</code> 的延迟后，返回的取消函数 <code>cancelFn</code> 将被调用。</p><blockquote><p>setTimeout(cancelFn, cancelTimeMs)</p></blockquote><p>最初，函数 <code>fn</code> 的执行应该延迟 <code>t</code> 毫秒。</p><p>如果在 <code>t</code> 毫秒的延迟之前调用了函数 <code>cancelFn</code>，它应该取消 <code>fn</code> 的延迟执行。否则，如果在指定的延迟 <code>t</code> 内没有调用 <code>cancelFn</code>，则应执行 <code>fn</code>，并使用提供的 <code>args</code> 作为参数。</p><p><strong>提示：</strong></p><ul><li><code>fn</code> 是一个函数</li><li><code>args</code> 是一个有效的 JSON 数组</li><li><code>1 &lt;= args.length &lt;= 10</code></li><li><code>20 &lt;= t &lt;= 1000</code></li><li><code>10 &lt;= cancelTimeMs &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>创建定时器</strong>：使用 <code>setTimeout</code> 来执行 <code>fn</code>，并设置延迟 <code>t</code> 毫秒后执行。</p></li><li><p><strong>实现取消功能</strong>：<code>setTimeout</code> 会返回一个 <code>timer</code> 句柄，可以通过 <code>clearTimeout(timer)</code> 来取消该定时器。返回一个取消函数 <code>cancelFn</code>，该函数被调用时会清除定时器，阻止 <code>fn</code> 的执行。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，<code>setTimeout</code> 和 <code>clearTimeout</code> 的调用都是常数时间操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，存储一个定时器句柄 <code>timer</code> 以及取消函数占用常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">args</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cancellable</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> args<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 延迟 t 毫秒后执行 fn</span>
	<span class="token keyword">const</span> <span class="token function-variable function">cancelFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回取消函数</span>
	<span class="token keyword">return</span> cancelFn<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 *  const result = [];
 *
 *  const fn = (x) =&gt; x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) =&gt; <span class="token punctuation">{</span>
 *      const diff = Math.floor(performance.now() - start);
 *      result.push(<span class="token punctuation">{</span>&quot;time&quot;: diff, &quot;returned&quot;: fn(...argsArr)<span class="token punctuation">}</span>);
 *  <span class="token punctuation">}</span>
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() =&gt; <span class="token punctuation">{</span>
 *      console.log(result); // [<span class="token punctuation">{</span>&quot;time&quot;:20,&quot;returned&quot;:10<span class="token punctuation">}</span>]
 *  <span class="token punctuation">}</span>, maxT + 15)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function b(g,x){const t=c("font"),s=c("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[e("🟢 "),a(t,{color:"#15bd66"},{default:p(()=>[e("Easy")]),_:1}),e("  🔗 "),n("a",m,[k,a(s)]),e(),n("a",v,[f,a(s)])]),h])}const _=o(r,[["render",b],["__file","2715.html.vue"]]);export{_ as default};
