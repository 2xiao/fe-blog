import{_ as l,r as t,o as p,c as i,a as n,b as s,d as e,w as r,e as o}from"./app-Kkp_66uf.js";const u={},d=n("h1",{id:"_2721-并行执行异步函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2721-并行执行异步函数","aria-hidden":"true"},"#"),s(" 2721. 并行执行异步函数")],-1),m={href:"https://leetcode.cn/problems/execute-asynchronous-functions-in-parallel",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/execute-asynchronous-functions-in-parallel",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=o('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of asynchronous functions <code>functions</code>, return a new promise <code>promise</code>. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.</p><p><code>promise</code> resolves:</p><ul><li>When all the promises returned from <code>functions</code> were resolved successfully in parallel. The resolved value of <code>promise</code> should be an array of all the resolved values of promises in the same order as they were in the <code>functions</code>. The <code>promise</code> should resolve when all the asynchronous functions in the array have completed execution in parallel.</li></ul><p><code>promise</code> rejects:</p><ul><li>When any of the promises returned from <code>functions</code> were rejected. <code>promise</code> should also reject with the reason of the first rejection.</li></ul><p>Please solve it without using the built-in <code>Promise.all</code> function.</p><p><strong>Example 1:</strong></p>',8),b=n("blockquote",null,[n("p",null,"Input: functions = ["),n("p",null,"() => new Promise(resolve => setTimeout(() => resolve(5), 200))"),n("p",null,"]"),n("p",{"t:200,resolved:[5]":""},"Output:"),n("p",null,"Explanation:"),n("p",null,"promiseAll(functions).then(console.log); // [5]"),n("p",null,"The single function was resolved at 200ms with a value of 5.")],-1),_=n("p",null,[n("strong",null,"Example 2:")],-1),g=n("blockquote",null,[n("p",null,"Input: functions = ["),n("blockquote",null,[n("p",null,"() => new Promise(resolve => setTimeout(() => resolve(1), 200)),")]),n("blockquote",null,[n("p",null,'() => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))')]),n("p",null,"]"),n("p",{"t:100,rejected:Error":""},"Output:"),n("p",null,"Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.")],-1),w=n("p",null,[n("strong",null,"Example 3:")],-1),x=n("blockquote",null,[n("p",null,"Input: functions = ["),n("blockquote",null,[n("p",null,"() => new Promise(resolve => setTimeout(() => resolve(4), 50)),")]),n("blockquote",null,[n("p",null,"() => new Promise(resolve => setTimeout(() => resolve(10), 150)),")]),n("blockquote",null,[n("p",null,"() => new Promise(resolve => setTimeout(() => resolve(16), 100))")]),n("p",null,"]"),n("p",{"t:150,resolved:[4,10,16]":""},"Output:"),n("p",null,"Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.")],-1),P=o(`<p><strong>Constraints:</strong></p><ul><li><code>functions</code> is an array of functions that returns promises</li><li><code>1 &lt;= functions.length &lt;= 10</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个异步函数数组 <code>functions</code>，返回一个新的 promise 对象 <code>promise</code>。数组中的每个函数都不接受参数并返回一个 promise。所有的 promise 都应该并行执行。</p><p><code>promise</code> resolve 条件：</p><ul><li>当所有从 <code>functions</code> 返回的 promise 都成功的并行解析时。<code>promise</code> 的解析值应该是一个按照它们在 <code>functions</code> 中的顺序排列的 promise 的解析值数组。<code>promise</code> 应该在数组中的所有异步函数并行执行完成时解析。</li></ul><p><code>promise</code> reject 条件：</p><ul><li>当任何从 <code>functions</code> 返回的 promise 被拒绝时。<code>promise</code> 也会被拒绝，并返回第一个拒绝的原因。</li></ul><p>请在不使用内置的 <code>Promise.all</code> 函数的情况下解决。</p><p><strong>提示：</strong></p><ul><li>函数 <code>functions</code> 是一个返回 promise 的函数数组</li><li><code>1 &lt;= functions.length &lt;= 10</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了并行执行数组中的异步函数并返回一个 <code>Promise</code>，需要手动实现 <code>Promise.all</code> 的功能。<code>Promise.all</code> 的行为是当数组中的所有 <code>Promise</code> 都成功时，返回所有的结果；如果有任何 <code>Promise</code> 失败，则立即拒绝。</p><ol><li><p><strong>创建一个新的 <code>Promise</code></strong>：该 Promise 将在所有异步函数都成功时解析，或在其中任何一个被拒绝时拒绝。</p></li><li><p><strong>创建一个结果数组</strong>，用于保存每个函数的结果，以确保最终的结果顺序与输入顺序一致。</p></li><li><p><strong>手动维护一个计数器</strong>，用于跟踪已完成的 Promise 数量。</p></li><li><p><strong>遍历 <code>functions</code> 数组</strong>：对于每个函数，手动执行它并对其返回的 Promise 进行处理。</p><ul><li>若成功，将函数的成功结果存储在 <code>results</code> 数组中，计数器 <code>count</code> 递增，当所有函数都成功执行时，解析 <code>results</code> 数组。</li><li>若任何一个函数返回的 Promise 被拒绝，则立即拒绝整个 <code>Promise</code>，并且抛出第一个错误原因。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>functions</code> 的数量，需要遍历所有函数并触发它们的执行。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储函数的结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">&lt;</span>Function<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span> <span class="token parameter">functions</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">&lt;</span>any<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">promiseAll</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">functions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		functions<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">;</span>
					count<span class="token operator">++</span><span class="token punctuation">;</span>

					<span class="token comment">// 当所有函数都成功解析时，解析整个结果</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> functions<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 一旦有任何函数被拒绝，立即拒绝整个 promise</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const promise = promiseAll([() =&gt; new Promise(res =&gt; res(42))])
 * promise.then(console.log); // [42]
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function y(j,E){const c=t("font"),a=t("ExternalLinkIcon");return p(),i("div",null,[d,n("p",null,[s("🟠 "),e(c,{color:"#ffb800"},{default:r(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",m,[k,e(a)]),s(),n("a",h,[v,e(a)])]),f,b,_,g,w,x,P])}const q=l(u,[["render",y],["__file","2721.html.vue"]]);export{q as default};
