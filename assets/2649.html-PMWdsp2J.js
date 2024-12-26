import{_ as i,r,o as c,c as p,a as e,b as n,d as t,w as a,f as d,e as u}from"./app-3dvbhwow.js";const g={},h=e("h1",{id:"_2649-嵌套数组生成器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2649-嵌套数组生成器","aria-hidden":"true"},"#"),n(" 2649. 嵌套数组生成器")],-1),_={href:"https://leetcode.cn/problems/nested-array-generator",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/nested-array-generator",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>multi-dimensional array</strong> of integers, return a generator object which yields integers in the same order as <strong>inorder traversal</strong>.</p><p>A <strong>multi-dimensional array</strong> is a recursive data structure that contains both integers and other <strong>multi-dimensional arrays</strong>.</p><p><strong>inorder traversal</strong> iterates over each array from left to right, yielding any integers it encounters or applying <strong>inorder traversal</strong> to any arrays it encounters.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [[[6]],[1,3],[]]</p><p>Output: [6,1,3]</p><p>Explanation:</p><p>const generator = inorderTraversal(arr);</p><p>generator.next().value; // 6</p><p>generator.next().value; // 1</p><p>generator.next().value; // 3</p><p>generator.next().done; // true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = []</p><p>Output: []</p><p>Explanation: There are no integers so the generator doesn&#39;t yield anything.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= arr.flat().length &lt;= 10^5</code></li><li><code>0 &lt;= arr.flat()[i] &lt;= 10^5</code></li><li><code>maxNestingDepth &lt;= 10^5</code></li></ul><p><strong>Can you solve this without creating a new flattened version of the array?</strong></p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现给定一个整数的 <strong>多维数组</strong> ，请你返回一个生成器对象，按照 <strong>中序遍历</strong> 的顺序逐个生成整数。</p><p><strong>多维数组</strong> 是一个递归数据结构，包含整数和其他 <strong>多维数组</strong> 。</p><p><strong>中序遍历</strong> 是从左到右遍历每个数组，在遇到任何整数时生成它，遇到任何数组时递归应用 <strong>中序遍历</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [[[6]],[1,3],[]]</p><p><strong>输出：</strong>[6,1,3]</p><p><strong>解释：</strong></p><p>const generator = inorderTraversal(arr);</p><p>generator.next().value; // 6</p><p>generator.next().value; // 1</p><p>generator.next().value; // 3</p><p>generator.next().done; // true</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = []</p><p><strong>输出：</strong>[]</p><p><strong>解释：</strong> 输入的多维数组没有任何参数，所以生成器不需要生成任何值。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= arr.flat().length &lt;= 10^5</code></li><li><code>0 &lt;= arr.flat()[i] &lt;= 10^5</code></li><li><code>maxNestingDepth &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要实现一个生成器，用于对一个整数的多维数组进行中序遍历，可以使用递归的方法。这个生成器会遍历数组中的每个元素，如果遇到整数，则生成该整数；如果遇到另一个数组，则递归地调用自身来处理该数组。</p><ol><li><p><strong>生成器函数</strong>：</p><ul><li><code>inorderTraversal</code> 是一个生成器函数，使用 <code>function*</code> 定义。</li><li>它接受一个参数 <code>arr</code>，该参数是一个多维数组。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>使用 <code>for...of</code> 循环遍历数组中的每个元素。</li><li><code>Array.isArray(item)</code> 用于检查当前元素是否是一个数组。</li></ul></li><li><p><strong>递归生成</strong>：</p><ul><li>如果当前元素是数组，则使用 <code>yield*</code> 关键字递归调用 <code>inorderTraversal(item)</code>，这会生成该子数组中的所有元素。</li><li>如果当前元素是整数，则使用 <code>yield</code> 直接生成该整数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组中所有整数的数量，因为每个整数都会被生成一次。</li><li><strong>空间复杂度</strong>：<code>O(d)</code>，其中 <code>d</code> 是递归的最大深度，这里主要用于保存函数调用栈。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Generator<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">inorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果当前项是数组，则递归调用生成器</span>
			<span class="token keyword">yield</span><span class="token operator">*</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果当前项是整数，直接生成该值</span>
			<span class="token keyword">yield</span> item<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),b=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"2625",-1),x=e("td",{style:{"text-align":"left"}},"扁平化嵌套数组",-1),w={style:{"text-align":"center"}},q=e("td",{style:{"text-align":"left"}},null,-1),T=e("td",{style:{"text-align":"center"}},"🟠",-1),E={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/flatten-deeply-nested-array",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/flatten-deeply-nested-array",target:"_blank",rel:"noopener noreferrer"},C=e("td",{style:{"text-align":"center"}},"2648",-1),L=e("td",{style:{"text-align":"left"}},"生成斐波那契数列",-1),V={style:{"text-align":"center"}},j=e("td",{style:{"text-align":"left"}},null,-1),I=e("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/generate-fibonacci-sequence",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/generate-fibonacci-sequence",target:"_blank",rel:"noopener noreferrer"},G=e("td",{style:{"text-align":"center"}},"2650",-1),R=e("td",{style:{"text-align":"left"}},"设计可取消函数",-1),M={style:{"text-align":"center"}},S=e("td",{style:{"text-align":"left"}},null,-1),z=e("td",{style:{"text-align":"center"}},"🔴",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/design-cancellable-function",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/design-cancellable-function",target:"_blank",rel:"noopener noreferrer"};function K(P,Q){const l=r("font"),s=r("ExternalLinkIcon"),o=r("RouterLink");return c(),p("div",null,[h,e("p",null,[n("🟠 "),t(l,{color:"#ffb800"},{default:a(()=>[n("Medium")]),_:1}),n("  🔗 "),e("a",_,[m,t(s)]),n(),e("a",k,[v,t(s)])]),f,d(" prettier-ignore "),e("table",null,[b,e("tbody",null,[e("tr",null,[y,x,e("td",w,[t(o,{to:"/problem/2625.html"},{default:a(()=>[n("[✓]")]),_:1})]),q,T,e("td",E,[e("a",N,[n("🀄️"),t(s)]),n(),e("a",A,[n("🔗"),t(s)])])]),e("tr",null,[C,L,e("td",V,[t(o,{to:"/problem/2648.html"},{default:a(()=>[n("[✓]")]),_:1})]),j,I,e("td",O,[e("a",B,[n("🀄️"),t(s)]),n(),e("a",D,[n("🔗"),t(s)])])]),e("tr",null,[G,R,e("td",M,[t(o,{to:"/problem/2650.html"},{default:a(()=>[n("[✓]")]),_:1})]),S,z,e("td",F,[e("a",H,[n("🀄️"),t(s)]),n(),e("a",J,[n("🔗"),t(s)])])])])])])}const W=i(g,[["render",K],["__file","2649.html.vue"]]);export{W as default};
