import{_ as c,r as e,o as l,c as i,a as n,b as s,d as a,w as u,e as o}from"./app-3dvbhwow.js";const r={},d=n("h1",{id:"_2705-精简对象",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2705-精简对象","aria-hidden":"true"},"#"),s(" 2705. 精简对象")],-1),k={href:"https://leetcode.cn/problems/compact-object",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/compact-object",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),h=o('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an object or array <code>obj</code>, return a <strong>compact object</strong>.</p><p>A <strong>compact object</strong> is the same as the original object, except with keys containing <strong>falsy</strong> values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered <strong>falsy</strong> when <code>Boolean(value)</code> returns <code>false</code>.</p><p>You may assume the <code>obj</code> is the output of <code>JSON.parse</code>. In other words, it is valid JSON.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: obj = [null, 0, false, 1]</p><p>Output: [1]</p><p>Explanation: All falsy values have been removed from the array.</p></blockquote><p><strong>Example 2:</strong></p>',7),f=n("blockquote",null,[n("p",{"a:null,b:[false,1]":""},"Input: obj ="),n("p",{"b:[1]":""},"Output:"),n("p",null,'Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.')],-1),j=o(`<p><strong>Example 3:</strong></p><blockquote><p>Input: obj = [null, 0, 5, [0], [false, 16]]</p><p>Output: [5, [], [16]]</p><p>Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>obj</code> is a valid JSON object</li><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现给定一个对象或数组 <code>obj</code>，返回一个 <strong>精简对象</strong> 。</p><p><strong>精简对象</strong> 与原始对象相同，只是将包含 <strong>假</strong> 值的键移除。该操作适用于对象及其嵌套对象。数组被视为索引作为键的对象。当 <code>Boolean(value)</code> 返回 <code>false</code> 时，值被视为 <strong>假</strong> 值。</p><p>你可以假设 <code>obj</code> 是 <code>JSON.parse</code> 的输出结果。换句话说，它是有效的 JSON。</p><p><strong>提示：</strong></p><ul><li><code>obj</code> 是一个有效的 JSON 对象</li><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>对于输入的对象或数组，使用递归方法处理每个元素。</li><li>如果是数组，遍历其元素并递归处理每个元素，构建新的数组，只保留非假值元素。</li><li>如果是对象，遍历其属性并递归处理每个属性的值，构建新的对象，仅保留非假值属性。</li><li>使用 <code>Boolean(value)</code> 检查每个值是否为假值（包括 <code>false</code>、<code>0</code>、<code>&quot;&quot;</code>、<code>null</code>、<code>undefined</code> 和 <code>NaN</code>）。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是输入对象或数组中所有元素的总数，每个元素都需要被访问一次，因此复杂度为线性。</p></li><li><p><strong>空间复杂度</strong>：<code>O(m)</code>，其中 <code>m</code> 是输出结果中有效属性或元素的数量。需要额外的空间来存储精简后的结果。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">obj</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">compactObject</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 处理数组，递归并过滤掉假值</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> obj<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token function">compactObject</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 仅添加非假值的属性</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				acc<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> acc<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 处理对象，递归并构建新对象</span>
	<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token function">compactObject</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 仅添加非假值的属性</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Boolean</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回新的对象</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果是基本类型，直接返回原值</span>
	<span class="token keyword">return</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function g(y,_){const p=e("font"),t=e("ExternalLinkIcon");return l(),i("div",null,[d,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:u(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",k,[b,a(t)]),s(),n("a",m,[v,a(t)])]),h,f,j])}const x=c(r,[["render",g],["__file","2705.html.vue"]]);export{x as default};
