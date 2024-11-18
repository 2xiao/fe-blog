import{_ as c,r as e,o as l,c as i,a as n,b as s,d as a,w as u,e as t}from"./app-9Xw5divW.js";const r={},d=n("h1",{id:"_2693-使用自定义上下文调用函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2693-使用自定义上下文调用函数","aria-hidden":"true"},"#"),s(" 2693. 使用自定义上下文调用函数")],-1),k={href:"https://leetcode.cn/problems/call-function-with-custom-context",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/call-function-with-custom-context",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),f=t('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Enhance all functions to have the <code>callPolyfill</code> method. The method accepts an object <code>obj</code> as it&#39;s first parameter and any number of additional arguments. The <code>obj</code> becomes the <code>this</code> context for the function. The additional arguments are passed to the function (that the <code>callPolyfill</code> method belongs on).</p><p>For example if you had the function:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">tax</span><span class="token punctuation">(</span><span class="token parameter">price<span class="token punctuation">,</span> taxRate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token keyword">const</span> totalCost <span class="token operator">=</span> price <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> taxRate<span class="token punctuation">)</span><span class="token punctuation">;</span>\n	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The cost of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>totalCost<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Calling this function like <code>tax(10, 0.1)</code> will log <code>&quot;The cost of undefined is 11&quot;</code>. This is because the <code>this</code> context was not defined.</p><p>However, calling the function like <code>tax.callPolyfill({item: &quot;salad&quot;}, 10, 0.1)</code> will log <code>&quot;The cost of salad is 11&quot;</code>. The <code>this</code> context was appropriately set, and the function logged an appropriate output.</p><p>Please solve this without using the built-in <code>Function.call</code> method.</p><p><strong>Example 1:</strong></p>',8),b=n("blockquote",null,[n("p",null,"Input:"),n("p",{return:"","this.a":"","+":"","b;":""},"fn = function add(b)"),n("p",null,'args = [{"a": 5}, 7]'),n("p",null,"Output: 12"),n("p",null,"Explanation:"),n("p",null,'fn.callPolyfill({"a": 5}, 7); // 12'),n("p",null,'callPolyfill sets the "this" context to {"a": 5}. 7 is passed as an argument.')],-1),v=t('<p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>fn = function tax(price, taxRate) { return <code>The cost of the ${this.item} is ${price * taxRate}</code>; }</p><p>args = [{&quot;item&quot;: &quot;burger&quot;}, 10, 1.1]</p><p>Output: &quot;The cost of the burger is 11&quot;</p><p>Explanation: callPolyfill sets the &quot;this&quot; context to {&quot;item&quot;: &quot;burger&quot;}. 10 and 1.1 are passed as additional arguments.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>typeof args[0] == &#39;object&#39; and args[0] != null</code></li><li><code>1 &lt;= args.length &lt;= 100</code></li><li><code>2 &lt;= JSON.stringify(args[0]).length &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>增强所有函数，使其具有 <code>callPolyfill</code> 方法。该方法接受一个对象 <code>obj</code> 作为第一个参数，以及任意数量的附加参数。<code>obj</code> 成为函数的 <code>this</code> 上下文。附加参数将传递给该函数（即 <code>callPolyfill</code> 方法所属的函数）。</p><p>例如，如果有以下函数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">tax</span><span class="token punctuation">(</span><span class="token parameter">price<span class="token punctuation">,</span> taxRate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n	<span class="token keyword">const</span> totalCost <span class="token operator">=</span> price <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> taxRate<span class="token punctuation">)</span><span class="token punctuation">;</span>\n	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The cost of </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>item<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>totalCost<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 <code>tax(10, 0.1)</code> 将输出 <code>&quot;The cost of undefined is 11&quot;</code> 。这是因为 <code>this</code> 上下文未定义。</p><p>然而，调用 <code>tax.callPolyfill({item: &quot;salad&quot;}, 10, 0.1)</code> 将输出 <code>&quot;The cost of salad is 11&quot;</code> 。<code>this</code> 上下文被正确设置，函数输出了适当的结果。</p><p>请在不使用内置的 <code>Function.call</code> 方法的情况下解决这个问题。</p><p><strong>示例 1：</strong></p>',12),x=n("blockquote",null,[n("p",null,[n("strong",null,"输入：")]),n("p",{return:"","this.a":"","+":"","b;":""},"fn = function add(b)"),n("p",null,'args = [{"a": 5}, 7]'),n("p",null,[n("strong",null,"输出："),s(" 12")]),n("p",null,[n("strong",null,"解释：")]),n("p",null,'fn.callPolyfill({"a": 5}, 7); // 12'),n("p",null,'callPolyfill 将 "this" 上下文设置为 {"a": 5} ，并将 7 作为参数传递。')],-1),y=t(`<p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong></p><p>fn = function tax(price, taxRate) { return <code>The cost of the \${this.item} is \${price * taxRate}</code>; }</p><p>args = [{&quot;item&quot;: &quot;burger&quot;}, 10, 1,1]</p><p><strong>输出：</strong> &quot;The cost of the burger is 11&quot;</p><p>**解释：**callPolyfill 将 &quot;this&quot; 上下文设置为 {&quot;item&quot;: &quot;burger&quot;} ，并将 10 和 1.1 作为附加参数传递。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>typeof args[0] == &#39;object&#39; and args[0] != null</code></li><li><code>1 &lt;= args.length &lt;= 100</code></li><li><code>2 &lt;= JSON.stringify(args[0]).length &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要实现 <code>callPolyfill</code> 方法，可以通过将要调用的函数临时添加为对象的一个方法，然后使用这个方法来调用函数。以下是详细的实现思路：</p><ol><li><p><strong>定义 <code>callPolyfill</code> 方法</strong>：将其添加到 <code>Function.prototype</code>，使所有函数都能访问这个方法。</p><ul><li>第一个参数是 <code>context</code>，表示函数调用时的 <code>this</code> 上下文。</li><li>后面的参数是传递给原始函数的参数 <code>args</code>。</li></ul></li><li><p><strong>将函数赋值给对象</strong>：</p><ul><li>在 <code>context</code> 中临时创建一个唯一的 Symbol 属性，因为 Symbol 属性在迭代中不可枚举；</li><li>将 Symbol 属性指向要调用的函数，可以使用 <code>this</code> 来引用当前函数。</li></ul></li><li><p><strong>调用函数</strong>：使用临时创建的方法调用它，传入附加参数。</p></li><li><p><strong>清理</strong>：调用后，从 <code>context</code> 中删除临时属性，确保不会对 <code>context</code> 产生影响。</p></li><li><p><strong>返回结果</strong>：如果函数有返回值，可以将其返回。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，只进行了一次函数调用。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级的空间来存储临时方法和结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">context</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">args</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token operator">|</span>boolean<span class="token operator">|</span>number<span class="token operator">|</span>string<span class="token operator">|</span>Array<span class="token operator">|</span>Object<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">callPolyfill</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个唯一的 Symbol 属性</span>
	<span class="token keyword">const</span> uniqueId <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 将当前函数临时赋值为对象的方法</span>
	context<span class="token punctuation">[</span>uniqueId<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
	<span class="token comment">// 调用函数并传递参数</span>
	<span class="token keyword">const</span> result <span class="token operator">=</span> context<span class="token punctuation">[</span>uniqueId<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 清理临时属性</span>
	<span class="token keyword">delete</span> context<span class="token punctuation">[</span>uniqueId<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * function increment() <span class="token punctuation">{</span> this.count++; return this.count; <span class="token punctuation">}</span>
 * increment.callPolyfill(<span class="token punctuation">{</span>count: 1<span class="token punctuation">}</span>); // 2
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function q(_,w){const p=e("font"),o=e("ExternalLinkIcon");return l(),i("div",null,[d,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:u(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",k,[h,a(o)]),s(),n("a",m,[g,a(o)])]),f,b,v,x,y])}const P=c(r,[["render",q],["__file","2693.html.vue"]]);export{P as default};
