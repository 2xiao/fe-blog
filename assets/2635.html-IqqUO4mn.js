import{_ as p,r as l,o as i,c as d,a as n,b as e,d as t,w as s,f as u,e as r}from"./app-BBnmDgJV.js";const h={},_=n("h1",{id:"_2635-转换数组中的每个元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2635-转换数组中的每个元素","aria-hidden":"true"},"#"),e(" 2635. 转换数组中的每个元素")],-1),k={href:"https://leetcode.cn/problems/apply-transform-over-each-element-in-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/apply-transform-over-each-element-in-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),y=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>arr</code> and a mapping function <code>fn</code>, return a new array with a transformation applied to each element.</p><p>The returned array should be created such that <code>returnedArray[i] = fn(arr[i], i)</code>.</p><p>Please solve it without the built-in <code>Array.map</code> method.</p><p><strong>Example 1:</strong></p>',5),g=n("blockquote",null,[n("p",{return:"",n:"","+":"","1;":""},"Input: arr = [1,2,3], fn = function plusone(n)"),n("p",null,"Output: [2,3,4]"),n("p",null,"Explanation:"),n("p",null,"const newArray = map(arr, plusone); // [2,3,4]"),n("p",null,"The function increases each value in the array by one.")],-1),x=n("p",null,[n("strong",null,"Example 2:")],-1),v=n("blockquote",null,[n("p",{return:"",n:"","+":"","i;":""},"Input: arr = [1,2,3], fn = function plusI(n, i)"),n("p",null,"Output: [1,3,5]"),n("p",null,"Explanation: The function increases each value by the index it resides in.")],-1),w=n("p",null,[n("strong",null,"Example 3:")],-1),E=n("blockquote",null,[n("p",{return:"","42;":""},"Input: arr = [10,20,30], fn = function constant()"),n("p",null,"Output: [42,42,42]"),n("p",null,"Explanation: The function always returns 42.")],-1),A=r(`<p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= arr.length &lt;= 1000</code></li><li><code>-10^9 &lt;= arr[i] &lt;= 10^9</code></li><li><code>fn</code> returns a number</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个函数，这个函数接收一个整数数组 <code>arr</code> 和一个映射函数 <code>fn</code> ，通过该映射函数返回一个新的数组。</p><p>返回数组的创建语句应为 <code>returnedArray[i] = fn(arr[i], i)</code> 。</p><p>请你在不使用内置方法 <code>Array.map</code> 的前提下解决这个问题。</p><p><strong>提示：</strong></p><ul><li><code>0 &lt;= arr.length &lt;= 1000</code></li><li><code>-10^9 &lt;= arr[i] &lt;= 10^9</code></li><li><code>fn</code> 返回一个数</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题的本质就是实现一个类似于 JavaScript 内置的 <code>Array.prototype.map</code> 方法，主要考察你对数组遍历以及回调函数的理解。</p><ol><li>题目要求返回一个新的数组，所以初始化一个新数组，用于存储每次对元素应用函数 <code>fn</code> 后的结果。</li><li>遍历原数组，对数组中的每个元素调用 <code>fn</code>，注意将当前元素 <code>arr[i]</code> 和当前元素的索引 <code>i</code> 作为参数传给 <code>fn</code>。</li><li>保存每次的结果，将结果存入新数组。</li><li>所有元素处理完毕后，返回包含结果的新数组。</li></ol><blockquote><p>注意：在 JavaScript 中，<code>map</code> 和 <code>forEach</code> 都是用于遍历数组的方法，区别是：</p><ul><li><code>map</code> 返回一个新数组，其中包含了对原数组的每个元素执行提供的回调函数后生成的新值，原数组不会被修改。</li><li><code>forEach</code> 不返回任何值（返回值是 <code>undefined</code>），只是对每个数组元素执行一次提供的回调函数，一般用于执行副作用操作（如修改外部变量或处理 DOM）。</li></ul><p>但需要注意数组内元素是引用类型的情况：</p><ul><li>基本类型：<code>map</code> 和 <code>forEach</code> 都不会修改原数组。</li><li>引用类型：如果回调函数修改了对象的属性，那么原数组中的对象会被修改。</li></ul></blockquote><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。遍历了整个数组，对每个元素调用一次 <code>fn</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要一个新的数组来存储转换后的结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">map</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"2626",-1),q=n("td",{style:{"text-align":"left"}},"数组归约运算",-1),C={style:{"text-align":"center"}},L=n("td",{style:{"text-align":"left"}},null,-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),T={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/array-reduce-transformation",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/array-reduce-transformation",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"2631",-1),S=n("td",{style:{"text-align":"left"}},"分组",-1),J={style:{"text-align":"center"}},R=n("td",{style:{"text-align":"left"}},null,-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/group-by",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/group-by",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},"2634",-1),z=n("td",{style:{"text-align":"left"}},"过滤数组中的元素",-1),H={style:{"text-align":"center"}},K=n("td",{style:{"text-align":"left"}},null,-1),Q=n("td",{style:{"text-align":"center"}},"🟢",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/filter-elements-from-array",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/filter-elements-from-array",target:"_blank",rel:"noopener noreferrer"};function Y(Z,$){const c=l("font"),a=l("ExternalLinkIcon"),o=l("RouterLink");return i(),d("div",null,[_,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔗 "),n("a",k,[f,t(a)]),e(),n("a",m,[b,t(a)])]),y,g,x,v,w,E,A,u(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[O,q,n("td",C,[t(o,{to:"/problem/2626.html"},{default:s(()=>[e("[✓]")]),_:1})]),L,N,n("td",T,[n("a",V,[e("🀄️"),t(a)]),e(),n("a",j,[e("🔗"),t(a)])])]),n("tr",null,[B,S,n("td",J,[t(o,{to:"/problem/2631.html"},{default:s(()=>[e("[✓]")]),_:1})]),R,D,n("td",F,[n("a",G,[e("🀄️"),t(a)]),e(),n("a",M,[e("🔗"),t(a)])])]),n("tr",null,[P,z,n("td",H,[t(o,{to:"/problem/2634.html"},{default:s(()=>[e("[✓]")]),_:1})]),K,Q,n("td",U,[n("a",W,[e("🀄️"),t(a)]),e(),n("a",X,[e("🔗"),t(a)])])])])])])}const en=p(h,[["render",Y],["__file","2635.html.vue"]]);export{en as default};
