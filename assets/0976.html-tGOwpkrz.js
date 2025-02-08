import{_ as c,r as p,o as r,c as i,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-totCBmv-.js";const m={},h=n("h1",{id:"_976-三角形的最大周长",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_976-三角形的最大周长","aria-hidden":"true"},"#"),s(" 976. 三角形的最大周长")],-1),k=n("code",null,"贪心",-1),g=n("code",null,"数组",-1),_=n("code",null,"数学",-1),f=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/largest-perimeter-triangle",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/largest-perimeter-triangle",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <em>the largest perimeter of a triangle with a non-zero area, formed from three of these lengths</em>. If it is impossible to form any triangle of a non-zero area, return <code>0</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,1,2]</p><p>Output: 5</p><p>Explanation: You can form a triangle with three side lengths: 1, 2, and 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,1,10]</p><p>Output: 0</p><p>Explanation:</p><p>You cannot use the side lengths 1, 1, and 2 to form a triangle.</p><p>You cannot use the side lengths 1, 1, and 10 to form a triangle.</p><p>You cannot use the side lengths 1, 2, and 10 to form a triangle.</p><p>As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= nums.length &lt;= 10^4</code></li><li><code>1 &lt;= nums[i] &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定由一些正数（代表长度）组成的数组 <code>nums</code> ，返回 <em>由其中三个长度组成的、<strong>面积不为零</strong> 的三角形的最大周长</em> 。如果不能形成任何面积不为零的三角形，返回 <code>0</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,1,2]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 你可以用三个边长组成一个三角形:1 2 2。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,1,10]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong></p><p>你不能用边长 1,1,2 来组成三角形。</p><p>不能用边长 1,1,10 来构成三角形。</p><p>不能用边长 1、2 和 10 来构成三角形。</p><p>因为我们不能用任何三条边长来构成一个非零面积的三角形，所以我们返回 0。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= nums.length &lt;= 10^4</code></li><li><code>1 &lt;= nums[i] &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要满足三角形的构成条件，三条边必须满足 <strong>三角形不等式</strong>：任意两条边之和必须大于第三条边。</p><ol><li><p><strong>排序处理</strong>:</p><ul><li>将数组 <code>nums</code> 按降序排序，保证大数在前。</li><li>如果一个较大的边和其后两条边不能组成三角形，则和后续的更小边也无法组成三角形，因此从大到小判断能减少不必要的计算。</li></ul></li><li><p><strong>构造三角形</strong>:</p><ul><li><p>从排序后的数组中，依次检查每三个连续的边 <code>nums[i]</code>, <code>nums[i+1]</code>, <code>nums[i+2]</code> 是否满足三角形不等式。</p></li><li><p>检查条件: <code>nums[i] &lt; nums[i+1] + nums[i+2]</code>。</p><ul><li>如果满足，则这三条边的和就是一个三角形的周长。</li><li>由于数组已按降序排序，当前周长也一定是最大值，直接返回结果。</li></ul></li><li><p>如果循环结束仍未找到满足条件的三条边，则返回 <code>0</code>，表示无法构成任何三角形。</p></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>: <code>O(n log n)</code></p><ul><li>排序的时间复杂度为 <code>O(n log n)</code>。</li><li>遍历数组检查三角形的时间复杂度为 <code>O(n)</code>，因此总体复杂度由排序决定。</li></ul></li><li><p><strong>空间复杂度</strong>: <code>O(1)</code>，排序原地进行，没有额外的空间开销。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largestPerimeter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 按降序排序</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 返回三条边的周长</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 无法构成三角形</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"812",-1),O=n("td",{style:{"text-align":"left"}},"最大三角形面积",-1),C={style:{"text-align":"center"}},I={style:{"text-align":"left"}},L=n("code",null,"几何",-1),N=n("code",null,"数组",-1),V=n("code",null,"数学",-1),Y=n("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/largest-triangle-area",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/largest-triangle-area",target:"_blank",rel:"noopener noreferrer"};function R(A,G){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟢 "),t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/greedy.html"},{default:a(()=>[k]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[f]),_:1}),s("  🔗 "),n("a",b,[v,t(o)]),s(),n("a",x,[y,t(o)])]),w,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,O,n("td",C,[t(e,{to:"/problem/0812.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",I,[t(e,{to:"/tag/geometry.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[V]),_:1})]),Y,n("td",j,[n("a",z,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])])])])])}const S=c(m,[["render",R],["__file","0976.html.vue"]]);export{S as default};
