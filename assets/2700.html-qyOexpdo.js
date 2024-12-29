import{_ as i,r as t,o as r,c as u,a as n,b as s,d as a,w as o,f as d,e as c}from"./app-r0ql_Osa.js";const k={},b=n("h1",{id:"_2700-两个对象之间的差异-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2700-两个对象之间的差异-🔒","aria-hidden":"true"},"#"),s(" 2700. 两个对象之间的差异 🔒")],-1),h={href:"https://leetcode.cn/problems/differences-between-two-objects",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/differences-between-two-objects",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),v=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a function that accepts two deeply nested objects or arrays <code>obj1</code> and <code>obj2</code> and returns a new object representing their differences.</p><p>The function should compare the properties of the two objects and identify any changes. The returned object should only contains keys where the value is different from <code>obj1</code> to <code>obj2</code>.</p><p>For each changed key, the value should be represented as an array <code>[obj1 value, obj2 value]</code>. Keys that exist in one object but not in the other should not be included in the returned object. The end result should be a deeply nested object where each leaf value is a difference array.</p><p>When comparing two arrays, the indices of the arrays are considered to be their keys.</p><p>You may assume that both objects are the output of <code>JSON.parse</code>.</p><p><strong>Example 1:</strong></p>',7),y=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"obj1 = {}"),n("p",{"a:1,b:2":""},"obj2 ="),n("p",null,"Output: {}"),n("p",null,'Explanation: There were no modifications made to obj1. New keys "a" and "b" appear in obj2, but keys that are added or removed should be ignored.')],-1),_=n("p",null,[n("strong",null,"Example 2:")],-1),g=n("blockquote",null,[n("p",null,"Input:"),n("p",null,'obj1 = { "a": 1, "v": 3, "x": [], "z": { "a": null } }'),n("p",null,'obj2 = { "a": 2, "v": 4, "x": [], "z": { "a": 2 } }'),n("p",null,"Output:"),n("p",null,'{ "a": [1, 2], "v": [3, 4], "z": { "a": [null, 2] } }'),n("p",null,'Explanation: The keys "a", "v", and "z" all had changes applied. "a" was changed from 1 to 2. "v" was changed from 3 to 4. "z" had a change applied to a child object. "z.a" was changed from null to 2.')],-1),x=n("p",null,[n("strong",null,"Example 3:")],-1),w=n("blockquote",null,[n("p",null,"Input:"),n("p",{"a:5,v:6,z:[1,2,4,[2,5,7]]":""},"obj1 ="),n("p",{"a:5,v:7,z:[1,2,3,[1]]":""},"obj2 ="),n("p",null,"Output:"),n("p",null,'{ "v": [6, 7], "z": { "2": [4, 3], "3": { "0": [2, 1] } } }'),n("p",null,'Explanation: In obj1 and obj2, the keys "v" and "z" have different assigned values. "a" is ignored because the value is unchanged. In the key "z", there is a nested array. Arrays are treated like objects where the indices are keys. There were two alterations to the the array: z[2] and z[3][0]. z[0] and z[1] were unchanged and thus not included. z[3][1] and z[3][2] were removed and thus not included.')],-1),O=n("p",null,[n("strong",null,"Example 4:")],-1),z=n("blockquote",null,[n("p",null,"Input:"),n("p",null,'obj1 = { "a": {"b": 1}, }'),n("p",{"a:[5],":""},"obj2 ="),n("p",null,'Output: { "a": [{"b": 1}, [5]] }'),n("p",null,'Explanation: The key "a" exists in both objects. Since the two associated values have different types, they are placed in the difference array.')],-1),N=c(`<p><strong>Example 5:</strong></p><blockquote><p>Input:</p><p>obj1 = { &quot;a&quot;: [1, 2,</p><p>obj2 = { &quot;b&quot;: false, &quot;a&quot;: [1, 2,</p><p>Output: {}</p><p>Explanation: Apart from a different ordering of keys, the two objects are identical so an empty object is returned.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>obj1</code> and <code>obj2</code> are valid JSON objects or arrays</li><li><code>2 &lt;= JSON.stringify(obj1).length &lt;= 10^4</code></li><li><code>2 &lt;= JSON.stringify(obj2).length &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个函数，它接收两个深度嵌套的对象或数组 <code>obj1</code> 和 <code>obj2</code> ，并返回一个新对象表示它们之间差异。</p><p>该函数应该比较这两个对象的属性，并识别任何变化。返回的对象应仅包含从 <code>obj1</code> 到 <code>obj2</code> 的值不同的键。</p><p>对于每个变化的键，值应表示为一个数组 <code>[obj1 value, obj2 value]</code> 。不存在于一个对象中但存在于另一个对象中的键不应包含在返回的对象中。在比较两个数组时，数组的索引被视为它们的键。最终结果应是一个深度嵌套的对象，其中每个叶子的值都是一个差异数组。</p><p>你可以假设这两个对象都是 <code>JSON.parse</code> 的输出结果。</p><p><strong>提示：</strong></p><ul><li><code>obj1</code> 和 <code>obj2</code> 都是有效的 JSON 对象或数组</li><li><code>2 &lt;= JSON.stringify(obj1).length &lt;= 10^4</code></li><li><code>2 &lt;= JSON.stringify(obj2).length &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>类型比较</strong>：</p><ul><li>首先，检查 <code>obj1</code> 和 <code>obj2</code> 的类型。如果它们的类型不同，直接返回一个包含两个对象的数组 <code>[obj1, obj2]</code>，这一步确保了后续的比较是基于相同类型的对象。</li></ul></li><li><p><strong>基本数据类型比较</strong>：</p><ul><li>如果两个对象是基本数据类型（即不是对象或数组），则直接比较它们的值。</li><li>如果值相等，返回一个空对象 <code>{}</code>，表示没有差异；</li><li>如果不相等，返回一个数组 <code>[obj1, obj2]</code>，表示两个值的差异。</li></ul></li><li><p><strong>对象或数组的处理</strong>：</p><ul><li>对于数组或对象，初始化一个空对象 <code>res</code> 用于存储差异结果。</li><li>使用 <code>Object.keys(obj1)</code> 获取 <code>obj1</code> 的所有键，并过滤出同时存在于 <code>obj2</code> 中的公共属性 <code>commonKeys</code>。</li></ul></li><li><p><strong>递归比较</strong>：</p><ul><li>对于每个公共属性，递归调用 <code>objDiff</code> 函数以获取子对象的差异。如果返回的差异对象 <code>subDiff</code> 不是空的，则将其添加到结果对象 <code>res</code> 中。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>最终，返回结果对象 <code>res</code>，它包含了所有不同的键及其对应的差异值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是两个对象的总键数，需要遍历对象所有的键，如果对象嵌套层级很深，递归调用的深度也会增加，但在大多数情况下，时间复杂度保持在 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，主要由存储差异的结果对象 <code>res</code> 占据，需要存储所有不同的值。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">obj1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token operator">|</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">obj2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">objDiff</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj1<span class="token punctuation">,</span> obj2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1. 若 obj1 和 obj2 类型不同，直接返回 [obj1, obj2]</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">type</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token function">type</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 2. 若是基本数据类型，直接比较值是否相等</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isObject</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obj1 <span class="token operator">==</span> obj2 <span class="token operator">?</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">[</span>obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 3. 若是数组或对象</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 找到两个对象的公共属性</span>
	<span class="token keyword">const</span> commonKeys <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> key <span class="token keyword">in</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	commonKeys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 递归比较</span>
		<span class="token keyword">const</span> subDiff <span class="token operator">=</span> <span class="token function">objDiff</span><span class="token punctuation">(</span>obj1<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> obj2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 过滤掉值为空的属性</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>subDiff<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> subDiff<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 返回 obj 的数据类型</span>
<span class="token keyword">function</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 判断 obj 是否为对象和数组</span>
<span class="token keyword">function</span> <span class="token function">isObject</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">typeof</span> obj <span class="token operator">==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"2628",-1),S=n("td",{style:{"text-align":"left"}},"完全相等的 JSON 字符串 🔒",-1),J={style:{"text-align":"center"}},I=n("td",{style:{"text-align":"left"}},null,-1),T=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/json-deep-equal",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/json-deep-equal",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"2633",-1),A=n("td",{style:{"text-align":"left"}},"将对象转换为 JSON 字符串 🔒",-1),K={style:{"text-align":"center"}},B=n("td",{style:{"text-align":"left"}},null,-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/convert-object-to-json-string",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/convert-object-to-json-string",target:"_blank",rel:"noopener noreferrer"};function Y(G,H){const l=t("font"),e=t("ExternalLinkIcon"),p=t("RouterLink");return r(),u("div",null,[b,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:o(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",h,[m,a(e)]),s(),n("a",f,[j,a(e)])]),v,y,_,g,x,w,O,z,N,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,S,n("td",J,[a(p,{to:"/problem/2628.html"},{default:o(()=>[s("[✓]")]),_:1})]),I,T,n("td",D,[n("a",C,[s("🀄️"),a(e)]),s(),n("a",L,[s("🔗"),a(e)])])]),n("tr",null,[V,A,n("td",K,[a(p,{to:"/problem/2633.html"},{default:o(()=>[s("[✓]")]),_:1})]),B,R,n("td",W,[n("a",F,[s("🀄️"),a(e)]),s(),n("a",M,[s("🔗"),a(e)])])])])])])}const Q=i(k,[["render",Y],["__file","2700.html.vue"]]);export{Q as default};
