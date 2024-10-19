import{_ as p,r as l,o as c,c as i,a as n,d as t,b as e,w as o,f as u,e as r}from"./app-ynO5B_DP.js";const d={},h={id:"_2631-分组",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_2631-分组","aria-hidden":"true"},"#",-1),f={href:"https://leetcode.com/problems/group-by",target:"_blank",rel:"noopener noreferrer"},k={href:"https://leetcode.com/problems/group-by",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write code that enhances all arrays such that you can call the <code>array.groupBy(fn)</code> method on any array and it will return a <strong>grouped</strong> version of the array.</p><p>A <strong>grouped</strong> array is an object where each key is the output of <code>fn(arr[i])</code> and each value is an array containing all items in the original array which generate that key.</p><p>The provided callback <code>fn</code> will accept an item in the array and return a string key.</p><p>The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.</p><p>Please solve it without lodash&#39;s <code>_.groupBy</code> function.</p><p><strong>Example 1:</strong></p>',7),m=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"array = ["),n("p",null,'{"id":"1"},'),n("p",null,'{"id":"1"},'),n("p",{"id:2":""}),n("p",null,"],"),n("p",null,"fn = function (item) {"),n("p",null,"return item.id;"),n("p",null,"}"),n("p",null,"Output:"),n("p",null,"{"),n("p",null,'"1": [{"id": "1"}, {"id": "1"}],'),n("p",null,'"2": [{"id": "2"}]'),n("p",null,"}"),n("p",null,"Explanation:"),n("p",null,"Output is from array.groupBy(fn)."),n("p",null,'The selector function gets the "id" out of each item in the array.'),n("p",null,'There are two objects with an "id" of 1. Both of those objects are put in the first array.'),n("p",null,'There is one object with an "id" of 2. That object is put in the second array.')],-1),b=r(`<p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>array = [</p><p>[1, 2, 3],</p><p>[1, 3, 5],</p><p>[1, 5, 9]</p><p>]</p><p>fn = function (list) {</p><p>return String(list[0]);</p><p>}</p><p>Output:</p><p>{</p><p>&quot;1&quot;: [[1, 2, 3], [1, 3, 5], [1, 5, 9]]</p><p>}</p><p>Explanation:</p><p>The array can be of any type. In this case, the selector function defines the key as being the first element in the array.</p><p>All the arrays have 1 as their first element so they are grouped together.</p><p>{</p><p>&quot;1&quot;: [[1, 2, 3], [1, 3, 5], [1, 5, 9]]</p><p>}</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input:</p><p>array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</p><p>fn = function (n) {</p><p>return String(n &gt; 5);</p><p>}</p><p>Output:</p><p>{</p><p>&quot;true&quot;: [6, 7, 8, 9, 10],</p><p>&quot;false&quot;: [1, 2, 3, 4, 5]</p><p>}</p><p>Explanation:</p><p>The selector function splits the array by whether each number is greater than 5.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= array.length &lt;= 10^5</code></li><li><code>fn</code> returns a string</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一段可应用于所有数组的代码，使任何数组调用 <code>array. groupBy(fn)</code> 方法时，它返回对该数组 <strong>分组后</strong> 的结果。</p><p>数组 <strong>分组</strong> 是一个对象，其中的每个键都是 <code>fn(arr[i])</code> 的输出的一个数组，该数组中含有原数组中具有该键的所有项。</p><p>提供的回调函数 <code>fn</code> 将接受数组中的项并返回一个字符串类型的键。</p><p>每个值列表的顺序应该与元素在数组中出现的顺序相同。任何顺序的键都是可以接受的。</p><p>请在不使用 lodash 的 <code>_.groupBy</code> 函数的前提下解决这个问题。</p><p><strong>提示：</strong></p><ul><li><code>0 &lt;= array.length &lt;= 10^5</code></li><li><code>fn 返回一个字符串</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>创建结果对象</strong>：使用一个空对象来存储分组结果。</li><li><strong>遍历数组</strong>：使用 <code>forEach</code> 方法遍历调用 <code>groupBy</code> 的数组。</li><li><strong>使用分组函数</strong>：对于每个元素，调用 <code>fn(item)</code> 函数以获取分组键。</li><li><strong>构建分组结果</strong>： <ul><li>检查结果对象中是否已有该分组键。如果没有，创建一个新的数组。</li><li>将当前元素添加到相应的分组中。</li></ul></li><li><strong>返回结果对象</strong>：最后返回分组后的结果对象。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，因为需要遍历整个数组。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，在最坏情况下，所有元素可能会被分到一个组中。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">groupBy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * [1,2,3].groupBy(String) // <span class="token punctuation">{</span>&quot;1&quot;:[1],&quot;2&quot;:[2],&quot;3&quot;:[3]<span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),v=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),x=n("td",{style:{"text-align":"center"}},"2624",-1),q={style:{"text-align":"left"}},w={href:"https://leetcode.com/problems/snail-traversal",target:"_blank",rel:"noopener noreferrer"},E=n("td",{style:{"text-align":"center"}},null,-1),B=n("td",{style:{"text-align":"left"}},null,-1),j={style:{"text-align":"left"}},T=n("td",{style:{"text-align":"center"}},"2626",-1),O={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/array-reduce-transformation",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},N={href:"/problem/2626",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"left"}},null,-1),A={style:{"text-align":"left"}},S=n("td",{style:{"text-align":"center"}},"2634",-1),L={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/filter-elements-from-array",target:"_blank",rel:"noopener noreferrer"},F={style:{"text-align":"center"}},P={href:"/problem/2634",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"left"}},null,-1),z={style:{"text-align":"left"}},D=n("td",{style:{"text-align":"center"}},"2635",-1),G={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/apply-transform-over-each-element-in-array",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},K={href:"/problem/2635",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"left"}},null,-1),R={style:{"text-align":"left"}},U=n("td",{style:{"text-align":"center"}},"2774",-1),X={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/array-upper-bound",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},null,-1),$=n("td",{style:{"text-align":"left"}},null,-1),nn={style:{"text-align":"left"}};function tn(en,sn){const s=l("ExternalLinkIcon"),a=l("font");return c(),i("div",null,[n("h1",h,[_,t(),n("a",f,[t("2631. 分组"),e(s)])]),n("p",null,[t("🟠 "),e(a,{color:"#ffb800"},{default:o(()=>[t("Medium")]),_:1}),t("  🔗 "),n("a",k,[g,e(s)])]),y,m,b,u(" prettier-ignore "),n("table",null,[v,n("tbody",null,[n("tr",null,[x,n("td",q,[n("a",w,[t("蜗牛排序"),e(s)])]),E,B,n("td",j,[e(a,{color:"#ffb800"},{default:o(()=>[t("Medium")]),_:1})])]),n("tr",null,[T,n("td",O,[n("a",I,[t("数组归约运算"),e(s)])]),n("td",C,[n("a",N,[t("[✓]"),e(s)])]),V,n("td",A,[e(a,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1})])]),n("tr",null,[S,n("td",L,[n("a",M,[t("过滤数组中的元素"),e(s)])]),n("td",F,[n("a",P,[t("[✓]"),e(s)])]),W,n("td",z,[e(a,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1})])]),n("tr",null,[D,n("td",G,[n("a",H,[t("转换数组中的每个元素"),e(s)])]),n("td",J,[n("a",K,[t("[✓]"),e(s)])]),Q,n("td",R,[e(a,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1})])]),n("tr",null,[U,n("td",X,[n("a",Y,[t("数组的上界"),e(s)])]),Z,$,n("td",nn,[e(a,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1})])])])])])}const on=p(d,[["render",tn],["__file","2631.html.vue"]]);export{on as default};
