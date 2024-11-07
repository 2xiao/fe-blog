import{_ as i,r as l,o as u,c as r,a as n,b as t,d as s,w as a,f as d,e as p}from"./app-OX-nYmHS.js";const k={},h=n("h1",{id:"_2630-记忆函数-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2630-记忆函数-ii","aria-hidden":"true"},"#"),t(" 2630. 记忆函数 II")],-1),m={href:"https://leetcode.cn/problems/memoize-ii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/memoize-ii",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),g=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a function <code>fn</code>, return a <strong>memoized</strong> version of that function.</p><p>A **memoized **function is a function that will never be called twice with the same inputs. Instead it will return a cached value.</p><p><code>fn</code> can be any function and there are no constraints on what type of values it accepts. Inputs are considered identical if they are <code>===</code> to each other.</p><p><strong>Example 1:</strong></p>',5),_=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"getInputs = () => [[2,2],[2,2],[1,2]]"),n("p",{return:"",a:"","+":"","b;":""},"fn = function (a, b)"),n("p",null,'Output: [{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]'),n("p",null,"Explanation:"),n("p",null,"const inputs = getInputs();"),n("p",null,"const memoized = memoize(fn);"),n("p",null,"for (const arr of inputs) {"),n("p",null,"memoized(...arr);"),n("p",null,"}"),n("p",null,"For the inputs of (2, 2): 2 + 2 = 4, and it required a call to fn()."),n("p",null,"For the inputs of (2, 2): 2 + 2 = 4, but those inputs were seen before so no call to fn() was required."),n("p",null,"For the inputs of (1, 2): 1 + 2 = 3, and it required another call to fn() for a total of 2.")],-1),y=p('<p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>getInputs = () =&gt; [[{},{}],[{},{}],[{},{}]]</p><p>fn = function (a, b) { return ({...a, ...b}); }</p><p>Output: [{&quot;val&quot;:{},&quot;calls&quot;:1},{&quot;val&quot;:{},&quot;calls&quot;:2},{&quot;val&quot;:{},&quot;calls&quot;:3}]</p><p>Explanation:</p><p>Merging two empty objects will always result in an empty object. It may seem like there should only be 1 call to fn() because of cache-hits, however none of those objects are === to each other.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input:</p><p>getInputs = () =&gt; { const o =</p><p>fn = function (a, b) { return ({...a, ...b}); }</p><p>Output: [{&quot;val&quot;:{},&quot;calls&quot;:1},{&quot;val&quot;:{},&quot;calls&quot;:1},{&quot;val&quot;:{},&quot;calls&quot;:1}]</p><p>Explanation:</p><p>Merging two empty objects will always result in an empty object. The 2nd and 3rd third function calls result in a cache-hit. This is because every object passed in is identical.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= inputs.length &lt;= 10^5</code></li><li><code>0 &lt;= inputs.flat().length &lt;= 10^5</code></li><li><code>inputs[i][j] != NaN</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现给定一个函数 <code>fn</code> ，返回该函数的一个 <strong>记忆化</strong> 版本。</p><p>一个 <strong>记忆化</strong> 的函数是一个函数，它不会被相同的输入调用两次。而是会返回一个缓存的值。</p><p>函数 <code>fn</code> 可以是任何函数，对它所接受的值类型没有任何限制。如果两个输入值在 JavaScript 中使用 <code>===</code> 运算符比较时相等，则它们被视为相同。</p><p><strong>示例 1：</strong></p>',11),q=n("blockquote",null,[n("p",null,[n("strong",null,"输入：")]),n("p",null,"getInputs = () => [[2,2],[2,2],[1,2]]"),n("p",{return:"",a:"","+":"","b;":""},"fn = function (a, b)"),n("p",null,[n("strong",null,"输出："),t('[{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]')]),n("p",null,[n("strong",null,"解释：")]),n("p",null,"const inputs = getInputs();"),n("p",null,"const memoized = memoize(fn);"),n("p",null,"for (const arr of inputs) {"),n("p",null,"memoized(...arr);"),n("p",null,"}"),n("p",null,"对于参数为 (2, 2) 的输入: 2 + 2 = 4，需要调用 fn() 。"),n("p",null,"对于参数为 (2, 2) 的输入: 2 + 2 = 4，这些输入之前已经出现过，因此不需要再次调用 fn()。"),n("p",null,"对于参数为 (1, 2) 的输入: 1 + 2 = 3，需要再次调用 fn()，总共调用了 2 次。")],-1),w=n("p",null,[n("strong",null,"示例 2：")],-1),x=n("blockquote",null,[n("p",null,[n("strong",null,"输入：")]),n("p",null,"getInputs = () => [[{},{}],[{},{}],[{},{}]]"),n("p",{return:"",a:"","+":"","b;":""},"fn = function (a, b)"),n("p",null,[n("strong",null,"输出："),t('[{"val":{},"calls":1},{"val":{},"calls":2},{"val":{},"calls":3}]')]),n("p",null,[n("strong",null,"解释：")]),n("p",null,"将两个空对象合并总是会得到一个空对象。尽管看起来应该缓存命中并只调用一次 fn()，但是这些空对象彼此之间都不是 === 相等的。")],-1),I=p(`<p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong></p><p>getInputs = () =&gt; { const o =</p><p>fn = function (a, b) { return ({...a, ...b}); }</p><p><strong>输出：</strong>[{&quot;val&quot;:{},&quot;calls&quot;:1},{&quot;val&quot;:{},&quot;calls&quot;:1},{&quot;val&quot;:{},&quot;calls&quot;:1}]</p><p><strong>解释：</strong></p><p>将两个空对象合并总是会得到一个空对象。因为传入的每个对象都是相同的，所以第二个和第三个函数调用都会命中缓存。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= inputs.length &lt;= 10^5</code></li><li><code>0 &lt;= inputs.flat().length &lt;= 10^5</code></li><li><code>inputs[i][j] != NaN</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本道题的难点在于，仅当两个输入值使用 <code>===</code> 运算符比较时相等被视为相同，因此不能使用 <code>JSON.stringify</code> 来做缓存的 <code>key</code>，而是要采用一种树形嵌套缓存，以支持对对象引用的严格比较：</p><ul><li>使用 <code>Map</code> 作为缓存数据结构，支持对对象引用的严格比较。</li><li>由于 JavaScript 中的对象和数组引用是通过引用来判断相等的，所以我们可以直接将这些引用作为 <code>Map</code> 的键。</li><li>使用递归地遍历参数，构建一个嵌套的 <code>Map</code>，每个层级的键都是当前参数的引用。</li><li>在每个参数的最终 <code>Map</code> 中存储一个特殊的值（如 <code>Symbol(&#39;__res&#39;)</code>）以表示计算结果。</li><li>在每层中，检查是否存在结果。如果存在，直接返回；如果不存在，调用原函数并缓存结果。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，<code>n</code> 是输入参数的数量，但由于缓存机制，实际调用次数通常会更少。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，取决于参数的种类和数量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">memoize</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token constant">RES</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;__res&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> curCache <span class="token operator">=</span> cache<span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> param <span class="token keyword">of</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>curCache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				curCache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>param<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			curCache <span class="token operator">=</span> curCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>curCache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token constant">RES</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> curCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">RES</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
		curCache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token constant">RES</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) <span class="token punctuation">{</span>
 *	 callCount += 1;
 *   return a + b;
 * <span class="token punctuation">}</span>)
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,12),z=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),C=n("td",{style:{"text-align":"center"}},"2623",-1),E={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/memoize",target:"_blank",rel:"noopener noreferrer"},M={style:{"text-align":"center"}},N=n("td",{style:{"text-align":"left"}},null,-1),S={style:{"text-align":"left"}},F=n("td",{style:{"text-align":"center"}},"2632",-1),O={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/curry",target:"_blank",rel:"noopener noreferrer"},L={style:{"text-align":"center"}},V=n("td",{style:{"text-align":"left"}},null,-1),B={style:{"text-align":"left"}};function J(T,A){const o=l("font"),e=l("ExternalLinkIcon"),c=l("RouterLink");return u(),r("div",null,[h,n("p",null,[t("🔴 "),s(o,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1}),t("  🔗 "),n("a",m,[f,s(e)]),t(),n("a",v,[b,s(e)])]),g,_,y,q,w,x,I,d(" prettier-ignore "),n("table",null,[z,n("tbody",null,[n("tr",null,[C,n("td",E,[n("a",j,[t("记忆函数"),s(e)])]),n("td",M,[s(c,{to:"/problem/2623.html"},{default:a(()=>[t("[✓]")]),_:1})]),N,n("td",S,[s(o,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),n("tr",null,[F,n("td",O,[n("a",R,[t("柯里化 🔒"),s(e)])]),n("td",L,[s(c,{to:"/problem/2632.html"},{default:a(()=>[t("[✓]")]),_:1})]),V,n("td",B,[s(o,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])])])])])}const H=i(k,[["render",J],["__file","2630.html.vue"]]);export{H as default};
