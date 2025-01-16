import{_ as p,r as t,o as l,c as i,a as n,b as a,d as e,w as r,e as o}from"./app-KDJRKGep.js";const u={},d=n("h1",{id:"_2722-根据-id-合并两个数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2722-根据-id-合并两个数组","aria-hidden":"true"},"#"),a(" 2722. 根据 ID 合并两个数组")],-1),k={href:"https://leetcode.cn/problems/join-two-arrays-by-id",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/join-two-arrays-by-id",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"LeetCode",-1),v=o('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two arrays <code>arr1</code> and <code>arr2</code>, return a new array <code>joinedArray</code>. All the objects in each of the two inputs arrays will contain an <code>id</code> field that has an integer value.</p><p><code>joinedArray</code> is an array formed by merging <code>arr1</code> and <code>arr2</code> based on their <code>id</code> key. The length of <code>joinedArray</code> should be the length of unique values of <code>id</code>. The returned array should be sorted in <strong>ascending</strong> order based on the <code>id</code> key.</p><p>If a given <code>id</code> exists in one array but not the other, the single object with that <code>id</code> should be included in the result array without modification.</p><p>If two objects share an <code>id</code>, their properties should be merged into a single object:</p><ul><li>If a key only exists in one object, that single key-value pair should be included in the object.</li><li>If a key is included in both objects, the value in the object from <code>arr2</code> should override the value from <code>arr1</code>.</li></ul><p><strong>Example 1:</strong></p>',7),q=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"arr1 = ["),n("blockquote",null,[n("p",null,'{"id": 1, "x": 1},')]),n("blockquote",{"id:2,x:9":""},[n("p")]),n("p",null,"],"),n("p",null,"arr2 = ["),n("blockquote",{"id:3,x:5":""},[n("p")]),n("p",null,"]"),n("p",null,"Output:"),n("p",null,"["),n("blockquote",null,[n("p",null,'{"id": 1, "x": 1},')]),n("blockquote",null,[n("p",null,'{"id": 2, "x": 9},')]),n("blockquote",{"id:3,x:5":""},[n("p")]),n("p",null,"]"),n("p",null,"Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.")],-1),y=n("p",null,[n("strong",null,"Example 2:")],-1),f=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"arr1 = ["),n("blockquote",null,[n("p",null,'{"id": 1, "x": 2, "y": 3},')]),n("blockquote",{"id:2,x:3,y:6":""},[n("p")]),n("p",null,"],"),n("p",null,"arr2 = ["),n("blockquote",null,[n("p",null,'{"id": 2, "x": 10, "y": 20},')]),n("blockquote",{"id:3,x:0,y:0":""},[n("p")]),n("p",null,"]"),n("p",null,"Output:"),n("p",null,"["),n("blockquote",null,[n("p",null,'{"id": 1, "x": 2, "y": 3},')]),n("blockquote",null,[n("p",null,'{"id": 2, "x": 10, "y": 20},')]),n("blockquote",{"id:3,x:0,y:0":""},[n("p")]),n("p",null,"]"),n("p",null,"Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.")],-1),g=o(`<p><strong>Example 3:</strong></p><blockquote><p>Input:</p><p>arr1 = [</p><blockquote><p>{&quot;id&quot;: 1, &quot;b&quot;: {&quot;b&quot;: 94},&quot;v&quot;: [4, 3], &quot;y&quot;: 48}</p></blockquote><p>]</p><p>arr2 = [</p><blockquote><p>{&quot;id&quot;: 1, &quot;b&quot;: {&quot;c&quot;: 84}, &quot;v&quot;: [1, 3]}</p></blockquote><p>]</p><p>Output: [</p><blockquote><p>{&quot;id&quot;: 1, &quot;b&quot;: {&quot;c&quot;: 84}, &quot;v&quot;: [1, 3], &quot;y&quot;: 48}</p></blockquote><p>]</p><p>Explanation: The two objects with id=1 are merged together. For the keys &quot;b&quot; and &quot;v&quot; the values from arr2 are used. Since the key &quot;y&quot; only exists in arr1, that value is taken form arr1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>arr1</code> and <code>arr2</code> are valid JSON arrays</li><li>Each object in <code>arr1</code> and <code>arr2</code> has a unique integer <code>id</code> key</li><li><code>2 &lt;= JSON.stringify(arr1).length &lt;= 10^6</code></li><li><code>2 &lt;= JSON.stringify(arr2).length &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现给定两个数组 <code>arr1</code> 和 <code>arr2</code> ，返回一个新的数组 <code>joinedArray</code> 。两个输入数组中的每个对象都包含一个 <code>id</code> 字段。</p><p><code>joinedArray</code> 是一个通过 <code>id</code> 将 <code>arr1</code> 和 <code>arr2</code> 连接而成的数组。<code>joinedArray</code> 的长度应为唯一值 <code>id</code> 的长度。返回的数组应按 <code>id</code> <strong>升序</strong> 排序。</p><p>如果一个 <code>id</code> 存在于一个数组中但不存在于另一个数组中，则该对象应包含在结果数组中且不进行修改。</p><p>如果两个对象共享一个 <code>id</code> ，则它们的属性应进行合并：</p><ul><li>如果一个键只存在于一个对象中，则该键值对应该包含在对象中。</li><li>如果一个键在两个对象中都包含，则 <code>arr2</code> 中的值应覆盖 <code>arr1</code> 中的值。</li></ul><p><strong>提示：</strong></p><ul><li><code>arr1 和 arr2 都是有效的 JSON 数组</code></li><li>在 <code>arr1</code> 和 <code>arr2</code> 中都有唯一的键值 <code>id</code></li><li><code>2 &lt;= JSON.stringify(arr1).length &lt;= 10^6</code></li><li><code>2 &lt;= JSON.stringify(arr2).length &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>创建一个字典，使用一个对象来存储第二个数组中以 <code>id</code> 为键的对象，以便快速查找。</p></li><li><p>遍历第一个数组，对第一个数组中的每个对象进行遍历，根据当前对象的 <code>id</code> 在字典中查找对应的对象：</p><ul><li>如果找到匹配项，则合并两个对象；</li><li>如果没找到匹配项，则将当前对象加入字典中；</li></ul></li><li><p>返回合并后的字典的 <code>values</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m + n)</code>，其中 <code>m</code> 和 <code>n</code> 是两个数组的长度，首先遍历第二个数组构建字典，然后遍历第一个数组进行合并。</li><li><strong>空间复杂度</strong>：<code>O(m + n)</code>，用于存储字典，最坏情况下要存储 <code>m + n</code> 个键值对。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">join</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr1<span class="token punctuation">,</span> arr2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	arr2<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>dict<span class="token punctuation">[</span>item<span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	arr1<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>dict<span class="token punctuation">[</span>item<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dict<span class="token punctuation">[</span>item<span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>item<span class="token punctuation">,</span> <span class="token operator">...</span>dict<span class="token punctuation">[</span>item<span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			dict<span class="token punctuation">[</span>item<span class="token punctuation">.</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>dict<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function _(x,w){const c=t("font"),s=t("ExternalLinkIcon");return l(),i("div",null,[d,n("p",null,[a("🟠 "),e(c,{color:"#ffb800"},{default:r(()=>[a("Medium")]),_:1}),a("  🔗 "),n("a",k,[h,e(s)]),a(),n("a",b,[m,e(s)])]),v,q,y,f,g])}const E=p(u,[["render",_],["__file","2722.html.vue"]]);export{E as default};
