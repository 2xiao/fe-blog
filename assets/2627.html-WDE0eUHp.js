import{_ as i,r as o,o as d,c as p,a as e,d as n,b as t,w as a,f as r,e as c}from"./app-ynO5B_DP.js";const u={},h={id:"_2627-函数防抖",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_2627-函数防抖","aria-hidden":"true"},"#",-1),_={href:"https://leetcode.com/problems/debounce",target:"_blank",rel:"noopener noreferrer"},f={href:"https://leetcode.com/problems/debounce",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),g=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a function <code>fn</code> and a time in milliseconds <code>t</code>, return a <strong>debounced</strong> version of that function.</p><p>A <strong>debounced</strong> function is a function whose execution is delayed by <code>t</code> milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters.</p><p>For example, let&#39;s say <code>t = 50ms</code>, and the function was called at <code>30ms</code>, <code>60ms</code>, and <code>100ms</code>.</p><p>The first 2 function calls would be cancelled, and the 3rd function call would be executed at <code>150ms</code>.</p><p>If instead <code>t = 35ms</code>, The 1st call would be cancelled, the 2nd would be executed at <code>95ms</code>, and the 3rd would be executed at <code>135ms</code>.</p><p>![Debounce Schematic](https://assets.leetcode.com/uploads/2023/04/08/screen- shot-2023-04-08-at-11048-pm.png)</p><p>The above diagram shows how debounce will transform events. Each rectangle represents 100ms and the debounce time is 400ms. Each color represents a different set of inputs.</p><p>Please solve it without using lodash&#39;s <code>_.debounce()</code> function.</p><p><strong>Example 1:</strong></p>',10),k=e("blockquote",null,[e("p",null,"Input:"),e("p",null,"t = 50"),e("p",null,"calls = ["),e("p",null,'{"t": 50, inputs: [1]},'),e("p",{"t:75,inputs:[2]":""}),e("p",null,"]"),e("p",null,'Output: [{"t": 125, inputs: [2]}]'),e("p",null,"Explanation:"),e("p",null,"let start = Date.now();"),e("p",null,"function log(...inputs) {"),e("p",null,"console.log([Date.now() - start, inputs ])"),e("p",null,"}"),e("p",null,"const dlog = debounce(log, 50);"),e("p",null,"setTimeout(() => dlog(1), 50);"),e("p",null,"setTimeout(() => dlog(2), 75);"),e("p",null,"The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms"),e("p",null,"The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).")],-1),v=e("p",null,[e("strong",null,"Example 2:")],-1),x=e("blockquote",null,[e("p",null,"Input:"),e("p",null,"t = 20"),e("p",null,"calls = ["),e("p",null,'{"t": 50, inputs: [1]},'),e("p",{"t:100,inputs:[2]":""}),e("p",null,"]"),e("p",null,'Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]'),e("p",null,"Explanation:"),e("p",null,"The 1st call is delayed until 70ms. The inputs were (1)."),e("p",null,"The 2nd call is delayed until 120ms. The inputs were (2).")],-1),y=e("p",null,[e("strong",null,"Example 3:")],-1),w=e("blockquote",null,[e("p",null,"Input:"),e("p",null,"t = 150"),e("p",null,"calls = ["),e("p",null,'{"t": 50, inputs: [1, 2]},'),e("p",null,'{"t": 300, inputs: [3, 4]},'),e("p",{"t:300,inputs:[5,6]":""}),e("p",null,"]"),e("p",null,'Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]'),e("p",null,"Explanation:"),e("p",null,"The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2)."),e("p",null,"The 2nd call is cancelled by the 3rd call"),e("p",null,"The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).")],-1),T=c(`<p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= t &lt;= 1000</code></li><li><code>1 &lt;= calls.length &lt;= 10</code></li><li><code>0 &lt;= calls[i].t &lt;= 1000</code></li><li><code>0 &lt;= calls[i].inputs.length &lt;= 10</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个函数，接收参数为另一个函数和一个以毫秒为单位的时间 <code>t</code> ，并返回该函数的 <strong>函数防抖</strong> 后的结果。</p><p><strong>函数防抖</strong> 方法是一个函数，它的执行被延迟了 <code>t</code> 毫秒，如果在这个时间窗口内再次调用它，它的执行将被取消。你编写的防抖函数也应该接收传递的参数。</p><p>例如，假设 <code>t = 50ms</code> ，函数分别在 <code>30ms</code> 、 <code>60ms</code> 和 <code>100ms</code> 时调用。前两个函数调用将被取消，第三个函数调用将在 <code>150ms</code> 执行。如果改为 <code>t = 35ms</code> ，则第一个调用将被取消，第二个调用将在 <code>95ms</code> 执行，第三个调用将在 <code>135ms</code> 执行。</p><p>![Debounce Schematic](https://assets.leetcode.com/uploads/2023/04/08/screen- shot-2023-04-08-at-11048-pm.png)</p><p>上图展示了防抖函数是如何转换事件的。其中，每个矩形表示 100ms，反弹时间为 400ms。每种颜色代表一组不同的输入。</p><p>请在不使用 lodash 的 <code>_.debounce()</code> 函数的前提下解决该问题。</p><p><strong>提示：</strong></p><ul><li><code>0 &lt;= t &lt;= 1000</code></li><li><code>1 &lt;= calls.length &lt;= 10</code></li><li><code>0 &lt;= calls[i].t &lt;= 1000</code></li><li><code>0 &lt;= calls[i].inputs.length &lt;= 10</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>防抖</strong> 的作用是将短时间内触发的多次调用，延迟到指定时间后执行。如果在等待时间内函数被再次调用，则重新计时，只有在没有新调用的情况下，等到计时器到达 <code>t</code> 毫秒后，才会真正执行 <code>fn</code>。这在处理高频触发事件（如窗口调整大小、用户输入等）时非常有用，可以避免大量不必要的操作。</p><ol><li>定义一个变量 <code>timer</code> 来存储当前的计时器 ID。</li><li>返回一个新的函数，当函数被调用时，清除之前的计时器并重新启动一个新的定时器。</li><li>如果计时器触发，则调用原始函数 <code>fn</code>，并传入其参数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，因为清除和设置定时器都是常数时间操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需要一个变量 <code>timer</code> 来存储计时器 ID。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">t</span> milliseconds
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> timer<span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 每次调用时，清除之前的计时器</span>
		<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 启动新的定时器</span>
		timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const log = debounce(console.log, 100);
 * log(&#39;Hello&#39;); // cancelled
 * log(&#39;Hello&#39;); // cancelled
 * log(&#39;Hello&#39;); // Logged at t=100ms
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),E=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度")])],-1),I=e("td",{style:{"text-align":"center"}},"2622",-1),D={style:{"text-align":"left"}},C={href:"https://leetcode.com/problems/cache-with-time-limit",target:"_blank",rel:"noopener noreferrer"},N={style:{"text-align":"center"}},O={href:"/problem/2622",target:"_blank",rel:"noopener noreferrer"},V=e("td",{style:{"text-align":"left"}},null,-1),L={style:{"text-align":"left"}},M=e("td",{style:{"text-align":"center"}},"2637",-1),j={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"},B={style:{"text-align":"center"}},F={href:"/problem/2637",target:"_blank",rel:"noopener noreferrer"},H=e("td",{style:{"text-align":"left"}},null,-1),S={style:{"text-align":"left"}},P=e("td",{style:{"text-align":"center"}},"2676",-1),A={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/throttle",target:"_blank",rel:"noopener noreferrer"},z={style:{"text-align":"center"}},J={href:"/problem/2676",target:"_blank",rel:"noopener noreferrer"},K=e("td",{style:{"text-align":"left"}},null,-1),Q={style:{"text-align":"left"}};function R(U,W){const s=o("ExternalLinkIcon"),l=o("font");return d(),p("div",null,[e("h1",h,[m,n(),e("a",_,[n("2627. 函数防抖"),t(s)])]),e("p",null,[n("🟠 "),t(l,{color:"#ffb800"},{default:a(()=>[n("Medium")]),_:1}),n("  🔗 "),e("a",f,[b,t(s)])]),g,k,v,x,y,w,T,r(" prettier-ignore "),e("table",null,[E,e("tbody",null,[e("tr",null,[I,e("td",D,[e("a",C,[n("有时间限制的缓存"),t(s)])]),e("td",N,[e("a",O,[n("[✓]"),t(s)])]),V,e("td",L,[t(l,{color:"#ffb800"},{default:a(()=>[n("Medium")]),_:1})])]),e("tr",null,[M,e("td",j,[e("a",q,[n("有时间限制的 Promise 对象"),t(s)])]),e("td",B,[e("a",F,[n("[✓]"),t(s)])]),H,e("td",S,[t(l,{color:"#ffb800"},{default:a(()=>[n("Medium")]),_:1})])]),e("tr",null,[P,e("td",A,[e("a",G,[n("节流"),t(s)])]),e("td",z,[e("a",J,[n("[✓]"),t(s)])]),K,e("td",Q,[t(l,{color:"#ffb800"},{default:a(()=>[n("Medium")]),_:1})])])])])])}const Y=i(u,[["render",R],["__file","2627.html.vue"]]);export{Y as default};
