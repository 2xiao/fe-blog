import{_ as l,r as p,o as r,c as i,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-totCBmv-.js";const k={},m=n("h1",{id:"_1030-距离顺序排列矩阵单元格",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1030-距离顺序排列矩阵单元格","aria-hidden":"true"},"#"),s(" 1030. 距离顺序排列矩阵单元格")],-1),h=n("code",null,"几何",-1),b=n("code",null,"数组",-1),v=n("code",null,"数学",-1),g=n("code",null,"矩阵",-1),_=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/matrix-cells-in-distance-order",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),C={href:"https://leetcode.com/problems/matrix-cells-in-distance-order",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given four integers <code>row</code>, <code>cols</code>, <code>rCenter</code>, and <code>cCenter</code>. There is a <code>rows x cols</code> matrix and you are on the cell with the coordinates <code>(rCenter, cCenter)</code>.</p><p>Return <em>the coordinates of all cells in the matrix, sorted by their <strong>distance</strong> from <code>(rCenter, cCenter)</code> from the smallest distance to the largest distance</em>. You may return the answer in <strong>any order</strong> that satisfies this condition.</p><p>The <strong>distance</strong> between two cells <code>(r1, c1)</code> and <code>(r2, c2)</code> is <code>|r1 - r2| + |c1 - c2|</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: rows = 1, cols = 2, rCenter = 0, cCenter = 0</p><p>Output: [[0,0],[0,1]]</p><p>Explanation: The distances from (0, 0) to other cells are: [0,1]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: rows = 2, cols = 2, rCenter = 0, cCenter = 1</p><p>Output: [[0,1],[0,0],[1,1],[1,0]]</p><p>Explanation: The distances from (0, 1) to other cells are: [0,1,1,2]</p><p>The answer [[0,1],[1,1],[0,0],[1,0]] would also be accepted as correct.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: rows = 2, cols = 3, rCenter = 1, cCenter = 2</p><p>Output: [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]</p><p>Explanation: The distances from (1, 2) to other cells are: [0,1,1,2,2,3]</p><p>There are other answers that would also be accepted as correct, such as [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= rows, cols &lt;= 100</code></li><li><code>0 &lt;= rCenter &lt; rows</code></li><li><code>0 &lt;= cCenter &lt; cols</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定四个整数 <code>rows</code> , <code>cols</code> , <code>rCenter</code> 和 <code>cCenter</code> 。有一个 <code>rows x cols</code> 的矩阵，你在单元格上的坐标是 <code>(rCenter, cCenter)</code> 。</p><p>返回矩阵中的所有单元格的坐标，并按与 <code>(rCenter, cCenter)</code> 的 <strong>距离</strong> 从最小到最大的顺序排。你可以按 <strong>任何</strong> 满足此条件的顺序返回答案。</p><p>单元格<code>(r1, c1)</code> 和 <code>(r2, c2)</code> 之间的距离为<code>|r1 - r2| + |c1 - c2|</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> rows = 1, cols = 2, rCenter = 0, cCenter = 0</p><p><strong>输出：</strong>[[0,0],[0,1]]</p><p><strong>解释</strong> ：从 (r0, c0) 到其他单元格的距离为：[0,1]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> rows = 2, cols = 2, rCenter = 0, cCenter = 1</p><p><strong>输出：</strong>[[0,1],[0,0],[1,1],[1,0]]</p><p><strong>解释</strong> ：从 (r0, c0) 到其他单元格的距离为：[0,1,1,2]</p><p>[[0,1],[1,1],[0,0],[1,0]] 也会被视作正确答案。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> rows = 2, cols = 3, rCenter = 1, cCenter = 2</p><p><strong>输出：</strong>[[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]</p><p><strong>解释</strong> ：从 (r0, c0) 到其他单元格的距离为：[0,1,1,2,2,3]</p><p>其他满足题目要求的答案也会被视为正确，例如 [[1,2],[1,1],[0,2],[1,0],[0,1],[0,0]]。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= rows, cols &lt;= 100</code></li><li><code>0 &lt;= rCenter &lt; rows</code></li><li><code>0 &lt;= cCenter &lt; cols</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用 BFS（广度优先搜索）来解决这个问题。</p><ul><li>以 <code>(rCenter, cCenter)</code> 为 BFS 起点，其距离为 0。</li><li>从起点开始，依次访问其四周的单元格（上下左右），并将这些单元格加入队列。</li><li>每访问一个单元格时，记录其坐标，并标记为已访问，使用一个集合（或矩阵）标记已访问单元格，避免重复访问。</li><li>按照层级遍历，依次从近到远处理所有单元格。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(rows * cols)</code>，每个单元格最多会被访问一次，且访问过程中的操作（入队、出队、添加到结果集）均为常数时间。</li><li><strong>空间复杂度</strong>：<code>O(rows * cols)</code><ul><li>需要一个队列来存储当前的节点，队列的最大大小为单元格总数：<code>O(rows * cols)</code></li><li>还需要一个 <code>visited</code> 数组，用于标记访问状态，空间复杂度同样为：<code>O(rows * cols)</code></li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">rows</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">cols</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">rCenter</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">cCenter</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">allCellsDistOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">rows<span class="token punctuation">,</span> cols<span class="token punctuation">,</span> rCenter<span class="token punctuation">,</span> cCenter</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 上下左右四个方向</span>
	<span class="token keyword">const</span> visited <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> rows <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Array</span><span class="token punctuation">(</span>cols<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>rCenter<span class="token punctuation">,</span> cCenter<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// BFS 队列，从中心点开始</span>
	visited<span class="token punctuation">[</span>rCenter<span class="token punctuation">]</span><span class="token punctuation">[</span>cCenter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>r<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>r<span class="token punctuation">,</span> c<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 记录当前单元格</span>

		<span class="token comment">// 遍历四个方向</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>dr<span class="token punctuation">,</span> dc<span class="token punctuation">]</span> <span class="token keyword">of</span> directions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> nr <span class="token operator">=</span> r <span class="token operator">+</span> dr<span class="token punctuation">,</span>
				nc <span class="token operator">=</span> c <span class="token operator">+</span> dc<span class="token punctuation">;</span>
			<span class="token comment">// 检查边界和是否已访问</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nr <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nr <span class="token operator">&lt;</span> rows <span class="token operator">&amp;&amp;</span> nc <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nc <span class="token operator">&lt;</span> cols <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>visited<span class="token punctuation">[</span>nr<span class="token punctuation">]</span><span class="token punctuation">[</span>nc<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				visited<span class="token punctuation">[</span>nr<span class="token punctuation">]</span><span class="token punctuation">[</span>nc<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nr<span class="token punctuation">,</span> nc<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"2194",-1),O=n("td",{style:{"text-align":"left"}},"Excel 表中某个范围内的单元格",-1),T={style:{"text-align":"center"}},B={style:{"text-align":"left"}},I=n("code",null,"字符串",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/cells-in-a-range-on-an-excel-sheet",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet",target:"_blank",rel:"noopener noreferrer"};function j(F,R){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/geometry.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",f,[w,a(o)]),s(),n("a",C,[x,a(o)])]),y,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,O,n("td",T,[a(e,{to:"/problem/2194.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",B,[a(e,{to:"/tag/string.html"},{default:t(()=>[I]),_:1})]),L,n("td",N,[n("a",V,[s("🀄️"),a(o)]),s(),n("a",S,[s("🔗"),a(o)])])])])])])}const Y=l(k,[["render",j],["__file","1030.html.vue"]]);export{Y as default};
