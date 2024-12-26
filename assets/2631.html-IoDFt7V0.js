import{_ as c,r as l,o as i,c as d,a as t,b as e,d as n,w as a,f as u,e as r}from"./app-3dvbhwow.js";const h={},_=t("h1",{id:"_2631-分组",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2631-分组","aria-hidden":"true"},"#"),e(" 2631. 分组")],-1),f={href:"https://leetcode.cn/problems/group-by",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/group-by",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"LeetCode",-1),y=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write code that enhances all arrays such that you can call the <code>array.groupBy(fn)</code> method on any array and it will return a <strong>grouped</strong> version of the array.</p><p>A <strong>grouped</strong> array is an object where each key is the output of <code>fn(arr[i])</code> and each value is an array containing all items in the original array which generate that key.</p><p>The provided callback <code>fn</code> will accept an item in the array and return a string key.</p><p>The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.</p><p>Please solve it without lodash&#39;s <code>_.groupBy</code> function.</p><p><strong>Example 1:</strong></p>',7),b=t("blockquote",null,[t("p",null,"Input:"),t("p",null,"array = ["),t("p",null,'{"id":"1"},'),t("p",null,'{"id":"1"},'),t("p",{"id:2":""}),t("p",null,"],"),t("p",null,"fn = function (item) {"),t("p",null,"return item.id;"),t("p",null,"}"),t("p",null,"Output:"),t("p",null,"{"),t("p",null,'"1": [{"id": "1"}, {"id": "1"}],'),t("p",null,'"2": [{"id": "2"}]'),t("p",null,"}"),t("p",null,"Explanation:"),t("p",null,"Output is from array.groupBy(fn)."),t("p",null,'The selector function gets the "id" out of each item in the array.'),t("p",null,'There are two objects with an "id" of 1. Both of those objects are put in the first array.'),t("p",null,'There is one object with an "id" of 2. That object is put in the second array.')],-1),v=r(`<p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>array = [</p><p>[1, 2, 3],</p><p>[1, 3, 5],</p><p>[1, 5, 9]</p><p>]</p><p>fn = function (list) {</p><p>return String(list[0]);</p><p>}</p><p>Output:</p><p>{</p><p>&quot;1&quot;: [[1, 2, 3], [1, 3, 5], [1, 5, 9]]</p><p>}</p><p>Explanation:</p><p>The array can be of any type. In this case, the selector function defines the key as being the first element in the array.</p><p>All the arrays have 1 as their first element so they are grouped together.</p><p>{</p><p>&quot;1&quot;: [[1, 2, 3], [1, 3, 5], [1, 5, 9]]</p><p>}</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input:</p><p>array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</p><p>fn = function (n) {</p><p>return String(n &gt; 5);</p><p>}</p><p>Output:</p><p>{</p><p>&quot;true&quot;: [6, 7, 8, 9, 10],</p><p>&quot;false&quot;: [1, 2, 3, 4, 5]</p><p>}</p><p>Explanation:</p><p>The selector function splits the array by whether each number is greater than 5.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= array.length &lt;= 10^5</code></li><li><code>fn</code> returns a string</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一段可应用于所有数组的代码，使任何数组调用 <code>array. groupBy(fn)</code> 方法时，它返回对该数组 <strong>分组后</strong> 的结果。</p><p>数组 <strong>分组</strong> 是一个对象，其中的每个键都是 <code>fn(arr[i])</code> 的输出的一个数组，该数组中含有原数组中具有该键的所有项。</p><p>提供的回调函数 <code>fn</code> 将接受数组中的项并返回一个字符串类型的键。</p><p>每个值列表的顺序应该与元素在数组中出现的顺序相同。任何顺序的键都是可以接受的。</p><p>请在不使用 lodash 的 <code>_.groupBy</code> 函数的前提下解决这个问题。</p><p><strong>提示：</strong></p><ul><li><code>0 &lt;= array.length &lt;= 10^5</code></li><li><code>fn 返回一个字符串</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>创建结果对象</strong>：使用一个空对象来存储分组结果。</li><li><strong>遍历数组</strong>：使用 <code>forEach</code> 方法遍历调用 <code>groupBy</code> 的数组。</li><li><strong>使用分组函数</strong>：对于每个元素，调用 <code>fn(item)</code> 函数以获取分组键。</li><li><strong>构建分组结果</strong>： <ul><li>检查结果对象中是否已有该分组键。如果没有，创建一个新的数组。</li><li>将当前元素添加到相应的分组中。</li></ul></li><li><strong>返回结果对象</strong>：最后返回分组后的结果对象。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，因为需要遍历整个数组。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，在最坏情况下，所有元素可能会被分到一个组中。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"2624",-1),w=t("td",{style:{"text-align":"left"}},"蜗牛排序",-1),B={style:{"text-align":"center"}},E=t("td",{style:{"text-align":"left"}},null,-1),j=t("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/snail-traversal",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/snail-traversal",target:"_blank",rel:"noopener noreferrer"},C=t("td",{style:{"text-align":"center"}},"2626",-1),L=t("td",{style:{"text-align":"left"}},"数组归约运算",-1),N={style:{"text-align":"center"}},V=t("td",{style:{"text-align":"left"}},null,-1),A=t("td",{style:{"text-align":"center"}},"🟢",-1),S={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/array-reduce-transformation",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/array-reduce-transformation",target:"_blank",rel:"noopener noreferrer"},M=t("td",{style:{"text-align":"center"}},"2634",-1),P=t("td",{style:{"text-align":"left"}},"过滤数组中的元素",-1),W={style:{"text-align":"center"}},z=t("td",{style:{"text-align":"left"}},null,-1),D=t("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/filter-elements-from-array",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/filter-elements-from-array",target:"_blank",rel:"noopener noreferrer"},K=t("td",{style:{"text-align":"center"}},"2635",-1),Q=t("td",{style:{"text-align":"left"}},"转换数组中的每个元素",-1),U={style:{"text-align":"center"}},X=t("td",{style:{"text-align":"left"}},null,-1),Y=t("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/apply-transform-over-each-element-in-array",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/apply-transform-over-each-element-in-array",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},"2774",-1),nt=t("td",{style:{"text-align":"left"}},"数组的上界 🔒",-1),st={style:{"text-align":"center"}},at=t("td",{style:{"text-align":"left"}},null,-1),ot=t("td",{style:{"text-align":"center"}},"🟢",-1),lt={style:{"text-align":"center"}},rt={href:"https://leetcode.cn/problems/array-upper-bound",target:"_blank",rel:"noopener noreferrer"},pt={href:"https://leetcode.com/problems/array-upper-bound",target:"_blank",rel:"noopener noreferrer"};function ct(it,dt){const p=l("font"),s=l("ExternalLinkIcon"),o=l("RouterLink");return i(),d("div",null,[_,t("p",null,[e("🟠 "),n(p,{color:"#ffb800"},{default:a(()=>[e("Medium")]),_:1}),e("  🔗 "),t("a",f,[g,n(s)]),e(),t("a",k,[m,n(s)])]),y,b,v,u(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[q,w,t("td",B,[n(o,{to:"/problem/2624.html"},{default:a(()=>[e("[✓]")]),_:1})]),E,j,t("td",T,[t("a",O,[e("🀄️"),n(s)]),e(),t("a",I,[e("🔗"),n(s)])])]),t("tr",null,[C,L,t("td",N,[n(o,{to:"/problem/2626.html"},{default:a(()=>[e("[✓]")]),_:1})]),V,A,t("td",S,[t("a",R,[e("🀄️"),n(s)]),e(),t("a",F,[e("🔗"),n(s)])])]),t("tr",null,[M,P,t("td",W,[n(o,{to:"/problem/2634.html"},{default:a(()=>[e("[✓]")]),_:1})]),z,D,t("td",G,[t("a",H,[e("🀄️"),n(s)]),e(),t("a",J,[e("🔗"),n(s)])])]),t("tr",null,[K,Q,t("td",U,[n(o,{to:"/problem/2635.html"},{default:a(()=>[e("[✓]")]),_:1})]),X,Y,t("td",Z,[t("a",$,[e("🀄️"),n(s)]),e(),t("a",tt,[e("🔗"),n(s)])])]),t("tr",null,[et,nt,t("td",st,[n(o,{to:"/problem/2774.html"},{default:a(()=>[e("[✓]")]),_:1})]),at,ot,t("td",lt,[t("a",rt,[e("🀄️"),n(s)]),e(),t("a",pt,[e("🔗"),n(s)])])])])])])}const ht=c(h,[["render",ct],["__file","2631.html.vue"]]);export{ht as default};
