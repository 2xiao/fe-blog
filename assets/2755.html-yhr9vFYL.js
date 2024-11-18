import{_ as c,r as e,o as l,c as u,a as n,b as s,d as a,w as i,e as o}from"./app-9Xw5divW.js";const r={},d=n("h1",{id:"_2755-深度合并两个对象-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2755-深度合并两个对象-🔒","aria-hidden":"true"},"#"),s(" 2755. 深度合并两个对象 🔒")],-1),b={href:"https://leetcode.cn/problems/deep-merge-of-two-objects",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"力扣",-1),j={href:"https://leetcode.com/problems/deep-merge-of-two-objects",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"LeetCode",-1),g=o('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two values <code>obj1</code> and <code>obj2</code>, return a <strong>deepmerged</strong> value.</p><p>Values should be <strong>deepmerged</strong> according to these rules:</p><ul><li>If the two values are objects, the resulting object should have all the keys that exist on either object. If a key belongs to both objects, <strong>deepmerge</strong> the two associated values. Otherwise, add the key-value pair to the resulting object.</li><li>If the two values are arrays, the resulting array should be the same length as the longer array. Apply the same logic as you would with objects, but treat the indices as keys.</li><li>Otherwise the resulting value is <code>obj2</code>.</li></ul><p>You can assume <code>obj1</code> and <code>obj2</code> are the output of <code>JSON.parse()</code>.</p><p><strong>Example 1:</strong></p>',6),v=n("blockquote",null,[n("p",{"a:2,b:2":""},'Input: obj1 = {"a": 1, "c": 3}, obj2 ='),n("p",{"a:2,c:3,b:2":""},"Output:"),n("p",null,`Explanation: The value of obj1["a"] changed to 2 because if both objects have the same key and their value is not an array or object then we change the obj1 value to the obj2 value. Key "b" with value was added to obj1 as it doesn't exist in obj1.`)],-1),q=o('<p><strong>Example 2:</strong></p><blockquote><p>Input: obj1 = [{}, 2, 3], obj2 = [[], 5]</p><p>Output: [[], 5, 3]</p><p>Explanation: result[0] = obj2[0] because obj1[0] and obj2[0] have different types. result[2] = obj1[2] because obj2[2] does not exist.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input:</p><p>obj1 = {&quot;a&quot;: 1, &quot;b&quot;: {&quot;c&quot;: [1 , [2, 7], 5], &quot;d&quot;: 2}},</p><p>obj2 = {&quot;a&quot;: 1, &quot;b&quot;: {&quot;c&quot;: [6, [6], [9]], &quot;e&quot;: 3}}</p><p>Output: {&quot;a&quot;: 1, &quot;b&quot;: {&quot;c&quot;: [6, [6, 7], [9]], &quot;d&quot;: 2, &quot;e&quot;: 3}}</p><p>Explanation:</p><p>Arrays obj1[&quot;b&quot;][&quot;c&quot;] and obj2[&quot;b&quot;][&quot;c&quot;] have been merged in way that obj2 values overwrite obj1 values deeply only if they are not arrays or objects.</p><p>obj2[&quot;b&quot;][&quot;c&quot;] has key &quot;e&quot; that obj1 doesn&#39;t have so it&#39;s added to obj1.</p></blockquote><p><strong>Example 4:</strong></p><blockquote><p>Input: obj1 = true, obj2 = null</p><p>Output: null</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>obj1</code> and <code>obj2</code> are valid JSON values</li><li><code>1 &lt;= JSON.stringify(obj1).length &lt;= 5 * 10^5</code></li><li><code>1 &lt;= JSON.stringify(obj2).length &lt;= 5 * 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个值 <code>obj1</code> 和 <code>obj2</code>，返回一个 <strong>深度合并</strong> 的值。</p><p>你应该遵循以下规则进行值的 <strong>深度合并</strong> ：</p><ul><li>如果两个值都是对象，则结果对象应包含两个对象上存在的所有键。</li><li>如果一个键同时存在于两个对象中，则 <strong>深度合并</strong> 两个关联的值。否则，将键值对添加到结果对象中。</li><li>如果两个值都是数组，则结果数组的长度应与较长的数组相同。对于对象的合并逻辑，将索引视为键。</li><li>否则，结果值为 <code>obj2</code>。</li></ul><p>你可以假设 <code>obj1</code> 和 <code>obj2</code> 是 <code>JSON.parse()</code> 的输出结果。</p><p><strong>示例 1：</strong></p>',14),m=n("blockquote",null,[n("p",{"a:2,b:2":""},[n("strong",null,"输入："),s(' obj1 = {"a": 1, "c": 3}, obj2 =')]),n("p",null,[n("strong",{"a:2,c:3,b:2":""},"输出：")]),n("p",null,'**解释：**obj1["a"] 的值变为 2，因为如果两个对象具有相同的键且它们的值不是数组或对象，则将 obj1 的值更改为 obj2 的值。键 "b" 和其值被添加到 obj1 中，因为它在 obj1 中不存在。')],-1),y=o(`<p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> obj1 = [{}, 2, 3], obj2 = [[], 5]</p><p><strong>输出：</strong>[[], 5, 3]</p><p>**解释：**result[0] = obj2[0]，因为 obj1[0] 和 obj2[0] 类型不同。result[2] = obj1[2]，因为 obj2[2] 不存在。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong></p><p>obj1 = {&quot;a&quot;: 1, &quot;b&quot;: {&quot;c&quot;: [1 , [2, 7], 5], &quot;d&quot;: 2}},</p><p>obj2 = {&quot;a&quot;: 1, &quot;b&quot;: {&quot;c&quot;: [6, [6], [9]], &quot;e&quot;: 3}}</p><p><strong>输出：</strong>{&quot;a&quot;: 1, &quot;b&quot;: {&quot;c&quot;: [6, [6, 7], [9]], &quot;d&quot;: 2, &quot;e&quot;: 3}}</p><p><strong>解释：</strong></p><p>数组 obj1[&quot;b&quot;][&quot;c&quot;] 和 obj2[&quot;b&quot;][&quot;c&quot;] 已合并，如果 obj2 的值不是数组或对象，则深度覆盖 obj1 的值。 obj2[&quot;b&quot;][&quot;c&quot;] 有键 &quot;e&quot;，而 obj1 中没有，所以将其添加到 obj1 中。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> obj1 = true, obj2 = null</p><p><strong>输出：</strong> null</p></blockquote><p><strong>解释：</strong></p><ul><li><code>obj1</code> 和 <code>obj2</code> 都是有效的 JSON 值</li><li><code>1 &lt;= JSON.stringify(obj1).length &lt;= 5 * 10^5</code></li><li><code>1 &lt;= JSON.stringify(obj2).length &lt;= 5 * 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>类型判断：</strong></p><ul><li>题目要求如果两个值类型不同，则以 <code>obj2</code> 为准；</li><li>首先判断 <code>obj1</code> 和 <code>obj2</code> 是否都是对象，若其中一个不是对象，则直接返回 <code>obj2</code>，</li><li>再判断它们是否为数组，如果一个是对象，另一个是数组，则直接返回 <code>obj2</code>；</li></ul></li><li><p><strong>处理数组：</strong></p><ul><li>如果 <code>obj1</code> 和 <code>obj2</code> 都是数组，首先会创建一个新的数组，并将 <code>obj1</code> 的所有值复制到新数组中。</li><li>然后，遍历 <code>obj2</code> 的索引，检查 <code>obj1</code> 是否有相应的索引。如果有，递归合并这两个索引的值；如果没有，直接将 <code>obj2</code> 中的索引值赋给新数组。</li></ul></li><li><p><strong>处理对象：</strong></p><ul><li>如果 <code>obj1</code> 和 <code>obj2</code> 都是对象，首先会创建一个新的对象，并将 <code>obj1</code> 的所有键值对复制到新对象中。</li><li>然后，遍历 <code>obj2</code> 的键，检查 <code>obj1</code> 是否有相应的键。如果有，递归合并这两个键的值；如果没有，直接将 <code>obj2</code> 中的值赋给新对象。</li></ul></li><li><p><strong>返回结果：</strong></p><ul><li>最终，返回合并后的对象或数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是两个对象或数组中元素的总数，每个元素都需要被递归访问一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是递归深度或元素总数，递归合并时需要额外的栈空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">obj1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">obj2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deepMerge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj1<span class="token punctuation">,</span> obj2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isObject</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">typeof</span> obj <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isArray</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 如果 obj1 或 obj2 是基本类型，直接返回 obj2</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj2<span class="token punctuation">;</span>

	<span class="token comment">// 如果 obj1 和 obj2 类型不一致（一个是对象，一个是数组），直接返回 obj2</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token function">isArray</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj2<span class="token punctuation">;</span>

	<span class="token comment">// 如果两个都是数组，则合并数组元素</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isArray</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>obj1<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> maxLength<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepMerge</span><span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> obj2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果是对象，则递归合并每个键值对</span>
	<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>obj1 <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 创建一个新的对象避免修改原始对象</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepMerge</span><span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> obj2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function f(_,w){const p=e("font"),t=e("ExternalLinkIcon");return l(),u("div",null,[d,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:i(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",b,[k,a(t)]),s(),n("a",j,[h,a(t)])]),g,v,q,m,y])}const O=c(r,[["render",f],["__file","2755.html.vue"]]);export{O as default};
