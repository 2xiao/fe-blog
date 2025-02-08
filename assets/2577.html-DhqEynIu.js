import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-totCBmv-.js";const d={},k=n("h1",{id:"_2577-在网格图中访问一个格子的最少时间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2577-在网格图中访问一个格子的最少时间","aria-hidden":"true"},"#"),s(" 2577. 在网格图中访问一个格子的最少时间")],-1),m=n("code",null,"广度优先搜索",-1),g=n("code",null,"图",-1),v=n("code",null,"数组",-1),b=n("code",null,"矩阵",-1),h=n("code",null,"最短路",-1),f=n("code",null,"堆（优先队列）",-1),w={href:"https://leetcode.cn/problems/minimum-time-to-visit-a-cell-in-a-grid",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),q=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <code>m x n</code> matrix <code>grid</code> consisting of <strong>non-negative</strong> integers where <code>grid[row][col]</code> represents the <strong>minimum</strong> time required to be able to visit the cell <code>(row, col)</code>, which means you can visit the cell <code>(row, col)</code> only when the time you visit it is greater than or equal to <code>grid[row][col]</code>.</p><p>You are standing in the <strong>top-left</strong> cell of the matrix in the <code>0th</code> second, and you must move to <strong>any</strong> adjacent cell in the four directions: up, down, left, and right. Each move you make takes 1 second.</p><p>Return <em>the<strong>minimum</strong> time required in which you can visit the bottom-right cell of the matrix</em>. If you cannot visit the bottom-right cell, then return <code>-1</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/02/14/yetgriddrawio-8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]</p><p>Output: 7</p><p>Explanation: One of the paths that we can take is the following:</p><ul><li>at t = 0, we are on the cell (0,0).</li><li>at t = 1, we move to the cell (0,1). It is possible because grid[0][1] &lt;= 1.</li><li>at t = 2, we move to the cell (1,1). It is possible because grid[1][1] &lt;= 2.</li><li>at t = 3, we move to the cell (1,2). It is possible because grid[1][2] &lt;= 3.</li><li>at t = 4, we move to the cell (1,1). It is possible because grid[1][1] &lt;= 4.</li><li>at t = 5, we move to the cell (1,2). It is possible because grid[1][2] &lt;= 5.</li><li>at t = 6, we move to the cell (1,3). It is possible because grid[1][3] &lt;= 6.</li><li>at t = 7, we move to the cell (2,3). It is possible because grid[2][3] &lt;= 7.</li></ul><p>The final time is 7. It can be shown that it is the minimum time possible.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/02/14/yetgriddrawio-9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[0,2,4],[3,2,1],[1,0,4]]</p><p>Output: -1</p><p>Explanation: There is no path from the top left to the bottom-right cell.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>2 &lt;= m, n &lt;= 1000</code></li><li><code>4 &lt;= m * n &lt;= 10^5</code></li><li><code>0 &lt;= grid[i][j] &lt;= 10^5</code></li><li><code>grid[0][0] == 0</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>m x n</code> 的矩阵 <code>grid</code> ，每个元素都为 <strong>非负</strong> 整数，其中 <code>grid[row][col]</code> 表示可以访问格子 <code>(row, col)</code> 的 <strong>最早</strong> 时间。也就是说当你访问格子 <code>(row, col)</code> 时，最少已经经过的时间为 <code>grid[row][col]</code> 。</p><p>你从 <strong>最左上角</strong> 出发，出发时刻为 <code>0</code> ，你必须一直移动到上下左右相邻四个格子中的 <strong>任意</strong> 一个格子（即不能停留在格子上）。每次移动都需要花费 1 单位时间。</p><p>请你返回 <strong>最早</strong> 到达右下角格子的时间，如果你无法到达右下角的格子，请你返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/02/14/yetgriddrawio-8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 一条可行的路径为：</p><ul><li>时刻 t = 0 ，我们在格子 (0,0) 。</li><li>时刻 t = 1 ，我们移动到格子 (0,1) ，可以移动的原因是 grid[0][1] &lt;= 1 。</li><li>时刻 t = 2 ，我们移动到格子 (1,1) ，可以移动的原因是 grid[1][1] &lt;= 2 。</li><li>时刻 t = 3 ，我们移动到格子 (1,2) ，可以移动的原因是 grid[1][2] &lt;= 3 。</li><li>时刻 t = 4 ，我们移动到格子 (1,1) ，可以移动的原因是 grid[1][1] &lt;= 4 。</li><li>时刻 t = 5 ，我们移动到格子 (1,2) ，可以移动的原因是 grid[1][2] &lt;= 5 。</li><li>时刻 t = 6 ，我们移动到格子 (1,3) ，可以移动的原因是 grid[1][3] &lt;= 6 。</li><li>时刻 t = 7 ，我们移动到格子 (2,3) ，可以移动的原因是 grid[2][3] &lt;= 7 。</li></ul><p>最终到达时刻为 7 。这是最早可以到达的时间。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2023/02/14/yetgriddrawio-9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[0,2,4],[3,2,1],[1,0,4]]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 没法从左上角按题目规定走到右下角。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>2 &lt;= m, n &lt;= 1000</code></li><li><code>4 &lt;= m * n &lt;= 10^5</code></li><li><code>0 &lt;= grid[i][j] &lt;= 10^5</code></li><li><code>grid[0][0] == 0</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个 <strong>加权图的最短路径问题</strong>，使用 <strong>优先队列（小顶堆）</strong> 来动态选择路径最短的格子。</p><ol><li>判断是否直接不可行</li></ol><p>如果起点的右边 <code>(0, 1)</code> 和下方 <code>(1, 0)</code> 都需要大于 <code>1</code> 的时间才解锁，无法开始任何有效移动，直接返回 <code>-1</code>。</p><ol start="2"><li>使用优先队列动态搜索最短路径</li></ol><ul><li>队列中存储的是 <code>[时间, 行, 列]</code> 格子信息，优先选择时间最短的格子进行扩展。</li><li>每次从优先队列中取出当前时间最小的状态 <code>(t, r, c)</code>。</li><li>尝试移动到四个相邻格子 <code>(nr, nc)</code>，新的时间 <code>newTime</code> 取决于： <ul><li>如果到达新格子时，时间大于等于其解锁时间 <code>grid[nr][nc]</code>，则可以直接移动，<code>newTime</code> 等于当前时间 <code>t</code> 加上移动的时间 <code>1</code>。</li><li>否则，需要在之前的相邻格子内来回移动，直到时间大于等于 <code>grid[nr][nc]</code>，且从 <code>(r, c)</code> 到 <code>(nr, nc)</code> 所花的时间一定为奇数（2 * 来回移动次数 + 最终移动到 <code>(nr, nc)</code> 的一步）</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> wait <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>nr<span class="token punctuation">]</span><span class="token punctuation">[</span>nc<span class="token punctuation">]</span> <span class="token operator">-</span> t<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> newTime <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>nr<span class="token punctuation">]</span><span class="token punctuation">[</span>nc<span class="token punctuation">]</span> <span class="token operator">+</span> wait<span class="token punctuation">,</span> t <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol start="4"><li>使用访问集合优化</li></ol><ul><li>用 <code>visited</code> 集合记录访问过的格子 <code>[r, c]</code>，避免重复访问。</li><li>如果新路径的时间小于已知最短路径，才会重新处理。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n * log(m * n))</code>，每个格子最多访问一次，且每次从堆中弹出操作的复杂度为 <code>O(log(m * n))</code>。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，需要存储 <code>visited</code> 集合和优先队列。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumTime</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 如果无法从起点有效移动，返回 -1</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> grid<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 最小优先队列，优先扩展时间最短的路径</span>
	<span class="token keyword">const</span> minHeap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinPriorityQueue</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function-variable function">priority</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	minHeap<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始状态 [时间, 行, 列]</span>
	<span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> directions <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 四个方向</span>

	<span class="token comment">// BFS 遍历</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>minHeap<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>t<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> minHeap<span class="token punctuation">.</span><span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>element<span class="token punctuation">;</span> <span class="token comment">// 取出时间最短的格子</span>

		<span class="token comment">// 如果到达终点，返回时间</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">===</span> m <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> c <span class="token operator">===</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> t<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 遍历相邻的四个方向</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>dr<span class="token punctuation">,</span> dc<span class="token punctuation">]</span> <span class="token keyword">of</span> directions<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> nr <span class="token operator">=</span> r <span class="token operator">+</span> dr<span class="token punctuation">,</span>
				nc <span class="token operator">=</span> c <span class="token operator">+</span> dc<span class="token punctuation">;</span>
			<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nr<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">,</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>nc<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> <span class="token comment">// 唯一标识格子</span>

			<span class="token comment">// 跳过越界或已访问的格子</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nr <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> nr <span class="token operator">&gt;=</span> m <span class="token operator">||</span> nc <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> nc <span class="token operator">&gt;=</span> n <span class="token operator">||</span> visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 计算等待时间</span>
			<span class="token keyword">const</span> wait <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>nr<span class="token punctuation">]</span><span class="token punctuation">[</span>nc<span class="token punctuation">]</span> <span class="token operator">-</span> t<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> newTime <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>nr<span class="token punctuation">]</span><span class="token punctuation">[</span>nc<span class="token punctuation">]</span> <span class="token operator">+</span> wait<span class="token punctuation">,</span> t <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 到达时间</span>
			minHeap<span class="token punctuation">.</span><span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token punctuation">[</span>newTime<span class="token punctuation">,</span> nr<span class="token punctuation">,</span> nc<span class="token punctuation">]</span><span class="token punctuation">,</span> newTime<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 加入优先队列</span>
			visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 标记格子为已访问</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果终点不可达，返回 -1</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function I(T,j){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/graph.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/shortest-path.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",w,[_,a(p)]),s(),n("a",y,[x,a(p)])]),q])}const H=l(d,[["render",I],["__file","2577.html.vue"]]);export{H as default};
