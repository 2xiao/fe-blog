import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-fqckLmln.js";const k={},m=n("h1",{id:"_2290-到达角落需要移除障碍物的最小数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2290-到达角落需要移除障碍物的最小数目","aria-hidden":"true"},"#"),s(" 2290. 到达角落需要移除障碍物的最小数目")],-1),g=n("code",null,"广度优先搜索",-1),h=n("code",null,"图",-1),v=n("code",null,"数组",-1),b=n("code",null,"矩阵",-1),_=n("code",null,"最短路",-1),f=n("code",null,"堆（优先队列）",-1),y={href:"https://leetcode.cn/problems/minimum-obstacle-removal-to-reach-corner",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),E=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> 2D integer array <code>grid</code> of size <code>m x n</code>. Each cell has one of two values:</p><ul><li><code>0</code> represents an <strong>empty</strong> cell,</li><li><code>1</code> represents an <strong>obstacle</strong> that may be removed.</li></ul><p>You can move up, down, left, or right from and to an empty cell.</p><p>Return _the<strong>minimum</strong> number of <strong>obstacles</strong> to <strong>remove</strong> so you can move from the upper left corner _<code>(0, 0)</code><em>to the lower right corner</em><code>(m - 1, n - 1)</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/04/06/example1drawio-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[0,1,1],[1,1,0],[1,1,0]]</p><p>Output: 2</p><p>Explanation: We can remove the obstacles at (0, 1) and (0, 2) to create a path from (0, 0) to (2, 2).</p><p>It can be shown that we need to remove at least 2 obstacles, so we return 2.</p><p>Note that there may be other ways to remove 2 obstacles to create a path.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/04/06/example1drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]</p><p>Output: 0</p><p>Explanation: We can move from (0, 0) to (2, 4) without removing any obstacles, so we return 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 10^5</code></li><li><code>2 &lt;= m * n &lt;= 10^5</code></li><li><code>grid[i][j]</code> is either <code>0</code> <strong>or</strong> <code>1</code>.</li><li><code>grid[0][0] == grid[m - 1][n - 1] == 0</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>grid</code> ，数组大小为 <code>m x n</code> 。每个单元格都是两个值之一：</p><ul><li><code>0</code> 表示一个 <strong>空</strong> 单元格，</li><li><code>1</code> 表示一个可以移除的 <strong>障碍物</strong> 。</li></ul><p>你可以向上、下、左、右移动，从一个空单元格移动到另一个空单元格。</p><p>现在你需要从左上角 <code>(0, 0)</code> 移动到右下角 <code>(m - 1, n - 1)</code> ，返回需要移除的障碍物的 <strong>最小</strong> 数目。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/04/06/example1drawio-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[0,1,1],[1,1,0],[1,1,0]]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 可以移除位于 (0, 1) 和 (0, 2) 的障碍物来创建从 (0, 0) 到 (2, 2) 的路径。</p><p>可以证明我们至少需要移除两个障碍物，所以返回 2 。</p><p>注意，可能存在其他方式来移除 2 个障碍物，创建出可行的路径。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/04/06/example1drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 不移除任何障碍物就能从 (0, 0) 到 (2, 4) ，所以返回 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 10^5</code></li><li><code>2 &lt;= m * n &lt;= 10^5</code></li><li><code>grid[i][j]</code> 为 <code>0</code> <strong>或</strong> <code>1</code></li><li><code>grid[0][0] == grid[m - 1][n - 1] == 0</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用 <strong>0-1 BFS</strong> 来求解，因为我们需要在移动时最小化移除障碍物的数量。</p><p>核心思想是将问题建模为一个加权图，其中：</p><ul><li>每个网格单元格 <code>(i, j)</code> 代表图的一个节点。</li><li>从一个单元格移动到相邻单元格是图中的边。 <ul><li>如果目标单元格是空单元格，则边的权重为 <code>0</code>。</li><li>如果目标单元格是障碍物，则边的权重为 <code>1</code>。</li></ul></li></ul><p>在这种情况下，<strong>0-1 BFS</strong> 是一种高效的方法：</p><ul><li>使用双端队列（Deque）进行广度优先搜索。</li><li><strong>先扩展权重为 0 的边（优先队列前部）</strong>，然后扩展权重为 1 的边（优先队列尾部）。</li><li>这样可以保证从起点到终点时遇到的障碍物数量是最小的。</li></ul><p>具体算法步骤：</p><ol><li><p><strong>初始化队列和访问状态</strong>：</p><ul><li>使用双端队列 <code>deque</code> 存储搜索状态，元素为 <code>[当前行, 当前列, 当前移除的障碍物数量]</code>。</li><li>创建一个 <code>visited</code> 数组记录某个位置是否已经访问过，避免重复计算。</li></ul></li><li><p><strong>进行 0-1 BFS</strong>：</p><ul><li>从起点 <code>(0, 0)</code> 开始，将其加入队列，初始移除障碍物数量为 <code>0</code>。</li><li>每次从队列中取出一个状态，尝试向上下左右四个方向移动： <ul><li>如果移动到的单元格是空单元格，将新的状态加入队列的前端。</li><li>如果移动到的单元格是障碍物，将新的状态加入队列的后端。</li></ul></li><li>更新访问状态以避免重复访问。</li></ul></li><li><p><strong>终止条件</strong>：</p><ul><li>如果某次扩展到达了终点 <code>(m-1, n-1)</code>，则直接返回当前移除的障碍物数量。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>如果队列为空仍未到达终点，说明不存在路径。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是行数，<code>n</code> 是列数，每个单元格最多会被访问一次，</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，使用了一个 <code>visited</code> 哈希 Set 来记录访问状态，空间复杂度为 <code>O(m * n)</code>。另外，双端队列的空间复杂度最多为 <code>O(m * n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumObstacles</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 四个方向</span>
	<span class="token keyword">const</span> deque <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Deque</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始状态：行、列、移除障碍物数</span>
	<span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;0,0&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>deque<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> obstacles<span class="token punctuation">]</span> <span class="token operator">=</span> deque<span class="token punctuation">.</span><span class="token function">popFront</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果到达终点，直接返回当前移除障碍物的数量</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> m <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> y <span class="token operator">===</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> obstacles<span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">]</span> <span class="token keyword">of</span> directions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> nx <span class="token operator">=</span> x <span class="token operator">+</span> dx<span class="token punctuation">,</span>
				ny <span class="token operator">=</span> y <span class="token operator">+</span> dy<span class="token punctuation">;</span>

			<span class="token comment">// 检查是否越界以及是否已访问</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				nx <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
				nx <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span>
				ny <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
				ny <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span>
				<span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nx<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ny<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nx<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ny<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 标记为已访问</span>

				<span class="token comment">// 空单元格优先处理</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>nx<span class="token punctuation">]</span><span class="token punctuation">[</span>ny<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					deque<span class="token punctuation">.</span><span class="token function">pushFront</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nx<span class="token punctuation">,</span> ny<span class="token punctuation">,</span> obstacles<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					deque<span class="token punctuation">.</span><span class="token function">pushBack</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nx<span class="token punctuation">,</span> ny<span class="token punctuation">,</span> obstacles <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 不可能到达终点</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,39),B=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"1293",-1),j=n("td",{style:{"text-align":"left"}},"网格中的最短路径",-1),N=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},z=n("code",null,"广度优先搜索",-1),C=n("code",null,"数组",-1),F=n("code",null,"矩阵",-1),I=n("td",{style:{"text-align":"center"}},"🔴",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/shortest-path-in-a-grid-with-obstacles-elimination",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination",target:"_blank",rel:"noopener noreferrer"};function D(R,W){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/graph.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/shortest-path.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",y,[x,a(o)]),s(),n("a",w,[q,a(o)])]),E,u(" prettier-ignore "),n("table",null,[B,n("tbody",null,[n("tr",null,[O,j,N,n("td",S,[a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[z]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[F]),_:1})]),I,n("td",L,[n("a",V,[s("🀄️"),a(o)]),s(),n("a",$,[s("🔗"),a(o)])])])])])])}const H=l(k,[["render",D],["__file","2290.html.vue"]]);export{H as default};
