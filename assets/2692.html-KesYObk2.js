import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as o,f as u,e as d}from"./app-totCBmv-.js";const k={},m=n("h1",{id:"_2692-使对象不可变-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2692-使对象不可变-🔒","aria-hidden":"true"},"#"),s(" 2692. 使对象不可变 🔒")],-1),b={href:"https://leetcode.cn/problems/make-object-immutable",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/make-object-immutable",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a function that takes an object <code>obj</code> and returns a new <strong>immutable</strong> version of this object.</p><p>An **immutable **object is an object that can&#39;t be altered and will throw an error if any attempt is made to alter it.</p><p>There are three types of error messages that can be produced from this new object.</p><ul><li>Attempting to modify a key on the object will result in this error message: <code>Error Modifying: \${key}</code>.</li><li>Attempting to modify an index on an array will result in this error message: <code>Error Modifying Index: \${index}</code>.</li><li>Attempting to call a method that mutates an array will result in this error message: <code>Error Calling Method: \${methodName}</code>. You may assume the only methods that can mutate an array are <code>[&#39;pop&#39;, &#39;push&#39;, &#39;shift&#39;, &#39;unshift&#39;, &#39;splice&#39;, &#39;sort&#39;, &#39;reverse&#39;]</code>.</li></ul><p><code>obj</code> is a valid JSON object or array, meaning it is the output of <code>JSON.parse()</code>.</p><p>Note that a string literal should be thrown, not an <code>Error</code>.</p><p><strong>Example 1:</strong></p><p>Input:</p><pre><code>obj = { &quot;x&quot;: 5 }

fn = (obj) =&gt; {
  obj.x = 5;
  return obj.x;
}
</code></pre><p>Output:</p><pre><code>{&quot;value&quot;: null, &quot;error&quot;: &quot;Error Modifying: x&quot;}
</code></pre><p>Explanation: Attempting to modify a key on an object resuts in a thrown error. Note that it doesn&#39;t matter that the value was set to the same value as it was before.</p><p><strong>Example 2:</strong></p><p>Input:</p><pre><code>obj = [1, 2, 3]

fn = (arr) =&gt; {
  arr[1] = {};
  return arr[2];
}
</code></pre><p>Output:</p><pre><code>{&quot;value&quot;: null, &quot;error&quot;: &quot;Error Modifying Index: 1&quot;}
</code></pre><p>Explanation: Attempting to modify an array results in a thrown error.</p><p><strong>Example 3:</strong></p><p>Input:</p><pre><code>obj = { &quot;arr&quot;: [1, 2, 3] }

fn = (obj) =&gt; {
  obj.arr.push(4);
  return 42;
}
</code></pre><p>Output:</p><pre><code>{ &quot;value&quot;: null, &quot;error&quot;: &quot;Error Calling Method: push&quot;}
</code></pre><p>Explanation: Calling a method that can result in a mutation results in a thrown error.</p><p><strong>Example 4:</strong></p><p>Input:</p><pre><code>obj = { &quot;x&quot;: 2, &quot;y&quot;: 2 }

fn = (obj) =&gt; {
  return Object.keys(obj);
}
</code></pre><p>Output:</p><pre><code>{&quot;value&quot;: [&quot;x&quot;, &quot;y&quot;], &quot;error&quot;: null}
</code></pre><p>Explanation: No mutations were attempted so the function returns as normal.</p><p><strong>Constraints:</strong></p><ul><li><code>obj</code> is a valid JSON object or array</li><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个函数，该函数接收一个对象 <code>obj</code> ，并返回该对象的一个新的 <strong>不可变</strong> 版本。</p><p><strong>不可变</strong> 对象是指不能被修改的对象，如果试图修改它，则会抛出错误。</p><p>此新对象可能产生三种类型的错误消息。</p><ul><li>如果试图修改对象的键，则会产生以下错误消息： <code>Error Modifying: \${key}</code> 。</li><li>如果试图修改数组的索引，则会产生以下错误消息： <code>Error Modifying Index: \${index}</code> 。</li><li>如果试图调用会改变数组的方法，则会产生以下错误消息： <code>Error Calling Method: \${methodName}</code> 。你可以假设只有以下方法能够改变数组： <code>[&#39;pop&#39;, &#39;push&#39;, &#39;shift&#39;, &#39;unshift&#39;, &#39;splice&#39;, &#39;sort&#39;, &#39;reverse&#39;]</code> 。</li></ul><p><code>obj</code> 是一个有效的 JSON 对象或数组，也就是说，它是 <code>JSON.parse()</code> 的输出结果。</p><p>请注意，应该抛出字符串字面量，而不是 <code>Error</code> 对象。</p><p><strong>提示：</strong></p><ul><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要创建一个不可变的对象，这意味着该对象及其嵌套对象在任何情况下都不能被修改，如果尝试修改对象的键、数组的索引或调用改变数组状态的方法，应该抛出相应的错误消息。</p><p>利用 JavaScript 的 <code>Proxy</code> 特性，可以在对象或数组的访问和修改操作上进行拦截，从而实现不可变性。</p><ol><li><p><strong>使用 <code>Proxy</code> 进行拦截</strong>：</p><ul><li>为对象和数组分别定义不同的处理器（handler）： <ul><li><strong>对象处理器</strong>：拦截键的修改，抛出 <code>&quot;Error Modifying: \${key}&quot;</code>。</li><li><strong>数组处理器</strong>：拦截索引的修改，抛出 <code>&quot;Error Modifying Index: \${index}&quot;</code>，同时为改变数组的方法（如 <code>pop</code>, <code>push</code> 等）提供代理，抛出 <code>&quot;Error Calling Method: \${methodName}&quot;</code>。</li></ul></li></ul></li><li><p><strong>递归处理嵌套对象</strong>：</p><ul><li>对输入对象进行递归遍历，如果发现一个属性是对象或数组，就递归调用同样的处理逻辑，将其转换为不可变的代理。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>调用递归函数处理输入的 <code>obj</code> 并返回最终的不可变对象。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是对象的总属性数量。需要递归遍历每个嵌套的对象。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要为每个对象创建代理，空间复杂度与输入的对象大小成正比。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">obj</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">makeImmutable</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> mutableMethods <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token string">&#39;pop&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;push&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;unshift&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;splice&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;sort&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;reverse&#39;</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> objectHandler <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error Modifying: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">String</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> arrayHandler <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> key <span class="token operator">===</span> <span class="token string">&#39;symbol&#39;</span> <span class="token operator">||</span> <span class="token function">isNaN</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">throw</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error Modifying: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">String</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">throw</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error Modifying Index: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">String</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> functionHandler <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token function-variable function">apply</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">throw</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error Calling Method: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">String</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 处理数组</span>
			<span class="token keyword">const</span> proxyArray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arrayHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
			mutableMethods<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				proxyArray<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">return</span> obj<span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span> functionHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> proxyArray<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 处理对象</span>
			<span class="token keyword">const</span> proxyObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> objectHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					proxyObject<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> proxyObject<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 返回基本类型</span>
		<span class="token keyword">return</span> obj<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 调用递归函数</span>
	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,51),f=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),_=n("td",{style:{"text-align":"center"}},"2690",-1),x=n("td",{style:{"text-align":"left"}},"无穷方法对象 🔒",-1),j={style:{"text-align":"center"}},w=n("td",{style:{"text-align":"left"}},null,-1),q=n("td",{style:{"text-align":"center"}},"🟢",-1),E={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/infinite-method-object",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/infinite-method-object",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},"2691",-1),A=n("td",{style:{"text-align":"left"}},"不可变辅助工具 🔒",-1),S={style:{"text-align":"center"}},$=n("td",{style:{"text-align":"left"}},null,-1),I=n("td",{style:{"text-align":"center"}},"🔴",-1),C={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/immutability-helper",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/immutability-helper",target:"_blank",rel:"noopener noreferrer"};function L(P,V){const c=e("font"),t=e("ExternalLinkIcon"),p=e("RouterLink");return i(),r("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:o(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",b,[h,a(t)]),s(),n("a",v,[g,a(t)])]),y,u(" prettier-ignore "),n("table",null,[f,n("tbody",null,[n("tr",null,[_,x,n("td",j,[a(p,{to:"/problem/2690.html"},{default:o(()=>[s("[✓]")]),_:1})]),w,q,n("td",E,[n("a",N,[s("🀄️"),a(t)]),s(),n("a",M,[s("🔗"),a(t)])])]),n("tr",null,[O,A,n("td",S,[a(p,{to:"/problem/2691.html"},{default:o(()=>[s("[✓]")]),_:1})]),$,I,n("td",C,[n("a",J,[s("🀄️"),a(t)]),s(),n("a",H,[s("🔗"),a(t)])])])])])])}const R=l(k,[["render",L],["__file","2692.html.vue"]]);export{R as default};
