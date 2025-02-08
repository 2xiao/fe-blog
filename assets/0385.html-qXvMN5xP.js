import{_ as c,r as l,o as p,c as r,a as n,b as e,d as s,w as t,f as d,e as u}from"./app-totCBmv-.js";const h={},k=n("h1",{id:"_385-迷你语法分析器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_385-迷你语法分析器","aria-hidden":"true"},"#"),e(" 385. 迷你语法分析器")],-1),m=n("code",null,"栈",-1),g=n("code",null,"深度优先搜索",-1),v=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/mini-parser",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/mini-parser",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string s represents the serialization of a nested list, implement a parser to deserialize it and return <em>the deserialized</em> <code>NestedInteger</code>.</p><p>Each element is either an integer or a list whose elements may also be integers or other lists.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;324&quot;</p><p>Output: 324</p><p>Explanation: You should return a NestedInteger object which contains a single integer 324.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;[123,[456,[789]]]&quot;</p><p>Output: [123,[456,[789]]]</p><p>Explanation: Return a NestedInteger object containing a nested list with 2 elements:</p><ol><li><p>An integer containing value 123.</p></li><li><p>A nested list containing two elements:</p></li></ol><p>i. An integer containing value 456.</p><p>ii. A nested list with one element:</p><p>a. An integer containing value 789</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 5 * 10^4</code></li><li><code>s</code> consists of digits, square brackets <code>&quot;[]&quot;</code>, negative sign <code>&#39;-&#39;</code>, and commas <code>&#39;,&#39;</code>.</li><li><code>s</code> is the serialization of valid <code>NestedInteger</code>.</li><li>All the values in the input are in the range <code>[-10^6, 10^6]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串 s 表示一个整数嵌套列表，实现一个解析它的语法分析器并返回解析的结果 <code>NestedInteger</code> 。</p><p>列表中的每个元素只可能是整数或整数嵌套列表</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;324&quot;,</p><p><strong>输出：</strong> 324</p><p><strong>解释：</strong> 你应该返回一个 NestedInteger 对象，其中只包含整数值 324。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;[123,[456,[789]]]&quot;,</p><p><strong>输出：</strong>[123,[456,[789]]]</p><p><strong>解释：</strong> 返回一个 NestedInteger 对象包含一个有两个元素的嵌套列表：</p><ol><li><p>一个 integer 包含值 123</p></li><li><p>一个包含两个元素的嵌套列表：</p></li></ol><p>i. 一个 integer 包含值 456</p><p>ii. 一个包含一个元素的嵌套列表</p><p>a. 一个 integer 包含值 789</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 5 * 10^4</code></li><li><code>s</code> 由数字、方括号 <code>&quot;[]&quot;</code>、负号 <code>&#39;-&#39;</code> 、逗号 <code>&#39;,&#39;</code>组成</li><li>用例保证 <code>s</code> 是可解析的 <code>NestedInteger</code></li><li>输入中的所有值的范围是 <code>[-10^6, 10^6]</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>解析字符串</strong></p><ul><li>使用 <code>JSON.parse()</code> 将字符串解析为原生 JavaScript 数据结构（可能是数字或嵌套数组）。</li></ul></li><li><p><strong>递归构建对象</strong></p><ul><li>若当前节点是数字，直接构造 NestedInteger 并设置为该整数。</li><li>若当前节点是数组，则创建新的 NestedInteger 并递归解析其子节点，依次添加到结果中。</li></ul></li><li><p><strong>返回结果</strong></p><ul><li>最终返回由递归构建出的 <code>NestedInteger</code> 对象。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度:</strong> <code>O(n)</code>，其中 <code>n</code> 为输入字符串解析成的数据结构的节点数量，遍历每个节点需要线性时间。</p></li><li><p><strong>空间复杂度:</strong> <code>O(d)</code>，其中 <code>d</code> 是嵌套深度，由递归栈所决定。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>NestedInteger<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deserialize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NestedInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">setInteger</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> res<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">dfs</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() <span class="token punctuation">{</span>
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 *     this.isInteger = function() <span class="token punctuation">{</span>
 *         ...
 *     <span class="token punctuation">}</span>;
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>integer<span class="token punctuation">}</span></span>
 *     this.getInteger = function() <span class="token punctuation">{</span>
 *         ...
 *     <span class="token punctuation">}</span>;
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 *     this.setInteger = function(value) <span class="token punctuation">{</span>
 *         ...
 *     <span class="token punctuation">}</span>;
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span>
 *     this.add = function(elem) <span class="token punctuation">{</span>
 *         ...
 *     <span class="token punctuation">}</span>;
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>NestedInteger<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 *     this.getList = function() <span class="token punctuation">{</span>
 *         ...
 *     <span class="token punctuation">}</span>;
 * <span class="token punctuation">}</span>;
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"341",-1),N=n("td",{style:{"text-align":"left"}},"扁平化嵌套列表迭代器",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},R=n("code",null,"栈",-1),A=n("code",null,"树",-1),L=n("code",null,"深度优先搜索",-1),O=n("code",null,"3+",-1),S=n("td",{style:{"text-align":"center"}},"🟠",-1),j={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/flatten-nested-list-iterator",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/flatten-nested-list-iterator",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"439",-1),B=n("td",{style:{"text-align":"left"}},"三元表达式解析器 🔒",-1),J=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},Y=n("code",null,"栈",-1),G=n("code",null,"递归",-1),M=n("code",null,"字符串",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/ternary-expression-parser",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/ternary-expression-parser",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},"722",-1),Q=n("td",{style:{"text-align":"left"}},"删除注释",-1),U=n("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=n("code",null,"数组",-1),Z=n("code",null,"字符串",-1),$=n("td",{style:{"text-align":"center"}},"🟠",-1),nn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/remove-comments",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/remove-comments",target:"_blank",rel:"noopener noreferrer"};function tn(an,on){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),r("div",null,[k,n("p",null,[e("🟠 "),s(i,{color:"#ffb800"},{default:t(()=>[e("Medium")]),_:1}),e("  🔖  "),s(a,{to:"/tag/stack.html"},{default:t(()=>[m]),_:1}),e(),s(a,{to:"/tag/depth-first-search.html"},{default:t(()=>[g]),_:1}),e(),s(a,{to:"/tag/string.html"},{default:t(()=>[v]),_:1}),e("  🔗 "),n("a",_,[b,s(o)]),e(),n("a",f,[y,s(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[I,N,n("td",q,[s(a,{to:"/problem/0341.html"},{default:t(()=>[e("[✓]")]),_:1})]),n("td",E,[s(a,{to:"/tag/stack.html"},{default:t(()=>[R]),_:1}),e(),s(a,{to:"/tag/tree.html"},{default:t(()=>[A]),_:1}),e(),s(a,{to:"/tag/depth-first-search.html"},{default:t(()=>[L]),_:1}),e(),O]),S,n("td",j,[n("a",z,[e("🀄️"),s(o)]),e(),n("a",C,[e("🔗"),s(o)])])]),n("tr",null,[V,B,J,n("td",T,[s(a,{to:"/tag/stack.html"},{default:t(()=>[Y]),_:1}),e(),s(a,{to:"/tag/recursion.html"},{default:t(()=>[G]),_:1}),e(),s(a,{to:"/tag/string.html"},{default:t(()=>[M]),_:1})]),D,n("td",F,[n("a",H,[e("🀄️"),s(o)]),e(),n("a",K,[e("🔗"),s(o)])])]),n("tr",null,[P,Q,U,n("td",W,[s(a,{to:"/tag/array.html"},{default:t(()=>[X]),_:1}),e(),s(a,{to:"/tag/string.html"},{default:t(()=>[Z]),_:1})]),$,n("td",nn,[n("a",en,[e("🀄️"),s(o)]),e(),n("a",sn,[e("🔗"),s(o)])])])])])])}const cn=c(h,[["render",tn],["__file","0385.html.vue"]]);export{cn as default};
